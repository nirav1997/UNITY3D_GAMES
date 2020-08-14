private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;
var	scoreText	:	TextMesh;
var	scoreText1	:	TextMesh;
var	scoreText2	:	TextMesh;
var	scoreText3	:	TextMesh;

var	GameOn		:	GameObject;
var	GameStart		:	GameObject;
var	GameOver		:	GameObject;
var	Score			:	int = 0;
var	ScoreText		:	TextMesh;
var	ScoreText1		:	TextMesh;
var	highscore		:	int;
var	Ball			:	GameObject;
function	Start()
{

	PlayerPrefs.SetInt("GameOver",0);
	PlayerPrefs.SetInt("GameStart",1);
	if(PlayerPrefs.GetInt("Score")!=0)
	{

		scoreText.text = PlayerPrefs.GetInt("HighScore1").ToString();
		scoreText1.text = PlayerPrefs.GetInt("HighScore2").ToString();
		scoreText2.text = PlayerPrefs.GetInt("HighScore3").ToString();
		scoreText3.text = PlayerPrefs.GetInt("HighScore4").ToString();
		ScoreText1.text = "Score " + PlayerPrefs.GetInt("Score").ToString();


	}
	else
	{

		scoreText.text = PlayerPrefs.GetInt("HighScore1").ToString();
		scoreText1.text = PlayerPrefs.GetInt("HighScore2").ToString();
		scoreText2.text = PlayerPrefs.GetInt("HighScore3").ToString();
		scoreText3.text = PlayerPrefs.GetInt("HighScore4").ToString();
		ScoreText1.text ="Score " + PlayerPrefs.GetInt("Score").ToString();

	}
	InvokeRepeating("score", 0, 0.1);

}
function	Update()
{

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			
			if(rayCastHit.transform.name == "Play1")
			{

				PlayerPrefs.SetInt("GameStart",0);

			}


		}



	}



	if(PlayerPrefs.GetInt("GameStart")==0 )
	{

		GameOn.gameObject.SetActive(true);
		GameStart.gameObject.SetActive(false);
		ScoreText.gameObject.SetActive(true);
		scoreText.gameObject.SetActive(false);
		Ball.gameObject.SetActive(true);

	}




}

function	score()
{

	if(PlayerPrefs.GetInt("GameStart")==0)
	{

		Score = Score + 1;
		ScoreText.text = Score.ToString();
		PlayerPrefs.SetInt("Score",Score);
		if(Score > PlayerPrefs.GetInt("HighScore"+PlayerPrefs.GetInt("game_type").ToString()))PlayerPrefs.SetInt("HighScore"+PlayerPrefs.GetInt("game_type").ToString(),Score);

	}

}