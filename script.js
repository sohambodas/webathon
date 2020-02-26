let mark=0;

function indexdial()
{	document.getElementById("pop").style.display="block";
}
function indexundial()
{	document.getElementById("pop").style.display="none";
}
function right()
{
	mark+=1;
	console.log(mark);
	document.getElementById("right").style.display="block";
}	
function wrong()
{
	document.getElementById("wrong").style.display="block";
}	
function wrongundial()
{	document.getElementById("wrong").style.display="none";
}
function rightundial()
{	document.getElementById("right").style.display="none";
}
function scorepop()
{
	document.getElementById("scorepop").style.display="block";
	let var2=document.getElementById("sc");
	let ans = var2.value;
	console.log(var2);
	
	document.getElementById("score").innerHTML="The score is " + var2;
}
function scoreunpop()
{
	document.getElementById("scorepop").style.display="none";
	
}