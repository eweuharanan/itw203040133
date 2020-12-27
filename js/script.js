// event pada saat link di-klik
$(".page-scroll").on("click", function(e){

    // ambil isi href 
    var tujuan = $(this).attr("href");
    // tangkap elemen yang bersangkutan 
    var elemenTujuan = $(tujuan);
 
    // pindahkan scroll
    $('html, body').animate({
       scrollTop: elemenTujuan.offset().top - 30
    }, 1000, 'easeInOutExpo')
 
    e.preventDefault();
 
 });

 
// parallax

// about
$(window).on('load',function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
 })
 
 $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
 
    // jumbotron
    $('.jumbotron img').css({
       'transform': 'translate(0px, '+ wScroll/6 +'%)', 
       'width': ( (wScroll/3) + 200 )+'px', 
       'height': ( (wScroll/3) + 200 )+'px', 
       'opacity': (1 - wScroll/400)
    });
 
    $('.jumbotron h1').css({
       'transform': 'translate(0px, '+ wScroll/2 +'%)', 
       'letterSpacing': wScroll/30+'px'
    });
 
    $('.jumbotron p').css({
       'transform': 'translate(0px, '+ wScroll +'%)', 
       'letterSpacing': wScroll/60+'px'
    });
    // --
 
    // portfolio
    if(wScroll > $('.portfolio').offset().top - 300) {
       $('.portfolio .thumbnail').each(function(i){
          setTimeout(function(){
             $('.portfolio .thumbnail').eq(i).addClass('muncul');
          }, 300 * (i+1));
       });
    }
    // --
 });







