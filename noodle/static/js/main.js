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
                    selectedDatesHTML += '<li class="list-group-item">' + ddmmyyyy + timeSelector  + "</li>";
                }
                document.getElementById("timedates").innerHTML = selectedDatesHTML;
            }
    });
});

function loadEvents(){
    console.log('Loading Events . . .');
}
