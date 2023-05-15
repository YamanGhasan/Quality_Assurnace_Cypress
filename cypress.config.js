const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Listen to the "uncaught:exception" event
      on("uncaught:exception", (err, runnable) => {
        // Handle the exception or perform custom actions
        console.error("Uncaught Exception:", err.message);
        // You can also take a screenshot or perform other actions here

        // Return false to prevent the default behavior of failing the test
        return false;
      });
    },
  },
});
