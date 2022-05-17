
// **********************************************************
// Scratch functions
// **********************************************************

function scratch() { 
  var activeCell = SpreadsheetApp.getCurrentCell();
  var activeColumn = activeCell.getColumn();
  var filter = activeCell.getFilter();
  filter.removeColumnFilterCriteria(activeColumn);
}

// **********************************************************
// Filtering functions
// **********************************************************

function toggleFilter() {
  var activeCell = SpreadsheetApp.getCurrentCell();
  var val = activeCell.getValue();
  var activeColumn = activeCell.getColumn();

  var currentFilter = activeCell.getFilter();
  var currentCriteria = currentFilter.getColumnFilterCriteria(activeColumn);


  if (currentCriteria === null) {
    applyColumnFilter();
  } else {
    removeColumnFilter();
  }

}

function applyColumnFilter() { 
  // Setup
  var activeCell = SpreadsheetApp.getCurrentCell();
  var cellValue = activeCell.getValue();
  var activeColumn = activeCell.getColumn();

  // Get existing filter
  var filter = activeCell.getFilter();
  var filterCriteria = filter.getColumnFilterCriteria(activeColumn);

  // Build a new filter critera object
  var newFilterCriteria = SpreadsheetApp
    .newFilterCriteria()
    .whenTextEqualTo(String(cellValue))
    .build();

  // Apply the new filter criteria
  filter.setColumnFilterCriteria(activeColumn, newFilterCriteria);
}


function removeColumnFilter() { 
  // Setup
  var activeCell = SpreadsheetApp.getCurrentCell();
  var cellValue = activeCell.getValue();
  var activeColumn = activeCell.getColumn();

  // Remove the criteria
  var filter = activeCell.getFilter();
  filter.removeColumnFilterCriteria(activeColumn);
}


function removeAllFilters(sheet) {
  sheet = SpreadsheetApp.getActiveSheet();
  var filter = sheet.getFilter();

  if (filter !== null) {
    var range = filter.getRange();
    var firstColumn = range.getColumn();
    var lastColumn = range.getLastColumn();
    for (var col = firstColumn; col < lastColumn; col++) {
      filter.removeColumnFilterCriteria(col);
    }
  }
  else {
    Logger.log('There is no filter')
  }
}
