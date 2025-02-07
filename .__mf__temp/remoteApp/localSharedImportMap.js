
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "react-router": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild__react_mf_2_router__prebuild__.js")
          return pkg
        }
      ,
        "react-i18next": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild__react_mf_2_i18next__prebuild__.js")
          return pkg
        }
      ,
        "i18next": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild__i18next__prebuild__.js")
          return pkg
        }
      ,
        "@emotion/react": async () => {
          let pkg = await import("__mf__virtual/remoteApp__prebuild___mf_0_emotion_mf_1_react__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1"
            }
          }
        ,
          "react-router": {
            name: "react-router",
            version: "7.1.4",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["react-router"].loaded = true
              const {"react-router": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^7.1.4"
            }
          }
        ,
          "react-i18next": {
            name: "react-i18next",
            version: "15.4.0",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["react-i18next"].loaded = true
              const {"react-i18next": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^15.4.0"
            }
          }
        ,
          "i18next": {
            name: "i18next",
            version: "24.2.2",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["i18next"].loaded = true
              const {"i18next": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^24.2.2"
            }
          }
        ,
          "@emotion/react": {
            name: "@emotion/react",
            version: "11.14.0",
            scope: ["default"],
            loaded: false,
            from: "remoteApp",
            async get () {
              usedShared["@emotion/react"].loaded = true
              const {"@emotion/react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^11.14.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      