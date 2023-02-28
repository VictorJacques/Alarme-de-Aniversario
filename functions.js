const dia = prompt("Qual o dia do seu aniversário?");
const mes = prompt("Qual o mes do seu aniversário?");
const ano = prompt("Qual o ano atual?");

setInterval(() => {
  const d2 = `${ano}-${mes}-${dia}`;
  const diffInMs = new Date(d2) - new Date();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInMs > 0) {
    if (diffInDays <= 1.999) {
      console.log(`falta ${diffInDays.toFixed(2)} dia`);
    } else {
      console.log(`faltam ${diffInDays.toFixed(2)} dias`);
    }
  } else {
    console.log("Feliz Aniversário");
  }
}, 1000);
