document.getElementById("button1").addEventListener("click", Cal);

document.getElementById("button2").addEventListener("click", EraseCal);

var subjectList = document.getElementById("subjects");

subjectList.addEventListener("click", function (e) {
  subject = e.target.innerHTML;
});

function Cal() {
  var n1 = document.getElementById("nota1").value;
  var n2 = document.getElementById("nota2").value;
  var n3 = document.getElementById("nota3").value;

  var n1 = parseFloat(n1);
  var n2 = parseFloat(n2);
  var n3 = parseFloat(n3);

  var mediaP = (n1 + n2 + n3) / 3;

  mediaP = mediaP.toFixed(1);

  mediaP = parseFloat(mediaP);

  if (n1 > 10 || n2 > 10 || n3 > 10) {
    swal("Opa!", "Somentes notas menores que 10,0.", "warning");
  }

  if (mediaP >= 7 && !(n1 > 10) && !(n2 > 10) && !(n3 > 10)) {
    swal(
      "Parabéns!, você está aprovado(a)!",
      "Sua média em " + subject + " é de " + mediaP + ".",
      "success"
    );
  } else if (mediaP < 3) {
    swal(
      "Infelizmente, você reprovou",
      "Infelizmente sua média em " + subject + " é de apenas " + mediaP,
      "error"
    );
  }

  switch (mediaP) {
    /*Nota 3 pra cima*/

    case 3.0:
      swal("Você precisa tirar 9.7 pontos na final de " + subject, "");
      break;
    case 3.1:
      swal("Você precisa tirar 9.5 pontos na final de " + subject, "");
      break;
    case 3.2:
      swal("Você precisa tirar 9.2 pontos na final de " + subject, "");
      break;
    case 3.3:
      swal("Você precisa tirar 9.0 pontos na final de " + subject, "");
      break;
    case 3.4:
      swal("Você precisa tirar 8.8 pontos na final de " + subject, "");
      break;
    case 3.5:
      swal("Você precisa tirar 8.5 pontos na final de " + subject, "");
      break;
    case 3.6:
      swal("Você precisa tirar 8.3 pontos na final de " + subject, "");
      break;
    case 3.7:
      swal("Você precisa tirar 8.1 pontos na final de " + subject, "");
      break;
    case 3.8:
      swal("Você precisa tirar 7.8 pontos na final de " + subject, "");
      break;
    case 3.9:
      swal("Você precisa tirar 7.6 pontos na final de " + subject, "");
      break;
    /*Nota 4 pra cima*/

    case 4.0:
      swal("Você precisa tirar 7.4 pontos na final de " + subject, "");
      break;
    case 4.1:
      swal("Você precisa tirar 7.1 pontos na final de " + subject, "");
      break;
    case 4.2:
      swal("Você precisa tirar 6.9 pontos na final de " + subject, "");
      break;
    case 4.3:
      swal("Você precisa tirar 6.7 pontos na final de " + subject, "");
      break;
    case 4.4:
      swal("Você precisa tirar 6.4 pontos na final de " + subject, "");
      break;
    case 4.5:
      swal("Você precisa tirar 6.2 pontos na final de " + subject, "");
      break;
    case 4.6:
      swal("Você precisa tirar 6.0 pontos na final de " + subject, "");
      break;
    case 4.7:
      swal("Você precisa tirar 5.7 pontos na final de " + subject, "");
      break;
    case 4.8:
      swal("Você precisa tirar 5.5 pontos na final de " + subject, "");
      break;
    case 4.9:
      swal("Você precisa tirar 5.3 pontos na final de " + subject, "");
      break;

    /*Nota 5 pra cima*/

    case 5.0:
      swal("Você precisa tirar 5.0 pontos na final de " + subject, "");
      break;
    case 5.1:
      swal("Você precisa tirar 4.8 pontos na final de " + subject, "");
      break;
    case 5.2:
      swal("Você precisa tirar 4.6 pontos na final de " + subject, "");
      break;
    case 5.3:
      swal("Você precisa tirar 4.3 pontos na final de " + subject, "");
      break;
    case 5.4:
      swal("Você precisa tirar 4.1 pontos na final de " + subject, "");
      break;
    case 5.5:
      swal("Você precisa tirar 3.9 pontos na final de " + subject, "");
      break;
    case 5.6:
      swal("Você precisa tirar 3.6 pontos na final de " + subject, "");
      break;
    case 5.7:
      swal("Você precisa tirar 3.4 pontos na final de " + subject, "");
      break;
    case 5.8:
      swal("Você precisa tirar 3.2 pontos na final de " + subject, "");
      break;
    case 5.9:
      swal("Você precisa tirar 2.9 pontos na final de " + subject, "");
      break;

    /*Nota 6 pra cima*/

    case 6.0:
      swal("Você precisa tirar 2.7 pontos na final de " + subject, "");
      break;
    case 6.1:
      swal("Você precisa tirar 2.5 pontos na final de " + subject, "");
      break;
    case 6.2:
      swal("Você precisa tirar 2.2 pontos na final de " + subject, "");
      break;
    case 6.3:
      swal("Você precisa tirar 2.0 pontos na final de " + subject, "");
      break;
    case 6.4:
      swal("Você precisa tirar 1.8 pontos na final de " + subject, "");
      break;
    case 6.5:
      swal("Você precisa tirar 1.5 pontos na final de " + subject, "");
      break;
    case 6.6:
      swal("Você precisa tirar 1.3 pontos na final de " + subject, "");
      break;
    case 6.7:
      swal("Você precisa tirar 1.1 pontos na final de " + subject, "");
      break;
    case 6.8:
      swal("Você precisa tirar 0.8 pontos na final de " + subject, "");
      break;
    case 6.9:
      swal("Você precisa tirar 0.6 pontos na final de " + subject, "");
      break;
  }
}

function EraseCal() {
  document.getElementById("media-here").innerHTML = "";
  document.getElementById("nota-final").innerHTML = "";
  document.getElementById("fname").innerHTML = "";
  document.getElementById("campi").innerHTML = "";
}
