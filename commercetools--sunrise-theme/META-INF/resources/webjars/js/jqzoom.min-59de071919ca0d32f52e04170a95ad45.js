!function(x){x.fn.zoom=function(t){var l={align:"left",thumb_image_width:300,thumb_image_height:400,source_image_width:900,source_image_height:1200,zoom_area_width:600,zoom_area_height:"justify",zoom_area_distance:10,zoom_easing:!0,click_to_zoom:!1,zoom_element:"auto",show_descriptions:!0,description_location:"bottom",description_opacity:.7,small_thumbs:3,smallthumb_inactive_opacity:.4,smallthumb_hide_single:!0,smallthumb_select_on_hover:!1,smallthumbs_position:"bottom",show_icon:!0,hide_cursor:!1,speed:600,autoplay:!0,autoplay_interval:6e3,keyboard:!0,right_to_left:!1};t&&x.extend(l,t);var u=x(this);if(u.is("ul")&&u.children("li").length&&u.find(".bzoom_big_image").length){u.addClass("bzoom clearfix").show();var i=u.children("li").addClass("bzoom_thumb"),e=i.length,a=l.autoplay;i.first().addClass("bzoom_thumb_active").show(),e<2&&(a=!1),u.find(".bzoom_thumb_image").css({width:l.thumb_image_width,height:l.thumb_image_height}).show();var c,n,o,d,b=l.thumb_image_width/l.source_image_width,g=l.thumb_image_height/l.source_image_height,m=l.thumb_image_width/l.thumb_image_height;if(u.find(".bzoom_magnifier").length||(c=x('<li class="bzoom_magnifier"><div class=""><img src="" /></div></li>'),n=c.find("img"),u.append(c),c.css({top:s,left:h}),n.attr("src",u.find(".bzoom_thumb_active .bzoom_thumb_image").attr("src")).css({width:l.thumb_image_width,height:l.thumb_image_height}),c.find("div").css({width:l.thumb_image_width*b,height:l.thumb_image_height*g})),!u.find(".bzoom_zoom_area").length){o=x('<li class="bzoom_zoom_area"><div><img class="bzoom_zoom_img" /></div></li>'),d=o.find(".bzoom_zoom_img");var s=0,h=0;u.append(o),"left"==l.align&&(h=(s=0)+l.thumb_image_width+l.zoom_area_distance),o.css({top:s,left:h}),d.css({width:l.source_image_width,height:l.source_image_height})}var _={autotime:null,isplay:a,start:function(){this.isplay&&!this.autotime&&(this.autotime=setInterval(function(){y((u.find(".bzoom_thumb_active").index()+1)%l.small_thumbs)},l.autoplay_interval))},stop:function(){clearInterval(this.autotime),this.autotime=null},restart:function(){this.stop(),this.start()}},r="";if(!u.find(".bzoom_small_thumbs").length){s=l.thumb_image_height+10;for(var p=l.thumb_image_width,f=l.thumb_image_width/l.small_thumbs-10,z=f/m,v=(smurl="",""),w=0;w<l.small_thumbs;w++)smurl=i.eq(w).find(".bzoom_thumb_image").attr("src"),v+=0==w?'<li class="bzoom_smallthumb_active"><img src="'+smurl+'" alt="small" style="width:'+f+"px; height:"+z+'px;" /></li>':'<li style="opacity:0.4;"><img src="'+smurl+'" alt="small" style="width:'+f+"px; height:"+z+'px;" /></li>';r=x('<li class="bzoom_small_thumbs" style="top:'+s+"px; width:"+p+'px;"><ul class="clearfix" style="width: 485px;">'+v+"</ul></li>"),u.append(r),r.delegate("li","click",function(t){y(x(this).index()),_.restart()}),_.start()}function y(t){u.find(".bzoom_thumb_active").removeClass("bzoom_thumb_active").stop().animate({opacity:0},l.speed,function(){x(this).hide()}),r.find(".bzoom_smallthumb_active").removeClass("bzoom_smallthumb_active").stop().animate({opacity:l.smallthumb_inactive_opacity},l.speed),i.eq(t).addClass("bzoom_thumb_active").show().stop().css({opacity:0}).animate({opacity:1},l.speed),r.find("li:eq("+t+")").addClass("bzoom_smallthumb_active").show().stop().css({opacity:l.smallthumb_inactive_opacity}).animate({opacity:1},l.speed),n.attr("src",i.eq(t).find(".bzoom_thumb_image").attr("src"))}l.zoom_area_height=l.zoom_area_width/m,o.find("div").css({width:l.zoom_area_width,height:l.zoom_area_height}),i.add(c).mousemove(function(t){var i,e,a=t.pageX-u.offset().left,o=t.pageY-u.offset().top,m=l.thumb_image_width*b,s=l.thumb_image_height*b,h=0,_=0;h=a<l.thumb_image_width/2?m/2<a?a-m/2:0:a+m/2>l.thumb_image_width?l.thumb_image_width-m:a-m/2,_=o<l.thumb_image_height/2?s/2<o?o-s/2:0:o+s/2>l.thumb_image_height?l.thumb_image_height-s:o-s/2,i=h/b,e=_/g,c.css({left:h,top:_}),n.css({left:-h,top:-_}),d.css({left:-i,top:-e})}).mouseenter(function(t){_.stop(),d.attr("src",x(this).find(".bzoom_big_image").attr("src")),o.css({"background-image":"none"}).stop().fadeIn(400),u.find(".bzoom_thumb_active").stop().animate({opacity:.5},.7*l.speed),c.stop().animate({opacity:1},.7*l.speed).show()}).mouseleave(function(t){o.stop().fadeOut(400),u.find(".bzoom_thumb_active").stop().animate({opacity:1},.7*l.speed),c.stop().animate({opacity:0},.7*l.speed,function(){x(this).hide()}),_.start()})}}}(jQuery);