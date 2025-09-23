# CarTuningConfig.json:

```json lines

{
  "options": [
    {
      "car": "Hatchback_02", // This string must be contains in all matching cars. This match for example for Hatchback_02, Hatchback_02_Blue and Hatchback_02_Black
      "targetCars": [ // Describe the target car types after tuning
        {
          "type": "Hatchback_02", // The type name of vehicle
          "tunedAttachments": [ // which attachment will included
            {
              "positionName": "hood", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Hood" // The type that will replaced
            },
            {
              "positionName": "trunk", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Trunk" // The type that will replaced
            }
          ]
        },
        {
          "type": "Hatchback_02_Blue",  // The type name of vehicle
          "tunedAttachments": [ // which attachment will included
            {
              "positionName": "hood", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Hood_Blue" // The type that will replaced
            },
            {
              "positionName": "trunk", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Trunk_Blue" // The type that will replaced
            }
          ]
        },
        {
          "type": "Hatchback_02_Black",  // The type name of vehicle
          "tunedAttachments": [ // which attachment will included
            {
              "positionName": "hood", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Hood_Black" // The type that will replaced
            },
            {
              "positionName": "trunk", // a free name, you have to reuse it in all other target cars
              "type": "Hatchback_02_Trunk_Black" // The type that will replaced
            }
          ]
        }
      ]
    }
  ],
  "tuner": [  // Tuner position configs
    {
      "position": [
        6572.2001953125,
        6.0,
        2466.699951171875
      ],
      "orientation": [
        0.0,
        0.0,
        0.0
      ],
      "playerIdsThatCanUsePosition": [ // Which players have access to tuning point
        "yq4fOC-DbZMpRXQ8NHEL1VPSTG2elJqrU1pMdqSGrN0=" // the player dayz id, 
      ]
    }
  ],
  "version": "1"
}
```