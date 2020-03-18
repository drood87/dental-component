module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/base/_base.scss";
            @import "@/scss/base/_variables.scss";
            @import "@/scss/mixins/_mixins.scss";
          `,
      },
    },
  },
};
