// alert("я подключился ")
// let number = 5
// alert( number)
// let number1 = 1 
// let number2 = 3
//  alert ( number1 + number2)

//  function sum(a,b){
//     return alert(a+b)
//  }
//  sum(3,5)
//  sum (number1,number2)

function sum() {
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = Number(a) + Number(b)
    result.innerHTML = "Результат " + c
}
function minus(){
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = Number(a) - Number(b)
    result.innerHTML = "Результат " + c   
}
function multiply(){
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = Number(a) *  Number(b)
    result.innerHTML = "Результат " + c     
}
  function division(){
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = Number(a) /  Number(b)
    result.innerHTML = "Результат " + c    
  }
  function exponentiation(){
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = Number(a) ** Number(b)
    result.innerHTML = "Результат " + c   
  }
  function division(){
    let a = document.getElementsByName("a")[0].value
    let b = document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c 
    if( b==0){
      c='На ноль делить нельзя'
    }else{
      c= Number(a) /  Number(b)
    }
    result.innerHTML = "Результат " + c    
  }


function codeCountry() {
  let codeResult = document.getElementById('code_result');
  let country = document.getElementById('country');

  if(country == 'uz') {
    codeResult.placeholder = `+998 93`
  }
}

function courseSale(){
  const courseName = document.getElementById("courseName").value
  const PYTHON_PRICE = 12000000;
  const FRONTEND_PRICE = 14000000;
  const UX_UI_PRICE = 9000000;
  let price;
if (courseName = "none") {
  price = 0;
}else if(courseName)
}

function sum(a,b)