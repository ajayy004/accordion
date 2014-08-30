/*
 * 
 * Accordion - A simple accordion group for most use cases.
 * Version 0.1
 * @requires jQuery v1.5
 * 
 * Copyright (c) 2014 Ajay Kumar Yadav
 * Published for free use under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

!function($){  
  
  $.Accordion = function( options, element ) {

    this.$el = $( element );
    // list items
    this.$items = this.$el.children('li');
    // total number of items
    this.itemsCount = this.$items.length;
    // initialize accordion
    this.init( options );
  };

  // Setting and extending initial values...
  $.Accordion.defaults = {
      //index of opened item -1 means all are close by default
      open: -1,
      // if set to true, only one item can be opened. Once one item is opened, any other that is opened will be closed first
      oneOpenedItem : false,
      // tab click is a wrapper of trigger elements
      tabClick: ".topWrap",
      // tab content is the wrapper of all the elements
      tabContent: ".details",
      // speed of the open / close item animation
      speed: 600,
      // speed of the scroll to action animation
      easing: 900,
      // space from top
      spaceTop: 0
  }

  $.Accordion.prototype = {
    init: function(options) {
      this.options    = $.extend( true, {}, $.Accordion.defaults, options );
      // validate options
      this.validate();
      console.log("done")
      // current is the index of the opened item
      this.current = this.options.open;
      // hide the contents so we can fade it in afterwards
      this.$items.find(this.options.tabContent).hide();
      // save original height and top of each item  
      this.saveDimValues();
      // if we want a default opened item...
      if( this.current != -1 )
        this.toggleItem( this.$items.eq( this.current ) );
      // initialize the events
      this.initEvents();
    },
    saveDimValues : function() {
      this.$items.each( function() {
        var $item   = $(this);
        $item.data({
          originalHeight : $item.find('a:first').height(),
          offsetTop : $item.offset().top
        });
      });
    },

    // validate options
    validate : function() {
      // open must be between -1 and total number of items, otherwise we set it to -1
      if( this.options.open < -1 || this.options.open > this.itemsCount - 1 )
        this.options.open = -1;
    },
    initEvents : function() {
      console.log("initEvents")
      var instance  = this;
      // open / close item
      $(document).on('click',this.options.tabClick, function( event ) {
        console.log("clicked")
        var $item = $(this).parent();
        // close any opened item if oneOpenedItem is true
        if( instance.options.oneOpenedItem && instance.isOpened() && instance.current!== $item.index() ) {
          instance.toggleItem( instance.$items.eq( instance.current ) );
        }
        // open / close item
        instance.toggleItem( $item );
        return false;
      });
    },
    // checks if there is any opened item
    isOpened : function() {
      console.log("isOpened")
      return ( this.$el.find('li.st-open').length > 0 );
    },
    // open / close item
    toggleItem : function( $item ) {
      console.log("toggleItem")
      var $content = $item.find(this.options.tabContent);
      ( $item.hasClass( 'active' ) ) 
        ? ( this.current = -1, $content.stop(true, true).fadeOut( this.options.speed ), $item.removeClass( 'st-open' ).stop().animate({
          height  : $item.data( 'originalHeight' )
        }, this.options.speed, this.options.easing ) )
        : ( this.current = $item.index(), $content.stop(true, true).fadeIn( this.options.speed ), $item.addClass( 'st-open' ).stop().animate({
          height  : $item.data( 'originalHeight' ) + $content.outerHeight( true )
        }, this.options.speed, this.options.easing ), this.scroll( this ) )
    },
    // scrolls to current item or last opened item if current is -1
    scroll : function( instance ) {
      console.log("scroll")
      var instance  = instance || this, current;
      ( instance.current !== -1 ) ? current = instance.current : current = instance.$el.find('li.active:last').index();
      $('html, body').stop().animate({
        scrollTop : ( instance.options.oneOpenedItem ) ? instance.$items.eq( current ).data( 'offsetTop' ) : instance.$items.eq( current ).offset().top
      }, instance.options.scrollSpeed, instance.options.scrollEasing );
    }
  }

  $.fn.accordion = function(options){
    new $.Accordion(options,this);
    return this;
  }

}(window.jQuery);