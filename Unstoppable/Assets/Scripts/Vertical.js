private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;
public var rends: Renderer[];

function Start () 
{

	

}

function	Update()
{

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{


			transform.position.y = rayCastHit.point.y;
		
			/*if(rayCastHit.transform.name == "")
			{

				Application.LoadLevel("Base");

			}*/


		}



	}


}