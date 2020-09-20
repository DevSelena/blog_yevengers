function boardBtn(){
    const board_title = document.getElementById('board_title').value;
    const board_comment = document.getElementById('board_comment').value;
    const board_name = document.getElementById('board_name').value;
    const board_password = document.getElementById('board_password').value;
    console.log(board_title, board_comment, board_name, board_password)
    if(board_title === ""){
        alert('제목을 입력하세요');
        document.getElementById('board_title').focus()
        return
    }
    if(board_comment === ""){
        alert('내용을 입력하세요');
        document.getElementById('board_comment').focus()
        return
    }
    if(board_name === ""){
        alert('작성자를 입력하세요');
        document.getElementById('board_name').focus()
        return
    }
    if(board_password === ""){
        alert('패스워드를 입력하세요');
        document.getElementById('board_password').focus()
        return
    }
    $.ajax({
      url: '/api/board/save',
      type: 'POST',
      data: {
        name : board_name,
        password : board_password,
        title : board_title,
        content : board_comment,
      },
      success: function(data) {
        console.log(data)
        alert('등록되었습니다.');
        location.href = location.origin + "/listview";
      },
      error: function(err){
        console.log(err)
      }
    });
  }