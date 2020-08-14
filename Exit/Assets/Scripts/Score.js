var	score	:	int;
var	highscore	:	int;
var	scoretext	:	TextMesh;
var	highscoretext	:	TextMesh;

private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;


function Update ()
{

	highscoretext.text = "HighScore\n" + PlayerPrefs.GetInt("highscore").ToString();
	scoretext.text = "Score\n" + PlayerPrefs.GetInt("Score").ToString();
	score = PlayerPrefs.GetInt("Score");
	highscore = PlayerPrefs.GetInt("highscore");

	if(score > highscore)
	{

		PlayerPrefs.SetInt("highscore",score);

	}
	
	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "Play")
			{

				PlayerPrefs.SetInt("Score",0);
				Application.LoadLevel("Main");

			}


		}



	}

}