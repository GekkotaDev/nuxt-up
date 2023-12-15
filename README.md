# Nuxt Up

A Nuxt template with just enough boilerplate pre-configured. Comes—

- preconfigured with [ESLint](https://prettier.io/); catch and fix problematic code now instead of frustrating yourself shotgun debugging at runtime.
- preinstalled with [Prettier](https://prettier.io); opinionated code styler for consistency, also adds semicolons automatically.
- comprehensive unofficial standard library with [VueUse](https://vueuse.org).
- rapidly iterate styling with [UnoCSS](https://unocss.dev/).
- write components in isolation and document them with [Histoire](https://github.com/histoire-dev/histoire)...
- ... while write and manage your content with [Nuxt Content](https://content.nuxt.com/).
- [automatically generate boilerplate, tests, stories, etc.](https://github.com/plopjs/plop)
- VS Code configuration.
- and everything that comes with Nuxt out of the box.

A non-exhaustive list of non-goals:

- data fetching; no one size fits all, some of the options available though
  - Nuxt `$fetch`
  - [Tanstack Query](https://tanstack.com/query/latest/docs/vue/overview)
  - [urql](https://formidable.com/open-source/urql/)
- single state management solution.
- native applications; see [Tauri](https://tauri.app/) and [Capacitor](https://capacitorjs.com/).
- server side configuration and code.
- Configuration for other IDEs.

## Usage

```powershell
pnpm dlx giget@latest gh:gekkotadev/nuxt-up
./use
```

For more info, check out [https://nuxt.com/](https://nuxt.com/)
