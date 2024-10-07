const NAME = "Fatmah Al Hamad"
function printName() {
  console.log(NAME);
}

printName();

const birthYear = 2002;
const AGE = 2024 - birthYear;
function printAge(birthYear) {
  console.log(AGE);
}

printAge(birthYear);

function printAgeAndName(NAME, birthYear) {
  console.log(`Hello ${NAME} you are ${AGE} years old`)
}

printAgeAndName(NAME, birthYear);

function printHello(LANGUAGE, NAME) {
  if (LANGUAGE === "en") console.log(`Hello ${NAME}`);
  else if (LANGUAGE === "es") console.log(`Hola ${NAME}`);
  else if (LANGUAGE === "fr") console.log(`Bonjour ${NAME}`);
  else if (LANGUAGE === "tr") console.log(`Merhaba ${NAME}`);

}

printHello("fr", NAME);

const num1 = 3;
const num2 = 6;

function printMax(num1, num2) {
  if (num1 > num2) console.log(`${num1}`)
  else console.log(`${num2}`)
}
printMax(num1, num2);