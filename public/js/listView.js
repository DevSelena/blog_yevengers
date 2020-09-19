window.addEventListener('DOMContentLoaded', function(){
    $.ajax({
        url: '/api/board/find',
        type: 'get',
        success: function(data){
            data.data.data.forEach(function(list) {
                console.log(list.content.find('img'))
                const li =  '<li class="list">\n'+
                                '<div class="imgBox">\n'+
                                    '<img src="./image/mainVisual.jpg" alt="Thumbnail" />\n'+
                                '</div>\n'+
                                '<div class="txtBox">\n'+
                                    '<div class="top">\n'+
                                        '<div class="title">'+list.title+'</div>\n'+
                                        '<div class="text">'+list.content+'</div>\n'+
                                        '<div class="writeDay">2020.09.18</div>\n'+
                                    '</div>\n'+
                                    '<div class="bottom">\n'+
                                        '<span class="person">by. '+list.name+'</span>\n'+
                                        '<span class="commentLength">'+ list.comments.length +'개의 댓글</span>\n'+
                                    '</div>\n'+
                                '</div>\n'+
                            '</li>\n';
                $('#listBox').append(li)
            });

        },
        error: function(err) {
            console.log(err)
        }
    })
})
