# How to Set Up a Server

## License Setup

1. Open your Server Profiles folder and create a new folder with the name `TheModBase`

<div style="padding-left: 100px">
  ![The Mod Base](./images/profiles_folder_the_mod_base.png)
</div>

2. Create a new folder inside that folder with the name `Licenses`

<div style="padding-left: 100px">
  ![The Mod Base](./images/profiles_folder_the_mod_base_licenses.png)
</div>

3. Move your [downloaded](Download.md) license(s) into that folder 


![The Mod Base](./images/profiles_folder_the_mod_base_licenses_with license.png)

## Server-Side Mod Setup

1. Navigate to your downloads folder and extract the downloaded server ZIP file

![The Mod Base](./images/extract_server_pbo.png)
![The Mod Base](./images/extracted_server_pbo.png)

2. Enter the extracted folder

![The Mod Base](./images/server_pbo.png)

3. Move the PBO file into your DayZ server addons folder

![The Mod Base](./images/server_pbo_at_addons.png)

## Client-Side Mod Setup

1. Navigate to your downloads folder and extract the downloaded client ZIP file

![The Mod Base](./images/extract_client_pbo.png)
![The Mod Base](./images/extracted_client_pbo.png)

![The Mod Base](./images/extracted_client_pbo_folder.png)

3. Enter the `Keys` folder and copy the `bikey` file into your server `Keys` folder

![The Mod Base](./images/extracted_client_key.png)
![The Mod Base](./images/extracted_client_key_server.png)

![The Mod Base](./images/extracted_client_pbo_folder.png)

5. Enter the `Addons` folder and copy the `pbo` and `bisign` files into your workshop mod folder

![The Mod Base](./images/extracted_client_pbo_in_folder.png)
![The Mod Base](./images/extracted_client_pbo_in_workshop_folder.png)

6. Publish your workshop mod (see [PublishAServerModPackage.md](PublishAServerModPackage.md))
7. Add the workshop mod to your server

## Important Notes

- Make sure all file paths are correct
- Test your server before going live
- Keep backups of your original files
- Check server logs for any errors after installation