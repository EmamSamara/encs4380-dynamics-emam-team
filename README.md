# Dynamic Sensor Lab — ENCS4380 Homework 1

An interactive, browser-only toolkit that explains the dynamic characteristics of sensors through live simulations. Created for **ENCS4380 — Interfacing Techniques**, Birzeit University (Fall 2026).

## Live website

The GitHub Pages URL will be included here once deployment is enabled.

## Current status

The initial project foundation is ready:

- Responsive, accessible homepage with four module descriptions.
- Working first-order step-response explorer: change the time constant **τ** and gain **K** to redraw the plot instantly.
- Validation indicators for **y(τ) ≈ 0.632 KA** and **y(3τ) ≈ 0.950 KA**.
- A working **Predict, then check** question.

The remainder of Module 1 (ramp and logarithmic error plots), Modules 2–4, and the remaining validation cases are planned for the homework milestones. The homepage labels these clearly instead of presenting them as completed.

## Modules

| # | Module | Goal |
| --- | --- | --- |
| 1 | First-order time response | Step, ramp, time constant, lag and error |
| 2 | First-order frequency response | Sines, amplitude ratio, phase, Bode plot and dynamic error |
| 3 | Second-order response and state space | Damping, overshoot, poles, eigenvalues and phase plane |
| 4 | Guess the sensor | Estimate hidden parameters from noisy curves |

## Team

- [Emam Samara](https://github.com/EmamSamara)
- [Fawzy AbuKwaik](https://github.com/Fawzy-AbuKwaik)
- [Omar Khaldi](https://github.com/OmarKhaldi1465)

Instructor: [Dr. Wasel Ghanem](https://github.com/waghanem).

Module ownership will be recorded in GitHub Issues once agreed by the team. Each member should commit their own module work and be able to explain the equations and code during the demo.

## Local setup

Open `index.html` in a modern browser. This project uses standard HTML, CSS, Canvas, and JavaScript — no build step, server, API keys, or account required.

## Timeline

- **29 Oct 2026:** Repository and module planning.
- **3 Nov 2026:** Module 1 checkpoint on GitHub Pages.
- **9 Nov 2026:** Modules 2 and 3 checkpoint.
- **12 Nov 2026:** Final `v1.0` release, all four modules and six validation checks.
- **15–16 Nov 2026:** Group demonstrations.

## AI assistance disclosure

ChatGPT assisted with generating the initial project scaffold, styling, and first-order step-response plotting code. Group members must review, understand, test, and extend all code before submission.
