window.addEventListener( 'scroll', () =>{
    let scrollLocation = document.documentElement.scrollTop;
    scrollLocation > 0 ? document.getElementById('header').classList.add('on') :  document.getElementById('header').classList.remove('on') 
});