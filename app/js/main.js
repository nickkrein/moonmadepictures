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
          scrollTop: $('.contact').offset().top
        }, {duration: 500, easing: 'easeInOutQuad'});
        return false;
      });

      var message = "";
      var data = {};

      $(".contact-form").on("submit", function() {

        var name = $("[name=name]").val();

        $("[name=_subject]").val("New message from " + name);

        message = $(".contact-form").serializeArray();

        data = message.reduce(function(acc, curr) {
        acc[curr['name']] = curr['value']
          return acc;
        }, {})
        

        $.ajax({
            url: "//formspree.io/nkreinmusic@gmail.com", 
            method: "POST",
            data: data,
            dataType: "json"
        });
        alert('Thanks for the email, we\'ll be in touch promptly.');
        return false;
      });
    });

    // The rest of your code goes here!

  }
));
