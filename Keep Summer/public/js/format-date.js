// publication-form
$(document).ready(function() {
    const date = $('.date');
    if (date.attr('type') === 'text') {
        date.val(moment().format('LL'));
    } else if (date.is('div')) {
         date.text(moment().format('LL'));
    }
});
