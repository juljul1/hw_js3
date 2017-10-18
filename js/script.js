
function changeBgColor() {
    var el = document.querySelectorAll('p');
  for(var i=0; i<el.length; i++){
    el[i].style.background = 'red';
  }
  }

changeBgColor();

function addShadow() {
    var elem = document.querySelectorAll('img');
  for(var i=0; i<elem.length; i++){
    elem[i].style.boxShadow = "5px 5px 5px blue";
  }
  }

addShadow();

function addNumber() {
    var elem = document.querySelectorAll('p');
  for(var i=0; i<elem.length; i++){
    elem [i].innerHTML = i+1 + '. ' + elem [i].innerHTML;
  }
  }

addNumber();

count = 0;

function clickCounter () {
  var span = document.getElementById('span');
  count++;
  span.innerHTML = 'Summ: ' + count;
  }

res = 0;
mathpower.onclick = function mathPow (){
  var num = document.querySelector('#numb').value;
  var pow = document.querySelector('#pow').value;
  if (isNaN(num) || isNaN(pow)) {
    alert("Please, enter a number!");
  }
  else{
  res = Math.pow (num, pow);
  alert(res);
  }
}

underline.onclick = function (){
  
  var val = document.getElementById('tag').value;
    if (!isNaN(+val) || val == undefined) {
     alert ("It's not a tag name!");
    }
    else{
      var tag = document.querySelectorAll(val); 
        if (tag.length == 0) {
              alert('Tag is not exist!');
            }
       else{         
          for(var i=0; i<tag.length; i++){
            tag[i].style.textDecoration = "underline";
            }
}}}

countage.onclick = function (){
  var age = document.getElementById('age').value;
    if (isNaN(age) || age == 'undefined' || age == '') {
      alert('Please, enter your age');
    }
    else if(age <= 16){
       alert('You are too yung') ;
    }
    else{
        alert('Welcome');
    }
  }

  var myArray = [1, 2, 3, 4, 5];
  neww.innerHTML = '#9. Array: ' + myArray;
  calcLength(myArray);

  push.onclick = function(){
  var addValue = value.value;
  
    if (addValue == ''){
           alert("Введите значение во второе поле");
           }
    else {
        myArray.push(addValue);
        neww.innerHTML = '#9. ' + 'Массив: ' + myArray;
        calcLength(myArray);
      }
}
popp.onclick = function(){
  if (myArray == ''){
      neww.innerHTML = "Массив пуст";
      calcLength(myArray);
           }
  else {
    myArray.pop();
    neww.innerHTML = '#9. ' + 'Массив: ' + myArray;
    calcLength(myArray);
      }
}
  
function calcLength(arr){
  var sum = 0;
  var res = document.getElementById('arrlength');
  sum = arr.length;
    if (res == '') {
      alert('error!');
    }
    else{
  res.innerHTML = 'Arr length: ' + sum;
}}


domath.onclick = function (){
  var userNum = document.getElementById('math').value;
  var counter = 0;
  var mathRes = document.getElementById('resusernum');
  console.log(userNum);
    if (isNaN(userNum) || userNum == 'undefined' || userNum == '') {
      alert('Please, enter number');
      console.log(userNum);
    }
    else if(userNum >= 10){
       counter = Math.pow(userNum,2) ;
       mathRes.innerHTML = 'Number is ' + counter;
    }
    else if (userNum <= 7){
       mathRes.innerHTML = 'Number is less than 7.';
    }
    else if (userNum <= 9){
       mathRes.innerHTML = 'Number is ' + (userNum-1);
    }
    else{
      mathRes.innerHTML = 'Number is ' + userNum;
    }
  }

  window.onload = function(){
    rundomNum = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    console.log(rundomNum);
  }
  
  trys = 0;
  gess.onclick = function(){
    var userGess = document.getElementById('usergess').value;
    var compare = document.getElementById('compareres');
    var clickBut = document.getElementById('gess');
      trys++;
        if (trys <= 3) {
          if (isNaN(userGess) || userGess == '') {
             alert('Please enter a number');
          }
          else if (userGess == rundomNum) {
             compare.innerHTML = 'Correct!';
             }
          else if (userGess > rundomNum){
            compare.innerHTML = 'Sorry! Your number is bigger than needed. You have ' + (3-trys) + ' more trys.';
            }
          else {
            compare.innerHTML = 'Sorry! Your number is less than needed. You have ' + (3-trys) + ' more trys.';
            }
          } 
          else if(trys = 4){
            compare.innerHTML = 'Sorry! You have no more trys.';
            var displ = document.getElementById('again');
            displ.style.display = 'inline-block';
              displ.onclick = function()
              {
               window.location.reload(true);
             }
          }
  }