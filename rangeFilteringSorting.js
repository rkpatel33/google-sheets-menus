/*
Range based filtering and sorting WITHOUT having to use a sheet filter
bc there can only be one per sheet. This should be useable for ranges
one above the other.

*/

// import 'google-apps-script';

var SORT_ORDER_ASCENDING = false;

function sortRangeOnCell() {
    Logger.log('Sorting range');

    SORT_ORDER_ASCENDING = !SORT_ORDER_ASCENDING;

    let activeSheet = SpreadsheetApp.getActiveSheet();
    let activeRange = SpreadsheetApp.getActiveRange();
    var areagRg = activeRange.getDataRegion();

    // Get first and last data cells excluding top row
    let numRows = areagRg.getNumRows();
    let numColumns = areagRg.getNumColumns();
    let firstDataCell = areagRg.getCell(2, 1);
    let sortColumnNumber = activeRange.getColumn();

    dataRange = activeSheet.getRange(
      firstDataCell.getRow(),
      firstDataCell.getColumn(),
      numRows - 1,
      numColumns
    );
    
    dataRange.sort({column: sortColumnNumber, ascending: true});

    Logger.log(`Sorted on column ${sortColumnNumber}`);
    Logger.log(SORT_ORDER_ASCENDING);
}
