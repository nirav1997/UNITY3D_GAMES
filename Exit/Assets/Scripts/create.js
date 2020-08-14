var	i	:	int;
var	prefab	:	GameObject;

function Start () 
{

	for(i=-2;i<=5;i++)
	{
	
		Instantiate(prefab, new Vector3(6.83, i, 0), Quaternion.identity);
	
	}

}