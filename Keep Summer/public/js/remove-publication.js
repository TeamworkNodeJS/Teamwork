$(function () {
    var pathname = window.location.pathname;
    var id = pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    var data = {
        'id': id,
        'publisher': $('.post-by').text().substring(3),
        'title': $('h2').text(),
        'destination': $('.destination-info').text(),
    };

    $('.remove').on('click', function () {
        $.ajax({
            method: 'DELETE',
            url: '/publications',
            data: data,
            success: ((data) =>  {
                location.reload();
            }),
            error: ((error) => {
                console.log(error);
            })
        });
        // .then(() => {
        //      window.location.reload();
        //  });
    });
});
