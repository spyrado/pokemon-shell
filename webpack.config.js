const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "pokemonMfeList": "http://localhost:4201/remoteEntry.js",
  },

  // shared: {
  //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/core"] },
  //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/common"] },
  //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/router"] },
  //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/common/http"] },
  //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: deps["bootstrap"] },
  // }

});
