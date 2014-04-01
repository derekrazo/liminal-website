// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "Liminal Spaces Project",
      description: "Creating Spaces That Inspire",
      styles: [
        "./styles/index.css",
        "http://fonts.googleapis.com/css?family=Alegreya+Sans:300,400,500,800,900",
        "http://fonts.googleapis.com/css?family=The+Girl+Next+Door",
      ],
      scripts: ["./scripts/bundle.js"],
    },
  },
  detectEncoding: true,
  plugins: {
    handlebars: {
      helpers: {
        partial: function (content, options) {
          return this.partial(content, options);
        },
        block: function (blockName) {
          return this.getBlock(blockName).toHTML();
        },
      },
    },
    browserifybundles: {
      bundles: [{
        arguments: ['-t', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
    menu: {
      menuOptions: {
        optimize: false,
        skipFiles: /^(scripts|styles)/,
      },
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
