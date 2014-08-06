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
!function(t){t.fn.accordion=function(n){var a={tabClick:".topWrap",tabContent:".details",accordAnimation:1e3,bodyAnimation:1e3,spaceTop:0,delay:0,closeOther:!1},e=null,o=t.extend({},a,n);t(o.tabContent).hide();var e=null,i=function(){t("li").each(function(){var n=t(this).hasClass("active");1==n&&(t(this).removeClass("active"),e=parseInt(t(this).outerHeight()),t(o.tabContent).slideUp(2*o.accordAnimation))})};t(document).on("click",o.tabClick,function(){var n=t(this),a=n.siblings(o.tabContent).css("display"),s=n.siblings(o.tabContent),c=n.parent("li"),l=n.offset().top;"block"==a?(s.slideUp(parseInt(o.accordAnimation)),c.removeClass("active")):(1==o.closeOther&&(console.log("close"),i()),n.siblings(o.tabContent).slideToggle(parseInt(o.accordAnimation)),"none"!=a?c.removeClass("active"):c.addClass("active"),t("html,body").animate({scrollTop:l-e-o.spaceTop},parseInt(o.bodyAnimation)))})}}(window.jQuery);