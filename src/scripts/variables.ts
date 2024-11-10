const isDark =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);
const darkToggler = document.getElementById("darkToggler") as HTMLInputElement;
const langChange = document.getElementById("langChange");
import LangSwitcher from "../components/langSwitcher.astro";

export { isDark, darkToggler, langChange, LangSwitcher };
