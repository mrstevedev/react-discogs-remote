import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                "./Routes": "./src/routes/Routes.tsx",
                "./i18n": "./src/i18n.ts"
            },
            shared: {
                react: {
                    requiredVersion: dependencies.react,
                    singleton: true
                },
                "react-dom": {
                    requiredVersion: dependencies["react-dom"],
                    singleton: true
                },
                "react-router": {
                    requiredVersion: dependencies["react-router"],
                    singleton: true
                },
                "@emotion/react": {
                    requiredVersion: dependencies["@emotion/react"],
                    singleton: true
                },
                i18next: {
                    requiredVersion: dependencies.i18next,
                    singleton: true
                },
                "react-i18next": {
                    requiredVersion: dependencies["react-i18next"],
                    singleton: true
                }
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
