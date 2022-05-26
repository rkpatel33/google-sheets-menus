/*
Range based filtering and sorting WITHOUT having to use a sheet filter
bc there can only be one per sheet. This should be useable for ranges
one above the other.

*/

// import 'google-apps-script';


function sortRangeOnCell() {
    Logger.log('Sorting range');

    let activeRange = SpreadsheetApp.getActiveRange();
    var areagRg = activeRange.getDataRegion();

    let numRows = areagRg.getNumRows();
    let numColumns = areagRg.getNumColumns();

    let firstCell = areagRg.getCell(1, 1);
    let firstDataCell = areagRg.getCell(2, 1);
    let lastDataCell = areagRg.getCell(numRows, numColumns);
    
    firstDataCell.activate();
    
    // let sortRg = areagRg.getRange
    // areagRg.sort(4);
    
    Logger.log('Done.')
}
