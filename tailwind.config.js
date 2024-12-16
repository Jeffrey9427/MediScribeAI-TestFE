/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                tertiary: 'var(--color-tertiary)',
                quaternary: 'var(--color-quaternary)',
                quinary: 'var(--color-quinary)',
                senary: 'var(--color-senary)',
            },
            // fontFamily: {
            //     kumbh: ['Kumbh Sans', 'sans-serif'],
            // },
        },
    },
    plugins: [],
};