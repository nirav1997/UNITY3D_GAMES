#pragma strict

function Start () 
{

	yield	WaitForSeconds(0.5);

	if(Application.loadedLevel==0)
	{

		GetComponent.<Renderer>().enabled=false;
		yield	WaitForSeconds(1);
		Application.LoadLevel("Start");

	}
	Destroy(gameObject);

}