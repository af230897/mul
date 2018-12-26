function multiplication()	
{
	var num=document.getElementById("text").value;
	var i;

	if(num=="")
	{
		document.getElementById("printHere").innerHTML="Please Enter value";
	}
	else if (num>=0) 
	{
		document.getElementById("printHere").innerHTML="";	
		for(i=1;i<=10;i++)
		{
			document.getElementById('printHere').innerHTML+=num+" x "+i+" = "+num*i+"</br></br>"
		}
		document.getElementById("text").value="";
	}
	else
	{
		document.getElementById("printHere").innerHTML="not a positive number...!!!!!!";
		document.getElementById("text").value="";
	}
}