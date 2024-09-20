# DayZCasinoV2

## Steamlink
https://steamcommunity.com/sharedfiles/filedetails/?id=1940425039

## How to configure

1. Copy the mod to your server
2. Copy from mod "DayZCasinoV2\Keys" folder the key into "DayZServer\keys"
3. Go to Folder: DayZServer\mpmissions\dayzOffline.chernarusplus\db
4. Open "types.xml" in editor and add between <types></types> the content of:
```xml
<type name="CasinoChip">
    <nominal>150</nominal>
    <lifetime>7200</lifetime>
    <restock>0</restock>
    <min>100</min>
    <quantmin>5</quantmin>
    <quantmax>100</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="shelves"/>
    <usage name="Town"/>
    <usage name="Village"/>
    <usage name="Hunting"/>
</type>
<type name="CasinoChip_Red">
    <nominal>150</nominal>
    <lifetime>7200</lifetime>
    <restock>0</restock>
    <min>100</min>
    <quantmin>5</quantmin>
    <quantmax>100</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="shelves"/>
    <usage name="Town"/>
    <usage name="Village"/>
    <usage name="Hunting"/>
</type>
<type name="CasinoChip_Green">
    <nominal>150</nominal>
    <lifetime>7200</lifetime>
    <restock>0</restock>
    <min>100</min>
    <quantmin>5</quantmin>
    <quantmax>100</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="shelves"/>
    <usage name="Town"/>
    <usage name="Village"/>
    <usage name="Hunting"/>
</type>
<type name="CasinoChip_Blue">
    <nominal>150</nominal>
    <lifetime>7200</lifetime>
    <restock>0</restock>
    <min>100</min>
    <quantmin>5</quantmin>
    <quantmax>100</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="shelves"/>
    <usage name="Town"/>
    <usage name="Village"/>
    <usage name="Hunting"/>
</type>
<type name="CasinoChip_Yellow">
    <nominal>150</nominal>
    <lifetime>7200</lifetime>
    <restock>0</restock>
    <min>100</min>
    <quantmin>5</quantmin>
    <quantmax>100</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="shelves"/>
    <usage name="Town"/>
    <usage name="Village"/>
    <usage name="Hunting"/>
</type>
````
5. save and close the file
6. Add chips to Trader config like (you can also find another way to bring Casino Chips to your players)
```xml
   <Category> CasinoChips
   CasinoChips,                                                1,        1,        1
   CasinoChips,                                                5,        5,        5
   CasinoChips,                                                10,        10,        10
   CasinoChips,                                                25,        25,        25
   CasinoChips,                                                50,        50,        50
   CasinoChips,                                                100,    100,    100
   CasinoChips,                                                500,    500,    500
   CasinoChips,                                                1000,    1000,    1000
   CasinoChips,                                                5000,    5000,    5000
   CasinoChips,                                                10000,    10000,    10000
   </Category>
```
7. Add "@DayZCasinoV2" after "@CF" to your server start script
8. start server first time.
9. wait for boot finished
10. stop server
11. go to configured server profile folder, there are now a new folder named "DayZCasinoV2". This folder contains 2 json files "dayZCasinoConfigV2.json" and "dayZCasinoJackpot.json"

**Attention: please don't use that config here in readme. It is only for explanation and the server can not load this config file. The server creates at first start a new config file.**

## Config files

### dayZCasinoConfigV2.json

````json lines
{
  // You can configure the currency that is needed to play. You can use for example also MoneyRuble instead of CasinoChips. First value is the Object name the second value is the value of currency. Default Object is CasinoChips
  "currencyValues": {
    "CasinoChips": 1,
    "CasinoChip_Green": 100,
    "CasinoChip_Blue": 1000,
    "CasinoChip_Red": 10,
    "CasinoChip_Yellow": 10000,
    // Example for MoneyRuble:
    "MoneyRuble1": 1,
    "MoneyRuble5": 5,
    "MoneyRuble10": 10,
    "MoneyRuble25": 25,
    "MoneyRuble50": 50,
    "MoneyRuble100": 100
  },
  "luckyWheelSettings": {
    // settings for lucky wheel
    "enabled": 1,
    // 1 = ON 0 = OFF
    "gamePositions": [
      // here are the positions of the game machine, you can add more then one
      // start of first position
      {
        "pos": [
          8349.44,
          293.181,
          5973.5
        ],
        "orientation": [
          97,
          0,
          0
        ]
      },
      //end of first position
      // start of second position
      {
        "pos": [
          8349.44,
          293.181,
          5970.5
        ],
        "orientation": [
          97,
          0,
          0
        ]
      }
      // end of second position
    ],
    "gameObject": "Casino_Pacman",
    // the game object that will placed in landscape
    "chipsBet": 50,
    // Bet per round
    "minJackpot": 500,
    "maxJackpot": 10000,
    "wheelNumberConfigs": [
      // here you find the quote for numbers on lucky wheel. All numbers from 0 - 35 must be configured. You don´t can use more then the number 35. 0 quote means you loose. All others means you win. The number 33 is the default Jackpot field and can not be override.
      {
        "number": 0,
        "quote": 0
      },
      {
        "number": 2,
        "quote": 0
      },
      {
        "number": 4,
        "quote": 0
      },
      {
        "number": 6,
        "quote": 0
      },
      {
        "number": 8,
        "quote": 0
      },
      {
        "number": 10,
        "quote": 0
      },
      {
        "number": 12,
        "quote": 0
      },
      {
        "number": 14,
        "quote": 0
      },
      {
        "number": 16,
        "quote": 0
      },
      {
        "number": 18,
        "quote": 0
      },
      {
        "number": 20,
        "quote": 0
      },
      {
        "number": 22,
        "quote": 0
      },
      {
        "number": 24,
        "quote": 0
      },
      {
        "number": 26,
        "quote": 0
      },
      {
        "number": 28,
        "quote": 0
      },
      {
        "number": 30,
        "quote": 0
      },
      {
        "number": 32,
        "quote": 0
      },
      {
        "number": 34,
        "quote": 0
      },
      {
        "number": 1,
        "quote": 1.5
      },
      {
        "number": 7,
        "quote": 1.5
      },
      {
        "number": 13,
        "quote": 1.5
      },
      {
        "number": 19,
        "quote": 1.5
      },
      {
        "number": 25,
        "quote": 1.5
      },
      {
        "number": 31,
        "quote": 1.5
      },
      {
        "number": 5,
        "quote": 5
      },
      {
        "number": 3,
        "quote": 0
      },
      {
        "number": 9,
        "quote": 2
      },
      {
        "number": 23,
        "quote": 3
      },
      {
        "number": 15,
        "quote": 0
      },
      {
        "number": 33,
        "quote": 99
      },
      {
        "number": 11,
        "quote": 0
      },
      {
        "number": 17,
        "quote": 0
      },
      {
        "number": 21,
        "quote": 2
      },
      {
        "number": 27,
        "quote": 0
      },
      {
        "number": 29,
        "quote": 2
      },
      {
        "number": 31,
        "quote": 0
      },
      {
        "number": 35,
        "quote": 2
      }
    ]
  },
  "blackJackSettings": {
    "enabled": 1,
    // 1 = ON 0 = OFF
    "gamePositions": [
      // here are the positions of the game machine, you can add more then one
      {
        "pos": [
          8349.77,
          293.181,
          5976
        ],
        "orientation": [
          49,
          0,
          0
        ]
      }
    ],
    "gameObject": "Casino_Pacman",
    // the game object that will placed in landscape
    "minBet": 10,
    "maxBet": 10000,
    "winFactor": 1.5,
    // the factor what a player can win
    "winFactorBlackJack": 2.0
    // the factor what a player wins when he has a blackjack
  },
  "diceSettings": {
    "enabled": 1,
    "gamePositions": [
      // here are the positions of the game machine, you can add more then one
      {
        "pos": [
          8345.3,
          293.181,
          5976.67
        ],
        "orientation": [
          5,
          0,
          0
        ]
      }
    ],
    "gameObject": "Casino_Pacman",
    // the game object that will placed in landscape
    "minBet": 10,
    "maxBet": 10000,
    "diceWinFactor": 2
    // Factor for multiply the bet when a player win
  },
  "ratRaceSettings": {
    "enabled": 1,
    "gamePositions": [
      // here are the positions of the game machine, you can add more then one
      {
        "pos": [
          8349.44,
          293.181,
          5971.5
        ],
        "orientation": [
          97,
          0,
          0
        ]
      }
    ],
    "gameObject": "Casino_Pacman",
    // the game object that will placed in landscape
    "minBet": 10,
    "maxBet": 10000,
    "maxWinQouta": 5
    // max Factor for multiply the bet when a player win
  },
  "configVersion": 3,
  // config file version NEVER CHANGE THIS it is needed to automaticaly update the config file when new values will added
  "enablePlayLogs": 1
  // here you can enable game logs. 1=on 0=off In DayZCasionV2 config folder will created for every day a new file when player plays a game. The name of the file is yeahr-month-day_play.csv for example "2020-2-1_play.csv in this file are four columns "time" "game" "playerid" and "win/lose". Example: 15:43:22 ;BlackJack;76561198196317725;15; 
}

````
