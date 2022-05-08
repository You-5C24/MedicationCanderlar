import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import { rules } from './unoRulse';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      rules
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts', '.d.ts', '.min.js']
  },
  server: {
    host: '0.0.0.0'
  }
});
