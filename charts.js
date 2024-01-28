var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "# of Votes",
        data: [1200, 1900, 3000],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    resposive: true,
  },
});

var ctx2 = document.getElementById("myChart-2").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      " May",
      " June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "and December",
    ],
    datasets: [
      {
        label: "Earning ",
        data: [
          8200, 1000, 3000, 7000, 2000, 1503, 5602, 8005, 5204, 1007, 10005,
          6052,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    resposive: true,
  },
});
