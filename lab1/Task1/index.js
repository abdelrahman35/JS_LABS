var userAnswer = prompt("please enter a word");
for (let i = 0; i < 6; i++) {
  document.write(`<h${i}>${userAnswer}</h${i}>`);
}
