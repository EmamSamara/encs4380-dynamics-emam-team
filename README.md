# Dynamic Characteristics Toolkit

ENCS4380 — Interfacing Techniques

Birzeit University

An interactive web toolkit for exploring first-order and second-order
sensor dynamics. It includes time-response plots, frequency-response
analysis, state-space visualization, and a sensor parameter guessing game.

## Live Demo

[Open the Dynamic Characteristics Toolkit](https://emamsamara.github.io/encs4380-dynamics-emam-team/)

## How to Run

### Online

Open the Live Demo link above. No installation is required.

### Locally

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Use the controls to explore the modules.

An internet connection is required to load Plotly.js from its CDN.

## Homework 1: Dynamic Characteristics Interactive Toolkit
## Team and Contributions

| Name | Student ID | Contributions |
|---|---|---|
| Emam Samara | 1220022 | Module 1: first-order step and ramp responses, 63.2% and 95% response markers, ramp lag, steady-state error, and logarithmic error-fraction plot. |
| Mustafa Fayed | 1220814 | Module 2: input/output sine plots, amplitude ratio, phase lag, frequency-response plots, cutoff frequency, dynamic-error calculator, and superposition of sine waves (bonus). |
| Omar Khaldi | 1231465 | Module 3: second-order step responses, response characteristics, poles in the s-plane, state-space modelling, eigenvalues, and phase-plane visualization. |
| Fawzy Abu Kwaik | 1201151 | Module 4: randomized sensor challenges, parameter estimation, measurement noise, session scoring, hints, and guessed/true response overlays. |
| Israa Masalmeh | 1230566 | Tested all four modules and verified their functionality and validation results. |


## Validation

The toolkit includes checks against the following theoretical results:

| Check | Expected result |
|---|---|
| First-order step | 63.2% of the final value at τ and approximately 95% at 3τ |
| First-order sine: τ = 0.2 s, ω = 2 rad/s | Amplitude ratio ≈ 0.928 and phase lag ≈ 21.8° |
| Maximum 5% amplitude error at 100 Hz | Maximum τ ≈ 0.523 ms; phase lag at 50 Hz ≈ 9.3° |
| Second-order step: ζ = 0.5 | Overshoot ≈ 16.3% |
| Critically damped step: ζ = 1 | No overshoot |
| State-space model: m = 1, b = 2, k = 4 | Eigenvalues and poles: −1 ± j1.732 |

## Screenshots

### Module 1 — First-Order Time Response
![First-order step response](images/module1.png)

### Module 2 — Frequency Response
![First-order frequency response](images/module2.png)

### Module 2 (Bonus) — Superposition of Sine Waves 
![Superposition of Sine Waves](images/module2Bonus.png)

### Module 3 — Second-Order Response
![Second-order response and state-space analysis](images/module3.png)

### Module 4 — Guess the Sensor
![Sensor challenge with revealed results](images/module4.png)

## Homework 2: PID Control Toolkit
## Team and Contributions

| Name | Student ID | Contributions |
|---|---|---|
| Emam Samara | 1220022 | P1: PID Playground. Interactive PID tuning on a first-order (Module 1) or second-order (Module 3) plant, showing the block diagram, output vs. setpoint, control signal with its limit, and live rise time, overshoot, settling time, and steady-state error. |
| Mustafa Fayed | 1220814 | P3: Digital PID. Discrete-time PID with adjustable Ts, gains, and an anti-windup toggle, showing the stair-step control signal, how performance degrades as Ts grows, and copyable Arduino loop code for the current gains. |
| Omar Khaldi | 1231465 | P4: Tuning Challenge, Evaluation and Validation. Checks the user's response against each part of the spec, shows pass or fail per item, computes the score. Manual testing of every module on the live page and documenting their outputs. |
| Fawzy Abu Kwaik | 1201151 | P2: Slow Sensor. Adds a first-order sensor (τs) in the feedback path, plotting the true output against the sensor's reading to show that overshoot grows and the loop eventually oscillates as τs increases. |
| Israa Masalmeh | 1230566 | P4: Tuning Challenge, Plant and Spec. Generates the hidden random plant (reusing HW1's Module 4) and defines the spec the user must meet, such as overshoot ≤ 10%, a settling-time limit, and zero steady-state error. |

## Validation

The toolkit includes checks against the following theoretical results, using the plant K/(τs + 1) with K = 1 and τ = 1 s:

| Check | Expected result |
|---|---|
| P only: Kp = 9 | Closed-loop time constant = 0.1 s; steady-state error = 10% |
| PI: Kp = 1, Ki = 1 | ωn = 1 rad/s and ζ = 1 |
| Any PI controller, step input | Zero steady-state error |

## Screenshots

### P1 — PID Playground
![P1 Settings and Closed-Loop Block Diagram](images/P1a.png)

### P1 — PID Playground (Continue)
![P1 Output and Performance](images/P1b.png)

### P2 — A Slow Sensor in the loop
![P2 Increasing Sensor time constant effect](images/P2.png)

### P3 — Digital PID
![P3 Oscillations caused by increasing Sampling time](images/P3a.png)

### P3 — Digital PID (Continue)
![P3 Digital PID](images/P3b.png)

### P4 — Tuning Challenge
![P4 Random Plant Generation and tuning](images/P4a.png)

### P4 — Tuning Challenge (Continue)
![P4 Output and Performance Measure](images/P4b.png)

## Technologies

- HTML and CSS for the interface.
- JavaScript for calculations and interaction.
- Plotly.js for interactive plots.
- GitHub Pages for hosting.

## References

- ENCS4380 course slides on static and dynamic characteristics.
- State-space modelling course notes.
- [Plotly.js Documentation](https://plotly.com/javascript/)

## AI Disclosure

ChatGPT was used to explain mathematical concepts, guide implementation,
review code, suggest interface improvements, and assist with documentation.
Some code snippets were adapted from AI suggestions.

The team reviewed and tested the implementation and is responsible for
the submitted work.
