import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [],
  shortcuts: [['flex-c-c', 'flex justify-center items-center']],
  theme: {
    colors: {
      sand: '#f3f3f1',
      marble: '#e0e2d9',
      concrete: '#676b5f',
      chalk: '#eff0ec',
      pansy: '#8129d9',
      teasel: '#5d18a2',
      pebble: '#a8aaa2',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
