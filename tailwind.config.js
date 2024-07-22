module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'block-page': `
        1px -1px 1px 1px black,
        6px -7px 1px 2px rgb(50, 186, 217),
        7px -8px 1px 2px black,
        8px -9px 6px 4px lightgrey
        `,
        'block-image': `
        0px -0px 1px 3px black,
        2px -3px 1px 5px rgb(36, 129, 166),     
         8px -9px 6px 4px lightgrey

        `,
        'block-dropdown': `
        0px -0px 1px 2px black,
        2px -3px 1px 2px rgb(50, 186, 217),
        3px -4px 1px 1px black
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
