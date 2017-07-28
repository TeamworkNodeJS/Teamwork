$(function () {
    var pathname = window.location.pathname;
    var id = pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    var data = {
        'id': id,
        'publisher': $('.post-by').text().substring(3),
        'title': $('h2').text(),
        'destinaton': '',
    };

    $('.remove').on('click', function () {
        $.ajax({
            method: 'DELETE',
            url: '/publications/remove',
            data: data,
            success: function (data) {
                console.log('success');
            },
            error: ((error) => {
                console.log(error);
            })
        });
    });

    // $('.remove').on('click', function () {
    //     $.ajax({
    //         method: 'POST',
    //         url: '/publications/remove',
    //         data: data,
    //         success: function (data) {
    //             console.log('success');
    //         },
    //         error: ((error) => {
    //             console.log(error);
    //         })
    //     });
    // });
});
