window.addEventListener('DOMContentLoaded', function(){
    $.ajax({
        url: '/api/board/find',
        type: 'get',
        success: function(data){           
            data.data.data.forEach(function(list) {
                // let img = "";
                // if(list.content.split('<img src=').length >=2){
                //     img = "<img src="+list.content.split('<img src=')[1]
                // }else{
                //     img = `<img src="./image/mainVisual.jpg" alt="Thumbnail" />`;
                // }

                let img = (list.content.split('<img src=').length >=2) ? "<img src="+list.content.split('<img src=')[1] : `<img src="./image/mainVisual.jpg" alt="Thumbnail" />`;

                
                let img_remove = list.content.replace(/<(\/img|img)([^>]*)>/gi,""); 
                const li =  '<li class="list">\n'+
                                '<div class="imgBox">\n'+
                                    img +'\n'+
                                '</div>\n'+
                                '<div class="txtBox">\n'+
                                    '<div class="top">\n'+
                                        '<div class="title">'+list.title+'</div>\n'+
                                        '<div class="text">'+img_remove+'</div>\n'+
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
