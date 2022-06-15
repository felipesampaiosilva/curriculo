alert("Parabéns, você desbloqueou meu curriculo");
const outrascompetencias = document.querySelector(".db");

var clickBlack = false;
var cont = 0;

function blackMode() {
  cont += 1;

  if (clickBlack === false && cont < 10) {
    $("p, h2, h1, li, hr").css("color", "white");
    $("body").css("background-color", "black");
    clickBlack = true;
  } else if (clickBlack === true && cont < 10) {
    $("body").css("background-color", "white");
    $("p, h2, h1, li, hr").css("color", "black");
    clickBlack = false;
  }

  if (cont === 10) {
    document.getElementById("easter-egg").innerHTML =
      "Parabéns você desbloqueou o SAMOAIO";
    $("body").css("background-color", "pink");
    $("p, h2, h1, li, hr").css("color", "black");
  }
}

function getdata() {
  let url = "/data";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  console.log(xhttp.responseText)
  let data = JSON.parse(xhttp.responseText);

  let html = "";
  data.forEach((element) => {
    html += `<li>${element.outrascompetencias}</li>`;
  });
  outrascompetencias.innerHTML = html;

  // document.getElementById("outrascompetencias").innerText = data.outrascompetencias;
}
getdata();