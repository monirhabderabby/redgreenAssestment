/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        letterSpacing: {
            sidebarHeading: "1px",
        },
        extend: {},
        borderRadius: {
            searchBar: "4px",
            full: "100%",
        },
    },
    plugins: [],
};
