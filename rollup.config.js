import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: `src_js/main.js`,
    plugins: [resolve(), esbuild()],
    output: [
      {
        file: `dist/bundle.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
    ]
  },
  {
    input: `src_js/main.js`,
    plugins: [dts()],
    output: {
      file: `dist/bundle.d.ts`,
      format: 'es',
    },
  }
]