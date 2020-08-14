var rb	: Rigidbody;
var	v	:	float;

function Start() 
{

	rb = GetComponent.<Rigidbody>();

}

function	OnCollisionEnter(col	:	Collision)
{

	if(col.transform.name != "Destroyer")
	{

		PlayerPrefs.SetInt("GameOver",1);
		Destroy(gameObject);

	}

}

function FixedUpdate () 
{

	v = PlayerPrefs.GetFloat("velo");
	rb.velocity = Vector3(v,0,0);


}