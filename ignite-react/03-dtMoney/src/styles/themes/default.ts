const colors = {
  white: "#FFF",

  "gray-100": "#E1E1E6",
  "gray-300": "#C4C4CC",
  "gray-400": "#8D8D99",
  "gray-500": "#7C7C8A",
  "gray-600": "#323238",
  "gray-700": "#29292E",
  "gray-800": "#202024",
  "gray-900": "#121214",

  "green-300": "#00B37E",
  "green-500": "#00875F",
  "green-700": "#015F43",

  "red-300": "#FF5A5F",
  "red-500": "#AB222E",
  "red-700": "#7A1921",

  "yellow-500": "#FBA94C",
  "yellow-700": "#B06C00",
};

export const defaultTheme = {
  colors: {
    primary: colors["green-500"],
    primaryForeground: colors["gray-100"],
    primaryHover: colors["green-700"],
    primaryShadow: colors["green-300"],
    primaryBorder: colors["green-300"],

    secondary: colors["red-500"],
    secondaryForeground: colors["gray-100"],
    secondaryHover: colors["red-700"],
    secondaryShadow: colors["red-300"],

    danger: "red",
    success: "green",

    background: colors["gray-800"],
    backgroundHeader: colors["gray-900"],
    backgroundSummary: colors["gray-600"],
    backgroundTable: colors["gray-700"],
    backgroundInput: colors["gray-900"],
    backgroundTransactionTypeButton: colors["gray-700"],
    backgroundTransactionTypeButtonHover: colors["gray-600"],

    text: colors["gray-100"],
    text300: colors["gray-300"],
    text500: colors["gray-500"],
    navLink: colors["gray-300"],

    income: colors["green-500"],
    outcome: colors["red-500"],
  },
};
