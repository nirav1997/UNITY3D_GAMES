var x						:	int;
var y						:	int;
var z						: 	int;
var	cp						:	int;
var	other_player			:	int;
var	a						:	int;
var	i						:	int;
var nam						:	String;
var	material				:	Material[];
var	transmaterial			:	Material[];
var	white					:	Material;
var	occupied				:	boolean;
var	deleted					:	boolean = false;
var	color					:	Color[];
var rend					:	Renderer;
var rend1					:	Component[];
var Hex						:	GameObject[];
var	possible				:	int[]=new int[5];
var	possi_x					: 	int[,] = new int[16,16];
var	possi_y					: 	int[,] = new int[16,16];
var	possi_z					: 	int[,] = new int[16,16];
var	xi						:	int[];
var	tog						:	boolean;
var	tog1					:	boolean;
var	tog2					:	boolean;
var	total_players			:	int;
var	player_no	:				String;
var	cp1	:int;
var x1	:	int;
var	y1	:	int;
var z1	:	int;
var debug	:	int;
var debug1	:	int;
var debug2	:	int;
var debug3	:	int;
private	var	ray				:	Ray;
private	var	rayCastHit		:	RaycastHit;

function	Start()
{

	occupied = false;
	rend = GetComponent.<Renderer>();
	PlayerPrefs.SetInt("x",999);
	PlayerPrefs.SetInt("y",999);
   	PlayerPrefs.SetInt("z",999);
   	PlayerPrefs.SetInt("CurrentPlayer",0);
   	tog = true;
   	total_players = PlayerPrefs.GetInt("Total_Players");
	//rend1 = GetComponentsInChilderen.<Renderer>();

}

function	Update()
{

	cp = PlayerPrefs.GetInt("CurrentPlayer");
	cp1 =  PlayerPrefs.GetInt("CurrentPlayer")%total_players;
	cp1 = cp1-1;

	//if(PlayerPrefs.GetInt("P"+cp1.ToString)!=1)cp1=cp1-1;
	if(cp1== -1)cp1 = total_players-1;
	//if(PlayerPrefs.GetInt("P"+cp1.ToString)!=1)cp1=cp1-1;
	//if(cp1== -1)cp1 = total_players-1;
	//if(PlayerPrefs.GetInt("P"+cp1.ToString())==1)cp1 = cp1-1;
	//if(cp1== -1)cp1 = total_players-1;
	tog = true;
	tog1 = true;
	tog2 = false;
	if(occupied && !deleted)
	{

		
		if(occupied)
		{

			for(i=0;i<total_players;i++)
			possible[i]=0;

		}

	}
	else if(PlayerPrefs.GetInt("P"+(PlayerPrefs.GetInt("CurrentPlayer")%total_players).ToString())==1  && PlayerPrefs.GetInt("Win")!=1)
	{

		



		other_player = cp1 + 1;
		other_player =other_player % total_players;
		if(other_player== -1)other_player = total_players-1;



		for(a=0;a<total_players-1;a++)
		{

			if(PlayerPrefs.GetInt("P"+a.ToString()) != 0 || (PlayerPrefs.GetInt("CurrentPlayer"))<total_players){
			
			if(PlayerPrefs.GetInt("x")==x)
			{

				for(i= 0;i<xi[other_player];i++)
				{

					if(possi_x[other_player,i] == PlayerPrefs.GetInt("x"))
					{

						tog1 = false;
						debug = possi_y[cp1,i];
						debug1= PlayerPrefs.GetInt("y");
						Debug.Log(cp1+ "  Y 2"+gameObject.transform.name + "  "+possi_y[other_player,i] +"  "+PlayerPrefs.GetInt("y") +"  "+y);
						if(((possi_y[other_player,i] < PlayerPrefs.GetInt("y")) && (PlayerPrefs.GetInt("y") < y) ) || ((possi_y[other_player,i] > PlayerPrefs.GetInt("y") ) && (PlayerPrefs.GetInt("y") > y)))
						{

							Debug.Log(cp1+ "  Y 2"+gameObject.transform.name + "  "+possi_y[other_player,i] +"  "+PlayerPrefs.GetInt("y") +"  "+y);
							possible[other_player] = possible[other_player]-1;
							possi_x[other_player,i] = possi_x[other_player,xi[other_player]-1];
							possi_y[other_player,i] = possi_y[other_player,xi[other_player]-1];
							possi_z[other_player,i] = possi_z[other_player,xi[other_player]-1];
							xi[other_player]=xi[other_player]-1;

							//tog = true;

						}
						else if(((PlayerPrefs.GetInt("y") < possi_y[other_player,i]) && (possi_y[other_player,i] < y))  || ((PlayerPrefs.GetInt("y") > possi_y[other_player,i] ) && (possi_y[other_player,i] > y)))
						{

							tog2 = true;

						}
						tog = true;
						tog1 = false;  

					}
					else
					{

						if(tog1&& cp1 > 2)tog = false;

					}

				}

			}
			
			if(PlayerPrefs.GetInt("y")==y)
			{

				for(i= 0;i<xi[other_player];i++)
				{

					if(possi_y[other_player,i] == PlayerPrefs.GetInt("y"))
					{

						debug = possi_x[cp1,i];
						debug1= PlayerPrefs.GetInt("x");
						if((possi_x[other_player,i] < (PlayerPrefs.GetInt("x")) && (PlayerPrefs.GetInt("x") < x)) || (possi_x[other_player,i] > (PlayerPrefs.GetInt("x")) && (PlayerPrefs.GetInt("x") > x)))
						{

							Debug.Log(cp1+ "  Y 2"+gameObject.transform.name);
							possible[other_player] = possible[other_player]-1;
							possi_x[other_player,i] = possi_x[other_player,xi[other_player]-1];
							possi_y[other_player,i] = possi_y[other_player,xi[other_player]-1];
							possi_z[other_player,i] = possi_z[other_player,xi[other_player]-1];
							xi[other_player]=xi[other_player]-1;

							//tog = true;

						}
						else if(((PlayerPrefs.GetInt("x") < possi_x[other_player,i]) && (possi_x[other_player,i] < x))  || ((PlayerPrefs.GetInt("x") > possi_x[other_player,i] ) && (possi_x[other_player,i] > x)))
						{

							tog2 = true;

						}
						tog = true;
						tog1 = false;  

					}
					else
					{

						if(tog1&& cp1 > 2)tog = false;

					}

				}

			}

			if(PlayerPrefs.GetInt("z")==z)
			{

				for(i= 0;i<xi[other_player];i++)
				{

					if(possi_z[other_player,i] == PlayerPrefs.GetInt("z"))
					{

						debug = possi_z[cp1,i];
						debug1= PlayerPrefs.GetInt("z");
						if((possi_y[other_player,i] < (PlayerPrefs.GetInt("y")) && (PlayerPrefs.GetInt("y") < y)) || (possi_y[other_player,i] > (PlayerPrefs.GetInt("y")) && (PlayerPrefs.GetInt("y") > y)))
						{

							Debug.Log(cp1+ "  Y 2"+gameObject.transform.name);
							possible[other_player] = possible[other_player]-1;
							possi_x[other_player,i] = possi_x[other_player,xi[other_player]-1];
							possi_y[other_player,i] = possi_y[other_player,xi[other_player]-1];
							possi_z[other_player,i] = possi_z[other_player,xi[other_player]-1];
							xi[other_player]=xi[other_player]-1;



						}
						else if(((PlayerPrefs.GetInt("y") < possi_y[other_player,i]) && (possi_y[other_player,i] < y))  || ((PlayerPrefs.GetInt("y") > possi_y[other_player,i] ) && (possi_y[other_player,i] > y)))
						{

							tog2 = true;

						}
						 tog = true;
						 tog1 = false;

					}
					else
					{

						if(tog1 && cp1 > 2)tog = false;

					}  

				}

			}
			}


			other_player = other_player + 1;
			other_player =other_player % total_players;
			if(other_player== -1)other_player = total_players-1;

		}

		if(possible[cp%total_players] > 0)
		{

			if(!(PlayerPrefs.GetInt("x")==x && PlayerPrefs.GetInt("y")==y && PlayerPrefs.GetInt("z")==z))rend.sharedMaterial = transmaterial[cp%total_players];

		}
		else
		{

			rend.sharedMaterial = white;

		}


		if((PlayerPrefs.GetInt("x")==x || PlayerPrefs.GetInt("y")==y || PlayerPrefs.GetInt("z")==z) && !(PlayerPrefs.GetInt("x")==x1 && PlayerPrefs.GetInt("y")==y1 && PlayerPrefs.GetInt("z")==z1) )
		{

			//Debug.Log(cp1);

			if(tog && !(PlayerPrefs.GetInt("x") == x && PlayerPrefs.GetInt("y") == y && PlayerPrefs.GetInt("z") == z) && !tog2)
			{

				possible[cp1] = possible[cp1]+1;
				possi_x[cp1,xi[cp1]]=PlayerPrefs.GetInt("x");
				possi_y[cp1,xi[cp1]]=PlayerPrefs.GetInt("y");
				possi_z[cp1,xi[cp1]]=PlayerPrefs.GetInt("z");
				xi[cp1]=xi[cp1]+1;
				//Debug.Log("Hi i m true Player :- " + cp.ToString() + " " + gameObject.transform.name);
				x1 = PlayerPrefs.GetInt("x");
				y1 = PlayerPrefs.GetInt("y");
				z1 = PlayerPrefs.GetInt("z");



			}




		}



		wait();
		if(Input.GetMouseButton(0)	&&	occupied == false && (cp < total_players || possible[cp%total_players]>0))
		{

			ray = Camera.main.ScreenPointToRay(Input.mousePosition);

			//Debug.Log("hekkko");
			if(Physics.Raycast(ray,rayCastHit))
			{


				if(rayCastHit.transform.name == gameObject.transform.name)
				{

					PlayerPrefs.SetInt("x",x);
					PlayerPrefs.SetInt("y",y);
					PlayerPrefs.SetInt("z",z);
				    occupied = true;
				    Debug.Log(cp.ToString());
				   	rend.sharedMaterial = material[cp%total_players];
				   	/*for(var rend2 : Renderer in rend1)
				   	{

						rend2.sharedMaterial = material_transclucent[cp];

				   	}*/
				   	cp++;
				   	wait();
				   //	PlayerPrefs.SetInt("x",999);
				   //	PlayerPrefs.SetInt("y",999);
				   //	PlayerPrefs.SetInt("z",999);
				   	PlayerPrefs.SetInt("CurrentPlayer",cp);

				}


			}



		}

	}


}
function	wait()
{

	yield	WaitForSeconds(3);

}