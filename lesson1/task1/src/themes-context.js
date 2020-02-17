import React from 'react';
export const themes = {
    dark: {
        fontColor: '#000000',
        background: '#eeeeee',
    },
    light: {
        fontColor: '#ffffff',
        background: '#222222',
    },
};
export const ThemeContext = React.createContext(
    themes.dark,
);