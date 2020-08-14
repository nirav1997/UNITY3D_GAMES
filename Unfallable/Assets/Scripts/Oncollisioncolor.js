var	color	:	Color;
var	time	:	float = 0f;
var	ImpulseCount	:	int;

function OnCollisionEnter(collision: Collision) 
{

	Debug.Log("Collision entered");
	if(collision.gameObject.tag == "Ball")
	{

		color = Color(Random.Range(0.0f,1.0f),Random.Range(0.0f,1.0f),Random.Range(0.0f,1.0f),Random.Range(0.0f,1.0f));
		Debug.Log("collison entered by ball");
		var rend = GetComponent.<Renderer>();
		rend.material.color = color;
		time = 0;
		ImpulseCount = PlayerPrefs.GetInt("impulseCount");
		ImpulseCount++;
		PlayerPrefs.SetInt("impulseCount",ImpulseCount);

	}

}

function Update()
{

	var rend = GetComponent.<Renderer>();
	if(rend.material.color!=Color.black)
	{

		time += Time.deltaTime;
		rend.material.color = Color.Lerp(color, Color.black, time);

	}

}