function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

// function toggleRotate(id) {
//   var elm = document.getElementById(id);
//   var className = elm.className;
//   if(className.indexOf('filter-btn-active') === -1) {
//       elm.className = elm.className + 'filter-btn-active';
//   } else {
//       elm.className = elm.className.replace('filter-btn-active', '');
//   }
// }

function search_ticker(){
  var searchbar_input = document.getElementById("search_ticker_company").value;
  console.log(searchbar_input)
}

var market_cap = 0;
var sector = "All";
var exchange = "All";
var employees = 0;
var volume = 0;
var avg_volume = 0;
var dividend = 0;
var dividend_yield = 0;
var shares_outstanding = 0;
var enterprise_value = 0;
var beta = 0;
var PE_ratio = 0;
var PS_ratio = 0;
var EV_EBITDA = 0;
var price_timeframe = 0;
var price_value1 = 0;
var price_value2 = 0;
var revenue = 0;
var gross_income = 0;
var net_income = 0;
var EPS_timeframe = 0;
var EPS_value1 = 0;
var EPS_value2 = 0;
var EPS_change_timeframe = 0;
var EPS_change_value1 = 0;
var EPS_change_value2 = 0;
var EBITDA_timeframe = 0;
var EBITDA_value1 = 0;
var EBITDA_value2 = 0;
var EBITDA_change_timeframe = 0;
var EBITDA_change_value1 = 0;
var EBITDA_change_value2 = 0;
var current_ratio = 0;
var quick_ratio = 0;
var debt_equity_ratio = 0;
var lt_debt_equity_ratio = 0;
var return_on_assets = 0;
var return_on_equity = 0;
var economic_calendar_event = "";
var economic_calendar_entity = "";
var economic_calendar_date = "";
var market_activity_ticker = "";
var market_activity_name = "";
var market_activity_price = 0;
var market_activity_close = 0;
var market_activity_change = 0;
var market_activity_volume = 0;











