function MakersClick(maker,name){
    maker.setAttribute('class',name + ' ' + 'clickOff');
    const makers = document.getElementsByClassName("clickOn");
    for(let i in makers){
        makers[i].style.display = "none"; 
    }
}