# LoadOut.json

````json lines
{
  "version": "2", // Never touch this value. It is needed internally
  "jobId": "Cop", // Never touch this value. It is needed internally
  "loadOutCategories": [ // Load out categories
    {
      "name": "cat1", // The name of the Category
      "items": [ // The items
        {
          "type": "PoliceCap", // The type of the object, see in types.xml
          "displayName": "", // This value will used only internally. Leave it blank 
          "attachments": [],  // Can have attachments, See example below
          "quickBarEntityShortcut": -1 // The number in the player quick bar. -1 = no Position 1,2,3,.. The position in quick bar
        },
        {
          "type": "PoliceJacketOrel",
          "displayName": "",
          "attachments": [ // Example for attachments, is the same as the parent item
            {
              "type": "Deagle",
              "displayName": "",
              "attachments": [], // Attachment can also have attachments 
              "quickBarEntityShortcut": -1
            },
            {
              "type": "Mag_Deagle_9rnd",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "Mag_Deagle_9rnd",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "Mag_Deagle_9rnd",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "Mag_Deagle_9rnd",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            }
          ],
          "quickBarEntityShortcut": -1
        },
        {
          "type": "PolicePantsOrel",
          "displayName": "",
          "attachments": [
            {
              "type": "SodaCan_Cola",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "SodaCan_Cola",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "SpaghettiCan",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            },
            {
              "type": "Apple",
              "displayName": "",
              "attachments": [],
              "quickBarEntityShortcut": -1
            }
          ],
          "quickBarEntityShortcut": -1
        },
        {
          "type": "PoliceVest",
          "displayName": "",
          "attachments": [],
          "quickBarEntityShortcut": -1
        },
        {
          "type": "JungleBoots_Black",
          "displayName": "",
          "attachments": [],
          "quickBarEntityShortcut": -1
        }
      ]
    }
  ],
  "loadOutPosition": [
    {
      "position": [ // Position of load out object
        10622.4921875,
        6.373448848724365,
        1879.2449951171876
      ],
      "orientation": [ // Orianttation of load out object
        -43.0,
        0.0,
        0.0
      ]
    }
  ]
}

````