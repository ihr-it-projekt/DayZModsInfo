# Config files

## dayZCasinoConfigV2.json

````json lines
{
  // You can configure the currency that is needed to play. You can use for example also MoneyRuble instead of CasinoChips. First value is the Object name the second value is the value of currency. Default Object is CasinoChips
  "currencyValues": {
    "CasinoChip": 1,
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
  "configVersion": 4,
  // config file version NEVER CHANGE THIS it is needed to automaticaly update the config file when new values will added
  "enablePlayLogs": 1
  // here you can enable game logs. 1=on 0=off In DayZCasionV2 config folder will created for every day a new file when player plays a game. The name of the file is yeahr-month-day_play.csv for example "2020-2-1_play.csv in this file are four columns "time" "game" "playerid" and "win/lose". Example: 15:43:22 ;BlackJack;76561198196317725;15; 
}

````
