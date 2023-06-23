// /pages/api/load-detection-data.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Get the path to the data directory.
    const dataDirectory = path.join(process.cwd(), 'data', 'detection');
    // const dataDirectory = 'data\detection'
    // console.log(dataDirectory);

    // Get all file names in the data directory.
    const fileNames = fs.readdirSync(dataDirectory);
    // console.log(fileNames);

    // // Read all data files.
    const data = fileNames.map(fileName => {
        const filePath = path.join(dataDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    });

    // Send the data to the client.
    res.status(200).json(data);
}