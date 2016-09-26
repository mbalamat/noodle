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
                        <option>0</option> \
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
        for (j = 0; j < times_tmp.length; j++){
            var date_obj = new Date(date_tmp[2], (date_tmp[1]-1), date_tmp[0], times_tmp[j], 0, 0);
            datesToSend.push(date_obj);
        }
    }
    return datesToSend;
}

function loadTimesForEvent(eventId, cb) {
    // /times/
    var ret = {
        'times': [
            {
                'id': 1,
                'date': '25/9/2016',
                'time': '15:00'
            },
            {
                'id': 2,
                'date': '26/9/2016',
                'time': '17:00'
            },
            {
                'id': 3,
                'date': '26/9/2016',
                'time': '18:00'
            }
        ]
    };
    cb(ret.times);
}

function loadChecksForEvent(eventId, cb) {
    // /checks/
    var ret = {
        'checks': [
            {
                'id': 1,
                'user_id': 1,
                'time_id': 1
            },
            {
                'id': 2,
                'user_id': 2,
                'time_id': 3 
            },
            {
                'id': 3,
                'user_id': 2,
                'time_id': 2
            }
        ]
    };
    cb(ret.checks);
}

function loadUsersForEvent(eventId, cb) {
    // /users
    var ret = {
        'users': [
            {
                'id': 1,
                'username': 'mbalamat',
            },
            {
                'id': 2,
                'username': 'gtklocker',
            },
            {
                'id': 3,
                'username': 'jpanagos',
            }
        ]
    };
    cb(ret.users);
}

function makeTable(){
    loadTimesForEvent(1, function(times) {
        document.getElementById("thead").innerHTML = "";
        document.getElementById("newUser").innerHTML = "";
        var theadHTML = "<th>Participants</th>";
        var newUserHTML = '<td><input type="text" class="form-control" id="newUser" placeholder="Name" style="width: 60%; height: 70%;"></td>';
        for (var i = 0; i < times.length; i++){
            theadHTML += "<th>" + times[i].date + "<br/>" + times[i].time + "</th>";
            newUserHTML += '<td><input type="checkbox" class="custom-control-input"></td>';
        }
        document.getElementById("thead").innerHTML = theadHTML;

        loadUsersForEvent(1, function(users) {
            loadChecksForEvent(1, function(checks) {
                users.forEach(function(user) {
                    var checkHTML = function(isChecked) {
                        return "<td><input type='checkbox' disabled " + ((isChecked) ? "checked" : "") + "/></td>";
                    };
                    var allChecksHTML = "";
                    
                    times.forEach(function(time) {
                        var match = false;
                        checks.forEach(function(check) {
                            if (check.user_id == user.id && time.id == check.time_id) {
                                allChecksHTML += checkHTML(true);
                                match = true;
                            }
                        });
                        if (!match) {
                            allChecksHTML += checkHTML(false);
                        }
                    });
                    
                    var rowHTML = " \
                        <tr> \
                            <td>" + user.username + "</td> \
                            " + allChecksHTML + " \
                        </tr> \
                    ";
                    $("tbody#existingUsers").prepend($(rowHTML));
                });
            });
        });
    });
}

function setDateTimes() {
    var datetimes = getSelectedDates();
    console.log(datetimes);
    var date_value = "";
    for (var i = 0; i < (datetimes.length - 1); i++) {
       date_value += datetimes[i] + "," ;
    }
    date_value += datetimes[datetimes.length - 1];
    console.log(date_value);
    document.getElementById("datetimes").value = date_value;
    $("#confirm_button").hide(1000);
    $("#submit_button").show(1000);
    return false;
}
