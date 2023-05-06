import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      input: 'src/index.mts',
    },
    {
      input: 'src/index.cts',
    },
  ],
  externals: [],
  clean: true,
  declaration: true,
  rollup: {
    inlineDependencies: true,
    esbuild:{
      loaders: {
        '.mts': "ts",
        '.cts': "ts"
      }
    }
  },
})
