document.getElementById('moveButton').addEventListener('click', run);

function run() {
    const fileInput = document.getElementById('jsonFile');
    const xCoord = parseFloat(document.getElementById('xCoord').value);
    const yCoord = parseFloat(document.getElementById('yCoord').value);
    const zCoord = parseFloat(document.getElementById('zCoord').value);

    if (fileInput.files.length === 0) {
        alert('Please select a JSON file.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const jsonData = JSON.parse(event.target.result);
        const newTargetCoordinate = [xCoord, yCoord, zCoord];

        const firstParam2 = jsonData.m_SceneObjects[0].param2;
        const offset = [
            newTargetCoordinate[0] - firstParam2[0],
            newTargetCoordinate[1] - firstParam2[1],
            newTargetCoordinate[2] - firstParam2[2]
        ];

        jsonData.m_SceneObjects.forEach(obj => {
            obj.param2 = [
                obj.param2[0] + offset[0],
                obj.param2[1] + offset[1],
                obj.param2[2] + offset[2]
            ];
        });

        const modifiedJson = JSON.stringify(jsonData, null, 4);
        const blob = new Blob([modifiedJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modified_297Arena.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    reader.readAsText(file);
}