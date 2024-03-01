function initializeThemeSwitcher(configuration) {
    const defaultConfig = {
    triggerButtonID: "toggle",
    darkThemeClass: "dark-theme",
    themeLocalStorageID: "theme",
    onChangeTheme: () => {}
    };

const options = Object.assign(defaultConfig, configuration);
let activeTheme = "light";
const triggerButton = document.getElementById(options.triggerButtonID);

function onChangeThemeHandler() {
    const { onChangeTheme } = options;

    if (onChangeTheme) {
        return onChangeTheme(activeTheme);
    }
}

function setDarkTheme() {
    localStorage.setItem(options.themeLocalStorageID, "dark");
    activeTheme = "dark";
    document.documentElement.classList.add(options.darkThemeClass);
    onChangeThemeHandler();
    }

function setLightTheme() {
    localStorage.setItem(options.themeLocalStorageID, "light");
    activeTheme = "light";
    document.documentElement.classList.remove(options.darkThemeClass);
    onChangeThemeHandler();
    }

function applyCurrentTheme() {
    setLightTheme();
    
    if (localStorage.getItem(options.themeLocalStorageID) !== null) {
        activeTheme = localStorage.getItem(options.themeLocalStorageID);
        activeTheme === "light" ? setLightTheme() : setDarkTheme();
    }
    }

function switchThemeHandler() {
    triggerButton.addEventListener("change", () => {
        activeTheme === "light" ? setDarkTheme() : setLightTheme();
    });
    }

    applyCurrentTheme();
    switchThemeHandler();
}

initializeThemeSwitcher();
