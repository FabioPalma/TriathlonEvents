# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an events listing website built with Next.js 15, React 19, TypeScript, and PostgreSQL. The application displays sports events (running, cycling) organized by categories.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs on http://localhost:3000

## Architecture

### Database Layer (`src/lib/`)

- **`db.ts`**: PostgreSQL connection pool using `pg` library. Exports a generic `query<T>()` function that returns typed results.
- **`queries/eventos.ts`**: All event-related database queries. Contains:
  - `Evento` type definition
  - `listarEventos()`: List all events
  - `buscarEventoPorId(id)`: Get single event by ID
  - `criarEvento(dados)`: Create new event
  - `listarEventosPorCategoria(categoriaId)`: List events filtered by category

### Database Schema

The application expects these PostgreSQL tables:

- **`eventos`**: id, titulo, descricao, data, local, imagem_url, categoria_id
- **`categorias`**: id, nome

### Components (`src/components/`)

- **`EventosPorCategoria.tsx`**: Server component that fetches and displays events by category. Accepts `titulo` and `categoriaId` props. Renders a responsive grid of event cards.

### App Structure (`src/app/`)

- Uses Next.js 15 App Router
- **`layout.tsx`**: Root layout with Geist fonts (sans and mono)
- **`page.tsx`**: Homepage that renders multiple `EventosPorCategoria` components
- **`globals.css`**: TailwindCSS global styles

### Key Technical Patterns

1. **Server Components**: All data fetching happens in server components (async components that call database queries directly)
2. **Path Aliases**: `@/*` maps to `src/*` for imports
3. **Image Optimization**: Next.js Image component configured in `next.config.ts` with remote patterns for:
   - `corridaauchan.pt`
   - `encrypted-tbn0.gstatic.com`
4. **Styling**: TailwindCSS v4 with custom configuration

### Environment Variables

Required in `.env.local`:
- `DATABASE_URL`: PostgreSQL connection string

### TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Path aliases configured for `@/*` imports
