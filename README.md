# UI Development Accordion Test

The goal is to create a working accordion component inside the projects Fractal Library.

Please see the email for a link to the design visual.

## Included assets

The project includes a custom [TailwindCSS config file](https://tailwindcss.com/docs/configuration) where the design tokens for the brand have already been setup.

You can see the full color palette and text styles here (Ensure fractal server is running first): http://localhost:3000/components/detail/design-tokens

The project also supports SASS syntax to keep component classes in separate files.

## Running the project

The repo has been setup to run the basic framework that is needed to complete this test.

To start:

```shell
npm i

npm run dev
```

## Acceptance Criteria

The accordion must adhere to this acceptance criteria:

- Closely follow the visual design & layout as per the design link with the TailwindCSS design tokens and/or CSS Classes.
- The user must be able to toggle each item in the list with mouse/touch
- Vanilla JS for any functionality added
- The content dropdown should accept formatted text.
- The accordion must be accessible following best practice:
  - Maintain semantic ordering
  - Navigation by keyboard

## Nice to see

- Setting Fractal to display all three background colors

## Tech used

- Vite
- Fractal
- Nunjucks
- TailwindCSS
- PostCSS
- SCSS
- NodeJS v16.19.0

## References

**Accessibility** - Guidance on approaches for types of components [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)

**Fractal** - Component Library tool [https://fractal.build/](https://fractal.build/)

**Nunjucks** - A templating Language similar to Handlebars & Twig. [https://mozilla.github.io/nunjucks/](https://mozilla.github.io/nunjucks/)