$(document).ready(function() {

    // Попап
    $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').bPopup({
                position: [0, 20]
            });


            e.preventDefault();
        });
    });

    // Открываем ссылки в новой вкладке
    $.fn.replaceUrl = function() {
            var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
            this.each(function() {
                $(this).html(
                    $(this).html().replace(regexp, '<a href="$1" target="windowName">$1</a>'));
            });
            return $(this);
        }
    $('.popup').replaceUrl();

    // Filter Фильтор
    //You can override any of these options and then call...
    $('.portfolio-list').mixItUp({
        animation: {
            effects: 'fade stagger(10ms)',
            staggerSequence: function(i){
                return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
            },
            queueLimit: 2
        }
    });

    $('.site-nav__link').click(function() {
       $(this).addClass('is-active').siblings().removeClass('is-active');
    });
      

});
