const burger = document.getElementById('burger-menu');
const topBtn = document.getElementById('top-btn');
const mainBtn = document.getElementById('main-btn');
const body = document.querySelector('body');
const main = document.querySelector('#main');
const mainOffset = main.offsetTop;
const shit = document.querySelector('#shit');
const shitOffset = shit.offsetTop;

console.log(mainOffset);

burger.addEventListener('click', () =>{
    if (burger.className === "open") {
        burger.className = "";
    } else {
        burger.className = "open";
    }
});


topBtn.addEventListener('click', e =>{
    e.preventDefault;
    window.scroll({ top: mainOffset - 100, left: 0, behavior: 'smooth' });
    topBtn.style.transition = "0.8s ease";
    topBtn.style.transform = "translateY(200px)";
    topBtn.style.opacity = "0";
});

mainBtn.addEventListener('click', e =>{
    e.preventDefault;
    console.log('clicked');
    console.log(shitOffset);
    $("body,html").animate(
        {
          scrollTop: $("#shit").offset().top
        },
        400 //speed
    );
});


window.addEventListener('scroll', () =>{
    setTimeout(function(){
    if (window.pageYOffset < 300) {
        topBtn.style.transition = "0.8s ease";
        topBtn.style.transform = "translateY(0)";
        topBtn.style.opacity = "1";
    }
    if (window.pageYOffset > mainOffset - 600) {
        $('#main .content').addClass('show');
    } else {
        $('#main .content').removeClass('show');
    }
    if (window.pageYOffset > mainOffset + mainOffset - 180) {
        $('#shit').addClass('show');
        setTimeout(function(){
            $('#shit > .content').addClass('show');
            setTimeout(function(){
                $('.blob3').addClass('show');
                setTimeout(function(){
                    $('.blob2').addClass('show');
                    $('#shit .content h3').addClass('show');
                },400);
            },500);
        },800);
    } else {
        $('#shit').removeClass('show');
        $('#shit .content').removeClass('show');
    }
}, 300);
});


