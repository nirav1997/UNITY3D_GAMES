private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

var bool	:	boolean;
var	pl		:	int;
function Start () 
{

	bool = true;
	PlayerPrefs.SetInt("noofballs",2);
	pl = PlayerPrefs.GetInt("noofballs");

}

function Update () 
{

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit) && bool)
		{

			if(pl==2)transform.Rotate(0,0,180);
			if(pl==3)transform.Rotate(0,0,120);
			if(pl==4)transform.Rotate(0,0,90);

			bool = false;


		}


	}
	else
	{

		bool = true;

	}


}