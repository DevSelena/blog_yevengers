let board_id = location.search.split('=')[1];

//보드 수정/삭제 시 패스워드 확인
function passwrodCheck(value){
    document.getElementById('board_confirm_btn').innerHTML = value.getAttribute('val') == 'modi' || value.getAttribute('val') == 'comment_modi' ? '수정하기' : '삭제하기'

    document.getElementById('board_confirm_btn').setAttribute('val',value.getAttribute('val'))
    document.getElementById('board_confirm_btn').setAttribute('_id',value.getAttribute('_id'))

    document.getElementById('background').style.display = "block";
    document.getElementById('PwdCheck').style.display = "block";
    document.getElementById('body').style.overflow="hidden";
}

document.getElementById('board_confirm_btn').onclick = function(){
  let val = this.getAttribute('val');
  let _id = this.getAttribute('_id');
  
  let url = (val == 'del' || val == "modi") ? '/api/board/confirm' : '/api/comment/confirm';

  let data = {
    board_id : board_id,
    password : document.getElementById('passwordCheck').value
  }

  if(val=='comment_del' || val=="comment_modi"){
    data.comment_id = _id
  }

    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: function(data) {
        console.log(data)
        if(data.status == 400){ // 비밀번호 일치 하지 않을 때 
          alert(data.msg)
        }else if(data.status == 200){
          if(val=='del'){ 
            // 게시글 삭제 완료
            board_delete();
          }else if(val == "modi"){
            // 게시글 수정으로 이동 미완성

          }else if(val == "comment_modi"){
            // 코멘트 수정되게 이동 미완성
          
          }else if(val == "comment_del"){
            // 코멘트 삭제 완료
            comment_delete(_id);
            
          }
        }
      },
      error: function(err){
        console.log(err)
      }
    });
    
  }


function board_delete(){
  $.ajax({
    url: '/api/board/remove',
    type: 'DELETE',
    data: {
      board_id : board_id
    },
    success: function(data) {
      if(data.status == 200 )location.href = location.origin + "/listview";
    },
    error: function(err){
      console.log(err)
    }
  });
}
 function comment_delete(_id){
  $.ajax({
    url: '/api/comment/remove',
    type: 'DELETE',
    data: {
      board_id : board_id,
      comment_id : _id,
    },
    success: function(data) {
      location.reload();
    },
    error: function(err){
      console.log(err)
    }
  });
}


//댓글등록시
document.getElementById('comment_btn').onclick = function(){
  $.ajax({
    url: '/api/comment/save',
    type: 'POST',
    data: {
      board_id : board_id,
      name : document.getElementById('comment_name').value,
      password : document.getElementById('comment_password').value,
      content : document.getElementById('comment_content').value,
    },
    success: function(data) {
      location.reload()
    },
    error: function(err){
      console.log(err)
    }
  });
}

