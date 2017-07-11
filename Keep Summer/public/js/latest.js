$.getJSON('/publications/latest', (res) => {
    const wrapper = $('.latest');
        res.result.forEach((punlications) => {
            $('<div/>')
                .addClass('.col-md-12')
                .append($('<a href="/publications/:id">').append(
                        $('<img alt="image"/>')))
                .appendTo(wrapper);

        //                 .append(
        //                     $("<img/>")
        //                     .attr("src", article.imgUrl)
        //                 )
        //                 .append(
        //                     $("<a/>")
        //                     .attr("href", "/articles/" + article._id)
        //                     .append(
        //                         $("<div/>")
        //                         .addClass("mask")
        //                     )
        //                 )
        //             )
                    
        //                 .append(
        //                     $("<a/>")
        //                     .attr("href", "/articles/" + article._id)
        //                     .append(
        //                         $("<h3>")
        //                         .addClass("card-title")
        //                         .html(article.title)
        //                     )
        //                 )
        //             )
        //         )
         });
        // $list.appendTo(".newest-articles-container");
    });

/*
            //- each item in result
            //-     .col-md-12
            //-         a(href="/publications") 
            //-             img(src="../../static/images/" + item.image1 alt="image")
            //-         .info
            //-             h6 #{item.title}           
            h5 Most Popular Publishers
            .row
                //- .col-md-12
                //-     .info
                //-         a(href="/publishers")  Publisher Name         
                //- .col-md-12
                //-     .info
                //-         a(href="/publishers")  Publisher Name
                //- .col-md-12
                //-     .info
                //-         a(href="/publishers")  Publisher Name                                 
*/
