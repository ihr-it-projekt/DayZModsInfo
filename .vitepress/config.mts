import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",

  title: "by the Buster",
  description: "Docs for The Mod Base mods",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', alt: 'The Mod Base' },
    nav: [
      { text: 'Home', link: './' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'General Setup for Mods', link: '/The Mod Base/README.md', collapsed: true, items: [
              { text: 'Add a Mod to a Server', link: '/The Mod Base/AddToServer.md' },
              { text: 'Download a Mod', link: '/The Mod Base/Download.md' },
              { text: 'Publish a Server Mod Package', link: '/The Mod Base/PublishAServerModPackage.md' },
            ]
          },
          {
            text: 'Mods', link: '/The Mod Base/README.md', collapsed: true, items: [
              {
                text: 'BasicNeeds', link: '/BasicNeeds/Readme.md', collapsed: true, items: [
                  { text: 'FAQ', link: '/BasicNeeds/FAQ.md' },
                  { text: 'Types', link: '/BasicNeeds/Types.md' },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'BodyZoneConfigs', link: '/BasicNeeds/Configs/BodyZoneConfigs.md' },
                      { text: 'BodyZones', link: '/BasicNeeds/Configs/BodyZones.md' },
                      { text: 'Config', link: '/BasicNeeds/Configs/Config.md' },
                      { text: 'DiseaseConfig', link: '/BasicNeeds/Configs/DiseaseConfig.md' },
                      { text: 'DryerConfig', link: '/BasicNeeds/Configs/DryerConfig.md' },
                      { text: 'StaticDryerConfig', link: '/BasicNeeds/Configs/StaticDryerConfig.md' },
                      { text: 'StaticWashingPlaces', link: '/BasicNeeds/Configs/StaticWashingPlaces.md' },
                      { text: 'WashingMachineConfig', link: '/BasicNeeds/Configs/WashingMachineConfig.md' },
                    ]
                  }
                ]
              },
              { text: 'Carry', link: '/Carry/Readme.md' },
              {
                text: 'DailyReward', link: '/DailyReward/Readme.md', collapsed: true, items: [
                  { text: 'FAQ', link: '/DailyReward/FAQ.md' },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'Example_Item_1', link: '/DailyReward/Configs/Example_Item_1.md' },
                      { text: 'Example_Level_Condition_1', link: '/DailyReward/Configs/Example_Level_Condition_1.md' },
                      { text: 'General', link: '/DailyReward/Configs/General.md' },
                      { text: 'Level_1_Example_Reward_1', link: '/DailyReward/Configs/Level_1_Example_Reward_1.md' },
                      { text: 'Logger', link: '/DailyReward/Configs/Logger.md' },
                      { text: 'RewardLevels', link: '/DailyReward/Configs/RewardLevels.md' },
                    ]
                  }
                ]
              },
              {
                text: 'DayZCasinoV2', link: '/DayZCasinoV2/Readme.md', collapsed: true, items: [
                  { text: 'DayZCasinoV2Config', link: '/DayZCasinoV2/Configs/DayZCasinoV2Config.md' },
                  { text: 'Types', link: '/DayZCasinoV2/Configs/Types.md' },
                ]
              },
              {
                text: 'DayZLife', link: '/DayZLife/Readme.md', collapsed: true, items: [
                  { text: 'SettingUpAServer', link: '/DayZLife/SettingUpAServer.md' },
                  { text: 'Keybindings', link: '/DayZLife/Keybindings.md' },
                  { text: 'Types', link: '/DayZLife/Types.md' },
                  {
                    text: 'Configs', collapsed: true, link: '/DayZLife/Configs/Readme.md', items: [
                      { text: 'adminIds', link: '/DayZLife/Configs/adminIds.md' },
                      { text: 'arrest', link: '/DayZLife/Configs/arrest.md' },
                      { text: 'banking', link: '/DayZLife/Configs/banking.md' },
                      { text: 'BaseBuilding', link: '/DayZLife/Configs/BaseBuilding.md' },
                      { text: 'CarConfig', link: '/DayZLife/Configs/CarConfig.md' },
                      { text: 'CarTuningConfig', link: '/DayZLife/Configs/CarTuningConfig.md' },
                      { text: 'CrimeConfig', link: '/DayZLife/Configs/CrimeConfig.md' },
                      { text: 'house', link: '/DayZLife/Configs/house.md' },
                      { text: 'licence', link: '/DayZLife/Configs/licence.md' },
                      { text: 'logger', link: '/DayZLife/Configs/logger.md' },
                      { text: 'message', link: '/DayZLife/Configs/message.md' },
                      { text: 'paycheck', link: '/DayZLife/Configs/paycheck.md' },
                      { text: 'traderCategories', link: '/DayZLife/Configs/traderCategories.md' },
                      { text: 'traderPositions', link: '/DayZLife/Configs/traderPositions.md' },
                      { text: 'workZone', link: '/DayZLife/Configs/workZone.md' },
                      {
                        text: 'job', collapsed: true, items: [
                          { text: 'LoadOut', link: '/DayZLife/Configs/job/LoadOut.md' },
                          { text: 'SpawnPoints', link: '/DayZLife/Configs/job/SpawnPoints.md' },
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                text: 'DeathInsurance', link: '/DeathInsurance/Readme.md', collapsed: true, items: [
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'Config', link: '/DeathInsurance/Configs/Config.md' },
                      { text: 'InsurancePointConfig', link: '/DeathInsurance/Configs/InsurancePointConfig.md' },
                      { text: 'Logger', link: '/DeathInsurance/Configs/Logger.md' },
                    ]
                  },
                  { text: 'Types', link: '/DeathInsurance/Types/types.md' },
                ]
              },
              {
                text: 'GlobalConfigs', link: '/GlobalConfigs/Readme.md', collapsed: true, items: [
                  { text: 'AdminConfig', link: '/GlobalConfigs/AdminConfig.md' },
                  { text: 'CurrencyConfig', link: '/GlobalConfigs/CurrencyConfig.md' },
                  { text: 'Logger', link: '/GlobalConfigs/Logger.md' },
                  { text: 'Premium', link: '/GlobalConfigs/Premium.md' },
                  { text: 'PremiumConfig', link: '/GlobalConfigs/PremiumConfig.md' },
                  { text: 'TBKeyBindsConfig', link: '/GlobalConfigs/TBKeyBindsConfig.md' },
                  { text: 'VehicleSpawnConfig', link: '/GlobalConfigs/VehicleSpawnConfig.md' },
                ]
              },
              {
                text: 'RealEstate', link: '/RealEstate/Readme.md', collapsed: true, items: [
                  { text: 'GlobalRaidConfig', link: '/RealEstate/Configs/GlobalRaidConfig.md' },
                  { text: 'house', link: '/RealEstate/Configs/house.md' },
                  { text: 'HouseDefinition', link: '/RealEstate/Configs/HouseDefinition.md' },
                  { text: 'houseExtension', link: '/RealEstate/Configs/houseExtension.md' },
                  { text: 'logger', link: '/RealEstate/Configs/logger.md' },
                  { text: 'SpawnPoint', link: '/RealEstate/Configs/SpawnPoint.md' },
                ]
              },
              {
                text: 'RevivePlayer', link: '/RevivePlayer/Readme.md', collapsed: true, items: [
                  { text: 'FAQ', link: '/RevivePlayer/FAQ.md' },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'logger', link: '/RevivePlayer/Configs/logger.md' },
                      { text: 'reviveConfig', link: '/RevivePlayer/Configs/reviveConfig.md' },
                    ]
                  }
                ]
              },
              {
                text: 'TBCarDealer', link: '/TBCarDealer/Readme.md', collapsed: true, items: [
                  { text: 'Types', link: '/TBCarDealer/Types.md' },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'CarConfigs', link: '/TBCarDealer/Configs/CarConfigs.md' },
                      { text: 'DealerPointConfig', link: '/TBCarDealer/Configs/DealerPointConfig.md' },
                      { text: 'DealerPointsConfig', link: '/TBCarDealer/Configs/DealerPointsConfig.md' },
                      { text: 'Logger', link: '/TBCarDealer/Configs/Logger.md' },
                      { text: 'PriceItems', link: '/TBCarDealer/Configs/PriceItems.md' },
                    ]
                  },
                  {
                    text: 'ConfigEditor', collapsed: true, items: [
                      { text: 'FAQ', link: '/TBCarDealer/ConfigEditor/FAQ.md' },
                      { text: 'Readme', link: '/TBCarDealer/ConfigEditor/Readme.md' },
                    ]
                  }
                ]
              },
              { text: 'TBItemExchange', link: '/TBItemExchange/README.md' },
              {
                text: 'TBJewelsOfSurvival', link: '/TBJewelsOfSurvival/Readme.md', collapsed: true, items: [
                  { text: 'Effects', link: '/TBJewelsOfSurvival/Effects.md' },
                  { text: 'Types', link: '/TBJewelsOfSurvival/Types.md' },
                  {
                    text: 'Rings', collapsed: true, items: [
                      { text: 'TBJOFRingOfAttack', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfAttack.md' },
                      { text: 'TBJOFRingOfDefense', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfDefense.md' },
                      { text: 'TBJOFRingOfDragonBlood', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfDragonBlood.md' },
                      { text: 'TBJOFRingOfEagleEye', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfEagleEye.md' },
                      { text: 'TBJOFRingOfLife', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfLife.md' },
                      { text: 'TBJOFRingOfOwl', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfOwl.md' },
                      { text: 'TBJOFRingOfPerseverance', link: '/TBJewelsOfSurvival/Rings/TBJOFRingOfPerseverance.md' },
                    ]
                  },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'AnvilConfig', link: '/TBJewelsOfSurvival/Configs/AnvilConfig.md' },
                      { text: 'GrinderConfig', link: '/TBJewelsOfSurvival/Configs/GrinderConfig.md' },
                      { text: 'GrinderRecipeConfiguration', link: '/TBJewelsOfSurvival/Configs/GrinderRecipeConfiguration.md' },
                      { text: 'JewelRecoveryConfig', link: '/TBJewelsOfSurvival/Configs/JewelRecoveryConfig.md' },
                      { text: 'MineConfig', link: '/TBJewelsOfSurvival/Configs/MineConfig.md' },
                      { text: 'OreChanceConfig', link: '/TBJewelsOfSurvival/Configs/OreChanceConfig.md' },
                      { text: 'OreSpawnAreasConfig', link: '/TBJewelsOfSurvival/Configs/OreSpawnAreasConfig.md' },
                      { text: 'RingEnableConfig', link: '/TBJewelsOfSurvival/Configs/RingEnableConfig.md' },
                      { text: 'SmelterConfig', link: '/TBJewelsOfSurvival/Configs/SmelterConfig.md' },
                    ]
                  }
                ]
              },
              {
                text: 'TBSecondHandMarket', link: '/TBSecondHandMarket/Readme.md', collapsed: true, items: [
                  { text: 'Types', link: '/TBSecondHandMarket/Types.md' },
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'BulletinBoard', link: '/TBSecondHandMarket/Configs/BulletinBoard.md' },
                      { text: 'DealerPoints', link: '/TBSecondHandMarket/Configs/DealerPoints.md' },
                      { text: 'GeneralConfig', link: '/TBSecondHandMarket/Configs/GeneralConfig.md' },
                      { text: 'GlobalStallConfig', link: '/TBSecondHandMarket/Configs/GlobalStallConfig.md' },
                      { text: 'ItemBlackList', link: '/TBSecondHandMarket/Configs/ItemBlackList.md' },
                      { text: 'ItemWhiteList', link: '/TBSecondHandMarket/Configs/ItemWhiteList.md' },
                      { text: 'Logger', link: '/TBSecondHandMarket/Configs/Logger.md' },
                      { text: 'StallConfig', link: '/TBSecondHandMarket/Configs/StallConfig.md' },
                    ]
                  }
                ]
              },
              {
                text: 'TBWarParty', link: '/TBWarParty/Readme.md', collapsed: true, items: [
                  {
                    text: 'Configs', collapsed: true, items: [
                      { text: 'Index', link: '/TBWarParty/Configs/Index.md' },
                      { text: 'ArenaBuildingConfig', link: '/TBWarParty/Configs/ArenaBuildingConfig.md' },
                      { text: 'ArenaMatchConfigs', link: '/TBWarParty/Configs/ArenaMatchConfigs.md' },
                      { text: 'GearSets', link: '/TBWarParty/Configs/GearSets.md' },
                      { text: 'LobbyEnterPoints', link: '/TBWarParty/Configs/LobbyEnterPoints.md' },
                      { text: 'Logger', link: '/TBWarParty/Configs/Logger.md' },
                      { text: 'MainConfig', link: '/TBWarParty/Configs/MainConfig.md' },
                    ]
                  },
                  {
                    text: 'Arenas', collapsed: true, items: [
                      { text: 'README', link: '/TBWarParty/Arenas/README.md' },
                      { text: 'Cherno', link: '/TBWarParty/Arenas/Cherno/Readme.md' },
                      { text: 'Colosseum', link: '/TBWarParty/Arenas/Colosseum/Readme.md' },
                      { text: 'Dust2', link: '/TBWarParty/Arenas/Dust2/Readme.md' },
                      { text: 'NWA', link: '/TBWarParty/Arenas/NWA/Readme.md' },
                      { text: 'Pump Station', link: '/TBWarParty/Arenas/Pump_Station/Readme.md' },
                      { text: 'PVP Arena CONSTRUCTION', link: '/TBWarParty/Arenas/PVP Arena CONSTRUCTION/Readme.md' },
                      { text: 'PVP Arena ROOFTOP', link: '/TBWarParty/Arenas/PVP Arena ROOFTOP/Readme.md' },
                      { text: 'PVP Ruined city', link: '/TBWarParty/Arenas/PVP Ruined city/Readme.md' },
                      { text: 'Smoking Island', link: '/TBWarParty/Arenas/Smoking_Island/Readme.md' },
                      { text: 'warareanaPVPclose', link: '/TBWarParty/Arenas/warareanaPVPclose/Readme.md' },
                      { text: 'wararenaPVPhangar', link: '/TBWarParty/Arenas/wararenaPVPhangar/Readme.md' },
                    ]
                  },
                  {
                    text: 'Tools', collapsed: true, items: [
                      { text: 'ArenaMover', link: '/TBWarParty/Tools/ArenaMover/Readme.md' },
                      { text: 'CConverter', link: '/TBWarParty/Tools/Converter/CConverter/Readme.md' },
                      { text: 'JSONConverter', link: '/TBWarParty/Tools/Converter/JSONConverter/Readme.md' },
                    ]
                  }
                ]
              },
              { text: 'TBZombieEvents', link: '/TBZombieEvents/Readme.md' },
            ]
          },

        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kGjN6gJy3m' },
      {
        icon:
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>'
        },
        link: 'https://www.themodbase.com'
      }
    ],
    footer: {
      copyright: 'Copyright © 2025 by the Buster',
    }
  }
})


