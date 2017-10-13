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
                'overflow': 'visible'
            });
        })
        $('[data-toggle="popover"]').popover();
