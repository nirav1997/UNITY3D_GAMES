var	highscoretext	:	TextMesh;

private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

function Start()
{

	PlayerPrefs.SetInt("Score",0);

}

function Update ()
{

	highscoretext.text = "HighScore\n" + PlayerPrefs.GetInt("highscore").ToString();

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "Play")
			{

				Application.LoadLevel("Main");

			}


		}



	}

}