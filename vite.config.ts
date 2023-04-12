import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8899
  },
  base: './',
  build: {
    //
    target: 'modules',
    // 打包文件目录
    outDir: 'es',
    // 压缩
    minify: true,
    rollupOptions: {
      // 忽略打包vue, element-plus
      external: ['vue', 'element-plus'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: resolve(__dirname, './dist/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: resolve(__dirname, './dist/lib')
        }
      ]
    },
    lib: {
      entry: './index.js',
      name: 'lvyb',
      formats: ['es', 'cjs']
    }
  }
})
