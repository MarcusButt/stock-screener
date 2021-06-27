function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

function home() {
  location.replace("index.html");
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

var stock = {
  'AAPL' : {
            'Name': 'Apple',
            'Price': 254,
            'Open' : 452 ,
            'Prev' : 15,
            'Close' : 561,
            'Volume' : 4563411,
           },
  'AMZN' : {
            'Name': 'Amazon',
            'Price': 3256,
            'Open' :  3200,
            'Prev' : 3356,
            'Close' : 3259,
            'Volume' : 562232,
           },
  'NFLX' : {
            'Name': 'Netflix',
            'Price': 333,
            'Open' :  310,
            'Prev' : 300,
            'Close' : 315,
            'Volume' : 567877,
           },
 'XOM' : {
            'Name': 'ExxonMobil',
            'Price': 62,
            'Open' :  61,
            'Prev' : 58.45,
            'Close' : 61.21,
            'Volume' : 2365899,
           },
  }

function search_ticker(){


  var searchbar_input = document.getElementById("search_ticker_company").value;

  location.replace("company-profile.html");

  console.log(searchbar_input);

  console.log(stock[searchbar_input]);
  
}

var screenGeneral = { 
  market_cap : 0,
  sector : "All",
  exchange : "All",
  employees : 0,
  volume : 0,
  avg_volume : 0,
  dividend : 0,
  dividend_yield : 0,
  shares_outstanding : 0,
  enterprise_value : 0,
  beta : 0,
}

var screenMultiples = {
  PE_ratio : 0,
  PS_ratio : 0,
  EV_EBITDA : 0,
}

var screenPerformance = {
  price_timeframe : 0,
  price_value1 : 0,
  price_value2 : 0,
}

var screenIncome = {
  revenue : 0,
  gross_income : 0,
  net_income : 0,
  EPS_timeframe : 0,
  EPS_value1 : 0,
  EPS_value2 : 0,
  EPS_change_timeframe : 0,
  EPS_change_value1 : 0,
  EPS_change_value2 : 0,
  EBITDA_timeframe : 0,
  EBITDA_value1 : 0,
  EBITDA_value2 : 0,
  EBITDA_change_timeframe : 0,
  EBITDA_change_value1 : 0,
  EBITDA_change_value2 : 0,
}

var screenBalance = {
  current_ratio : 0,
  quick_ratio : 0,
  debt_equity_ratio : 0,
  lt_debt_equity_ratio : 0,
  return_on_assets : 0,
  return_on_equity : 0,
}

var economic_calendar_event = "";
var economic_calendar_entity = "";
var economic_calendar_date = "";
var market_activity_ticker = "";
var market_activity_name = "";
var market_activity_price = 0;
var market_activity_close = 0;
var market_activity_change = 0;
var market_activity_volume = 0;











