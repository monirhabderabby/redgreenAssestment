/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        letterSpacing: {
            sidebarHeading: "1px",
            cardAmount: "-0.017em",
        },
        extend: {
            colors: {
                cs__gray: "#F1F3F8",
                light_gray: "#E3E8EF",
            },
            lineHeight: {
                "20px": "20px",
                "22px": "22px",
                "24px": "24px",
                "27px": "27px",
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
            "8px": "8px",
            full: "100%",
        },
    },
    plugins: [],
};
