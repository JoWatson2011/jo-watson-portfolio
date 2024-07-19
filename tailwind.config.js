module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'block-page': `
        2px -5px 2px 1px rgb(96, 207, 247),
        3px -6px 2px 1px rgb(132, 248, 255)
        `,
        'block-tab': `
        1px -5px 2px 1px rgb(96, 207, 247),
        1px -6px 2px 1px rgb(132, 248, 255)
        `,
        'project-card': `
        2px -2px 5px 3px lightgrey
        `
      }
    }
  },
  plugins: []
}