var	left	:	GameObject;
var	right	:	GameObject;
var	top		:	GameObject;
var	bottom	:	GameObject;

var	left1	:	GameObject;
var	right1	:	GameObject;
var	top1	:	GameObject;
var	bottom1	:	GameObject;

var	left2	:	GameObject;
var	right2	:	GameObject;
var	top2	:	GameObject;
var	bottom2	:	GameObject;

function Start()
{

	if(PlayerPrefs.GetInt("game_type")==1)
	{

		left.gameObject.SetActive(false);
		right.gameObject.SetActive(false);
		top.gameObject.SetActive(false);
		bottom.gameObject.SetActive(false);

		left1.gameObject.SetActive(true);
		right1.gameObject.SetActive(true);
		top1.gameObject.SetActive(true);
		bottom1.gameObject.SetActive(false);

		left2.gameObject.SetActive(false);
		right2.gameObject.SetActive(false);
		top2.gameObject.SetActive(false);
		bottom2.gameObject.SetActive(true);



	}
	if(PlayerPrefs.GetInt("game_type")==2)
	{

		left.gameObject.SetActive(false);
		right.gameObject.SetActive(false);
		top.gameObject.SetActive(false);
		bottom.gameObject.SetActive(false);

		left1.gameObject.SetActive(false);
		right1.gameObject.SetActive(true);
		top1.gameObject.SetActive(true);
		bottom1.gameObject.SetActive(false);

		left2.gameObject.SetActive(true);
		right2.gameObject.SetActive(false);
		top2.gameObject.SetActive(false);
		bottom2.gameObject.SetActive(true);

	}
	if(PlayerPrefs.GetInt("game_type")==3)
	{

		left.gameObject.SetActive(true);
		right.gameObject.SetActive(true);
		top.gameObject.SetActive(false);
		bottom.gameObject.SetActive(true);

		left1.gameObject.SetActive(false);
		right1.gameObject.SetActive(false);
		top1.gameObject.SetActive(true);
		bottom1.gameObject.SetActive(false);

		left2.gameObject.SetActive(false);
		right2.gameObject.SetActive(false);
		top2.gameObject.SetActive(false);
		bottom2.gameObject.SetActive(false);

	}
	if(PlayerPrefs.GetInt("game_type")==4)
	{

		left.gameObject.SetActive(true);
		right.gameObject.SetActive(true);
		top.gameObject.SetActive(true);
		bottom.gameObject.SetActive(true);

		left1.gameObject.SetActive(false);
		right1.gameObject.SetActive(false);
		top1.gameObject.SetActive(false);
		bottom1.gameObject.SetActive(false);

		left2.gameObject.SetActive(false);
		right2.gameObject.SetActive(false);
		top2.gameObject.SetActive(false);
		bottom2.gameObject.SetActive(false);

	}


}