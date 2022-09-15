/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        letterSpacing: {
            sidebarHeading: "1px",
        },
        extend: {},
        borderRadius: {
            "4px": "4px",
            "5px": "5px",
            full: "100%",
        },
    },
    plugins: [],
};
