import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

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
