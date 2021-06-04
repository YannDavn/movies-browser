export enum Themes {
  light = "light",
  dark = "dark",
}

export const themes: { [key in Themes]: any } = {
  light: {
    primary: "#FFFFFF",
    secondary: "#60A5FA",
    text: '#000',
  },
  dark: {
    primary: "#4B5563",
    secondary: "#1F2937",
    text: '#FFF',
  },
};
