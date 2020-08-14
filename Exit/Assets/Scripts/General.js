var	GameOver	:	GameObject;
var	Off			:	GameObject;

function Start()
{

	PlayerPrefs.SetInt("GameOver",0);
	if(PlayerPrefs.GetInt("Score")==0)PlayerPrefs.SetInt("GameNo",PlayerPrefs.GetInt("GameNo")+1);

}

function Update () 
{

	if(PlayerPrefs.GetInt("GameOver")==1)
	{
	
		GameOver.gameObject.SetActive(true);
		Off.gameObject.SetActive(false);
		PlayerPrefs.SetInt("GameOver",0);
	
	}

}