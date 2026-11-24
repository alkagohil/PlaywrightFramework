
import * as XLSX from 'xlsx';
import { FrameworkConstants } from '../constants/constants';

export class ExcelReader {

    static readExcelData(fileName: string, sheetName: string): any[] {

        const filePath = `${FrameworkConstants.TEST_DATA_FOLDER}/${fileName}`;
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    console.log(`Data read from ${fileName} - ${sheetName}:`, data);
    return data;
   
    }
}
