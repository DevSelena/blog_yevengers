//수정 클릭시
function passwrodCheck(){
    document.getElementById('background').style.display = "block";
    document.getElementById('PwdCheck').style.display = "block";
    document.getElementById('body').style.overflow="hidden";
}

//댓글등록시
document.getElementById('comment_btn').onclick = function(){
    let board_id = location.search.split('=')[1];
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