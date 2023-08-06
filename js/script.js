/*function painting(x,y){
    const sum = x+y;
    const dot =x*y;
    console.log(sum);
    alert
};
painting(10,25);*/

function showMessage(from, text) { // параметри: from, text
    alert (from + ': ' + text);
  }
    showMessage('Анна', 'Привіт!'); // Анна: Привіт! (*)
  showMessage('Анна', "Як справи?"); // Анна: Як справи? (**)