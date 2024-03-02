const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
} else {
    toggle.style.background = "linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)";
    toggle.style.boxShadow = "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        toggle.style.background = "linear-gradient(180deg, #4f2ee8 0%, #dcdcdc 100%)";
        toggle.style.boxShadow = "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)";
        return localStorage.setItem("mode", "light");
    } else {
        toggle.style.background = "linear-gradient(180deg, #4f2ee8 0%, #686868 100%)";
        toggle.style.boxShadow = "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)";
        localStorage.setItem("mode", "dark");
    }
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
