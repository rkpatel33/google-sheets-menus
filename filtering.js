
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
    filterOnActiveCell();
  } else {
    removeColumnFilter();
  }
  SpreadsheetApp.getActive().toast('Toggled filter', '', 2);

}

/**
 * Filter the active column on all non-blank cells
 */
function fitlerOnNonBlanksCells() {
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
    .setHiddenValues([''])
    .build();

  // Apply the new filter criteria
  filter.setColumnFilterCriteria(activeColumn, newFilterCriteria);
  SpreadsheetApp.getActive().toast('Filterd on non-blank cells', '', 2);
}

/**
 * Filter the active column on the active cell value
 */
function filterOnActiveCell() {
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

  SpreadsheetApp.getActive().toast('Filtered on active cell', '', 2);
}


function removeColumnFilter() {
  // Setup
  var activeCell = SpreadsheetApp.getCurrentCell();
  var cellValue = activeCell.getValue();
  var activeColumn = activeCell.getColumn();

  // Remove the criteria
  // var filter = activeCell.getFilter();
  // filter.removeColumnFilterCriteria(activeColumn);

  // Build a new empty filter critera object (ie no filtering)
  var newFilterCriteria = SpreadsheetApp
    .newFilterCriteria()
    .build();

  // Apply the new filter criteria
  filter.setColumnFilterCriteria(activeColumn, newFilterCriteria);
  SpreadsheetApp.getActive().toast('Removed column filter', '', 2);
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
  SpreadsheetApp.getActive().toast('Removed all filters', '', 2);

}
