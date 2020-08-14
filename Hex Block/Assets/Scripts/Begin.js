private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;
var	g1	:	GameObject;
var	g2	:	GameObject;
var	g3	:	GameObject;
var	g4	:	GameObject;
var material1	:	Material;
var material2	:	Material;
var	TotalNoOfPkayers	:	int;

function Start()
{

	PlayerPrefs.SetInt("Total_Players",0);

}

function	Update()
{

	TotalNoOfPkayers = PlayerPrefs.GetInt("Total_Players");
	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "2")
			{

				PlayerPrefs.SetInt("Total_Players",2);
				g1.gameObject.GetComponent.<Renderer>().sharedMaterial = material2;
				g2.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g3.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g4.gameObject.SetActive(false);

			}
			if(rayCastHit.transform.name == "3")
			{

				PlayerPrefs.SetInt("Total_Players",3);
				g1.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g2.gameObject.GetComponent.<Renderer>().sharedMaterial = material2;
				g3.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g4.gameObject.SetActive(false);

			}
			if(rayCastHit.transform.name == "4")
			{

				PlayerPrefs.SetInt("Total_Players",4);
				g1.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g2.gameObject.GetComponent.<Renderer>().sharedMaterial = material1;
				g3.gameObject.GetComponent.<Renderer>().sharedMaterial = material2;
				g4.gameObject.SetActive(false);

			}
			if(rayCastHit.transform.name == "Play" && PlayerPrefs.GetInt("Total_Players") > 0)
			{

				Application.LoadLevel("3-Player");

			}
			if(rayCastHit.transform.name == "Exit")
			{

				Application.Quit();

			}

		}

	}

}