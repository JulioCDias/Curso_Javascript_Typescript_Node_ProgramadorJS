/*
janeiro
fevereiro
março
abril
maio
junho
julho
agosto
setembro
outubro
novembro
dezembro
*/

const mes = 12;
let mesNome = "";
switch (mes) {
    case 1:
        mesNome = "janeiro";
        break;
    case 2:
        mesNome = "fevereiro";
        break;
    case 3:
        mesNome = "março";
        break;
    case 4:
        mesNome = "abril";
        break;
    case 5:
        mesNome = "maio";
        break;
    case 6:
        mesNome = "junho";
        break;
    case 7:
        mesNome = "julho";
        break;
    case 8:
        mesNome = "agosto";
        break;
    case 9:
        mesNome = "setembro";
        break;
    case 10:
        mesNome = "outubro";
        break;
    case 11:
        mesNome = "novembro";
        break;
    case 12:
        mesNome = "dezembro";
        break;
    default:
        mesNome = "mes inválido";
        break;
}
console.log(mesNome);