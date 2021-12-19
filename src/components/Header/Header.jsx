import {
    useEffect,
    useState
} from "react";

import styles from "./Header.module.scss";

import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";

export function Header() {
    const [themeMode, setThemeMode] = useState(0);
    const [themeInformation, setThemeInformation] = useState({});

    useEffect(() => {
        const root = document.querySelector(":root");
        
        if (themeMode % 2 === 0) {
            root.style.setProperty("--components-background", "hsl(210, 24%, 22%)");
            root.style.setProperty("--page-background", "hsl(206, 26%, 18%)");
            root.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
            root.style.setProperty("--text-color-auxiliar", "hsl(0, 0%, 80%)");

            setThemeInformation({
                image:      moon,
                imageAlt:   "Moon",
                name:       "Dark Mode"
            });
        } else {
            root.style.setProperty("--components-background", "hsl(0, 0%, 100%)");
            root.style.setProperty("--page-background", "hsl(0, 0%, 80%)");
            root.style.setProperty("--text-color", "hsl(200, 15%, 8%)");
            root.style.setProperty("--text-color-auxiliar", "hsl(210, 24%, 22%)");

            setThemeInformation({
                image:      sun,
                imageAlt:   "Sun",
                name:       "Light Mode"
            });
        }
    }, [themeMode]);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.pageHeading}>
                    Where in the world?
                </h1>

                <button
                    className={styles.themeButton}
                    onClick={() => {
                        setThemeMode(!themeMode);
                    }}
                >
                    <img
                        alt={themeInformation.imageAlt}
                        src={themeInformation.image}
                    />

                    <span>
                        {themeInformation.name}
                    </span>
                </button>
            </div>
        </header>
    );
}