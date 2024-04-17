# workZone.json

[**`back`**](../Readme.md)

````json lines
{
  "version": "2",
  // Never touch this value. It is needed internally
  "workZones": [
    {
      "m_CommandUID": 74,
      // The command Id that the char execute when he starts to work. List you will find below.
      "position": [
        // Where the player can do the work
        7592.0,
        6.0,
        3483.0
      ],
      "range": 10.0,
      // The range to the configure position
      "timeToHarvestPerItemInSeconds": 4,
      // How long it takes to get one item
      "damagePerHarvestItem": 0,
      // The damage that the used tool become
      "harvestItemToolRelation": [
        {
          "itemsThatCanHarvest": [
            // Items that the player can get, he only get one of these items
            "Apple"
          ],
          "itemsThatNeededForHarvest": [
            // Items that the player can use to harvest, player need only one of these items
            "CombatKnife",
            "HuntingKnife",
            "KitchenKnife",
            "SteakKnife"
          ]
        }
      ],
      "zoneDisplayName": "#Apple_orchard",
      // The name of the zone 
      "isLegalJob": 1,
      // Is a legal job. Illegal jobs can not be done by every job. 1 = is legal 0 = is illegal
      "showNotOnMapInAlmanac": 0
      // Position will hide on map in almanac 1 = on 0= off
    }
  ]
}

````

## Command Ids

````
CMD_ACTIONFB_DRINK              = 0,
CMD_ACTIONFB_EAT               = 1,
CMD_ACTIONFB_CATCHRAIN          = 3,
CMD_ACTIONFB_ITEM_TUNE          = 9,
CMD_ACTIONFB_GIVEL             = 10,
CMD_ACTIONFB_GIVER             = 11,
CMD_ACTIONFB_FILLMAG            = 13,
CMD_ACTIONFB_EMPTYMAG           = 14,
CMD_ACTIONFB_DRINKPOND          = 50,
CMD_ACTIONFB_DRINKWELL          = 51,
CMD_ACTIONFB_FILLBOTTLEWELL          = 52,
CMD_ACTIONFB_FIREESTINGUISHER     = 53,
CMD_ACTIONFB_WRING             = 54,
CMD_ACTIONFB_FISHING            = 56,
CMD_ACTIONFB_CPR               = 57,
CMD_ACTIONFB_BANDAGE            = 58,
CMD_ACTIONFB_CRAFTING           = 59,
CMD_ACTIONFB_INTERACT           = 60,
CMD_ACTIONFB_FORCEFEED          = 62,
CMD_ACTIONFB_BANDAGETARGET       = 63,
CMD_ACTIONFB_SPRAYPLANT             = 64,
CMD_ACTIONFB_STARTFIRE          = 65,
CMD_ACTIONFB_ANIMALSKINNING          = 66,
CMD_ACTIONFB_WASHHANDSWELL       = 67,
CMD_ACTIONFB_WASHHANDSPOND       = 68,
CMD_ACTIONFB_SALINEBLOODBAGTARGET  = 69,
CMD_ACTIONFB_SALINEBLOODBAG          = 70,
CMD_ACTIONFB_STITCHUPSELF        = 71,
CMD_ACTIONFB_VOMIT             = 72,
CMD_ACTIONFB_UNRESTRAINTARGET     = 73,
CMD_ACTIONFB_RESTRAINTARGET          = 74,
CMD_ACTIONFB_CHECKPULSE             = 76,
CMD_ACTIONFB_CLEANWOUNDSTARGET    = 78,
CMD_ACTIONFB_COLLECTBLOODSELF     = 81,
CMD_ACTIONFB_EMPTY_VESSEL        = 82,
CMD_ACTIONFB_OPENITEM           = 83,
CMD_ACTIONFB_HACKBUSH           = 85,
CMD_ACTIONFB_HACKTREE           = 86,
CMD_ACTIONFB_TAKETEMPSELF        = 87,
CMD_ACTIONFB_DIG               = 88,
CMD_ACTIONFB_DIGUPCACHE             = 89,
CMD_ACTIONFB_DIGMANIPULATE       = 90,
CMD_ACTIONFB_DEPLOY_HEAVY        = 95,
CMD_ACTIONFB_DEPLOY_2HD             = 96,
CMD_ACTIONFB_DEPLOY_1HD             = 97,
CMD_ACTIONFB_BLOWFIREPLACE       = 98,
CMD_ACTIONFB_VIEWMAP            = 99,
CMD_ACTIONFB_VIEWCOMPASS         = 100,
CMD_ACTIONFB_FILLBOTTLEPOND          = 101,
CMD_ACTIONFB_PLACING_HEAVY       = 102,
CMD_ACTIONFB_PLACING_2HD         = 103,
CMD_ACTIONFB_PLACING_1HD         = 104,
CMD_ACTIONFB_CUTBARK            = 105,
CMD_ACTIONFB_VIEWNOTE           = 106,
CMD_ACTIONFB_SEARCHINVENTORY      = 107,
CMD_GESTUREFB_LOOKOPTICS         = 108,
CMD_ACTIONFB_MINEROCK           = 109,
CMD_ACTIONFB_RAISEITEM          = 110,
CMD_ACTIONFB_RESTRAINEDSTRUGGLE       = 111,
CMD_ACTIONFB_RESTRAINSELF        = 112,
CMD_ACTIONFB_ASSEMBLE           = 113,
CMD_ACTIONFB_DISASSEMBLE         = 114,
````