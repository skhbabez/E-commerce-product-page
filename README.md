# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [https://github.com/skhbabez/E-commerce-product-page](https://github.com/skhbabez/E-commerce-product-page)
- Live Site URL: [https://skhbabez.github.io/E-commerce-product-page](https://skhbabez.github.io/E-commerce-product-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Storybook](https://storybook.js.org/) - JS library
- [Typescript](https://www.typescriptlang.org/)
- [Tanstack Router](https://tanstack.com/router/latest) - JS library
- [vite](https://vite.dev/)

### What I learned

This project seemed appropriate to get back into React on Frontendmentor. I used this as an opportunity to finally learn Storybook and CSS modules, which I put the most focus on.

Furthermore, I decided to use React context for this project to implement the cart, to get some practice with it.

I also added some basic routing with TanStack Router, a library I used in the past.

One thing that was especially interesting to me was ComponentProps, a TypeScript helper to extract type information from components and native HTML elements. This simplified my React components a lot.

```tsx
import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./Button.module.css";
const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"button">>) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
```

Another thing was figuring out how to make native HTML dialogs dismissible by clicking the backdrop.

```tsx
const closeLightBoxOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
  const dialog = dialogRef.current;

  if (dialog && !(event.target instanceof HTMLButtonElement)) {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialog.close();
    }
  }
};
```

Creating the Spinbutton took by far the most time, especially figuring out ways to make it accessible. I ended up using [this](https://bootstrap-vue.org/docs/components/form-spinbutton/) implementation as a reference for the accessibility concerns.

```tsx
<div className={styles.spinbutton} tabIndex={-1} onFocus={focusHandler}>
  <button
    tabIndex={-1}
    type="button"
    aria-controls={id}
    aria-label="Decrement"
    aria-keyshortcuts="ArrowDown"
    onClick={decrement}
  >
    <Minus />
  </button>
  <output
    ref={outputRef}
    role="spinbutton"
    tabIndex={0}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={normalizeValue(value)}
    aria-valuetext={String(normalizeValue(value))}
    aria-label={label}
    id={id}
    onKeyDown={onKeyDownHandler}
  >
    {" "}
    {normalizeValue(value)}
  </output>
  <button
    tabIndex={-1}
    type="button"
    aria-controls={id}
    aria-label="Increment"
    aria-keyshortcuts="ArrowUp"
    onClick={increment}
  >
    <Plus />
  </button>
</div>
```

One thing I initially struggled with was getting the positioning of the cart menu right. I decided to use the Popover API, which I had wanted to try for a while. The problem was that Firefox does not fully support anchor positioning, so I had to come up with a workaround.

```tsx
.popover {
  background-color: transparent;
  border: none;
  position: fixed;
  top: 5.875rem;
  translate: -50% 0;
  left: 50%;
  @media (min-width: 48em) {
    left: min(61.9375rem + (100vw - 69.375rem) / 2, 100vw - 11.25rem);
  }
  box-shadow: var(--shadow-grey-950);
  @supports (bottom: anchor(bottom)) {
    @media (min-width: 48em) {
      left: min(anchor(center), 100vw - 11.25rem);
    }
  }
}
```

Another Issue was how to implement a Context provider that can be updated from a child component. I used this [Stackoverflow](https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component) post asa reference to come up with a meaningful implementation. I also added a defaultvalue to it so I can intialize it through Storybook to mock it.

```tsx
  decorators: [
    (Story) => {
      return (
        <CartCtxProvider
          initialValue={[
            {
              id: 1,
              quantity: 3,
              name: "Fall Limited Edition Sneakers",
              price: 125,
              image: "images/image-product-1-thumbnail.jpg",
            },
            {
              id: 2,
              quantity: 2,
              name: "Summer Limited Edition Sneakers",
              price: 150,
              image: "images/image-product-2-thumbnail.jpg",
            },
          ]}
        >
          <Story></Story>
        </CartCtxProvider>
      );
    },
  ],
```

I decided to use GitHub Actions to push the application to GitHub Pages, using a script provided by the Vite documentation. TanStack Router caused some issues, since I needed to switch over to hash routing to make sure the page could be refreshed without throwing a 404.

```tsx
const hashHistory = createHashHistory();
const router = createRouter({
  routeTree,
  basepath: "/E-commerce-product-page/",
  history: hashHistory,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
```

### Continued development

I’m not completely happy with the overall structure. I kind of forced CSS modules into the project, and in hindsight I’d probably be better off using something like Tailwind, or at least writing my own utility classes to use alongside the modules. There are also quite a few things I’d like to rework in the future. For example, the picture gallery could be made scrollable to support more images and use meaningful placeholders for missing ones. The cart implementation could also be improved by validating it against a catalogue, making it behave more like a real application.

### Useful resources

- [ComponentProps](https://www.totaltypescript.com/react-component-props-type-helper) -helpful write up on how to use ComponentProps.
- [Memoization in Context](https://stackoverflow.com/questions/73526249/how-to-fix-the-object-passed-as-the-value-prop-to-the-context-provider-changes) - Interesting Stackoverflow post on how to handle a linter warning about memoization on context.
- [Context](https://react.dev/reference/react/createContext) - React documentation on context.
- [Context Provider](https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component) - How to write a context provider that manages state. Really helpful for implementing the cart
- [Popover Api](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) - Great Article on the Popover API from MDN.
- [Spinbutton Accessibility](https://bootstrap-vue.org/docs/components/form-spinbutton/) - I used this implementation of a Spinbuttoon as a Reference to figure out, how to make it accessible.
- [Github actions with vite](https://vite.dev/guide/static-deploy.html#github-pages) - I used the script provided here to deploy to github pages with github actions.
