export default {
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html',
        cv: 'cv/index.html'
      }
    }
  }
}
