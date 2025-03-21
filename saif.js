//1 Reverse a String

function inverse(chaine) {
    var a = "";
    for (var i = chaine.length - 1; i >= 0; i--) {
      a += chaine[i];
    }
    return a
  }
  
  console.log(inverse('Hello'))

//2 Count Characters

function compterCaracteres(chaine) {
    return chaine.length;
  }
  
  console.log(compterCaracteres('hhhh'))

//3 Capitalize Words

function CapitalizeWords(word){
    var newWord = word[0].toUpperCase()
    
    for( var i = 1 ; i < word.length; i ++){
      if(word[i-1] == ' '){
        newWord += word[i].toUpperCase()
      }else{
        newWord += word[i]
      }
    }
    return newWord
  }
  
  
  console.log(CapitalizeWords('hello si haithem'))


//4 Find Maximum and Minimum

function minetmax(tableau){

var max = tableau[0]
var min = tableau[0]

for (var i = 0; i < tableau.length; i++) {
  if (tableau[i] > max) {
    max = tableau[i]
  }

  if (tableau[i] < min) {
    min = tableau[i]
  }
  
}
  return [min, max]
}

console.log(minetmax([5,4,1,2]))

//5 Sum of Array

function som(tab){
    sum = 0
    for (var i = 0; i < tab.length; i++) {
      sum = sum + tab[i]
      
    }
  
    return (sum)
  }
  
  console.log(som([2,4,3]))

//6 Filter Array

function filterArray(arr, saif) {

    var a = []
  
    for (var i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) == saif) {
  
        a.push(arr[i])
      }
    }
  
    return a
  
  }
  
  console.log(filterArray([7,"a","5ee",9],"string"))

  //7 Factorial

  function Factorial(num){
    var resultat = 1
  
    for(var i = 1; i<= num; i++){
      resultat *= i
    }
  
    return resultat
  }
  
  console.log(Factorial(5))

  //8 Prime Number Check

  function Prime(num){

    var verif = 0
  
    for(var i = 2; i<num;i++){
      if(num % i == 0){
        verif ++
        break
      }
    }
  
    if(verif == 0){
      return 'Prime'
    }else{
      return 'Not Prime'
    }
  
  }
  console.log(Prime(17))

// 9 Fibonacci Sequence

function fibonacciSeries(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
  
  console.log(fibonacciSeries(8)); 