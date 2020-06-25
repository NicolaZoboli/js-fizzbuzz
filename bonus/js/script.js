var fizzbuzz = document.getElementById("fizzBuzzList");

for (var i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    fizzbuzz.innerHTML += "<li class='fizzBuzz'>" + "FizzBuzz" + "</li>";
  } else if (i % 3 == 0) {
    fizzbuzz.innerHTML += "<li class='fizz'>" + "Fizz" + "</li>";
  } else if (i % 5 == 0) {
    fizzbuzz.innerHTML += "<li class='buzz'>" + "Buzz" + "</li>";
  } else {
    fizzbuzz.innerHTML += "<li class='number'>" + i + "</li>";
  }
}
