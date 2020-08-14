#pragma strict

function Start () {

}

function	OnCollisionEnter(col	:	Collision)
{

	Destroy(col.gameObject);

}

function Update () {

}