function formatDate(dateStr) {
      if (!dateStr) return "";
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateStr).toLocaleDateString("en-US", options);
    }

    function formatDateTime(date) {
      const options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
      return new Date(date).toLocaleString("en-US", options);
    }

    const fromDate = document.getElementById("fromDate");
    const toDate = document.getElementById("toDate");
    const fromText = document.getElementById("fromText");
    const toText = document.getElementById("toText");
    const printBtn = document.getElementById("printBtn");
    const printDates = document.getElementById("printDates");
    const printGenerated = document.getElementById("printGenerated");

    function updateInfoBar() {
      fromText.textContent = formatDate(fromDate.value);
      toText.textContent = formatDate(toDate.value);

      // update header meta info
      printDates.textContent =
        "Report Date Range: " + formatDate(fromDate.value) + " to " + formatDate(toDate.value);
      printGenerated.textContent =
        "Timestamp: " + formatDateTime(new Date());
    }

    fromDate.addEventListener("change", updateInfoBar);
    toDate.addEventListener("change", updateInfoBar);

    printBtn.addEventListener("click", () => {
      updateInfoBar();
      window.print();
    });

    updateInfoBar();
