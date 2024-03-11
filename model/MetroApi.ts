import * as FileSystem from 'expo-file-system';

export const getLines = () => {
    const fileUri = FileSystem.documentDirectory + 'example.txt';

    FileSystem.readAsStringAsync(fileUri)
    .then((fileContent) => { console.log('File content:', fileContent); })
    .catch((error) => { console.error('Error reading file:', error); });
}