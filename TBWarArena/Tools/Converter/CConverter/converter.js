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
    const objects = content.trim().split('\n').map(line => parseLine(line.trim())).filter(Boolean);

    const outputJson = {
        "name": fileName.replace('.c', ''),
        "m_SceneObjects": objects
    };

    const outputFileName = fileName.replace('.c', '.json');
    downloadJson(outputJson, outputFileName);
}

function parseLine(line) {
    const regex = /SpawnObject\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\);/;
    const match = line.match(regex);

    if (match) {
        const name = match[1];
        const pos = match[2].split(' ').map(Number);
        const ypr = match[3].split(' ').map(Number);

        return {
            param1: name,
            param2: pos,
            param3: ypr,
        };
    }
    return null;
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