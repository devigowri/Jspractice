function convertor(){
 
var x= Number(document.getElementById("txtid").value);
var y = x/2.54 
let result = document.getElementById("lblresult");
result.innerHTML = y;
}

function ToFer()
{
    var x= Number(document.getElementById("txtid").value);
    var y = (x * 9/5) + 32
    let result= document.getElementById("lblresult");
    result.innerHTML=y;
}

function stringfunction()
{
     
    var x= (document.getElementById("txtid").value);
    debugger;
     let y = x.slice(2,5);
     let result= document.getElementById("lblresult");
     result.innerHTML=y;
}

function clickndview(){
    var xy=document.getElementById("btnviewx");
    var yz=document.getElementById("btnviewy")
    debugger; 
    if (xy.style.display === "none" && (yz && yz.style.display === "none")) {
        xy.style.display = "block";
        yz.style.display = "block"; 
      } else {
        xy.style.display = "none";
        yz.style.display="none";
      }
}

function pdstartandend(){
  var x= document.getElementById("txtid").value;
  x.pdEnd(5,0);
}

function Findrandomletter()
{
  debugger;
  let x = document.getElementById("txtid").value;
  let y = x.charAt(Math.floor(Math.random()*x.length));
  let result= document.getElementById("lblresult");
  result.innerHTML=y;
}

function FindranomNumber()
{
  debugger;
  let x=document.getElementById("txtid").value;
  let y = Math.floor(Math.Number)*18 ;
  let z=document.getElementById("txtid");
  result.innerHTML=z;
}

//Character Literals
function TemplateLiterals(){
  debugger;
var FirstName ="Gowridevi"
var Msg = "you have 5items in your cart. Your bill amount is $95";
var result = `${FirstName} ${Msg}`;
let resultx= document.getElementById("lblresult");
resultx.innerHTML=result;
}

//Arrays
// user to store a valur in array by usuing [].but by call the array by using()

var x=[1,2,3,4,5]
console.log(x);
console.log(x.length);
console.log(x[2])// to find element in 2nd index
//To store strings

let cities =['chennai','coimbatore','madurai','salem']
console.log(cities.length);
console.log(cities[3]);

//2D array
let Names =['Gowri','devi','Prabu',[1,2,'g']];
console.log[Names[1][3]] //it tells that show the 2nd array's 3rd element
console.log[Names[0][2]]// it tells that show the 1st array's 2nd element

//3D array
let threedarray =[1,5,6,"gowri",[65.67,54.78,34,'prabu'],['g','h','i','k']]
console.log(threedarray[1][4]);// it show the result as "undefined". because there is no 4th element
