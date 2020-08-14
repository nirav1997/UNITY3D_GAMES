private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

function	Update()
{

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			transform.position.x = rayCastHit.point.x;

		}

	}

}