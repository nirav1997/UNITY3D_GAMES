#pragma strict

function Start () {
yield WaitForSeconds(0.9);if(Application.loadedLevel == 0)
Application.LoadLevel("Start");
		Destroy (gameObject);


}

function Update () {

}