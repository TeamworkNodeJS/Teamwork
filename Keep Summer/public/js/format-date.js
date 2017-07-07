// publication-form
$(document).ready(function () { // eslint-disable-line
    let date = $('.date'); //  eslint-disable-line
    if (date.attr('type') === 'text') {
        date.val(moment().format('LL')); // eslint-disable-line
    } else if (date.is('div')) {
         date.text(moment().format('LL')); // eslint-disable-line
    }
});
