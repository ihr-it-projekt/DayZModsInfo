# TB Car Dealer Editor
## Description
### How to use the TB Car Dealer Editor

- This prefix must be entered in the second line of each `types.xml` that the editor has to read.
  If a `types.xml` file is incorrect, the program may crash. So check your files with this beforehand.
  Xml Validator: https://www.freeformatter.com/xml-validator-xsd.html

````
<!-- Prefix="types" -->
````
<img src="./Screenshot 2024-02-16 192617.png"/>

- Click on `File` at the top left and then on `Load MPMission`.
Navigate to your MPMission and click on Select folder

<img src="./Screenshot 2024-03-05 124618.png"/>

- The `Types.xml` files in which you have entered the prefix in the second line will be displayed as checkboxes in the list.
<img src="./Screenshot 2024-03-05 124631.png"/>

- You could check them and the entire content will be displayed in Type Name.
- Double-click on an item to add this item to Unique Name. At the bottom you have the option to search for specific items/type names or click on Add all Items

<img src="./Screenshot 2024-03-05 124703.png"/>

To: 
  - add attachments
  - optional items
  - to change the purchase price
  - sell price
  - quantity
  - premium status of an item
  
click once on the item in `Unique Name` and then click on the `+` next to the item you want to add or enter the desired values for Price, Sell, Quantity and Is Premium.

<img src="./Screenshot 2024-03-05 124817.png"/>

- To create a CarConfig you have to double click on `Add Car Config` and then enter the name you want. 
- To enter a category name in the CarConfig you have to double click on `Add Category` (here in my picture it is already called SedanCars because I gave the category a name)
- Left-click in the `Car Config` to select the Config you want to add vehicles. Then double-click on the vehicle in the list of `Unique Name` to add it to the selected Car Config. 

<img src="./Screenshot 2024-03-05 124921.png"/>

<img src="./Screenshot 2024-03-05 125207.png"/>

- To export your work, click on `File` at the top left and select `Export Price Items`.
- Navigate to the folder where you want to have the .json files and click on `Select folder`. The files will now created in that folder.
- Do the same with Export Car Config.
- You can import existing PriceItems files as well as existing CarConfigs.
- #### I advise you to import both before editing PriceItems and CarConfigs to avoid errors later on. 

<img src="./Screenshot 2024-03-05 124618.png"/>
