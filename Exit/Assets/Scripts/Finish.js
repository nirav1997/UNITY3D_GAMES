var	Score	:	int;
var	STExt	:	TextMesh;

function OnCollisionEnter(collision: Collision) 
{

	Score = PlayerPrefs.GetInt("Score");
	Score = Score + 1;
	PlayerPrefs.SetInt("Score",Score);
	Application.LoadLevel("Main");
			
}

function	Update()
{

	STExt.gameObject.GetComponent.<TextMesh>().text = "Score : " + PlayerPrefs.GetInt("Score").ToString();

}