import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname, '');
    
    return {
        root: __dirname,
        plugins: [react()],
        css: {
            postcss: {},
        },
        define: {
            'process.env.VITE_PROXY_URL': JSON.stringify(env.VITE_PROXY_URL),
        },
        server: {
            fs: {
                strict: true,
                allow: [__dirname]
            }
        },
        optimizeDeps: {
            entries: [path.resolve(__dirname, 'index.html')]
        }
    }
})
