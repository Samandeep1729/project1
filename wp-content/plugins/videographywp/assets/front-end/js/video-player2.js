!function(a){a.fn.cvwp_video=function(b){if(0==this.length)return!1;if(this.length>1)return this.each(function(c,d){a(d).cvwp_video(b)}),this;var c,d,e={onLoad:function(){},onPlay:function(){},onStop:function(){},onPause:function(){},onFinish:function(){},stateChange:function(){}},f=this,b=a.extend({},e,b),g=!1,h=function(){return f.data("lazy_load")?a(f).click(function(b){b.preventDefault(),d=a(f).children().hide(),i()}):i(),j(),a(window).resize(j),f},i=function(){if(!g)switch(a(f).data("source")){case"youtube":g=a(f).youtubeVideo({onLoad:m,onPlay:n,onStop:o,onPause:p});break;case"vimeo":g=a(f).vimeoVideo({onLoad:m,onPlay:n,onStop:o,onPause:p});break;default:var b=a(f).data("source")+"Video";a.fn[b]?g=a.fn[b].call(f,{onLoad:m,onPlay:n,onStop:o,onPause:p}):console&&console.warn('No implementation for video source "'+f.data("source")+'".')}},j=function(){var b,c=a(f).width();switch(a(f).data("aspect")){case"16x9":default:b=9*c/16;break;case"4x3":b=3*c/4;break;case"2.35x1":b=c/2.35;break;case"1x1":b=c}a(f).css({height:Math.floor(b)})},k=function(a){c=a,b.stateChange.call(f,c)},l=function(){return c},m=function(){g||(g=this),k(1),f.data("lazy_load")&&(cvwp_is_mobile()||q()),b.onLoad.call(f,c)},n=function(){k(2),b.onPlay.call(f,c)},o=function(){k(4),b.onStop.call(f,c),b.onFinish.call(f,c)},p=function(){k(3),b.onPause.call(f,c)},q=function(){return c?(g.play(),void k(2)):void setTimeout(q,1e3)},r=function(){g.pause(),k(3)},s=function(){g.stop(),k(4)};return this.play=function(){q()},this.pause=function(){r()},this.stop=function(){s()},this.getStatus=function(){return l()},this.resize=function(){j()},h()}}(jQuery),function(a){var b=!1;a.fn.youtubeVideo=function(c){if(0==this.length)return!1;if(this.length>1)return this.each(function(b,d){a(d).youtubeVideo(c)}),this;var d={onLoad:function(){},onPlay:function(){},onStop:function(){},onPause:function(){}},e=this,c=a.extend({},d,c),f=!1,g=function(){return b?h():a(window).on("youtubeapiready",function(){h()}),i(),e},h=function(){if("undefined"==typeof YT)return void setTimeout(h,1e3);e.prepend("<div/>");var a={enablejsapi:1,rel:0,showinfo:0,showsearch:0,modestbranding:e.data("modestbranding")||0,iv_load_policy:e.data("iv_load_policy")||0,autohide:e.data("autohide")||0,controls:e.data("controls")||0,fs:e.data("fullscreen")||0,loop:e.data("loop")||0};f=new YT.Player(e.children(":first")[0],{height:"100%",width:"100%",videoId:e.data("video_id"),playerVars:a,events:{onReady:function(a){c.onLoad.call(e),j()},onStateChange:function(a){switch(window.parseInt(a.data,10)){case 0:c.onStop.call(e);break;case 1:c.onPlay.call(e);break;case 2:c.onPause.call(e)}}}})},i=function(){if(!b){b=!0;var c=document.createElement("script"),d=document.getElementsByTagName("script")[0];c.async=!0,c.src=document.location.protocol+"//www.youtube.com/iframe_api",d.parentNode.insertBefore(c,d),window.onYouTubeIframeAPIReady=function(){a(window).trigger("youtubeapiready")}}},j=function(){f.setVolume(e.data("volume"))};return this.play=function(){f.playVideo()},this.pause=function(){f.pauseVideo()},this.stop=function(){f.stopVideo()},g()}}(jQuery),function(a){a(window).load(function(){"undefined"!=typeof cvwp_video_options&&a(cvwp_video_options.embed).cvwp_video();var b=a(window).width()-100;if(a(".cvwp-video-button").click(function(c){if(c.preventDefault(),!a(this).data("cvwp_id")){var d=a(this).data(),e="cvwp-video-modal-"+(Math.floor(9999*Math.random())+1),f=a("<div />",{"class":"cvwp-video-player",css:{width:d.width,"max-width":"100%",height:d.height}}).data(d),g=a("<div />",{"class":"cvwp-video-modal",html:"<!-- cvwp script generated element -->",id:e,css:{width:d.width>b?b:d.width}}).data("max_width",d.width).append(f);a(this).after(g);var h=a(f).cvwp_video();a(this).data("cvwp_id",e),a(g).data("cvwp_player",h)}a("#"+a(this).data("cvwp_id")).modal({modalClass:"cvwp_modal"})}),"undefined"!=typeof a.modal){var c;a(document).on(a.modal.BEFORE_CLOSE,function(b,d){var e=d.elm,f=a(e).data("cvwp_player");f.pause(),c=!1}),a(document).on(a.modal.OPEN,function(b,d){var e=d.elm,f=a(e).data("cvwp_player");f.play(),c=d;var g=a(window).width()-100,h=a(e).data("max_width");g>h?a(e).css({width:h}):a(e).css({width:g}),setTimeout(function(){a.modal.resize()},2)}),a(window).resize(function(){var b=a(window).width()-100;if(c){var d=c.elm,e=a(d).data("max_width");b>e?a(d).css({width:e}):a(d).css({width:b}),a.modal.resize()}})}})}(jQuery);
