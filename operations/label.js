function add()
{
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	var c = document.getElementById("result");
	c.value = Number(a) + Number(b);
}
function sub()
{
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	var c = document.getElementById("result");
	c.value = Number(a) - Number(b);
}
function mul()
{
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	var c = document.getElementById("result");
	c.value = Number(a) * Number(b);
}
function div()
{
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	var c = document.getElementById("result");
	if(Number(b) == 0)
	{
		c.value = "Division not possible"
	}
	else
	{
		c.value = Number(a) / Number(b);
	}
}
