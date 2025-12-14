const data = require('./data/salesData');
const parseCSV = require('./utils/csvParser');
const generateReports = require('./models/salesModel');
const printReports = require('./controllers/reportController');


const records = parseCSV(data);
const reports = generateReports(records);
printReports(reports);