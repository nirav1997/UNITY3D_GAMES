var	a	:	boolean=false;
function Start () 
{

	yield	WaitForSeconds(1);
	while(transform.position.x >= 1.4)
	{

		transform.position.x -=0.1;
		yield	WaitForSeconds(0.01);

	}
	a = true;

}

function Update () 
{

	if(transform.position.x >= 1.4 && a)
	{

		pos();

	}

}

function	pos()
{

	transform.position.x -=0.1;
	yield	WaitForSeconds(0.01);

}