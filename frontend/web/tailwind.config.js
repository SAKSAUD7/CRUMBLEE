/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "var(--color-cream)",
                espresso: "var(--color-espresso)",
                gold: "var(--color-gold)",
                chocolate: "var(--color-chocolate)",
                cocoa: "var(--color-cocoa)",
                beige: "var(--color-beige)",
                background: "var(--bg-primary)",
                foreground: "var(--text-primary)",
            },
            fontFamily: {
                display: ["var(--font-display)"],
                body: ["var(--font-body)"],
            }
        },
    },
    plugins: [],
};
