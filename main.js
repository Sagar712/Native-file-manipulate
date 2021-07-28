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
        alert(error);
    }
}

async function saveChange() {
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
    
        let writable = await fileHandle.createWritable();
        await writable.write("Whats up broo");
        await writable.close();   
    } catch (error) {
        alert(error);
    }
}