private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;
var	a	:	int;
var	cube	:	GameObject;
var	ball	:	GameObject;

var	cube1	:	GameObject;
var	ball1	:	GameObject;

var	cube2	:	GameObject;
var	ball2	:	GameObject;

var	cube3	:	GameObject;
var	ball3	:	GameObject;

function Start () 
{

	if(PlayerPrefs.GetInt("game_type") == 1)
	{

				cube.gameObject.SetActive(false);
				ball.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);		

	}
	else if(PlayerPrefs.GetInt("game_type")==2)
	{

				cube1.gameObject.SetActive(false);
				ball1.gameObject.SetActive(true);

				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);

	}
	else if(PlayerPrefs.GetInt("game_type")==3)
	{

				cube2.gameObject.SetActive(false);
				ball2.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);

	}
	else
	{

				cube3.gameObject.SetActive(false);
				ball3.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);		

	}

}

function Update () 
{
	a = PlayerPrefs.GetInt("game_type");
	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{


			if(rayCastHit.transform.name == "Play@")
			{

				//PlayerPrefs.SetInt("game_type",1);


			}
			
			if(rayCastHit.transform.name == "Cube trans")
			{

				PlayerPrefs.SetInt("game_type",1);
				cube.gameObject.SetActive(false);
				ball.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);

			}

			if(rayCastHit.transform.name == "Cube trans1")
			{

				PlayerPrefs.SetInt("game_type",2);
				cube1.gameObject.SetActive(false);
				ball1.gameObject.SetActive(true);

				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);

			}

			if(rayCastHit.transform.name == "Cube trans2")
			{

				PlayerPrefs.SetInt("game_type",3);
				cube2.gameObject.SetActive(false);
				ball2.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);
				cube3.gameObject.SetActive(true);
				ball3.gameObject.SetActive(false);

			}

			if(rayCastHit.transform.name == "Cube trans3")
			{

				PlayerPrefs.SetInt("game_type",4);
				cube3.gameObject.SetActive(false);
				ball3.gameObject.SetActive(true);

				cube1.gameObject.SetActive(true);
				ball1.gameObject.SetActive(false);
				cube2.gameObject.SetActive(true);
				ball2.gameObject.SetActive(false);
				cube.gameObject.SetActive(true);
				ball.gameObject.SetActive(false);

			}

		}



	}

}