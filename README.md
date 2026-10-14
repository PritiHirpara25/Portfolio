# Priti Hirapara — Portfolio

A responsive frontend developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

## Environment variables

Create a `.env.local` file in the project root and set:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_CONTACT_PHONE=
VITE_CONTACT_EMAIL=
```

The EmailJS values are required for the contact form. The phone and email are
optional and their contact cards are hidden when they are not set. Restart the
development server after changing environment variables.

Vite embeds `VITE_` variables in the client bundle, so these values are visible
to visitors. EmailJS public keys are intended for client-side use; do not put
private credentials or server-side secrets in these variables.

## Validation

```sh
npm run build
npm run lint
```
