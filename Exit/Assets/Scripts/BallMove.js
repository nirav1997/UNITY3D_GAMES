private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

function	Update()
{

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "Ball" || rayCastHit.transform.name == "Ball1" )
			{

				transform.position.x = rayCastHit.point.x;
				transform.position.y = rayCastHit.point.y;

			}
		}



	}

}