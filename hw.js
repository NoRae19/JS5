//task1 start

let name = prompt('Введите своё имя');
let bdyr = +prompt('Введите свой год рождения');
let year = +prompt('Введите текущий год');

let calcAge = function(name, bdyr, year) {
    let age = year - bdyr
    return(name + ', ' + ' Ваш возраст: ' + age)
}

console.log(calcAge(name, bdyr, year));
//task1 complete


//task2 start
function GenRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function GenRanOper() {
    var operators = ["+", "-", "*", "/"];
    var randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  }
  
  function calculateResult(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return NaN;
    }
  }
  
  function GenMathProb(numProblems) {
    for (var i = 0; i < numProblems; i++) {
      var num1 = GenRanNum(1, 10);
      var num2 = GenRanNum(1, 10);
      var operator = GenRanOper();
      var problem = num1 + " " + operator + " " + num2;
      var userAnswer = parseInt(prompt("Решите пример: " + problem));
      var correctAnswer = calculateResult(num1, num2, operator);
  
      if (userAnswer === correctAnswer) {
        alert("Ваш ответ верный!");
      } else {
        alert("Ваш ответ неверный! Правильный ответ: " + correctAnswer);
      }
    }
  }
  
  var numProblems = parseInt(prompt("Введите количество примеров:"));
  GenMathProb(numProblems);
//rask2 complete
