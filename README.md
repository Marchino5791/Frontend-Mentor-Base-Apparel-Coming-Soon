# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- [Google Fonts](https://fonts.google.com) - For fonts

### What I learned

I learn to create a function to validate email input.

function validateForm() {

  let form = document.getElementById("form");
  let email = form.elements["form__email"];
  let input = email.value;

  let atPosition = input.indexOf("@");
  let dotPosition = input.lastIndexOf(".");

  const error = document.getElementById("form__error");
  const message = document.getElementById("form__message");
  const formEmail = document.getElementById("form__email");

  if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= input.length) {
    error.style.visibility = "visible";
    message.style.visibility = "visible";
    formEmail.style.border = "2px solid hsl(0, 93%, 68%)";
    return false;
  }

### Continued development

I want to keep on improving my JavaScript acknowledgments.

### Useful resources

- [https://www.javatpoint.com/javascript-form-validation](https://www.javatpoint.com/javascript-form-validation)

## Author

- Frontend Mentor - [@marchino5791](https://www.frontendmentor.io/profile/marchino5791)
- LinkedIn - [@yourusername](https://www.twitter.com/yourusername)
