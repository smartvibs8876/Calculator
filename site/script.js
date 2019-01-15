var message;
function print(num){
   document.getElementById("oop").textContent+=num;
   message=document.getElementById("oop").textContent;
   
}
/*function printplus(){
   document.getElementById("oop").textContent+="+";
   message=document.getElementById("oop").textContent;
}*/
function evalu(){
	console.log(message);
	var ans=eval(message);
	console.log(ans);
	document.getElementById("oop").textContent=ans;
}
function er()
{
  document.getElementById("oop").textContent="";	
}