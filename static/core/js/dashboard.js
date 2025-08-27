    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
    });

    // Close sidebar if overlay is clicked
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });

    const offeringsData = {
        "2025-08-01": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
         "2025-08-02": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
        "2025-08-03": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
        "2025-08-04": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-05": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-06": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-07": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-08": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-09": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-10": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ],
          "2025-08-11": [
            { title: "Tithe", amount: 120, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Prophetic Offering", amount: 320, change: -2.5, color: "purple", icon: "fas fa-donate" },
            { title: "Special Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Security Offering", amount: 485, change: 3.4, color: "green", icon: "fas fa-users" },
            { title: "Maintainance Offering", amount: 440, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Gigbare Offering", amount: 965, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
            { title: "Alabiye Offering", amount: 700, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Breakthrough Encounter Offering", amount: 70, change: 1.2, color: "pink", icon: "fas fa-wallet" },
            { title: "Artisan and Trader Offering", amount: 40, change: -0.7, color: "teal", icon: "fas fa-church" },
            { title: "Deliverance Hour Offering", amount: 60, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Pregnant Women and Nursing Mother Offering", amount: 600, change: -1.1, color: "orange", icon: "fas fa-hand-holding-usd" },
            { title: "Friday Vigil Offering", amount: 905, change: 2.8, color: "blue", icon: "fas fa-chart-line" },
        ]
    };

    const cardsContainer = document.getElementById("cards-container");
    const datePicker = document.getElementById("datePicker");

    function renderCards(dateKey) {
        cardsContainer.innerHTML = "";
        if (!offeringsData[dateKey]) {
            cardsContainer.innerHTML = "<p>No data for this date.</p>";
            return;
        }
        offeringsData[dateKey].forEach(item => {
            const changeClass = item.change >= 0 ? "up" : "down";
            const changeSymbol = item.change >= 0 ? "▲" : "▼";
            cardsContainer.innerHTML += `
                <div class="card ${item.color}">
                    <div class="card-icon"><i class="${item.icon}"></i></div>
                    <div class="card-title">${item.title}</div>
                    <strong class="amount">$${item.amount}</strong>
                    <div class="card-change ${changeClass}">
                        ${changeSymbol} ${Math.abs(item.change)}% <small>vs last period</small>
                    </div>
                </div>
            `;
        });
    }

    const trendCtx = document.getElementById('givingTrend').getContext('2d');
    const typeCtx = document.getElementById('givingType').getContext('2d');
    let trendChart = new Chart(trendCtx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Giving', data: [], borderColor: '#6366f1', backgroundColor: '#6366f1', fill: false, tension: 0.3 }] },
        options: { plugins: { legend: { display: false } } }
    });
    let typeChart = new Chart(typeCtx, {
        type: 'pie',
        data: { labels: [], datasets: [{ data: [], backgroundColor: ['#f97316', '#10b981', '#6366f1'] }] }
    });

    function updateCharts(dateKey) {
        if (!offeringsData[dateKey]) return;
        const amounts = offeringsData[dateKey].map(o => o.amount);
        trendChart.data.labels = offeringsData[dateKey].map(o => o.title);
        trendChart.data.datasets[0].data = amounts;
        trendChart.update();

        typeChart.data.labels = offeringsData[dateKey].map(o => o.title);
        typeChart.data.datasets[0].data = amounts;
        typeChart.update();
    }

    datePicker.addEventListener("change", () => {
        const selectedDate = datePicker.value;
        localStorage.setItem("lastDate", selectedDate);
        renderCards(selectedDate);
        updateCharts(selectedDate);
    });

    // Determine last pushed date (latest in offeringsData)
    const allDates = Object.keys(offeringsData).sort();
    const latestDate = allDates[allDates.length - 1];

    // Load saved date or latest date if first time
    const savedDate = localStorage.getItem("lastDate") || latestDate;
    datePicker.value = savedDate;
    renderCards(savedDate);
    updateCharts(savedDate);