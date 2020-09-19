//list link이동
function link(item){
    let listId = item.dataset.listid;
    location.href = location.origin + "/view?"+listId;
}
