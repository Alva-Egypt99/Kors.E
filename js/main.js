// landing change
let img = document.querySelector(".img-change");
let h2 = document.querySelector(".h2-change");
let p = document.querySelector(".p-change");
let phone = document.querySelector(".btn-change");

function pict(phone){
    img.src = phone;
}

function texts(text){
    h2.innerHTML = text;
}

function ptext(pt){
    p.innerHTML = pt;
}

function phones(tel){
    phone.sytle.href = tel;
}

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