# Setting up a DayZ Life Server

Here you will find any information, how you can set up your DayZ Life Server.
1. You have to set up the car lifetime in your type.xml. If you do not give them a lifetime, every car that you buy over the trader will be deleted at server restart.
Example:
<pre class="language-markup"><code>&lt;type name="CivilianSedan"&gt;
&lt;lifetime&gt;129000&lt;/lifetime&gt;
&lt;flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/&gt;
&lt;/type&gt;</code></pre>
2. You have to configure in your "serverDZ.cfg" the property "storeHouseStateDisabled" to "0". If you don´t do that, the buildings can not be looked. 
<pre class="language-markup"><code>storeHouseStateDisabled = 0;</code></pre>
3. Copy the mods "@DayZ Life V2 Client (RP Framework)" and "@DayZ Life V2 Server (RP Framework)" to your server
4. Copy from mod "@DayZ Life V2 Client (RP Framework)\Keys" folders the keys into "DayZServer\keys" folder
5. Start your server first time for example with this command:

<pre class="language-markup"><code>DayZServer_x64.exe -config=serverDZ.cfg -port=2302 -dologs -adminlog -netlog -freezecheck "-profiles=MyProfileFolder" "-serverMod=@DayZ Life V2 Server (RP Framework)" "-mod=@DayZ Life V2 Client (RP Framework)"</code></pre>

**Hint: "@DayZ Life V2 Server (RP Framework)" Mod is only needed on server side**

6. if server is ready, shut down your server
7. Enter into your server profiles folder. There is a new folder named: "YourServerProfilesFolder\TBMods\Config\DayZLife"
8. Enter "YourServerProfilesFolder\TBMods\Config\DayZLife" folder, there you will find all configurations.
7. Start configure your Server. The most is automatically configured but for the Trader you have to configure your preferences. You can use our <a href="https://tools.dayz-life.net/category-editor/add-items">Trader configuration tool</a> to do that. You also will find in DayZ Life Server Mod an example for Trader configuration.
8. Start your server after configuration
9. Have fun and enjoy our mod.
10. Feedback and [**`donations`**](https://www.paypal.com/donate/?hosted_button_id=8UASRGVP88YE4) are always welcome.