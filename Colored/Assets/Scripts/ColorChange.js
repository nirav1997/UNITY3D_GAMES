var	cA	:	Color;
var	cB	:	Color;
var	cC	:	Color;
var	cD	:	Color;
var	a	:	int;
var	i	:	int;

var	score	:	int = 0;
var	scoreText	:	TextMesh;

var	G1	:	GameObject;
var	G	:	GameObject;

var	gameover	:	boolean = false;

var	rend	:	Renderer;

function OnCollisionEnter(collision: Collision)
{


	a = collision.transform.eulerAngles.z;
	if(PlayerPrefs.GetInt("noofballs")==2)
	{

		if((collision.transform.eulerAngles.z >= -5 && collision.transform.eulerAngles.z <= 5 && i!=1) ||
		   (collision.transform.eulerAngles.z <= 185 && collision.transform.eulerAngles.z >= 175 && i!=2)
		   )

		 {

		 	rend = G1.GetComponent.<Renderer>();
		 	rend.enabled = false;
		 	G.gameObject.SetActive(true);
		 	gameover = true;

		 }
		 else
		 {

				i = Random.Range(1,100);
				i = i%2 + 1;
				rend = GetComponent.<Renderer>();

				if(i==1 && !gameover)rend.material.SetColor ("_SpecColor", cA);
				if(i==2 && !gameover)rend.material.SetColor ("_SpecColor", cB);
				if(i==3 && !gameover)rend.material.SetColor ("_SpecColor", cC);
				if(i==4 && !gameover)rend.material.SetColor ("_SpecColor", cD);
				if(score < 15)score++;
				else if(score < 30)score = score +2;
				else if(score < 45)score = score +3;
				else score = score +5;


		}

	}
	else if(PlayerPrefs.GetInt("noofballs")==3)
	{

		if((collision.transform.eulerAngles.z >= 40 && collision.transform.eulerAngles.z <= 50 && i!=1) ||
		   (collision.transform.eulerAngles.z <= -40 && collision.transform.eulerAngles.z >= -50 && i!=2) ||
		   (collision.transform.eulerAngles.z >= -140 && collision.transform.eulerAngles.z <= -130 && i!=3) ||
		   (collision.transform.eulerAngles.z <= 320 && collision.transform.eulerAngles.z >= 310 && i!=2)	||
		   (collision.transform.eulerAngles.z >= 220 && collision.transform.eulerAngles.z <= 230 && i!=3) ||
		   (collision.transform.eulerAngles.z >= 130 && collision.transform.eulerAngles.z <= 140 && i!=4))
		 {

		 	rend = G1.GetComponent.<Renderer>();
		 	rend.enabled = false;
		 	G.gameObject.SetActive(true);
		 	gameover = true;

		 }
		 else
		 {

				i = Random.Range(1,4);
				rend = GetComponent.<Renderer>();

				if(i==1 && !gameover)rend.material.SetColor ("_SpecColor", cA);
				if(i==2 && !gameover)rend.material.SetColor ("_SpecColor", cB);
				if(i==3 && !gameover)rend.material.SetColor ("_SpecColor", cC);
				if(i==4 && !gameover)rend.material.SetColor ("_SpecColor", cD);
				if(score < 15)score++;
				else if(score < 30)score = score +2;
				else if(score < 45)score = score +3;
				else score = score +5;


		}

	}
	else if(PlayerPrefs.GetInt("noofballs")==4)
	{

		if((collision.transform.eulerAngles.z >= 40 && collision.transform.eulerAngles.z <= 50 && i!=1) ||
		   (collision.transform.eulerAngles.z <= -40 && collision.transform.eulerAngles.z >= -50 && i!=2) ||
		   (collision.transform.eulerAngles.z >= -140 && collision.transform.eulerAngles.z <= -130 && i!=3) ||
		   (collision.transform.eulerAngles.z <= 320 && collision.transform.eulerAngles.z >= 310 && i!=2)	||
		   (collision.transform.eulerAngles.z >= 220 && collision.transform.eulerAngles.z <= 230 && i!=3) ||
		   (collision.transform.eulerAngles.z >= 130 && collision.transform.eulerAngles.z <= 140 && i!=4))
		 {

		 	rend = G1.GetComponent.<Renderer>();
		 	rend.enabled = false;
		 	G.gameObject.SetActive(true);
		 	gameover = true;

		 }
		 else
		 {

				i = Random.Range(1,4);
				rend = GetComponent.<Renderer>();

				if(i==1 && !gameover)rend.material.SetColor ("_SpecColor", cA);
				if(i==2 && !gameover)rend.material.SetColor ("_SpecColor", cB);
				if(i==3 && !gameover)rend.material.SetColor ("_SpecColor", cC);
				if(i==4 && !gameover)rend.material.SetColor ("_SpecColor", cD);
				if(score < 15)score++;
				else if(score < 30)score = score +2;
				else if(score < 45)score = score +3;
				else score = score +5;


		}

	}

}

function Start () 
{

	i = Random.Range(1,4);
	var rend = GetComponent.<Renderer>();

	if(i==1)rend.material.SetColor ("_SpecColor", cA);
	if(i==2)rend.material.SetColor ("_SpecColor", cB);
	if(i==3)rend.material.SetColor ("_SpecColor", cC);
	if(i==4)rend.material.SetColor ("_SpecColor", cD);

}

function Update () 
{

	scoreText.text = score.ToString();

}