$(function () {
    $('.remove').on('click', function () {
        $this = $(this);
        var id = $this.parent().next().find('a').attr('href').substring(14);
        var data = {
            id: id
        };

        $.ajax({
            method: 'PUT',
            url: '/user/removefavourites',
            data: data,
            success: function (data) {
                console.log('success');
            },
            error: ((error) => {
                console.log(error);
            })
        });
    });

});

// $(function () {
//     $('.remove').on('click', function () {
//         $this = $(this);
//         var id = $this.parent().next().find('a').attr('href').substring(14);
//         var data = {
//             id: id
//         };

//         fetch('/user/removefavourites', {
//             method: "delete",
//             credentials: "include",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }).then(res => {
//             console.log(res)
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             window.location.reload();
//         });
//     });
// });