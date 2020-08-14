var rb		: 	Rigidbody;
var	Gameover	:	GameObject;
var	Gameover1	:	GameObject;

function OnCollisionEnter(collision: Collision) 
{

	if (collision.gameObject.tag == "Obj") 
	{

    	Physics.IgnoreCollision(collision.collider, GetComponent.<Collider>());

    }



}
function Start()
{

	InvokeRepeating("IncreaseBallVelo", 0, 1);

}
function	Awake()
{

	GetComponent.<Rigidbody>().AddForce(4,5,0,ForceMode.Impulse);
	rb = GetComponent.<Rigidbody>();

}


function	Update()
{

	if(transform.position.y < -3.85 ||transform.position.x > 4|| transform.position.x < -3.5053326 || transform.position.y > 6)
	{

		Application.LoadLevel("Main");

	}



}

function IncreaseBallVelo()
{

	rb.velocity *=1.01;

}


