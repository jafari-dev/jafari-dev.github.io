const currentJobPeriodElement = document.getElementById("current-job-period");

// Refers to the 1 may of 2023
const currentJobStartDate = new Date(2023, 4, 1, 0, 0, 0, 0);
const now = new Date();

const difference = now.getTime() - currentJobStartDate.getTime();

const months = Math.ceil(difference / (30 * 1000 * 60 * 60 * 24));

currentJobPeriodElement.innerHTML =
  currentJobPeriodElement.textContent + ` (${months + " mos"})`;
