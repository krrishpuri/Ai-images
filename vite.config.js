import WindiCSS from 'vite-plugin-windicss';

export default {
  plugins: [
    WindiCSS(),
  ],
  css: {
    postcss: 'postcss.config.cjs',
  },
};