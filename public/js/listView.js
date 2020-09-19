window.addEventListener('DOMContentLoaded', function(){
    $.ajax({
        url: '/api/board/find',
        type: 'get',
        success: function(data){
            for(let i in data.data){

            const li =  '<li class="list">\n'+
                            '<div class="imgBox">\n'+
                                '<img src="./image/mainVisual.jpg" alt="Thumbnail" />\n'+
                            '</div>\n'+
                            '<div class="txtBox">\n'+
                                '<div class="top">\n'+
                                    '<div class="title">디자인 그리드 활용법</div>\n'+
                                    '<div class="text">반응형 웹디자인의 기본 방식인 디자인 그리드를 활용해 디자인을 해 보았습니다. Yevengers의 메인페이지에서는 단이 총12개 거터의 ...</div>\n'+
                                    '<div class="writeDay">2020.09.18</div>\n'+
                                '</div>\n'+
                                '<div class="bottom">\n'+
                                    '<span class="person">by. elissa</span>\n'+
                                    '<span class="commentLength">2개의 댓글</span>\n'+
                                '</div>\n'+
                            '</div>\n'+
                        '</li>\n';

            }
        },
        error: function(err) {
            console.log(err)
        }
    })
})
