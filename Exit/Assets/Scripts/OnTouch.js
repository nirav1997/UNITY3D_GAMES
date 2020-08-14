function OnTriggerEnter(collision: Collider) 
{
	if(collision.gameObject.tag == "Ball")
	{
	
		PlayerPrefs.SetInt("GameOver",1);
		
	}
		
}