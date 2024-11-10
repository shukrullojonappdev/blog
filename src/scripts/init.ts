import * as variables from "./variables";
import { initDark } from "./methods";
import initEvents from "./events";

(() => {
  initDark(variables.isDark, variables.darkToggler);
  initEvents(variables);
})();
