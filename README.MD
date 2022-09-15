# Kaboom Boilerplate Vite

A semi-opinionated game project scaffold for [Kaboom](https://kaboomjs.com/). Utilises Typescript and [Vite](https://vitejs.dev/) for blazing fast project builds.

## Get Started

Clone the repo and install dependencies.

`yarn` or `npm i`

Build and run the game locally in dev mode

`yarn dev` or `npm run dev`

When you are ready to build for deployment

`yarn build` or `npm run build`

## Project Structure

### public

Your game fonts, sounds, and sprites should be added here. This will make them available to be loaded

### src

The root for your game code and logic.

- **game.ts** Sets up and configures the kaboom instance. Make your adjustments to the resolution, background color etc here.

- **loadAssets.ts** loadAssets gets called before the game starts. Set up any assets you need to preload here.

- **main.ts** The entrypoint for your game

#### src/components

Your custom components. There is an example bounce component included.

#### src/entities

Your game entities. There is an example logo entity included.

#### src/utils

Your game entities. There is a sample math clamp utility included.
