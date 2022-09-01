/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors,
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },

        },
    },
    plugins: [require('@tailwindcss/forms')],
}
