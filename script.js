const polarChart = document.getElementById("krofna");

new Chart(polarChart, {
  type: "polarArea",
  data: {
    labels: ["Eth", "Bitcoin", "USDT", "USDC", "BNB", "XRP", "Others"],
    datasets: [
      {
        label: "Kriptovalute",
        data: [17.4, 41.6, 6.1, 4, 3.4, 1.5, 25.1],
        backgroundColor: [
          "rgba(52, 235, 143, 1)",
          "rgba(52, 153, 235, 1)",
          "rgba(235, 52, 119, 1)",
          "rgba(52, 153, 170, 1)",
          "rgba(65, 2, 219, 1)",
          "rgba(44, 77, 19, 13)",
          "rgba(235, 522, 4, 1)",
        ],
      },
    ],
  },
});
