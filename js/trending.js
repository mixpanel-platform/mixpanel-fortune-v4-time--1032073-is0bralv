MP.api.segment('Read Article', {from: moment().subtract(7, 'days'), to:moment() , unit: 'day', type: 'general', limit: 50}).done(function(results) {
  console.log("article trend", results.values())
  var articlesRead = $('#trending-article-chart').MPChart({chartType: 'line', highchartsOptions: {
    legend: {
      enabled: false,
      y: -7
    }
  }});                                // Create a line chart
  articlesRead.MPChart('setData', results.values()); // Set the chart's data
  $('#trending-article-count-header').show()

})

var params ={
  from: moment().subtract(6, 'days'),    // the earliest date you'd like to include in the query
  to: moment(),                           // the latest date you'd like to include in the query
  limit: 100,                             // maximum number of results to return
  type: 'general',                        // analysis type for the data, can be 'general', 'unique', or 'average'
  unit: 'day',                            // level of granularity of the data, can be 'minute', 'hour', 'day', or 'month'
  'on': 'properties["Reading Duration (sec)"]', 	// selector
  'method': 'sum'
}

MP.api.segment('Read Article', params).done(function(results) {
  var sum = results.sum().values()
  console.log("time spent", results.values())
  var articlesRead = {}
  articlesRead['Total Hours Read'] = results.values()
  var timeReading = $('#trending-time-spent-chart').MPChart({chartType: 'line', highchartsOptions: {
    legend: {
      enabled: false,
      y: -7
    }
  }});                                // Create a line chart
  timeReading.MPChart('setData', articlesRead); // Set the chart's data
  $('#trending-time-spent-header').show()

})
