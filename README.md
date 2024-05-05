
# GSAP Animation Examples

This repository contains examples and explanations for animations using [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap), a powerful JavaScript animation library. It covers a variety of techniques, including basic animations, text effects, repeat/yoyo loops, and timelines.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Basic Animations](#basic-animations)
4. [Text Animations](#text-animations)
5. [Repeat Animations and Yoyo Effects](#repeat-animations-and-yoyo-effects)
6. [Timelines](#timelines)
7. [Contributing](#contributing)

## Introduction
GSAP is a versatile animation library for JavaScript that lets you create high-performance animations with a simple syntax. It's used in websites, games, and interactive applications to animate objects, text, and other elements.

## Getting Started
To work with GSAP, ensure you have it included in your project. You can add it via a CDN or import it into a JavaScript-based system.

### Include GSAP via CDN
Include the following script in your HTML to add GSAP to your project:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
```

### Import GSAP in JavaScript
For module-based projects, you can import GSAP as follows:

```javascript
import { gsap } from 'gsap';
```

## Basic Animations
GSAP uses two main functions for animations:

- `gsap.to(element, properties)`: Transforms an element from its current state to a defined end state.
- `gsap.from(element, properties)`: Animates from a specified state to the element's current state.

Common properties used in GSAP animations:

- **x, y**: Horizontal and vertical movement.
- **rotate**: Rotation in degrees.
- **scale**: Enlarging or reducing the size.
- **duration**: Duration of the animation in seconds.
- **delay**: Time to wait before starting the animation.

## Text Animations
GSAP can animate text elements in various ways. Some key text-related features include:

- **Opacity**: Transitioning from invisible to visible.
- **Stagger**: Applying delays to create a cascading effect.
- **Transformations**: Moving text along the x or y axis.

## Repeat Animations and Yoyo Effects
GSAP allows for repeating animations and yoyo effects, which create looped or back-and-forth animations:

- **Repeat**: Use `repeat: <number>` to repeat the animation a set number of times, or `repeat: -1` for infinite repetitions.
- **Yoyo**: Use `yoyo: true` to reverse the animation after it completes, creating a "backward" loop effect.

## Timelines
GSAP timelines help coordinate multiple animations in a sequence. Timelines can manage delays, sequence animations, and control complex transitions:

- **Creating a Timeline**: Use `gsap.timeline()` to start a new timeline.
- **Adding Animations**: Add animations to the timeline with `tl.to()` or `tl.from()`.
- **Controlling Delays**: Timelines automatically manage delays, allowing you to sequence animations without manually calculating timings.

## Contributing
Contributions are welcome! If you'd like to contribute to this repository, please submit a pull request with a brief description of your changes. Please ensure your code follows best practices, includes comments, and does not break existing functionality.
