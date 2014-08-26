!function($){  
  $.fn.accordion = function(options){

    // Setting and extending initial values...
    var defaults = {
      tabClick: ".topWrap",
      tabContent: ".details",
      accordAnimation: 1000,
      bodyAnimation: 1000,
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

    $( "li" ).each(function( index ) {
      $(this).attr("data-index",index)
    })
    // onclick of accordion closes the other tab
    var closeOther = function() {
      $( "li" ).each(function( index ) {
        var hasClassCheck =  $(this).hasClass("active")
        if (hasClassCheck == true) {
          $(this).removeClass("active");
          closeIndex = $(this).attr("data-index");
          openedTabHeight = parseInt($(this).outerHeight());
          $(settings.tabContent).slideUp(settings.accordAnimation*2);
        }
    });
    }
    
    $(document).on('click', settings.tabClick ,function() {
      // var el = $(this),
      //     display = el.siblings(settings.tabContent).css("display"),
      //     sibling = el.siblings(settings.tabContent),
      //     parent = el.parent("li"),
      //     offsetTop = el.offset().top;
      //     openIndex = parent.attr("data-index");
        if( openIndex == 0 ) {
          height = 0;
        } else if (openIndex <= closeIndex ) {
          openedTabHeight = 0;
          height = 0;
        } else if( openIndex == closeIndex ) {
          openedTabHeight = 0;
        }
      if( display == "block" ) {
        sibling.slideUp( parseInt(settings.accordAnimation) );
        parent.removeClass("active");
      } else {
        if(settings.closeOther == true) {
          closeOther();
        }
        
        el.siblings(settings.tabContent).slideToggle(parseInt(settings.accordAnimation));
        if( display != "none" ) {
          parent.removeClass("active");
        }
        else {
          parent.addClass("active");
        }
        
        var height = 45;

        if (openIndex <= closeIndex ) {
          openedTabHeight = 0;
          height = 0;
        } else if( openIndex == closeIndex ) {
          openedTabHeight = 0;
        }

        if( openIndex == 0) {
          height = 0;
        }
        $('html,body').animate({ scrollTop:offsetTop - openedTabHeight - settings.spaceTop + height },parseInt(settings.bodyAnimation));
      }
    });
  };
}(window.jQuery);