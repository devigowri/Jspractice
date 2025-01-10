function shownum(){
    alert("hitted");
    var x = document.getElementById("id1").value;
     document.getElementById("id2").innerHTML=x;
   
    
}
console.log("gowri");

function summa(){
    console.log("just callig");
}
summa();

var amount = 1000;
console.log("you balance is "+ amount);
function changestring()
{
 var num = 1;
 console.log(num.toString());
}
changestring();

function checkprime(num)
{
    for(i =1;i<=10;i++) 
        {
            for(j=1;j<=10;j++)
                {
                    if(i % j==0)
                        {
                            console.log("the given num is prime"+i);
                        }
                        else{
                            console.log("the given num is not"+i);
                        }
                }   
                }
            
}

checkprime(6);

a=5;
a+=5;
console.log(a); 

a**=2;
console.log(a);

a%=3;
console.log(a);

typeof(a)
x=3;
y=5;
console.log(x^y);
var name = prompt("what's your name!");
alert("my name is "+ name);



console.log(str.padEnd(10,'2'))

function practicearray()
{
    debugger;
    var x = [1,2,3,4];
    var y= x.push(7);
    //console.log(x).value;
    var result= document.getElementById("lblresult");
    result.textContent=x; // TEXTCONTENT=> text will be converted in string.while using array .


}

function HandleTwwodifferentbtn(event)
{
    debugger;
    var clickbutton = event.target;
    var x = [1,2,3,4 [4,6,7,8]];    
    let y = [[1,5,7],[5,7,9],[7,7,4]];
    //console.log(x).value;
    if(clickbutton.id =="btn1")
    {
    var result= document.getElementById("lblresult");
    result.textContent=x;
    }
    else
    {
        
        var result= document.getElementById("lblresult");
        result.textContent=y;
    }
    
    
}