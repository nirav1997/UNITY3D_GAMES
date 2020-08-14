private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;
var	prefab	:	GameObject;
var	a		:	GameObject[];
var	i		:	int;
var	j		:	int;
var	k		:	int;
var	y		:	float;
var	y2		:	int;
var	x		:	float;
var	x2		:	int;
var	cp1		:	int;
var	size	:	int;
var	nam	:	int;
var	possi	:	int[];
var ppp		:	int[];
var	p		:	int[];
var	total_players	:	int;
var	c		:	int;

function Start () 
{

	PlayerPrefs.SetInt("P0",1);
	PlayerPrefs.SetInt("P1",1);
	PlayerPrefs.SetInt("P2",1);
	PlayerPrefs.SetInt("P3",1);
	PlayerPrefs.SetInt("P4",1);
	p[0] = 1;
	p[1] = 1;
	p[2] = 1;
	p[3] = 1;
	p[4] = 1;

	/*x = 0;
	k = 0;
	nam = 0;
	for(i = 0;i<size;i++)
	{

		if(i==0)
		{

			y = 0;
			for(j = 0;j<=size/2;j++)
			{

				 if(j==0)
				 {

				 	a[k] = Instantiate(prefab, new Vector3(x, y, 0), prefab.gameObject.transform.rotation);
				 	a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 	k++;

				 }
				 else
				 {

				 	a[k] = Instantiate(prefab, new Vector3(x, y, 0), prefab.gameObject.transform.rotation);
				 	a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 	k++;
				 	yield	WaitForSeconds(0.1);
				 	a[k] = Instantiate(prefab, new Vector3(x, -y, 0), prefab.gameObject.transform.rotation);
				 	a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 	k++;
				 	yield	WaitForSeconds(0.1);

				 }
				 y = y+0.9;

			}

		}
		else if((size-i)%2 == 0)
		{

			y = 0.45;
			for(j = 0;j<(size-i)/2;j++)
			{

				 a[k] = Instantiate(prefab, new Vector3(x, y, 0), prefab.gameObject.transform.rotation);
				 a[k].name = "Hex" + nam.ToString();
				 nam++;
				 k++;
			    yield	WaitForSeconds(0.1);
				 a[k] = Instantiate(prefab, new Vector3(x, -y, 0), prefab.gameObject.transform.rotation);
				 a[k].name = "Hex" + nam.ToString();
				 nam++;
				 k++;
				 	yield	WaitForSeconds(0.1);
				 a[k] = Instantiate(prefab, new Vector3(-x, y, 0), prefab.gameObject.transform.rotation);
				 a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 k++;
				 	yield	WaitForSeconds(0.1);
				 a[k] = Instantiate(prefab, new Vector3(-x, -y, 0), prefab.gameObject.transform.rotation);
				 a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 k++;
				 	yield	WaitForSeconds(0.1);
				 y = y+0.9;
			}

		}
		else
		{

			y = 0;
			for(j = 0;j<=(size-i)/2;j++)
			{


				if(j==0)
				{

					a[k] = Instantiate(prefab, new Vector3(x, y, 0), prefab.gameObject.transform.rotation);
					a[k].name = "Hex" + nam.ToString();
				 	nam++;
					k++;
				 	yield	WaitForSeconds(0.1);
					 a[k] = Instantiate(prefab, new Vector3(-x, y, 0), prefab.gameObject.transform.rotation);
					 a[k].name = "Hex" + nam.ToString();
				 	nam++;
					 k++;
				 	yield	WaitForSeconds(0.1); 
					 y = y+0.9;

				}
				else
				{

					a[k] = Instantiate(prefab, new Vector3(x, y, 0), prefab.gameObject.transform.rotation);
					a[k].name = "Hex" + nam.ToString();
				 	nam++;
					k++;
				 	yield	WaitForSeconds(0.1);
				 	a[k] = Instantiate(prefab, new Vector3(x, -y, 0), prefab.gameObject.transform.rotation);
				 	a[k].name = "Hex" + nam.ToString();
				 	nam++;
				 	k++;
				 	yield	WaitForSeconds(0.1);
					 a[k] = Instantiate(prefab, new Vector3(-x, y, 0), prefab.gameObject.transform.rotation);
					 a[k].name = "Hex" + nam.ToString();
				 	nam++;
					 k++;
				 	yield	WaitForSeconds(0.1);
					 a[k] = Instantiate(prefab, new Vector3(-x, -y, 0), prefab.gameObject.transform.rotation);
					 a[k].name = "Hex" + nam.ToString();
				 	nam++;
					 k++;
				 	yield	WaitForSeconds(0.1);
					 y = y+0.9;

				}

				 

			}

		}
		x = x+0.785;

	}*/


}

function Update () 
{

	ppp[0] = PlayerPrefs.GetInt("P0");
	ppp[1] = PlayerPrefs.GetInt("P1");
	ppp[2] = PlayerPrefs.GetInt("P2");
	ppp[3] = PlayerPrefs.GetInt("P3");
	ppp[4] = PlayerPrefs.GetInt("P4");

	total_players = PlayerPrefs.GetInt("Total_Players");	
	for(i=0;i<total_players;i++)
	{

		if(p[i] != 0)
		{

			possi[i] =				a[0].gameObject.GetComponent.<Cell>().possible[i]
								+ a[1].gameObject.GetComponent.<Cell>().possible[i]
								+ a[2].gameObject.GetComponent.<Cell>().possible[i]
								+ a[3].gameObject.GetComponent.<Cell>().possible[i]
								+ a[4].gameObject.GetComponent.<Cell>().possible[i]
								+ a[5].gameObject.GetComponent.<Cell>().possible[i]
								+ a[6].gameObject.GetComponent.<Cell>().possible[i]
								+ a[7].gameObject.GetComponent.<Cell>().possible[i]
								+ a[8].gameObject.GetComponent.<Cell>().possible[i]
								+ a[9].gameObject.GetComponent.<Cell>().possible[i]
								+ a[10].gameObject.GetComponent.<Cell>().possible[i]
								+ a[11].gameObject.GetComponent.<Cell>().possible[i]
								+ a[12].gameObject.GetComponent.<Cell>().possible[i]
								+ a[13].gameObject.GetComponent.<Cell>().possible[i]
								+ a[14].gameObject.GetComponent.<Cell>().possible[i]
								+ a[15].gameObject.GetComponent.<Cell>().possible[i]
								+ a[16].gameObject.GetComponent.<Cell>().possible[i]
								+ a[17].gameObject.GetComponent.<Cell>().possible[i]
								+ a[18].gameObject.GetComponent.<Cell>().possible[i]
								+ a[19].gameObject.GetComponent.<Cell>().possible[i]
								+ a[20].gameObject.GetComponent.<Cell>().possible[i]
								+ a[21].gameObject.GetComponent.<Cell>().possible[i]
								+ a[22].gameObject.GetComponent.<Cell>().possible[i]
								+ a[23].gameObject.GetComponent.<Cell>().possible[i]
								+ a[24].gameObject.GetComponent.<Cell>().possible[i];
		
							

		}

	}
	for(i=0;i<total_players;i++)
	{

		if(p[i]==0)PlayerPrefs.SetInt("P"+i.ToString(),0);
		if(possi[i] == 0 && PlayerPrefs.GetInt("CurrentPlayer") > total_players)
		{

			PlayerPrefs.SetInt("P"+i.ToString(),0);
			p[i] = 0;

		}

	}
	cp1 = (PlayerPrefs.GetInt("CurrentPlayer")%total_players)-1;
	if(cp1 == -1)cp1 = total_players-1;
	if(PlayerPrefs.GetInt("P"+(PlayerPrefs.GetInt("CurrentPlayer")%total_players).ToString()) == 0)PlayerPrefs.SetInt("CurrentPlayer",PlayerPrefs.GetInt("CurrentPlayer") + 1); 
	c = 0;
	for(i=0;i<total_players;i++)
	{

		if(p[i] != 0)
		{

			c++;
			PlayerPrefs.SetInt("Winp",i);

		}

	}
	if(c==1)
	{

		PlayerPrefs.SetInt("Win",1);

	}

	if(Input.GetMouseButton(0))
	{

		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if(Physics.Raycast(ray,rayCastHit))
		{

			if(rayCastHit.transform.name == "Play")
			{

				Application.LoadLevel("Start");

			}

		}

	}

}