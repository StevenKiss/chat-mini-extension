// vite.config.ts
import { defineConfig } from 'vite';
import webExtension from 'vite-plugin-web-extension';

export default defineConfig({
  plugins: [
    webExtension({
      manifest: () => ({
        manifest_version: 3,
        name: "Mini Chat Extension",
        version: "0.1.0",
        description: "A chatgpt extension that allows one off chats for clarifying quesitons without cluttering the main chat",
        action: {
          default_popup: "popup.html"
        },
        background: {
          service_worker: "src/background.ts",
          type: "module"
        },
        permissions: ["storage", "activeTab"],
        host_permissions: ["https://chatgpt.com/*"]
      })
    }) as any
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});