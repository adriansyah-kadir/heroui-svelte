# HeroUI Svelte

A Svelte 5 wrapper for [HeroUI](https://heroui.com), bringing HeroUI's styling and component experience to Svelte applications.

## Installation

```sh
bun add github:adriansyah-kadir/heroui-svelte#release @heroui/styles
```

## Setup

Import Tailwind CSS and HeroUI styles in your main CSS file:

```css
@import "tailwindcss";
@import "@heroui/styles";

@source "../../node_modules/heroui-svelte/dist";
```

Adjust the `@source` path to match your project structure.

## Usage

Import components from `heroui-svelte` and use them in your Svelte 5 components.

```svelte
<script lang="ts">
  import { Button } from "heroui-svelte";
</script>

<Button>Get started</Button>
```

## Documentation

* [HeroUI](https://heroui.com) — Original design system and component reference.
* [Storybook](https://adriansyah-kadir.github.io/heroui-svelte/) — Explore this library's Svelte components and examples.
