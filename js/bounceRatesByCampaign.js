var today = moment()

var bounceData ={
  "E*Trade Is Buying an Online Brokerage for $725 Million":{today: 20},
  "This Is the Biggest Management Lesson Beth Comstock Learned From Jack Welch":{today: 19},
  "Avis -  New App Is a Giant Leap Forward for the Rental Industry":{today: 17.8},
  "No Party for Business":{today: 17.5},
  "Gary Vaynerchuk Is Just Getting Started":{today: 15.5},
  "How Ivanka Trump's RNC Promises to Women Compare to the Republicans' Actual Platform":{today: 12.9},
  "Watch Usher, Cyndi Lauper Sing to Demand Politicians Stop Using their Songs":{today: 11},
  "Bernie Sanders Gets His Moment Monday Night":{today: 2}

}

  var mauChart = $('#campaign-bounce-rate').MPChart({chartType: 'bar', highchartsOptions: {
    tooltip: {
            formatter: function () {
                return '<p style="margin-top: 10px; padding: 5px,5px,5px,5px;"><b>Article Name: </b>' + this.x +'</p><p><b>Conversion Rate: '+this.y +'%</p>';
            }
        },
    legend: {
      enabled: false,
      y: -7
    }
  }});                                // Create a line chart
  mauChart.MPChart('setData', bounceData); // Set the chart's data
  $('#bounce-rate-header').show()
