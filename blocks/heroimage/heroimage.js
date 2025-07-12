document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bajaj-text");
  const title = "Bajaj Technology Services";
  const description =
    "is a part of Bajaj Group conglomerate having a 100-year legacy of innovation and excellence with > $100 Bn market capitalization";

  container.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
});

// const td = document.querySelector(".msmesector div div:nth-child(1)");
// td.setAttribute("colspan", "2");
