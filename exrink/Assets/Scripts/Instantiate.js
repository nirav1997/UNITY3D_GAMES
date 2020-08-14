var prefab		: GameObject;
var prefab1		: GameObject;
var prefab2		: GameObject;
var prefab3		: GameObject;
var prefab4a	: GameObject;
var prefab4b	: GameObject;
var	noOFprefabs	:	int;
var	pos			:	Transform;
var	i			:	int;
var	v			:	float;
var	wait		:	float;
var	waitBefore		:	float;
var	Levelno		:	int;

function Start() 
{

	PlayerPrefs.SetFloat("velo",-4);
	wait = 2;
	yield	WaitForSeconds(waitBefore);
	while(PlayerPrefs.GetInt("Level")==Levelno)
	{

		Instanobs();
		yield	WaitForSeconds(wait);

	}			

}

function	Update()
{

	

}

function Instanobs()
{

	i = Random.Range(1,1000);

	if(i % noOFprefabs == 0)
	{

		Instantiate(prefab, pos.position, Quaternion.identity);
		v = PlayerPrefs.GetFloat("velo");
		v = v*1.01;
		PlayerPrefs.SetFloat("velo",v);
		if(wait >=1)wait = wait - 0.001;

	}
	if(i % noOFprefabs == 1)
	{

		Instantiate(prefab1, pos.position, Quaternion.identity);
		v = PlayerPrefs.GetFloat("velo");
		v = v*1.01;
		PlayerPrefs.SetFloat("velo",v);
		if(wait >=1)wait = wait - 0.001;

	}
	if(i % noOFprefabs == 2)
	{

		Instantiate(prefab2, new Vector3(pos.position.x,prefab2.transform.position.y,pos.position.z), Quaternion.identity);
		v = PlayerPrefs.GetFloat("velo");
		v = v*1.01;
		PlayerPrefs.SetFloat("velo",v);
		if(wait >=1)wait = wait - 0.001;

	}
	if(i % noOFprefabs == 3)
	{

		Instantiate(prefab3, pos.position, Quaternion.identity);
		v = PlayerPrefs.GetFloat("velo");
		v = v*1.01;
		PlayerPrefs.SetFloat("velo",v);
		if(wait >=1)wait = wait - 0.001;

	}
	if(i % noOFprefabs == 4)
	{

		Instantiate(prefab4a, new Vector3(pos.position.x,prefab4a.transform.position.y,pos.position.z), Quaternion.identity);
		Instantiate(prefab4b, new Vector3(pos.position.x,prefab4b.transform.position.y,pos.position.z), Quaternion.identity);
		v = PlayerPrefs.GetFloat("velo");
		v = v*1.01;
		PlayerPrefs.SetFloat("velo",v);
		if(wait >=1)wait = wait - 0.001;

	}


}