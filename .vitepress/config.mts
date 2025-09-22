import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",

  title: "The Mod Base",
  description: "Docs for The Mod Base mods",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'BasicNeeds', link: '/BasicNeeds/Readme.md', collapsed: true, items: [
              { text: 'FAQ', link: '/BasicNeeds/FAQ.md' },
              { text: 'HowToMigrateFrom1to2', link: '/BasicNeeds/HowToMigrateFrom1to2.md' },
              { text: 'BodyZoneConfigs', link: '/BasicNeeds/Configs/BodyZoneConfigs.md' },
              { text: 'BodyZones', link: '/BasicNeeds/Configs/BodyZones.md' },
              { text: 'Config', link: '/BasicNeeds/Configs/Config.md' },
              { text: 'DiseaseConfig', link: '/BasicNeeds/Configs/DiseaseConfig.md' },
              { text: 'DryerConfig', link: '/BasicNeeds/Configs/DryerConfig.md' },
              { text: 'StaticDryerConfig', link: '/BasicNeeds/Configs/StaticDryerConfig.md' },
              { text: 'StaticWashingPlaces', link: '/BasicNeeds/Configs/StaticWashingPlaces.md' },
              { text: 'WashingMachineConfig', link: '/BasicNeeds/Configs/WashingMachineConfig.md' },
            ]
          },
          { text: 'Carry', link: '/Carry/Readme.md' },
          {
            text: 'DailyReward', link: '/DailyReward/Readme.md', collapsed: true, items: [
              { text: 'FAQ', link: '/DailyReward/FAQ.md' },
              { text: 'HowToMigrateFrom1to2', link: '/DailyReward/HowToMigrateFrom1to2.md' },
              { text: 'Example_Item_1', link: '/DailyReward/Configs/Example_Item_1.md' },
              { text: 'Example_Level_Condition_1', link: '/DailyReward/Configs/Example_Level_Condition_1.md' },
              { text: 'General', link: '/DailyReward/Configs/General.md' },
              { text: 'Level_1_Example_Reward_1', link: '/DailyReward/Configs/Level_1_Example_Reward_1.md' },
              { text: 'Logger', link: '/DailyReward/Configs/Logger.md' },
            ]
          },
          { text: 'DayZCasinoV2', link: '/DayZCasinoV2/Readme.md' },
          {
            text: 'DayZLife', link: '/DayZLife/Readme.md', collapsed: true, items: [
            ]
          },
          { text: 'DeathInsurance', link: '/DeathInsurance/Readme.md' },
          { text: 'GlobalConfigs', link: '/GlobalConfigs/Readme.md' },
          { text: 'RealEstate', link: '/RealEstate/Readme.md' },
          { text: 'RevivePlayer', link: '/RevivePlayer/Readme.md' },
          { text: 'TBCarDealer', link: '/TBCarDealer/Readme.md' },
          { text: 'TBItemExchange', link: '/TBItemExchange/Readme.md' },
          { text: 'TBJewelsOfSurvival', link: '/TBJewelsOfSurvival/Readme.md' },
          { text: 'TBSecondHandMarket', link: '/TBSecondHandMarket/Readme.md' },
          { text: 'TBWarParty', link: '/TBWarParty/Readme.md' },
          { text: 'TBZombieEvents', link: '/TBZombieEvents/Readme.md' },
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
    ]
  }
})


