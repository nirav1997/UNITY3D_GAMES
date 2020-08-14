var	i	:	int;
var	pos	:	int;
function Start () 
{
	
	pos = Random.Range(4,40);
	yield	WaitForSeconds(0.9);
	for(i=0;i<pos;i++)
	{
	
		transform.Translate(-0.125,0,0);
		yield	WaitForSeconds(0.01);
		
	}

}