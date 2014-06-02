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

!function(e){e.fn.accordion=function(t){var n={tabClick:".topWrap",tabContent:".details",accordAnimation:1e3,bodyAnimation:1e3,spaceTop:0};var r=e.extend({},n,t);e(r.tabContent).hide();e(document).on("click",r.tabClick,function(){var t=e(this),n=t.siblings(r.tabContent).css("display"),i=t.siblings(r.tabContent),s=t.parent("li"),o=t.offset().top;if(n=="block"){i.slideUp(parseInt(r.accordAnimation));s.removeClass("active")}else{t.siblings(r.tabContent).slideToggle(parseInt(r.accordAnimation));if(n!="none"){s.removeClass("active")}else{s.addClass("active")}e("html,body").animate({scrollTop:o-r.spaceTop},parseInt(r.bodyAnimation))}})}}(window.jQuery)