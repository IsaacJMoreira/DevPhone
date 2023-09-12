
import react from '@vitejs/plugin-react'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'path';

const URL = `${path.resolve("../../uploads")}`;

const convertedURL = URL.replace(/^\\\\\?\\/,"").replace(/\\/g,'\/').replace(/\/\/+/g,'\/');
        
//black magic fuckery 🧙 

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        `${convertedURL}`,
      ],
    },
  },
})