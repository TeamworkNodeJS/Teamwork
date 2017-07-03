// require('jquery');
// const moment = require('moment');

// $('#date').on('change', function() {
//     this.setAttribute(
//         'data-date',
//         moment(this.value, 'YYYY-MM-DD')
//         .format( this.getAttribute('data-date-format') )
//     );
// }).trigger('change');


/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js"></script>
<input type="date" data-date="" 
data-date-format="DD MMMM YYYY" value="2015-08-14">


$("input").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")


input {
    position: relative;
    width: 150px; height: 20px;
    color: white;
}

input:before {
    position: absolute;
    top: 3px; left: 3px;
    content: attr(data-date);
    display: inline-block;
    color: black;
}

input::-webkit-datetime-edit, input::-webkit-inner-spin-button, 
input::-webkit-clear-button {
    display: none;
}

input::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 3px;
    right: 0;
    color: black;
    opacity: 1;
}

//output 14 August 2015
*/
