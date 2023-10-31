import "./commands";
import "./commands/utils";
import "@bahmutov/cy-api";

import addContext from "mochawesome/addContext";

after(() => {
  // Add a 3-second delay at the end of each video to see the final result clearly
  cy.wait(3000);
});

Cypress.on(
  /* eslint-disable no-unused-vars */
  "uncaught:exception",
  (
    _err,
    _runnable // eslint-disable-line no-unused-vars
  ) => false
);

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }

  const video = `videos/${Cypress.spec.name}.mp4`;
  addContext({ test }, video);
});

Cypress.on("after:spec", (test, runnable) => {
  const video = `videos/${Cypress.spec.name}.mp4`;
  addContext({ test }, video);
});
