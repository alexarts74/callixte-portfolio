# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Portfolio artistique pour une danseuse contemporaine. Design épuré avec une palette minimaliste blanc/noir. Le site met en avant les projets de danse à travers une vidéo hero plein écran et une grille de projets.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 portfolio application using the App Router pattern with React 19, TypeScript, and Tailwind CSS v4.

### Key Technologies

- **Next.js 16.1.5** with App Router (file-based routing in `app/`)
- **React 19.2.3** with React Compiler enabled for automatic optimization
- **Tailwind CSS 4** via PostCSS plugin
- **TypeScript** with strict mode and path alias `@/*` mapping to root

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Tailwind imports and CSS custom properties for theming
- `public/` - Static assets

### Styling

Uses Tailwind CSS v4 with utility classes. Dark mode is supported via `dark:` prefix and `@media (prefers-color-scheme: dark)`. Theme variables are defined as CSS custom properties in `globals.css`.
