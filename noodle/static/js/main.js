$(document).ready(function() {
    console.log('Hello!')
    $('#datetimepicker1').datepicker({
        format: "dd/mm/yyyy",
        weekStart: 1,
        startDate: "0d",
        clearBtn: true,
        multidate: true,
        todayHighlight: true
    });
    
    $('#datetimepicker1').datepicker().on('changeDate', function() {
            var dates_selected = $('#datetimepicker1').datepicker('getDates');
            document.getElementById("timedates").innerHTML = "";
            if (dates_selected.length != 0) {
                var selectedDatesHTML = "";
                for (i = 0; i < dates_selected.length; i++) {
                    selectedDatesHTML += "<ul>".concat(dates_selected[i]).concat("</ul>");
                }
                document.getElementById("timedates").innerHTML = selectedDatesHTML;
            }
    });
});

function loadEvents(){
    console.log('Loading Events . . .');
}
