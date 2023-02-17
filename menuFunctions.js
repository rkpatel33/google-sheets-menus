// *************************************************
// Menu creation
// *************************************************

function onOpen() {

  var menuName = 'Rishi';
  // var menuName = 'Albert';

  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu(`🔵 ${menuName}`)

    // Formatting
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
    .addItem('Filter on active cell', 'filterOnActiveCell')
    .addItem('Filter on non-blank cells', 'fitlerOnNonBlanksCells')
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

    // Sub-menus
    // .addSubMenu(ui.createMenu('Sub-menu')
    //     .addItem('Second item', 'menuItem2'))
    .addToUi();

  SpreadsheetApp.getActive().toast(`Custom menu loaded`, `${menuName}`, 1);
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
  var nextToTitle = sheet.getRange(1, 2).getValue();

  // Only format title bigger if it seems to actually be a title, as opposed to a table starting
  // on the first row.
  if (nextToTitle == '') {
    spreadsheet.getRange('A1').setFontSize(12).setFontWeight('bold');
  }
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
