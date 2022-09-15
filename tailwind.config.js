/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        letterSpacing: {
            sidebarHeading: "1px",
        },
        extend: {
            colors: {
                cs__gray: "#F1F3F8",
            },
            lineHeight: {
                "20px": "20px",
                "22px": "22px",
            },
        },
        borderRadius: {
            "4px": "4px",
            "5px": "5px",
            full: "100%",
        },
    },
    plugins: [],
};
