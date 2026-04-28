# Add Custom Sounds for Trader Positions

Download of example you can find here: <https://doc.themodbase.com/DynamicTrader/SoundExampleClient.zip>

## Filestructure 
```md
- YourModName
-- data
--- sounds <-add here your oog files
-- scripts
--- 5_Mission
---- MissionBase.c <- file where you add your sounds
-- config.cpp <- file where you add your SoundSets 
```



## MissionBase.c
```c
modded class MissionBase {

    override void OnInit() {
        super.OnInit();

        //Get instance of TBTDSoundCollection
        TBTDSoundCollection collection = TBTDSoundCollection.Get();

        // -------------------------------------------------------------------------
        // Example: Adding a completely new custom sound
        // -------------------------------------------------------------------------
        // 1. Add the base sound for the default language (e.g., english).
        // The AddSound method returns the assigned integer ID (soundIndex) for your new sound,
        // which you need to store or use if you want to add more languages for it.
        // Parameters: language, soundSetNameMale, soundSetNameFemale, soundInternalName
        // "english", // Language of the sound ("english", "german", "chinesesimp", "chinese", "russian", "czech", "polish", "hungarian", "italian", "spanish", "french", "portuguese", "japanese")
        // "TBDT_MyCustomSound_English_Male_SoundSet", // SoundSet for male voice
        // "TBDT_MyCustomSound_English_Female_SoundSet", // SoundSet for female voice
        // "my_custom_sound" // Internal name of the sound, will shown in menu for example

        int myCustomSoundIndex = collection.AddSound("english", "TBDT_MyCustomSound_English_Male_SoundSet", "TBDT_MyCustomSound_English_Female_SoundSet", "my_custom_sound");

        // 2. Add an additional language for the custom sound we just created.
        // We use the soundIndex returned by AddSound to link the new language translation.
        // Parameters: soundIndex, language, soundSetNameMale, soundSetNameFemale
        // "german", // Language of the sound
        // "TBDT_MyCustomSound_German_Male_SoundSet", // SoundSet for male voice
        // "TBDT_MyCustomSound_German_Female_SoundSet" // SoundSet for female voice
        collection.AddAnotherLanguageForSound(myCustomSoundIndex, "german", "TBDT_MyCustomSound_German_Male_SoundSet", "TBDT_MyCustomSound_German_Female_SoundSet");

    }
}

```


## config.cpp
```c
class CfgPatches {
    class SoundExampleClient {
        units[] = {};
        weapons[] = {};
        requiredVersion = 0.1;
        requiredAddons[] = {
            "DZ_Data",
            "TBDynamicTraderClient"
        };
    };
};

class CfgMods {
    class SoundExampleClient {
        dir = "SoundExampleClient";
        picture = "";
        action = "";
        hideName = 1;
        hidePicture = 1;
        name = "TBDT Example Sound Mod";
        credits = "Your Name";
        author = "Your Name";
        authorID = "0";
        version = "1.0";
        extra = 0;
        type = "mod";

        dependencies[] = { "Mission" };

        class defs {
            class missionScriptModule {
                value = "";
                files[] = {
                    "SoundExampleClient/scripts/5_Mission"
                };
            };
        };
    };
};

class CfgSoundShaders {
    class TBDT_ExampleSound_Base_SoundShader {
        range = 20;
        volume = 1;
    };

    class TBDT_MyCustomSound_English_Male_SoundShader : TBDT_ExampleSound_Base_SoundShader {
        samples[] = {{"SoundExampleClient\data\sounds\my_custom_sound_en_m.ogg", 1}};
    };
    class TBDT_MyCustomSound_English_Female_SoundShader : TBDT_ExampleSound_Base_SoundShader {
        samples[] = {{"SoundExampleClient\data\sounds\my_custom_sound_en_f.ogg", 1}};
    };

    class TBDT_MyCustomSound_German_Male_SoundShader : TBDT_ExampleSound_Base_SoundShader {
        samples[] = {{"SoundExampleClient\data\sounds\my_custom_sound_de_m.ogg", 1}};
    };
    class TBDT_MyCustomSound_German_Female_SoundShader : TBDT_ExampleSound_Base_SoundShader {
        samples[] = {{"SoundExampleClient\data\sounds\my_custom_sound_de_f.ogg", 1}};
    };
};

class CfgSoundSets {
    class TBDT_ExampleSound_Base_SoundSet {
        volumeCustom = 1;
        volumeFactor = 1;
        spatial = 1;
        loop = 0;
    };

    class TBDT_MyCustomSound_English_Male_SoundSet : TBDT_ExampleSound_Base_SoundSet {
        soundShaders[] = {"TBDT_MyCustomSound_English_Male_SoundShader"};
    };
    class TBDT_MyCustomSound_English_Female_SoundSet : TBDT_ExampleSound_Base_SoundSet {
        soundShaders[] = {"TBDT_MyCustomSound_English_Female_SoundShader"};
    };

    class TBDT_MyCustomSound_German_Male_SoundSet : TBDT_ExampleSound_Base_SoundSet {
        soundShaders[] = {"TBDT_MyCustomSound_German_Male_SoundShader"};
    };
    class TBDT_MyCustomSound_German_Female_SoundSet : TBDT_ExampleSound_Base_SoundSet {
        soundShaders[] = {"TBDT_MyCustomSound_German_Female_SoundShader"};
    };
};

```