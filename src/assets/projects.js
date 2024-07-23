const projects = [
  {
    Title: 'RumbleQuiz',
    imageLocation:
      'rumble-quiz.jpeg',
    description:
      'A multiplayer trivia game built for mobile. Select a topic and play head-to-head against other players.',
    frontEndURL: 'https://github.com/JoWatson2011/rumble-quiz-app',
    backEndURL: 'https://github.com/JoWatson2011/rumble-quiz-server',
    hostedURL: '',
    techStackIcons: [
      { name: 'vi-file-type-js-official', label: 'JavaScript' },
      { name: 'si-express', label: 'express' },
      { name: 'vi-file-type-pgsql', label: 'PSQL' },
      { name: 'co-socket-io', label: 'SocketIo' },
      { name: 'vi-file-type-reactjs', label: 'ReactNative' }
    ]
  },
  {
    Title: 'NC news',
    imageLocation:
      'nc-news.png',
    description: 'A social news app where users can post, comment and vote on articles.',
    frontEndURL: 'https://github.com/JoWatson2011/fe-nc-news',
    backEndURL: 'https://github.com/JoWatson2011/nc-news',
    hostedURL: 'https://jowatson-portfolio-nc-news.netlify.app',
    techStackIcons: [
      { name: 'vi-file-type-js-official', label: 'JavaScript' },
      { name: 'si-express', label: 'express' },
      { name: 'vi-file-type-pgsql', label: 'PSQL' },
      { name: 'vi-file-type-reactjs', label: 'React' },
      { name: 'vi-file-type-tailwind', label: 'Tailwindcss' }
    ]
  },
  {
    Title: 'Pokemon CLI Battler',
    imageLocation:
      'pokemon-battler-terminal.png',
    description: 'An interactive command-line game based on a Pokemon battle.',
    backEndURL: 'https://github.com/JoWatson2011/pokemon-battler/tree/main',
    frontEndURL: null,
    hostedURL: null,
    techStackIcons: [{ name: 'vi-file-type-js-official', label: 'JavaScript' }]
  },
  {
    Title: 'SubcellulaRVis',
    imageLocation:
      'subcellularvis.png',
    description:
      'A web app to facilitate analysis of data from high-throughput biological experiments.',
    frontEndURL: 'https://github.com/JoWatson2011/subcellularvis',
    backEndURL: null,
    hostedURL: 'phenome.manchester.ac.uk/subcellular',
    techStackIcons: [{ name: 'vi-file-type-rproj', label: 'R' }]
  }
]
export default projects
