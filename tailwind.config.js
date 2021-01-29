module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                ground1: 'slide 2s linear infinite',
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(-100%, 0)' },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
