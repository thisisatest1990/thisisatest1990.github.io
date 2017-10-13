window.sr = new scrollReveal();


var winBreak = 5;
$(window).on("scroll", function() {
  if ($(this).scrollTop() > winBreak) {
    $("#navCont").addClass("whitebg in");
    } else {
    $("#navCont").addClass("whitebg in");
    }
});

$(window).on('load', function() {
  $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
      $('body').delay(350).css({
        overflow': 'visible'
      });
    })
   $('[data-toggle="popover"]').popover();
   //]]>

var clipboard = new Clipboard('.btn-email-copy');
clipboard.on('success', function(e) {});
clipboard.on('error', function(e) {
  console.log("Oops. Something went wrong!")
});
$('.btn-email-copy').click(function() {
  $(this).html("Email Address Copied!")
})

        $(".hidden-form").hide();
        $('.btn-reveal').click(function() {
            $(".after-hide").hide();
            $(".form-body").slideDown();;
            $(".form-divider").show();
            $(".form-alt-btn").show();
            $("html, body").animate({
                scrollTop: $(document).height()
            }, "slow");
            return false;
        })
