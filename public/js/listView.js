//list link이동
function link(item){
    let listId = item.dataset.listid;
    location.href = location.origin + "/view?"+listId;
}


document.getElementById('search_btn').onclick = function(){
    $.ajax({
      url: '/api/board/search',
      type: 'GET',
      data: {
        search : document.getElementById('search').value
      },
      success: function(data) {
        console.log(data)
      },
      error: function(err){
        console.log(err)
      }
    });
  }