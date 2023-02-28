setInterval(() => {
  const d2 = "2023-02-30";
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
