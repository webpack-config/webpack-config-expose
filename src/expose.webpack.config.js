import partial from 'webpack-partial';
import resolve from 'resolve';

export default (expose = []) => (config) => partial(config, {
  module: {
    loaders: Object.keys(expose).map((module) => {
      return {
        name: `expose-${module}`,
        test: resolve.sync(module, {
          basedir: config.context,
        }),
        loader: `${require.resolve('expose-loader')}?${expose[module]}`,
      };
    }),
  },
});
