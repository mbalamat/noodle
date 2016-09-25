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
                    var ddmmyyyy = dates_selected[i].getDate() + "/" + (dates_selected[i].getMonth() + 1) + "/" + dates_selected[i].getFullYear();
                    var timeSelector = '<select multiple class="form-control" id="sel2" style="margin-left:7em; width: 30%;"> \
                        <option>1</option> \
                        <option>2</option> \
                        <option>3</option> \
                        <option>4</option> \
                        <option>5</option> \
                        <option>6</option> \
                        <option>7</option> \
                        <option>8</option> \
                        <option>9</option> \
                        <option>10</option> \
                        <option>11</option> \
                        <option>12</option> \
                        <option>13</option> \
                        <option>14</option> \
                        <option>15</option> \
                        <option>16</option> \
                        <option>17</option> \
                        <option>18</option> \
                        <option>19</option> \
                        <option>20</option> \
                        <option>21</option> \
                        <option>22</option> \
                        <option>23</option> \
                        <option>24</option> \
                        </select>';
                    selectedDatesHTML += '<li class="list-group-item">' + '<div id="time">' + '<div id="date">' + ddmmyyyy + '</div>' + timeSelector + '</div>' + "</li>";
                }
                document.getElementById("timedates").innerHTML = selectedDatesHTML;
            }
    });
});

function showNext(n){
    if (n == 1) {
        $('#second').hide(1000);
        $('#first').show(1000);
    }
    if (n == 2) {
        $('#first').hide(1000);
        $('#second').show(1000);
        $('#third').hide(1000);
    }
    if (n == 3) {
        $('#second').hide(1000);
        $('#third').show(1000);
    }
    return false;
}

function getSelectedDates(){ 
    var datesToSend = [];
    var times = document.querySelectorAll('#time');
    for (i = 0; i < times.length; i++){
        var date_tmp = times[i].childNodes[0].innerHTML.toString().split("/");
        var times_tmp = $(times[i].childNodes[1]).val();
        for (j = 0; i < times_tmp.length; j++){
            var date_obj = new Date(date_tmp[2], (date_tmp[1]-1), date_tmp[0], times_tmp[j], 0, 0);
            datesToSend.push(date_obj);
        }
    }
    return datesToSend;
}

function loadEvents(){
    console.log('Loading Events . . .');
}
