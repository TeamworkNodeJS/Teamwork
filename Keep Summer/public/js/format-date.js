/* eslint no-invalid-this: "error" */
/* eslint-env es6 */

const $ = require('jQuery');
const moment = require('moment');

// $(document).ready(function() {
//     $('.date').on('change', function() {
//         const $this = $(this); // eslint-disable-line
//         $this.setAttribute(
//             'data-date',
//             moment($this.value, 'YYYY-MM-DD')
//             .format($this.getAttribute('data-date-format'))
//         );
//     }).trigger('change');
// });

// $(document).ready(function() {
//     $('.date').each(function(index, dateElem) {
//     const $dateElem = $(dateElem);
//     const formatted = moment($dateElem.text(), 'DD MMMM YYYY').format('LL');
//     $dateElem.text(formatted);
//    });
// });


function myFunction() {
    const date = document.getElementById('date');
    const dateValue = document.getElementById('date').value;
    console.log(dateValue);
    // date.setAttribute('data-date',
    //     moment(dateValue, 'YYYY-MM-DD')
    //     .format(date.getAttribute('data-date-format')));
}

window.onload = myFunction;
