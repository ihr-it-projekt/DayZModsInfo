document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            convertContent(file.name, content);
        };
        reader.readAsText(file);
    }
}

function convertContent(fileName, content) {
    const jsonContent = JSON.parse(content);
    const objects = jsonContent.Objects.map(obj => ({
        param1: obj.name,
        param2: obj.pos,
        param3: obj.ypr,
    }));

    const outputJson = {
        "name": fileName.replace('.json', ''),
        "m_SceneObjects": objects
    };

    const outputFileName = fileName.replace('.json', '_converted.json');
    downloadJson(outputJson, outputFileName);
}

function downloadJson(jsonContent, fileName) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonContent, null, 4));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function convertFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file first.');
    }
}