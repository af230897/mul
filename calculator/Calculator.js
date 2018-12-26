function clearScreen(val)
{
	document.getElementById("text").value=val;
}
function thisValue(val)
{
	document.getElementById("text").value+=val;
}
function doSum() 
{ 
	try 
	{ 
	  clearScreen(eval(document.getElementById("text").value)) 
	} 
	catch(doSum) 
	{
	  clearScreen('Error') 
	} 
}
function remove()
{
	var str;
	str=document.getElementById("text").value;
	str = str.slice(0, -1);
	document.getElementById("text").value=str;	
}
