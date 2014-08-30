!function($){  
  $.fn.accordion = function(options){

    // Setting and extending initial values...
    var defaults = {
      tabClick: ".topWrap",
      tabContent: ".details",
      accordAnimation: 600,
      bodyAnimation: 900,
      spaceTop: 0,
      delay:0,
      closeOther : false
    };

    var openedTabHeight = null;
    var openIndex = null;
    var closeIndex = null;
    var settings = $.extend({}, defaults, options);
    $(settings.tabContent).hide();

    // gobal vaiables setting
    var openedTabHeight = null;

    $( ".accordion > ul > li" ).each(function( index ) {
      $(this).attr("data-index",index)
    })
    // onclick of accordion closes the other tab
    var closeOther = function() {

    }

    $(document).on('click', settings.tabClick ,function() {
      var el = $(this),
          display = el.siblings(settings.tabContent).css("display"),
          sibling = el.siblings(settings.tabContent),
          parent = el.parents("li"),
          offsetTop = el.offset().top;
          openIndex = parent.attr("data-index");

      if( display == "block" ) {
          closeIndex = parent.attr("data-index");
          sibling.slideUp( parseInt(settings.accordAnimation) );
          parent.removeClass("active");
          openedTabHeight = 0;
      } else {
          if( display != "none" ) {
              parent.removeClass("active");
          }
          else {
              parent.addClass("active");
          }
          closeIndex = parent.attr("data-index");
        if(settings.closeOther == true) {
            $(parent).siblings("li").each(function( index ) {
                var hasClassCheck =  $(this).hasClass("active")
                if (hasClassCheck == true) {
                    $(this).removeClass("active");
                    closeIndex = $(this).attr("data-index");
                    openedTabHeight = parseInt($(this).outerHeight());
                    $(settings.tabContent).slideUp(settings.accordAnimation*2);
                    height = 0;
                }
            });


        el.siblings(settings.tabContent).slideToggle(parseInt(settings.accordAnimation));


        var height = 42;

        if (openIndex <= closeIndex ) {
          openedTabHeight = 0 + 42;
        }

        if( openIndex == 0) {
            height = openedTabHeight + 42;
        }

        }
          if(openIndex == closeIndex){
              $('html,body').animate({ scrollTop:offsetTop - 42 },parseInt(settings.bodyAnimation));
          }else{
              $('html,body').animate({ scrollTop:(offsetTop ) - openedTabHeight - settings.spaceTop },parseInt(settings.bodyAnimation));
          }
      }
    });

  };
}(window.jQuery);