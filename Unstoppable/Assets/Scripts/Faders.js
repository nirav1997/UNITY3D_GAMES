#pragma strict

function Start () 
{

	yield	WaitForSeconds(0.9);

	if(Application.loadedLevel==0)
	{

		PlayerPrefs.SetInt("Score",0);
		GetComponent.<Renderer>().enabled=false;
		yield	WaitForSeconds(1);
		Application.LoadLevel(1);

	}
	Destroy(gameObject);

}