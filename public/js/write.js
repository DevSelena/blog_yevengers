function boardBtn(){
    $.ajax({
      url: '/api/board/save',
      type: 'POST',
      data: {
        name : document.getElementById('board_name').value,
        password : document.getElementById('board_password').value,
        title : document.getElementById('board_title').value,
        content : document.getElementById('board_comment').value,
      },
      success: function(data) {
        console.log(data)
        alert('등록되었습니다.');
        location.href = location.origin + "/view";
      },
      error: function(err){
        console.log(err)
      }
    });
  }