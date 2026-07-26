# Kioto

Kioto is a compact, application UI toolkit for Tailwind CSS v4. It ships semantic component classes, design tokens, and no runtime JavaScript.

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms" { strategy: base }
@import "./kioto.css";
```

Compose a base, variant, and size:

```html
<button class="btn btn-primary btn-sm">Create project</button>
```

State is expressed with semantic HTML attributes such as `aria-current`, `aria-selected`, `aria-expanded`, `disabled`, `aria-invalid`, and `data-state`.

## Development

```sh
npm install
npm run build
npm run dev
```

The documentation site is generated into `dist/`. Theme tokens can be overridden in an `@theme` block after importing Kioto.
