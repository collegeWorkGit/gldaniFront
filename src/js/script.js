import { tableConfig } from "./tableConfig.js";
import { initializeExamConfig } from "./examConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  tableConfig();

  initializeExamConfig("javascript", "#js-exams details");
  initializeExamConfig("markup", "#markup-exams details");
  initializeExamConfig("tailwindCss", "#tailwind-exams details");
});
