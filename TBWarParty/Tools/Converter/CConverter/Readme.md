[back](../../../Readme.md)

# C File Converter

This tool search for lines like 
`SpawnObject( "OV_Mil_Wall_4Blocks", "10453.599609 12.000000 10998.599609", "-14.001267 0.000000 0.000000" );` in a *.c file
and converts it into the correct JSON format

## How to use?

- Open `index.html` in Browser of your choice
- make sure javascript is activated (is by default)
- click on "Select file"
- select the file in the window that was opened
- click on open
- the converted file will automatically be saved in your download folder

How to continue... ? See here: [ArenaBuildingConfig.md](../../../Configs/ArenaBuildingConfig.md)

## Input Format

````*.c
void SpawnObject(string objType, vector objPos, vector objOrientation)
{
	Object m_Building = Object.Cast(GetGame().CreateObject(objType, objPos));
	if (m_Building == null) return;
	m_Building.SetAffectPathgraph(true, false);
	GetGame().GetCallQueue(CALL_CATEGORY_SYSTEM).CallLater(GetGame().UpdatePathgraphRegionByObject, 100, false, m_Building);
	m_Building.SetPosition(objPos);
	m_Building.SetOrientation(objOrientation);
}
void main()
{
    SpawnObject( "OV_Mil_Wall_4Blocks", "10453.599609 12.000000 10998.599609", "-14.001267 0.000000 0.000000" );
	SpawnObject( "OV_Mil_Wall_Corner", "10467.099609 12.000000 10968.599609", "-104.004692 0.000000 -0.000000" );
	SpawnObject( "OV_Mil_Wall_Corner", "10451.400391 12.000000 11031.500000", "-14.001267 0.000000 0.000000" );
	SpawnObject( "OV_Mil_Wall_4Blocks", "10481.400391 12.000000 11045.000000", "75.995300 0.000000 -0.000000" );
	
	....
}

....
````

[back](../../../Readme.md)
