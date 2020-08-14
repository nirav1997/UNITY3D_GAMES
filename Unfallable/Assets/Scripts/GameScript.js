var	impulseCount	:	int;
var	timeRequired	:	int =60;
var	noOfBalls	:	int;
var	time	:	int;

function Update()
{

	//Get data of various variables
	impulseCount = PlayerPrefs.GetInt("impulseCount");
	timeRequired = PlayerPrefs.GetInt("timeRequired");
	noOfBalls = PlayerPrefs.GetInt("noOfBalls");

	if(time <= 0 )
	{

		//load GameOverScreen



	}

	if(noOfBalls <= 0)
	{

		//load failed screen

	}

}

function	Awake()
{

	PlayerPrefs.SetInt("impulseCount",0);
	PlayerPrefs.SetInt("noOfBalls",0);
	time = PlayerPrefs.GetInt("timeRequired");
	InvokeRepeating("timer",0,1);

}

function timer()
{

	time = time-1;

}
