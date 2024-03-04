export default defineNuxtConfig({
  modules: [
    'usebootstrap',
    'nuxt-icon'
    ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "bootstrap/scss/bootstrap.scss"
  ]
})