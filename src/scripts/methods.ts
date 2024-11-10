export function initDark(isDark: boolean, darkToggler: HTMLInputElement) {
  document.documentElement.classList.toggle("dark", isDark);
  isDark ? (darkToggler.checked = true) : (darkToggler.checked = false);
}

export function toggleDark(e: HTMLInputElement) {
  localStorage.theme = e.checked ? "dark" : "light";
  document.documentElement.classList.toggle("dark", e.checked);
}
