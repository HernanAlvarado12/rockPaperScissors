/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '8': '8rem',
        '10': '10rem',
        '13': '13rem',
        '18': '18rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        scissor: {
          100: 'hsl(39, 89%, 49%)',
          200: 'hsl(40, 84%, 53%)'
        },
        paper: {
          100: 'hsl(230, 89%, 62%)',
          200: 'hsl(230, 89%, 65%)'
        },
        rock: {
          100: 'hsl(349, 71%, 52%)',
          200: 'hsl(349, 70%, 56%)'
        },
        lizar: {
          100: 'hsl(261, 73%, 60%)',
          200: 'hsl(261, 72%, 63%)'
        },
        cyan: {
          100: 'hsl(189, 59%, 53%)',
          200: 'hsl(189, 58%, 57%)'
        },
        back: {
          100: 'hsl(214, 47%, 23%)',
          200: 'hsl(237, 49%, 15%)'
        },
        text: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        header: 'hsl(217, 16%, 45%)',
        line: '#13223d'
      },
      boxShadow: {
        option: 'inset 0 0.6rem hsl(217, 16%, 75%)',
        rock: 'inset 0 -0.6rem hsl(349, 71%, 45%)',
        scissor: 'inset 0 -0.6rem hsl(39, 89%, 42%)',
        paper: 'inset 0 -0.6rem hsl(230, 89%, 55%)'
      },
    },
  },
  plugins: [],
}
