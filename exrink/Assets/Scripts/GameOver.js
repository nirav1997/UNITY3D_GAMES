private	var	ray			:	Ray;
private	var	rayCastHit	:	RaycastHit;

var	score				:	int;
var bo					:	boolean;
var	a					:	GameObject;

var	Gold				:	int;

var NM					:	GameObject;
var	goldtext			:	TextMesh;
function Start () 
{

	PlayerPrefs.SetInt("Gold",1000);
	bo = true;

}

function	Update()
{

	Gold = PlayerPrefs.GetInt("Gold");
	goldtext.text = Gold.ToString();

	if(Input.GetMouseButton(0))	
	{
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		Debug.Log("hi0");

		if(Physics.Raycast(ray,rayCastHit))
		{
			Debug.Log("hi1");
			if(rayCastHit.transform.name == "Reload" && bo)
			{

				bo = false;
				if(Gold >= 5)
				{

					PlayerPrefs.SetInt("Gold",Gold-5);
					PlayerPrefs.SetInt("GameOver",0);
					score = PlayerPrefs.GetInt("Score");
					PlayerPrefs.SetInt("Reload",1);
					Time.timeScale = 1;
					a.gameObject.SetActive(false);

				}
				else
				{

					NM.gameObject.SetActive(true);
					Wait();
					NM.gameObject.SetActive(false);

				}

			}

			if(rayCastHit.transform.name == "Skip" && bo)
			{

				bo = false;
				if(Gold >= 15)
				{

					PlayerPrefs.SetInt("Gold",Gold-15);
					PlayerPrefs.SetInt("GameOver",0);
					PlayerPrefs.SetInt("Skip",1);
					Time.timeScale = 1;
					a.gameObject.SetActive(false);

				}
				else
				{

					NM.gameObject.SetActive(true);
					Wait();
					NM.gameObject.SetActive(false);

				}

			}

			if(rayCastHit.transform.name == "Home")
			{

				Time.timeScale = 1;
				PlayerPrefs.SetInt("GameOver",0);
				Debug.Log("hi2");
				Application.LoadLevel("Start");

								

			}
	
		}
	

	}

}

function	Wait()
{

	yield	WaitForSeconds(5);

}