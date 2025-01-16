import React, { createContext, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'; // Import the sun icon

// create context
const ThemeContext = createContext();

// create provider
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// consume context
const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // create a object of css
    const lighttheme = {
        backgroundColor: "#ffffff",
        color: "#000000",
    }
    const darktheme = {
        backgroundColor: "#000000",
        color: "#ffffff",
    }

    return (
        <div style={theme === "light" ? lighttheme : darktheme}>
            {/* Render icon based on the theme */}
            <FontAwesomeIcon
                icon={theme === "light" ? faSun : faMoon}
                onClick={toggleTheme}
                style={{ cursor: "pointer", fontSize: "24px" }} // Add some styling
            />
            <p>Current Theme: {theme}</p>
        </div>
    );
};

const Themesetup = () => {
    return (
        <>
            <ThemeProvider>
                <div>
                    <h1>Change Theme</h1>
                    <ThemeToggleButton />
                </div>
            </ThemeProvider>
        </>
    );
};

export default Themesetup;
