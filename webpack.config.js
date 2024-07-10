const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const deps = require("./package.json").dependencies;

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes: {
    "pokemonMfeList": "http://localhost:4201/remoteEntry.js",
    "pokemonMfeProfile": "http://localhost:4202/remoteEntry.js",
  },
  exposes: {
    "./EventService": "./src/app/shared/services/event/event.service.ts",
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/core"] },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/common"] },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/router"] },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/common/http"] },
    "bootstrap": { singleton: true, strictVersion: true, requiredVersion: deps["bootstrap"] },
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: '7.8.1' }
  }

});
