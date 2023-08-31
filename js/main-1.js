// btn-up
let btnup = document.querySelector('.btn-up');

onscroll = function(){
    if(scrollY >= 600){
        btnup.style.display = 'block';
    }
    else{
        btnup.style.display = 'none';
    }
}

btnup.onclick = function(){
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}