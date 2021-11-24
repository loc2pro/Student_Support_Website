module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            serif: ['"Roboto Slab"', "serif"],
            body: ["Roboto", "sans-serif"],
        },
        extend: {
            backgroundColor: {
                body: "#25074d",
            },
            width: {
                99: "calc(100% - 16rem);", //get the width of the main content from lg:viewport by dividing
                // (the total width by the width of the side navigation)
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};