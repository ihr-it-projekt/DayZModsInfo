# FAQ

## How to install

See also [here](../The%20Mod%20Base/README.md)

- Take the Server PBO and add it to your own server-side pack
- Take the Client PBO and the TBLib PBO and add them to your own client pack. Publish this pack on Steam.
- Start your server. Some more configurations will be generated.
- Shut down the server
- Configure your needs
- Start your server :-)

## Why is the outdoor Pee action unavailable?

The bladder must be above 50%. For male characters, empty your hands; the custom animation must also be available and the previous animation fully restored. Move away from supported toilets, including fixtures inside buildings, because nearby toilets take priority over outdoor actions. Unconsciousness and ragdoll states also block the custom animation.

## Can I still configure the old toilet screen and protection?

No. Animated world actions replace the old toilet screen. Players remain visible and vulnerable. The obsolete `enableToilets`, `toiletDuration`, `toiletMakeInvisible`, `toiletDisableDamage`, `toiletSmallMenuOnLeft`, and `toiletObjectNames` settings are no longer used. Toilet dirt settings remain available in [BodyZoneConfigs.json](Configs/BodyZoneConfigs.md).
