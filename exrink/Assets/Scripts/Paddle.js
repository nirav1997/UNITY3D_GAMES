private	var	ray	:	Ray;
private	var	rayCastHit	:	RaycastHit;

var	b	:	boolean=true;
var	b1	:	boolean=true;

function	Update()
{


	if(transform.position.y > -4.31)
	{

		b1 = true;

	}
	if(transform.position.y < 4.52)
	{

		b = true;

	}
	if(transform.name == "Paddel")
	{

		if(Input.GetMouseButton(0))	
		{
			
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);

			if(Physics.Raycast(ray,rayCastHit))
			{
	
				if(rayCastHit.transform.name == "up" && PlayerPrefs.GetInt("GameOver")==0)up();
				if(rayCastHit.transform.name == "down" && PlayerPrefs.GetInt("GameOver")==0)down();
	
			}
	

		}


	}

	if(transform.name == "Paddel1")
	{

		if(Input.GetMouseButton(0))	
		{
			
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);

			if(Physics.Raycast(ray,rayCastHit))
			{
	
				if(rayCastHit.transform.name == "up" && PlayerPrefs.GetInt("GameOver")==0)up1();
				if(rayCastHit.transform.name == "down" && PlayerPrefs.GetInt("GameOver")==0)down1();
	
			}
	

		}


	}



}

function up()
{

	if(b)transform.position.y += 0.1;
	yield	WaitForSeconds(0.1);
	if(transform.position.y > 4.52)
	{

		transform.position.y = 4.52;
		b = false;

	}

}

function up1()
{

	if(b1)transform.position.y -= 0.1;
	yield	WaitForSeconds(0.1);
	if(transform.position.y < -4.31)
	{

		transform.position.y = -4.31;
		b1 = false;

	}

}

function down1()
{

	if(transform.position.y < -0.4)
	{

		transform.position.y +=0.1;
		yield	WaitForSeconds(0.1);

	}
	else
	{

		transform.position.y =-0.4;

	}

}

function down()
{

	if(transform.position.y > 0.3)
	{
		transform.position.y -=0.1;
		yield	WaitForSeconds(0.1);

	}
	else
	{

		transform.position.y =0.3;

	}

}