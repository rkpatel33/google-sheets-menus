/*
Range based filtering and sorting WITHOUT having to use a sheet filter
bc there can only be one per sheet. This should be useable for ranges
one above the other.

*/

// import 'google-apps-script';

function sortRangeOnCell() {
    Logger.log('Sorting range');

    let activeSh = SpreadsheetApp.getActiveSheet();
    let activeRg = SpreadsheetApp.getActiveRange();
    var areagRg = activeRg.getDataRegion();

    // Get first and last data cells excluding top row
    let numRows = areagRg.getNumRows();
    let numColumns = areagRg.getNumColumns();
    let firstDataCell = areagRg.getCell(2, 1);
    let sortColumnNumber = activeRg.getColumn();

    dataRange = activeSh.getRange(
      firstDataCell.getRow(),
      firstDataCell.getColumn(),
      numRows - 1,
      numColumns
    );
    
    dataRange.sort({column: sortColumnNumber, ascending: true});

    Logger.log(`Sorted on column ${sortColumnNumber}`);
}
