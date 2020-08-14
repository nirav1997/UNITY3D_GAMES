var	RequiredNoOfBalls	:	int;
var	noOfBalls	:	int;
var	impulseCount	:	int;
var	RequiredimpulseCount	:	int;


function Start () 
{

	RequiredNoOfBalls = PlayerPrefs.GetInt("RequiredNoOfBalls");
	noOfBalls = PlayerPrefs.GetInt("noOfBalls");

	RequiredimpulseCount = PlayerPrefs.GetInt("RequiredimpulseCount");
	impulseCount = PlayerPrefs.GetInt("impulseCount");

	if(noOfBalls >= RequiredNoOfBalls || impulseCount >= RequiredimpulseCount)
	{

		//Win

	}
	else
	{

		//lose

	}
}

function Update () 
{



}