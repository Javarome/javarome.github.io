export default {
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html',
        module: 'cv/index.html'
      }
    }
  }
}
