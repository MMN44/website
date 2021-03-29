import fs from "browserify-fs";
import csv from "csv-parser";

//Clase reutilizable para leer los datos de los archivos CSV
export class csvReader {
    constructor() {}

    static  read(filePath) {
        let results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => console.log(results));
        return results;
    }
}