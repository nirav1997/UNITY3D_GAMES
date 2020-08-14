private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

function Start () {

}

function	Update()
{


	if(Input.GetMouseButton(0))	
	{
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "Play")
			{

				Application.LoadLevel("Main");

			}

			if(rayCastHit.transform.name == "Shop")
			{

				Application.LoadLevel("Shop");

			}

			if(rayCastHit.transform.name == "Exit")
			{

				Application.Quit();

			}
	
		}
	

	}

}
	
