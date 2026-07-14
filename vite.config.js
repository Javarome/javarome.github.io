import {defineConfig} from "vite"

// Static single-page site. Deployed at the domain root (CNAME), so base "/".
export default defineConfig({
  base: "/",
  build: {
    target: "es2022"
  }
})
