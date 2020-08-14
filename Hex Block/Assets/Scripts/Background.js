var	rend		:	Renderer;
var	material	:	Material[];
var	cp			:	int;
var	cp1			:	int;
var lerpedColor : 	Color = Color.white;
var	color		:	Color[];
var	total_players	:	int;
var	s				:	String;

function Start()
{

   	total_players = PlayerPrefs.GetInt("Total_Players");
	rend = GetComponent.<Renderer>();
	PlayerPrefs.SetInt("Win",0);
	rend.material.color = lerpedColor;

}

function Update() 
{

	if(PlayerPrefs.GetInt("Win")!=1 )//&& (PlayerPrefs.GetInt("P"+(cp%total_players).ToString())!=0))
	{

		cp = PlayerPrefs.GetInt("CurrentPlayer");
		rend.sharedMaterial = material[cp%total_players];

	}
	else
	{

		rend.sharedMaterial = material[PlayerPrefs.GetInt("Winp")];

	}


}