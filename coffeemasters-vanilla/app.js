import Store from "./service/Store.js";
import { loadData } from "./service/Menu.js";

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
});
