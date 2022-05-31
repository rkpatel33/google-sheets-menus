// *************************************************
// Menu creation
// *************************************************

function onOpen() {

  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('🔵 Albert')

    // Formatting
  // .addItem('# Number 0', 'formatNumber0')
  // .addItem('# Number 0.00', 'formatNumber2')
  // .addItem('$ Dollar $0', 'formatDollar0')
  // .addItem('$ Dollar $0.00', 'formatDollar2')
  // .addItem('% Precent 0%', 'formatPercent0')
  // .addItem('% Percent 0.0%', 'formatPercent1')
  // .addItem('% Percent 0.0.0%', 'formatPercent2')

  .addItem('# 0', 'formatNumber0')
  .addItem('# 0.00', 'formatNumber2')
  .addItem('$ $0', 'formatDollar0')
  .addItem('$ $0.00', 'formatDollar2')
  .addItem('% 0%', 'formatPercent0')
  .addItem('% 0.0%', 'formatPercent1')
  .addItem('% 0.0.0%', 'formatPercent2')

  // Dates
  .addSeparator()
  .addItem('mmm-dd-yyyy', 'formatDate1')
  .addItem('mm-dd-yyyy', 'formatDate2')

  // Filtering
  .addSeparator()
  .addItem('Filter toggle', 'toggleFilter')
  .addItem('Filter on active cell', 'applyColumnFilter')
  .addItem('Remove all filters', 'removeAllFilters')

  // Sorting
  .addSeparator()
  .addItem('Sort on active cell', 'sortRangeOnCell')

  // Sheet formatting
  .addSeparator()
  .addItem('Format sheet with defaults', 'formatSheetMenuItem')

    // Development
  // .addSeparator()
  // .addItem('Run dev command', 'sortRangeOnCell')

  // .addSubMenu(ui.createMenu('Sub-menu')
  //     .addItem('Second item', 'menuItem2'))
  .addToUi();
}

function formatSheetMenuItem() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  formatSheet();
}

function formatSheet(sheet) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var allCells = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
  allCells.setFontFamily(null).setFontSize(10);
  spreadsheet.getRange('A1').setFontSize(12).setFontWeight('bold');
};

// function formatSheetsAll() {
//   var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

//   for (const sh of sheets) {
//     formatSheet(sh);
//   }
// }

const numberFormats = {
  number0: '#,##0;[Color9]-#,##0;-',
  number2: '#,##0.00;[Color9]-#,##0.00;-',
  dollar0: '$#,##0;[Color9]-$#,##0;-',
  dollar2: '$#,##0.00;[Color9]-$#,##0.00;-',
  percent0: '#,##0%;[Color9]-#,##0%;-',
  percent1: '#,##0.0%;[Color9]-#,##0.0%;-',
  percent2: '#,##0.00%;[Color9]-#,##0.00%;-',
  date1: 'mmm-dd-yyyy',
  date2: 'mm-dd-yyyy',
}

// ****************************************************
// Number format functions
// ****************************************************

function formatNumber0() {
  applyNumberFormatToRange_(numberFormats.number0);
}

function formatNumber2() {
  applyNumberFormatToRange_(numberFormats.number2);
}

function formatDollar0() {
  applyNumberFormatToRange_(numberFormats.dollar0);
}

function formatDollar2() {
  applyNumberFormatToRange_(numberFormats.dollar2);
}

function formatPercent0() {
  applyNumberFormatToRange_(numberFormats.percent0);
}

function formatPercent1() {
  applyNumberFormatToRange_(numberFormats.percent1);
}

function formatPercent2() {
  applyNumberFormatToRange_(numberFormats.percent2);
}

function formatDate1() {
  applyNumberFormatToRange_(numberFormats.date1);
}

function formatDate2() {
  applyNumberFormatToRange_(numberFormats.date2);
}

function applyNumberFormatToRange_(formatStr) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRange().setNumberFormat(formatStr)

}
