#pragma strict

function Start() 
{

	/*if(gameObject.tag=="Wall")
	{

		gameObject.GetComponent.<Renderer>().material.color = Color.black;

	}*/

	if(gameObject.tag=="Ball")
	{

		gameObject.GetComponent.<Renderer>().material.color = Color.black;

	}

	if(gameObject.tag=="Background" && (PlayerPrefs.GetInt("GameOver")==1 || PlayerPrefs.GetInt("GameStart")==1))
	{

		gameObject.GetComponent.<Renderer>().material.color = Color.black;

	}

	if(gameObject.tag=="Background" && (PlayerPrefs.GetInt("GameOver")==0 && PlayerPrefs.GetInt("GameStart")==0))
	{

		gameObject.GetComponent.<Renderer>().material.color = Color.white;

	}

}