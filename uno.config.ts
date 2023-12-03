import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetIcons(),
    presetAttributify(),
    presetWebFonts(),
    presetTypography(),
    presetUno(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
