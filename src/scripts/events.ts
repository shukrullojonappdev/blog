import { toggleDark } from "./methods";

export default function initEvents(variables: any) {
  variables.darkToggler?.addEventListener("change", (e: Event) => {
    const toggler = e.target as HTMLInputElement;
    toggleDark(toggler);
  });
}
