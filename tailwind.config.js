module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'block-page': `
        1px -1px 1px 1px black,
        6px -7px 1px 1px rgb(50, 186, 217),
        7px -8px 1px 1px black,
        8px -9px 5px 3px lightgrey
        `,
        'block-image': `
        1px -5px 2px 1px rgb(96, 207, 247),
        1px -6px 2px 1px rgb(132, 248, 255)
        `,
        'project-card': `
        2px -2px 2px 3px lightgrey
        `
      },
      colors: {
        light: {
          background: '#FDEAEA',
          darkBlue: 'rgb(36, 129, 166)',
          midBlue: 'rgb(50, 186, 217)',
          lightBlue: 'rgb(121, 242, 242)'
        }
      }
    }
  },
  plugins: []
}
