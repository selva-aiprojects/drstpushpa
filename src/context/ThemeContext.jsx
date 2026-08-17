import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, blueTheme } from '../styles/themes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = (mode) => {
        switch (mode) {
            case 'light':
                setTheme(lightTheme);
                break;
            case 'dark':
                setTheme(darkTheme);
                break;
            case 'blue':
                setTheme(blueTheme);
                break;
            default:
                setTheme(lightTheme);
        }
    };

    useEffect(() => {
        // Optionally save to local storage here
    }, [theme]);

    // Inject global styles or body background based on theme
    useEffect(() => {
        document.body.style.backgroundColor = theme.colors.background;
        document.body.style.color = theme.colors.text;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
