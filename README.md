# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    
## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/user-attachments/assets/b430156f-74e6-444d-a92a-2133a26e1816)

### Links

- Solution URL: https://github.com/rishavbarman-dev/faq-accordion
- Live Site URL: https://rishavbarman-dev.github.io/faq-accordion/
  
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<div class="question" tabindex="0" aria-expanded="false">
            <div class="ques">
              <h3>What is Frontend Mentor, and how will it help me?</h3>
              <img
                class="icon-toggle"
                src="assets/images/icon-plus.svg"
                alt=""
              />
            </div>
            <p class="ques-ans">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and idea
              for portfolio building.
            </p>
            <hr />
</div>
```

While working on this project, I gained understanding of how to enhance web accessibility using attributes like `tabindex` and and `aria-expanded`. Here is a summary of what i learned:

1. `tabindex` Attribute:
  - The `tabindex` attribute allows an element to be focusable using keyboard navigation. By setting `tabindex="0"` on an 
    element, it becomes part of the natural tab order, allowing users to navigate to it using the Tab key.
    
  - This is particularly useful for non-interactive elements like `div` or `span`, which normally don't receive keyboard 
    focus.Making these elements focusable ensures that all users, including those relying on keyboards for navigation, can 
    interact with them.

2. `aria-expanded` Attribute:
  - The `aria-expanded` attribute is used to indicate the visibility state of content. It is typically applied to elements 
    that control the expansion of collapsible content, such as accordions or dropdown menus.
    
  - When set to `false`, it means the content is collapsed, and when set to `true`, it indicates that the content is 
    expanded and visible to the user.



