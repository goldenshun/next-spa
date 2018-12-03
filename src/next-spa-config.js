const nextSpaConfig = (nextConfig = {}) => Object.assign({}, nextConfig, {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  }
});

module.exports = nextSpaConfig;
