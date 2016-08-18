var today = moment()

var timeSpentData ={
  "Bernie Sanders Gets His Moment Monday Night":{today: 80},
  "E*Trade Is Buying an Online Brokerage for $725 Million":{today: 50},
  "This Is the Biggest Management Lesson Beth Comstock Learned From Jack Welch":{today: 49.5},
  "Avis -  New App Is a Giant Leap Forward for the Rental Industry":{today: 45.5},
  "No Party for Business":{today: 43},
  "Gary Vaynerchuk Is Just Getting Started":{today: 42.3},
  "How Ivanka Trump's RNC Promises to Women Compare to the Republicans' Actual Platform":{today: 40.7},
  "Watch Usher, Cyndi Lauper Sing to Demand Politicians Stop Using their Songs":{today: 20}


}

  var timeSpent = $('#time-spent-chart').MPChart({chartType: 'bar', highchartsOptions: {
    legend: {
      enabled: false,
      y: -7
    },

  }});                                // Create a line chart
  timeSpent.MPChart('setData', timeSpentData); // Set the chart's data
  $('#time-spent-header').show()

  var avgtimeSpentData ={
    "Bernie Sanders Gets His Moment Monday Night":{today: 3.33},
    "E*Trade Is Buying an Online Brokerage for $725 Million":{today: 2.25},
    "This Is the Biggest Management Lesson Beth Comstock Learned From Jack Welch":{today: 2.25},
    "Avis -  New App Is a Giant Leap Forward for the Rental Industry":{today: 2},
    "No Party for Business":{today: 1.75},
    "Gary Vaynerchuk Is Just Getting Started":{today: 1.5},
    "How Ivanka Trump's RNC Promises to Women Compare to the Republicans' Actual Platform":{today: .5},
    "Watch Usher, Cyndi Lauper Sing to Demand Politicians Stop Using their Songs":{today: .25}


  }

    var avgtimeSpent = $('#avg-time-spent-chart').MPChart({chartType: 'bar', highchartsOptions: {
      legend: {
        enabled: false,
        y: -7
      }
    }});                                // Create a line chart
    avgtimeSpent.MPChart('setData', avgtimeSpentData); // Set the chart's data
    $('#avg-time-spent-header').show()
