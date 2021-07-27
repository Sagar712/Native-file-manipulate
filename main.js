async function file_picker() {
    try {
        const [fileHandle] = await showOpenFilePicker({
            types: [
                {
                    description: "Text files",
                    accept: {
                        'text/plain' : ['.txt', '.text'],
                        'application/json' : ['.json']
                    }
                }
            ]
        });
        const file = await fileHandle.getFile();
        const content = await file.text();
        console.log(content);
    } catch (error) {
        console.log("Error");
    }
}

async function saveChange(fileHandle) {
    if(!fileHandle){
        fileHandle = await showOpenFilePicker({
            types: [
                {
                    description: "Text files",
                    accept: {
                        'text/plain' : ['.txt', '.text'],
                        'application/json' : ['.json']
                    }
                }
            ]
        });
    }

    const writable = await fileHandle.createWritable();
    await writable.write("Hello there");
    await writable.close();
}