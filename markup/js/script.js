     $(document).ready(function() {
        $("#owl-example").owlCarousel({
           navigation : true, // Show next and prev buttons
           slideSpeed : 700,
           paginationSpeed : 400,
          singleItem:true
          });
        });
    
    
         $(document).ready(function() {
            $('body').append('<div id="toTop">^ Наверх</div>');
            $(window).scroll(function() {
            if($(this).scrollTop() > 500) {
                $('#toTop').fadeIn();   
            } else {
            $('#toTop').fadeOut();
            }
        });
     
        $('#toTop').click(function() {
            $('body, html').animate({scrollTop: 0}, 400);
            }); 
        });
        

        $(document).ready(function(){
            $("#header").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1200 мс
            $('body,html').animate({scrollTop: top}, 1200);
            }); 
        });

        $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
      