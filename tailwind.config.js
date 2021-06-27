module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "text-green-500",
        "bg-green-100",
        "border-green-200",
        "text-gray-500",
        "bg-gray-100",
        "border-gray-200",
        "text-pink-500",
        "bg-pink-100",
        "border-pink-200",
        "text-yellow-500",
        "bg-yellow-100",
        "border-yellow-200",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
