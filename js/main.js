        window.sr = new scrollReveal();

        var winBreak = 5;
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > winBreak) {
                $("#navCont").addClass("whitebg in");
            } else {
                $("#navCont").addClass("whitebg in");
            }
        });
