const { ModuleFederationPlugin } = require("webpack").container;

/** @type {require('webpack').Configuration} */
module.exports = {
    output: {
        publicPath: "https://microfontend-dev.vercel.app/login/", // we setup the `publicHost` in `angular.json` file
        uniqueName: "login",
    },
    optimization: {
        runtimeChunk: false,
    },
    experiments: {
        // Allow output javascript files as module source type.
        outputModule: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "login",
            filename: "remoteEntry.js",
            library: {
                // because Angular v14 will output ESModule
                type: "module",
                name: "login",
            },
            exposes: {
                "./LoginModule":
                    "projects/apps/login/src/app/login/app.module.ts",
            },
            /**
             * shared can be an object of type SharedConfig
             * you can change this to select something can be shared
             */
            shared: {
                "@angular/animations": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/animations/browser": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/common": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/common/http": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/core": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/platform-browser": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/platform-browser/animations": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/router": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "@angular/platform-browser-dynamic": {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/tabs": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/modal": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/message": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/notification": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/icon": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/i18n": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/table": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/form": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/dropdown": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/collapse": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/tooltip": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/spin": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "ng-zorro-antd/core": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
                "@angular/cdk/overlay": {
                    eager: true,
                    singleton: true,
                    requiredVersion: false,
                },
            },
        }),
    ],
};
