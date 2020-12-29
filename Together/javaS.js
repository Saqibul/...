var quotes = ["\“You must be the change you wish to see in the world.\” — Gandhi",
  "\“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.\” — Albert Einstein",
  "\“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.\” — George Bernhard Shaw",
  "\“He who fears he will suffer, already suffers because he fears.\” — Michel De Montaigne",
  "\“We think sometimes that poverty is only being hungry, naked and homeless. The poverty of being unwanted, unloved and uncared for is the greatest poverty.\” — Mother Theresa",
  "\“Love is a verb. Love — the feeling — is a fruit of love, the verb.\” — Stephen Covey",
  "\“Life is really simple, but we insist on making it complicated.\” — Confucius",
  "\“If you don’t like something, change it. If you can’t change it, change the way you think about it.\” — Mary Engelbreit",
  "\“In seeking happiness for others, you will find it in yourself.\” — Unknown",
  "\“God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.\” — Reinhold Niebuhr",
  "\“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\” — Bill Keane"]


function quoteGen() {
  var randomnumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomnumber];
}


function changeColour(colour, number) {
  document.getElementById('quoteDisplay').style.backgroundColor = colour;
  if (number == 1) {
    document.getElementById('quoteDisplay').style.fontStyle = 'italic';
  } else if (number == 2) {
    document.getElementById('quoteDisplay').style.fontStyle = 'normal';
  } else if (number == 3) {
    document.getElementById('quoteDisplay').style.fontStyle = 'italic';
  } else if (number == 4) {
    document.getElementById('quoteDisplay').style.fontStyle = 'normal';
  }
}

function convert(input) {
  var val = document.getElementById('myText').value;
  if (input == 1) {
    console.log(val * 0.4536);
    document.getElementById('showAnswer').innerHTML = (val * 0.4536) + " kilograms";

  } else if(input == 2){
    console.log(val * 2.2046);
    document.getElementById('showAnswer').innerHTML = (val * 2.2046) + " pounds";
  }
}


function selection() {
  document.getElementById('selectOptions').classList.toggle("show");
}


//if you click somewhere else on the screen, the dropdown fades
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function part2() {
  var input = document.getElementById('inputSeries').value;
  var splitinput = input.split(",");
  var test = splitinput.map((i) => Number(i));
  test = bubbleSort(test);
  document.getElementById('min').innerHTML = test[0];
  document.getElementById('max').innerHTML = test[test.length - 1];
  document.getElementById('sum').innerHTML = sum(test);
  document.getElementById('avg').innerHTML = average(sum(test), test.length);
  document.getElementById('reverse').innerHTML = reversed(splitinput);
}


//https://github.com/rajatk16/javascript-sort/blob/master/bubbleSort.js
bubbleSort = (array) => {
  let swapped = false
  do {
    swapped = false
    array.forEach((current, i) => {
      console.log(array.join(' '))
      if (current > array[i + 1]) {
        const temp = current
        console.log(array.join(' '))

        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    })
  } while (swapped)
  console.log(array.join(' '))
  return array
}


function sum(arr) {
  var sum1 = 0;
  for (var i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  return sum1;
}


function average(val, len) {
  return (val / len);
}


function reversed(arr) {
  var newarr = []
  var j = 0;
  for (var i = arr.length - 1; i >= 0; i--, j++) {
    newarr[j] = arr[i];
  }
  return newarr;
}
var field=0;

function capitalize(){
  var input=document.getElementById('magictext').value;
  if(field==0){
    document.getElementById('magictext').value=input.toUpperCase();
    field=1;
  }else{
    document.getElementById('magictext').value=input.toLowerCase();
    field=0;
  }
  console.log(field);
}


function sorted(){
  var input=document.getElementById('magictext').value;
  var splitinput = input.split("\n");
  splitinput=splitinput.sort();
  newarr=[];
  var k=0;
  for(i in splitinput){
    if(splitinput[i]!=''){
      newarr[k]=splitinput[i]
      k++;
    }
  }
  document.getElementById('magictext').value=newarr.join("\n");
}


function reverse(){
  var input=document.getElementById('magictext').value;
  var splitinput=input.split("\n");
  newarr=[]
  for(i in splitinput){
    newarr[i]=splitinput[i].split("").reverse().join("");
  }
  document.getElementById('magictext').value=newarr.join("\n");
}


function stripBlank(){
  var input=document.getElementById('magictext').value;
  var splitinput = input.split("\n");
  newarr=[];
  var k=0;
  for(i in splitinput){
    if(splitinput[i]!=''){
      newarr[k]=splitinput[i]
      newarr[k]=newarr[k].trim();
      k++;
    }
  }
  document.getElementById('magictext').value=newarr.join("\n");
}


function addNo(){
  var input=document.getElementById('magictext').value;
  var splitinput=input.split("\n");
  for(var i=0;i<splitinput.length;i++){
    var j=i+1;
    splitinput[i]=String(j)+'.'+splitinput[i];
  }
  document.getElementById('magictext').value=splitinput.join("\n");
}


function shuffle(){
  var input=document.getElementById('magictext').value;
  var splitinput=input.split("\n");
  console.log(Math.random()-0.5)
  splitinput.sort(()=>Math.random()-0.5);
  document.getElementById('magictext').value=splitinput.join("\n");
}

