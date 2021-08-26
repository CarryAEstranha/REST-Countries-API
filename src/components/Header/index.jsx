// React imports
import { useState } from "react";

// Styles import
import { Container } from "./styles.js";

// Export the component function
export function Header() {
    // State that store the theme flag
    const [darkTheme, setDarkTheme] = useState(true);

    // Function that change the theme
    function handleTheme() {
        // Receive the root document
        const root = document.documentElement;

        // Verify if dark theme is active
        if (darkTheme === true) {
            // Change the background color
            root.style.setProperty("--Background", "hsl(0, 0%, 80%)");
            // Change the elements color
            root.style.setProperty("--Elements", "hsl(0, 0%, 100%)");
            // Change the text
            root.style.setProperty("--Text", "hsl(200, 15%, 8%)");
        } else {
            // Change the background color
            root.style.setProperty("--Background", "hsl(210, 26%, 16%)");
            // Change the elements color
            root.style.setProperty("--Elements", "hsl(210, 24%, 22%)");
            // Change the text
            root.style.setProperty("--Text", "hsl(0, 0%, 100%)");
        }

        // Update the theme flag
        setDarkTheme(!darkTheme);
    }

    // Return the component
    return (
        <Container>
            <div id="headerContent">
                <span id="titleLogo">Where in the world?</span>

                {darkTheme === true ? (
                    <button id="themeButton" onClick={() => handleTheme()}>
                        <span>Light Theme</span>
                    </button>
                ) : (
                    <button id="themeButton" onClick={() => handleTheme()}>
                        <span>Dark Theme</span>
                    </button>
                )}
            </div>
        </Container>
    );
}