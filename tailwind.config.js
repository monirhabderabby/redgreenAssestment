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
                "24px": "24px",
                "32px": "32px",
                "38px": "38px",
            },
            fontFamily: {
                popins: ["Poppins", "sans-serif"],
            },
        },
        borderRadius: {
            "4px": "4px",
            "5px": "5px",
            "6px": "6px",
            full: "100%",
        },
    },
    plugins: [],
};
