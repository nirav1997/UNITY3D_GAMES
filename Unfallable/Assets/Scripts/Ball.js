var rb		: 	Rigidbody;
var	velo	:	Vector3;
var	Ball	:	GameObject;
var	first	:	boolean;
var	second	:	boolean;
var increasevelo	:	float;

function OnCollisionEnter(collision: Collision) 
{

	if (collision.gameObject.tag == "Ball") 
	{

    	Physics.IgnoreCollision(collision.collider, GetComponent.<Collider>());

    }



}

function	Awake()
{

	GetComponent.<Rigidbody>().AddForce(4,4,0,ForceMode.Impulse);
	rb = GetComponent.<Rigidbody>();
	InvokeRepeating("IncreaseBallVelo",2,2);

}

function	Start()
{

	PlayerPrefs.SetInt("noOfBalls",PlayerPrefs.GetInt("noOfBalls")+1);

}

function	Update()
{

	if(transform.position.y < -5)
	{

		PlayerPrefs.SetInt("noOfBalls",PlayerPrefs.GetInt("noOfBalls")-1);
		Destroy (gameObject);

	}

	velo = rb.velocity;

	if(velo.magnitude >= 8 && first == true)
	{

		first = false;
		Instantiate(Ball,transform.position , Quaternion.identity);

	}

	if(velo.magnitude >= 12 && second == true)
	{

		second = false;
		Instantiate(Ball,transform.position , Quaternion.identity);

	}


}

function IncreaseBallVelo()
{

	rb.velocity *=1.05;

}


