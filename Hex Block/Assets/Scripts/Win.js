var	t	:	float;
var	rend	:	Renderer;
var	i		:	int;
var	mat		:	Material[];
var	s		:	boolean = true;
var	g		:	GameObject;
var music	:	GameObject;
var	music1	:	GameObject;

function Start () 
{

	yield	WaitForSeconds(1);
	while(1)
	{

		yield	WaitForSeconds(1);
		if(PlayerPrefs.GetInt("Win")==1 && s)
		{

			if(music)music.gameObject.SetActive(false);
			if(music1)music1.gameObject.SetActive(true);
			yield	WaitForSeconds(t/2);
			rend = GetComponent.<Renderer>();
			rend.sharedMaterial = mat[PlayerPrefs.GetInt("Winp")];
			//g.gameObject.SetActive(true);
			for(i=0;i<45;i++)
			{

				gameObject.transform.Rotate(Vector3(0,0,-4));
				yield	WaitForSeconds(0.01);


			}
			if(t == 7.2)g.gameObject.SetActive(true);
			s = false;

		}

	}

}