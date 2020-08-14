var	score		:	int;
var	scoreText	:	TextMesh;

var	gameover	:	GameObject;

var	Level1text	:	GameObject;
var	Level2		:	GameObject;
var	Level2text	:	GameObject;
var	Level3		:	GameObject;



var	pos			:	Transform;

function Start () 
{

	score = 0;
	PlayerPrefs.SetInt("Level",1);
	PlayerPrefs.SetInt("GameOver",0);
	InvokeRepeating("score1",0,1);

}

function Update () 
{

	if(PlayerPrefs.GetInt("Skip")==1)
	{

		PlayerPrefs.SetInt("Skip",0);
		score = 25 -(score%25)+score;

	}

	if(PlayerPrefs.GetInt("Reload")==1)
	{

		PlayerPrefs.SetInt("Reload",0);
		score = score-(score%25);


	}
	
	if(PlayerPrefs.GetInt("GameOver")==1)
	{

		gameover.gameObject.SetActive(true);
		Time.timeScale=0;

	}
	else
	{

		gameover.gameObject.SetActive(false);

	}

	//score = PlayerPrefs.GetInt("Score");
	scoreText.text = score.ToString();

	if(score == 25)
	{

		PlayerPrefs.SetInt("Level",2);
		Level2.transform.position.x = 18.59;
		Level2.gameObject.SetActive(true);
		Level1text.gameObject.SetActive(false);

	}
	if(score == 50)
	{

		PlayerPrefs.SetInt("Level",3);
		Level3.transform.position.x = 18.59;
		Level3.gameObject.SetActive(true);
		Level2text.gameObject.SetActive(false);

	}

}

function	score1()
{

	score += 1;
	//PlayerPrefs.SetInt("Score",score);

}