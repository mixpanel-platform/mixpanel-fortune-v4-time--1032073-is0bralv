$('.panel-footer-revenue').click(function () {
	 var today = new Date().toISOString().split('T')[0]
	 var a = new Date();
	 var yesterday  = new Date(a.setDate(a.getDate() - 1)).toISOString().split('T')[0];
	 var params = {
	 	start_date: yesterday,
	 	end_date: today
	 }
	 MP.api.jql( function main() {
	        return Events({
	          from_date: params.start_date,
	          to_date:   params.end_date
	        })
	        .filter(function(event){
	          //change this value to the property where revenue is stored
	          var type = event.properties["$revenue"]
	          type = typeof type
	          if (type === "number"){
	            return event
	          }
	        })
	        // change this value if your utm campaign params are different
	        .groupBy(["name"], mixpanel.reducer.count())
	        .reduce(mixpanel.reducer.top(1))
    }, params).done(function(results) {
	    console.log(results)
	    //grab the top event that is generating revenue and store as a variable
	    var revenueEvent = results[0][0].key[0]
	    console.log(revenueEvent)
	    var mp_url_platform = window.document.referrer.split('/mpplatform')[0]
	    console.log(mp_url_platform)
	    var mp_url_segmentation = mp_url_platform + "/segmentation/#action:sum,arb_event:"+revenueEvent+",bool_op:and,chart_analysis_type:linear,chart_type:line,from_date:-29,ms_checked:("+revenueEvent+":!t),ms_values:!("+revenueEvent+"),segfilter:!((dropdown_tab_index:0,property:(name:'$revenue',source:properties,type:number),selected_property_type:number,type:number)),segment_type:number,to_date:0,type:general,unit:day"
	    window.open(mp_url_segmentation)
	})
})
$('.panel-footer-dau, .panel-footer-avg-events, .panel-footer-mau').click(function () {

	    //grab the top project numbe and url from the window and store so we can redirect to top evnts in segmentation
	    var mp_url_platform =   window.document.referrer.split('/mpplatform')[0]
	    console.log(mp_url_platform)
	    var mp_url_segmentation = mp_url_platform + "/segmentation/#action:segment,arb_event:"
	    window.open(mp_url_segmentation)
})
$('#trending-time-spent-header').click(function () {
	var mp_url_platform =   window.document.referrer.split('/mpplatform')[0]
	console.log(mp_url_platform)
	var mp_url_segmentation = mp_url_platform + "/#action:sum,arb_event:'Read%20Article',bool_op:and,chart_type:line,from_date:-29,ms_checked:('Read%20Article':!t),ms_values:!('Read%20Article'),segfilter:!((dropdown_tab_index:0,property:(name:'Reading%20Duration%20(sec)',source:properties,type:number),selected_property_type:number,type:number)),segment_type:number,to_date:0,type:general,unit:day"
	window.open(mp_url_segmentation)

})
$('#trending-article-count-header').click(function () {
	var mp_url_platform =   window.document.referrer.split('/mpplatform')[0]
	console.log(mp_url_platform)
	var mp_url_segmentation = mp_url_platform + "/#action:average,arb_event:'Read%20Article',bool_op:and,chart_analysis_type:linear,chart_type:line,from_date:-29,ms_checked:('Read%20Article':!t),ms_values:!('Read%20Article'),segfilter:!((dropdown_tab_index:0,property:(name:'Reading%20Duration%20(sec)',source:properties,type:number),selected_property_type:number,type:number)),segment_type:number,to_date:0,type:general,unit:day"
	window.open(mp_url_segmentation)

})
$('#bounce-rate-header').click(function () {
	var mp_url_platform =   window.document.referrer.split('/mpplatform')[0]
	console.log(mp_url_platform)
	var mp_url_segmentation = mp_url_platform + "/funnels/#view/1873455/from_date:-29,to_date:0"
	window.open(mp_url_segmentation)

})
$('#time-spent-header').click(function () {
	var mp_url_platform =   window.document.referrer.split('/mpplatform')[0]
	console.log(mp_url_platform)
	var mp_url_segmentation = mp_url_platform + "/#action:segment,arb_event:'Read%20Article',bool_op:and,chart_analysis_type:linear,chart_type:bar,from_date:-29,ms_checked:('Avis%E2%80%99%20New%20App%20Is%20a%20Giant%20Leap%20Forward%20for%20the%20Rental%20Industry%20/%2011':!t,'Bernie%20Sanders%20Gets%20His%20Moment%20Monday%20Night%20/%203':!t,'E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%200':!t,'E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%2011':!t,'E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%2012':!t,'Gary%20Vaynerchuk%20Is%20Just%20Getting%20Started%20/%206':!t,'Gary%20Vaynerchuk%20Is%20Just%20Getting%20Started%20/%208':!t,'How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%2010':!t,'How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%203':!t,'How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%204':!t,'How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%207':!t,'No%20Party%20for%20Business%20/%208':!t),ms_values:!('How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%207','E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%2012','How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%203','E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%2011','Gary%20Vaynerchuk%20Is%20Just%20Getting%20Started%20/%206','No%20Party%20for%20Business%20/%208','Gary%20Vaynerchuk%20Is%20Just%20Getting%20Started%20/%208','How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%204','How%20Ivanka%20Trump!'s%20RNC%20Promises%20to%20Women%20Compare%20to%20the%20Republicans!'%20Actual%20Platform%20/%2010','Bernie%20Sanders%20Gets%20His%20Moment%20Monday%20Night%20/%203','Avis%E2%80%99%20New%20App%20Is%20a%20Giant%20Leap%20Forward%20for%20the%20Rental%20Industry%20/%2011','E*Trade%20Is%20Buying%20an%20Online%20Brokerage%20for%20$725%20Million%20/%200'),segfilter:!((dropdown_tab_index:0,filter:(operand:!('0','12'),operator:%3E%3C),property:(name:'Local%20Time',source:properties,type:number),selected_property_type:number,type:number),(dropdown_tab_index:0,property:(name:'Article%20Name',source:properties,type:string),selected_property_type:string,type:string)),segment_type:string,subsegment_property:(name:'Local%20Time',source:properties,type:number),subsegment_type:number,to_date:0,type:general,unit:day"
	window.open(mp_url_segmentation)

})
