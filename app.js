(() => {
  'use strict';

  const amplitude = 1;
  const tauInput = document.getElementById('tau');
  const gainInput = document.getElementById('gain');
  const canvas = document.getElementById('response-plot');
  const context = canvas.getContext('2d');

  // First-order closed-form step response: y(t) = KA(1 - exp(-t/tau)).
  function stepResponse(time, tau, gain) {
    return gain * amplitude * (1 - Math.exp(-time / tau));
  }

  function draw() {
    const tau = Number(tauInput.value);
    const gain = Number(gainInput.value);
    const finalValue = gain * amplitude;
    document.getElementById('tau-value').textContent = `${tau.toFixed(1)} s`;
    document.getElementById('gain-value').textContent = gain.toFixed(1);
    document.getElementById('point-one').textContent = stepResponse(tau, tau, gain).toFixed(3);
    document.getElementById('point-three').textContent = stepResponse(3 * tau, tau, gain).toFixed(3);
    document.getElementById('final-value').textContent = finalValue.toFixed(3);
    setValidation('check-one', Math.abs(stepResponse(tau, tau, gain) / finalValue - 0.632) < 0.001);
    setValidation('check-three', Math.abs(stepResponse(3 * tau, tau, gain) / finalValue - 0.950) < 0.001);

    const bounds = canvas.getBoundingClientRect();
    const width = Math.max(100, bounds.width);
    const height = Math.max(100, bounds.height);
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    const margin = { left: 50, right: 17, top: 14, bottom: 37 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const maxTime = 5 * tau;
    const maxY = 1.12 * finalValue;
    const x = t => margin.left + t / maxTime * plotWidth;
    const y = v => margin.top + (1 - v / maxY) * plotHeight;

    context.font = '11px DM Sans, sans-serif';
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    for (let i = 0; i <= 4; i++) {
      const value = i / 4 * finalValue;
      const yy = y(value);
      context.beginPath();
      context.strokeStyle = '#283951';
      context.lineWidth = 1;
      context.moveTo(margin.left, yy);
      context.lineTo(width - margin.right, yy);
      context.stroke();
      context.fillStyle = '#91a4bf';
      context.fillText(value.toFixed(2), margin.left - 8, yy);
    }
    context.textAlign = 'center';
    context.textBaseline = 'top';
    for (let i = 0; i <= 5; i++) {
      const t = tau * i;
      context.fillStyle = '#91a4bf';
      context.fillText(t.toFixed(t < 10 ? 1 : 0), x(t), height - margin.bottom + 11);
    }
    context.fillStyle = '#b0c0d8';
    context.fillText('Time (s)', margin.left + plotWidth / 2, height - 11);

    const fill = context.createLinearGradient(0, margin.top, 0, height - margin.bottom);
    fill.addColorStop(0, '#58dbd034');
    fill.addColorStop(1, '#58dbd002');
    context.beginPath();
    context.moveTo(x(0), y(0));
    for (let i = 0; i <= 220; i++) {
      const t = maxTime * i / 220;
      context.lineTo(x(t), y(stepResponse(t, tau, gain)));
    }
    context.lineTo(x(maxTime), y(0));
    context.closePath();
    context.fillStyle = fill;
    context.fill();

    context.beginPath();
    for (let i = 0; i <= 220; i++) {
      const t = maxTime * i / 220;
      const px = x(t), py = y(stepResponse(t, tau, gain));
      if (i === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.strokeStyle = '#58dbd0';
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.stroke();

    drawMarker(tau, '#ffb76a', 'τ');
    drawMarker(3 * tau, '#b69cff', '3τ');

    function drawMarker(time, color, label) {
      const px = x(time), py = y(stepResponse(time, tau, gain));
      context.beginPath();
      context.setLineDash([5, 5]);
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.moveTo(px, py);
      context.lineTo(px, y(0));
      context.stroke();
      context.setLineDash([]);
      context.beginPath();
      context.arc(px, py, 5.5, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#111a2b';
      context.stroke();
      context.font = 'bold 12px DM Sans, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'bottom';
      context.fillStyle = color;
      context.fillText(label, px, py - 11);
    }
  }

  function setValidation(id, pass) {
    const badge = document.getElementById(id);
    badge.textContent = pass ? 'PASS' : 'CHECK';
    badge.classList.toggle('fail', !pass);
  }

  [tauInput, gainInput].forEach(input => input.addEventListener('input', draw));
  window.addEventListener('resize', draw);
  if (window.ResizeObserver) new ResizeObserver(draw).observe(canvas.parentElement);

  document.querySelectorAll('[data-answer]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-answer]').forEach(item => item.classList.toggle('selected', item === button));
      const correct = button.dataset.answer === 'slower';
      const feedback = document.getElementById('prediction-feedback');
      feedback.textContent = correct
        ? 'Correct! Doubling τ doubles the time needed to reach 63.2% of the final output.'
        : 'Not quite. A larger τ means a slower response: the sensor takes longer to reach 63.2%.';
      feedback.style.color = correct ? '#8df4ce' : '#ffb76a';
    });
  });

  draw();
})();
