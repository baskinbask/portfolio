$(document).ready(function() {

    // Попап
    // $(function() {
    //     //----- OPEN
    //     $('[data-popup-open]').on('click', function(e) {
    //         var targeted_popup_class = jQuery(this).attr('data-popup-open');
    //         $('[data-popup="' + targeted_popup_class + '"]').bPopup({
    //             position: [0, 20]
    //         });


    //         e.preventDefault();
    //     });
    // });
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

    $('.menu__item').click(function() {
       $(this).addClass('is-active').siblings().removeClass('is-active');
    });
      

});
       