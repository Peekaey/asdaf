import React, {createContext, useContext, useState} from "react";


type ThemeContextType = {
    Theme: "Light" | "Dark"
    ToggleTheme: () => void; // Toggles the theme
}



const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to manage and provide theme state
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<"Light" | "Dark">("Light"); // Default is light theme

    // Function to toggle theme
    const ToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));

        // Dynamically update the <body> class based on the theme
        if (theme === "Dark") {
            document.documentElement.style.backgroundColor = "#242424";
        } else {
            document.documentElement.style.backgroundColor = "white";
        }
    };
    return (
        <ThemeContext.Provider value={{ Theme: theme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}