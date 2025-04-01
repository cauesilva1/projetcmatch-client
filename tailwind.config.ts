/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de que o Tailwind escaneia seus arquivos
    ],
    theme: {
      extend: {
        fontFamily: {
          inria: ['"Inria Sans"', 'sans-serif'], // Adiciona a fonte personalizada
        },
      },
    },
    plugins: [],
  };