$('.ask').on('click', function (e) {
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)

})

$('button[data-filter]').click(function () {

    let attr = $(this).attr('data-filter');

    if (attr === 'all') {
        $('div[data-filter').stop().slideDown(500)
    } else {
        $('div[data-filter]').stop().slideUp(500)
    }

    $(`div[data-filter=${attr}]`).stop().slideDown(500)

})


function writing(element) {
   let inner = element.html(),
   fullText = '',
   letterCount = 0,
   interval = setInterval(() => {
       fullText = fullText + inner[letterCount]
       element.html(fullText)
       letterCount++;
       if (fullText === inner) {
           clearInterval(interval)
       }
   }, 150);
   
}

writing($('h1'))

$('.js-modal-show').click(function (e) {
    e.preventDefault();
    $('.modal').fadeIn(1000);
})

$('.js-modal-show').click(function (e) {
    e.preventDefault();
    setTimeout(() => {
    for (let i = 0; i < 20; i++) {
        $('.modal').fadeToggle(10)
    }       
    }, 10);
})

$('.modal .close').click(function (e) {
    e.preventDefault
    $('.modal').fadeOut(1000)
})

$('.modal').click(function(e) {
    if(e.target === e.currentTarget){
        $(this).fadeOut(1000)
    }
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    xIndex:10
})

$(window).on('scroll', function () {
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
    
    if (editPosition > 0){
        $('.nav').css({
            top:editPosition+ 'px',
            opacity: 1
        })
    }else{
        $('nav').css({
            top: 0,
            opacity:0.3
        })
    }
})

$('.js-sroll-to-id').click(function (e) {
    e.preventDefault();
    let attr = $(this).attr('href'),
    toEl = $(attr).offset().top
    $('html, body').animate({
        scrollTop: toEl
    },{
        duration: 1000
    })
})

$(window).on('scroll', (e) => {
    if(window.pageYOffset > 200) {
        $('.js-btn-top').css({
            bottom: 50
        })
    } else if(window.pageYOffset < 200) {
        $('.js-btn-top').css({
            bottom: `-100%` 
        })
    }
})
$('.js-btn-top').click(()=> {
    $('html,body').animate({scrollTop: 0},1000)
})