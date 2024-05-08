import fs from 'fs';

export const useIsWebApp = () => {
    if (process.client) {
        if (process.env.IS_NUXT === 'true') {
            return "web"
            // Your Nuxt.js specific code here
        } else if (process.env.IS_ELECTRON === 'true') {
            return "desktop"
            // Your Electron specific code here
        } else {
            console.log('Project type could not be determined.');
            // Handle unrecognized project type
        }
    }
}