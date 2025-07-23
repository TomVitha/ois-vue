import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('light')

    const validThemes = ["light", "dark"];
    const validThemeBases = ["slate", "gray", "zinc", "neutral", "stone"];

    function applyTheme(newTheme: string) {
        // Validate theme
        if (!validThemes.includes(newTheme)) {
            console.error(`Invalid theme "${newTheme}"`);
            return;
        }

        theme.value = newTheme;
        localStorage.setItem("theme", theme.value);
        document.documentElement.setAttribute("data-bs-theme", newTheme);
    }

    function initTheme() {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme && validThemes.includes(storedTheme)) {
            applyTheme(storedTheme);
        } else {
            // Default to system preference
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            applyTheme(systemTheme);
        }
    }

    return { theme, applyTheme, initTheme, validThemes, validThemeBases }
})
