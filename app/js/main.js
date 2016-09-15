   // IIFE - Immediately Invoked Function Expression
  (function(c) {

      // The global jQuery object is passed as a parameter
      c(window.jQuery, window, document);

      }(function($, window, document) {

          // The $ is now locally scoped 
          $(function() {

              // The DOM is ready!
              $('.contact-btn').click(function(){
                $('html, body').animate({
                  scrollTop: $('.contact-form').offset().top
                }, {duration: 500, easing: 'easeInOutQuad'});
                return false;
              });
          });

          // The rest of your code goes here!

      }
  ));