/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const path = require("path");
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                main: ["Aeonik"],
            }
        }
    },
    plugins: [require("tailwind-scrollbar-hide")],
    content: [
        path.resolve(__dirname, "**/*.{js}"),
        './*.html'
    ],
};
