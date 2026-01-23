# Setting up a DayZ Life Server

Here you will find information on how to set up your DayZ Life server.
1. You have to set up the car lifetime in your types.xml. If you do not give them a lifetime, every car that you buy via the trader will be deleted at server restart.
Example:
<pre class="language-markup"><code>&lt;type name="CivilianSedan"&gt;
&lt;lifetime&gt;129000&lt;/lifetime&gt;
&lt;flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/&gt;
&lt;/type&gt;</code></pre>
2. You have to configure in your "serverDZ.cfg" the property "storeHouseStateDisabled" to "0". If you don't do that, the buildings cannot be locked. 
<pre class="language-markup"><code>storeHouseStateDisabled = 0;</code></pre>
3. Copy the mods "@DayZ Life V2 Client (RP Framework)" and "@DayZ Life V2 Server (RP Framework)" to your server
4. Copy the keys from the mod "@DayZ Life V2 Client (RP Framework)\Keys" folder into the "DayZServer\keys" folder
5. Start your server for the first time, for example, with this command:

<pre class="language-markup"><code>DayZServer_x64.exe -config=serverDZ.cfg -port=2302 -dologs -adminlog -netlog -freezecheck "-profiles=MyProfileFolder" "-serverMod=@DayZ Life V2 Server (RP Framework)" "-mod=@DayZ Life V2 Client (RP Framework)"</code></pre>

**Hint: "@DayZ Life V2 Server (RP Framework)" mod is only needed on the server side**

6. If the server is ready, shut down your server
7. Enter your server profiles folder. There is a new folder named: "YourServerProfilesFolder\TBMods\Config\DayZLife"
8. Enter the "YourServerProfilesFolder\TBMods\Config\DayZLife" folder; there you will find all configurations.
9. Start configuring your server. Most things are automatically configured, but for the trader, you have to configure your preferences. You can use our <a href="https://tools.dayz-life.net/category-editor/add-items">Trader configuration tool</a> to do that. You will also find an example for trader configuration in the DayZ Life Server mod.
10. Start your server after configuration.
11. Have fun and enjoy our mod.
12. Feedback and [**`donations`**](https://www.paypal.com/donate/?hosted_button_id=8UASRGVP88YE4) are always welcome.