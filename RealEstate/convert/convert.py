import os
import json


# Function for coordinate conversion
def convert_coordinates(coordinates):
    if isinstance(coordinates, str):
        coordinates = coordinates.replace(".json", "")
        return list(map(float, coordinates.split(' ')))


# Function to check JSON format validity
def is_valid_json_format(data):
    return (
            data and
            isinstance(data.get('playerHouseCollection'), list) and
            isinstance(data.get('playerHouseKeyCollection'), list) and
            all(isinstance(coord, str) for coord in data.get('playerHouseCollection'))
    )


# Function to read and convert JSON files
def process_files(directory):
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)

        # If it's a directory, process recursively
        if os.path.isdir(file_path):
            process_files(file_path)
        elif file.endswith('house.json'):
            # If it's a house.json file, process it
            with open(file_path, 'r') as json_file:
                data = json.load(json_file)

                # Check if the JSON format is already correct
                if is_valid_json_format(data):
                    # Create a backup copy of the original file
                    backup_file_path = file_path + '.back'
                    os.system(f'copy {file_path} {backup_file_path}')

                    data['playerHouseCollection'] = [convert_coordinates(coord) for coord in
                                                     data['playerHouseCollection']]
                    data['playerHouseKeyCollection'] = [convert_coordinates(coord) for coord in
                                                        data['playerHouseKeyCollection']]

                    # Output or save the converted JSON
                    with open(file_path, 'w') as output_json_file:
                        json.dump(data, output_json_file, indent=2)

                    print(f'The file {file_path} has been successfully converted, and a backup copy has been created.')
                else:
                    print(f'The file {file_path} already has the desired JSON format and will be skipped.')


# Example call with the starting directory
start_directory = '.'
process_files(start_directory)
