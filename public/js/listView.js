$(function(){
    $.ajax({
        url: '/api/board/find',
        type: 'get',
        success: function(data){    
            data.data.data.forEach(function(list) {
                let imgdata = "";
                if(list.content.split('<img src=').length >=2){
                    let img = list.content.split('<img src=')[1]
                    imgdata = img.split('"')[1];
                }else{
                    imgdata = "./image/mainVisual.jpg";
                }

                let img_remove = list.content.replace(/<(\/img|img)([^>]*)>/gi,""); 
                const li =  '<li class="list" data-listId ="'+list._id+'" onclick="link(this)" >\n'+
                                '<div class="imgBox">\n'+
                                '<img src="'+imgdata+'" alt="thumbnail" />\n'+
                                '</div>\n'+
                                '<div class="txtBox">\n'+
                                    '<div class="top">\n'+
                                        '<div class="title">'+list.title+'</div>\n'+
                                        '<div class="text">'+img_remove+'</div>\n'+
                                        '<div class="writeDay">'+list.board_date.split(' ')[0]+'</div>\n'+
                                    '</div>\n'+
                                    '<div class="bottom">\n'+
                                        '<span class="person">by. '+list.name+'</span>\n'+
                                        '<span class="commentLength">'+ list.comments.length +'개의 댓글</span>\n'+
                                    '</div>\n'+
                                '</div>\n'+
                            '</li>\n';
                $('#listBox').append(li)
                $('#listBox').find('img')
            });
        },
        error: function(err) {
            console.log(err)
        }
    });
});

//list link이동
function link(item){
    let listId = item.dataset.listid;
    location.href = location.origin + "/view?"+listId;
}
