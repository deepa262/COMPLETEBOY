 $(function(){
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("http://enstilar.com/pdf/enstilar-pi.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
          
  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code

function frame1eye1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye1, 1, {opacity:0} , '+=0.5')
     .to(frame1, 1, {opacity:0})
}
function frame1book1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frm1_face1, 1, {opacity:0} , '+=0.5')
     .from(frm1_face2, 1, {opacity:0})
    .from(frm1_face3, 1, {opacity:0}, '-=0.7')
     .from(frm1_face44,1, {opacity:0}, '-=0.75')
     .from(frm1_face4, 1, {opacity:0}, '-=0.8')
     .from(frm1_face5, 1, {opacity:0}, '-=0.85')
      .from(frm1_book6, 1, {opacity:0}, '-=0.9')
      .from(frame1_eye2, 1, {opacity:0})
     .from(frame1_eye3, 1, {opacity:0})
     .from(frame1_eye4, 1, {opacity:0})    
}
function frame1book2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(frame1_eye1, 1, {opacity:0})
     .to(frm1_face1, 1, {opacity:0})
     .to(frm1_face2, 1, {opacity:0})
     .to(frm1_face3, 1, {opacity:0})
    .to(frm1_face44, 1, {opacity:0})
     .to(frm1_face4, 1, {opacity:0})
    .to(frm1_face5, 1, {opacity:0})
     .to(frm1_book6, 1, {opacity:0})
      .to(frame1_eye2, 1, {opacity:0})
     .to(frame1_eye3, 1, {opacity:0})
     .to(frame1_eye4, 1, {opacity:0})
}
function frame1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl  
      .from(MainBanner, 1, {opacity:0})
      .from(new1, 1, {opacity:0}, '-=2')
}
function frame11Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(new1, 1, {left:-1080,opacity:0}, '+=0.3')
}
function frame2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2, 1, {left:1080,opacity:0}, '-=0.8')
.to(frame2, 0.8, {right:200,opacity:1}, '-=1')
}
function frame2toysAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2_toy1, 0.8, {opacity:0}, '-=0.8')
     .from(frame2_toy2, 1, {opacity:0}, '-=0.8')
     .from(frame2_toy3, 1, {opacity:0}, '+=1')
     .from(frame2_toy4, 1, {opacity:0}, '+=0.8')
     .from(frame2_toy5, 1, {opacity:0}, '+=0.5')
     .from(frame2_toy6, 1, {opacity:0}, '+=0.4')  
}
  function textcolorAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:10});
  tl
  .from(frame2_colortext, 1, {opacity:0})
 .to(frame2_colortext, 1, {opacity:1}, '-=1')
}
function animate(){
    frame1eye1Appear(0);
    frame1book1Appear(1);
    frame1book2Appear(2);
    frame1Appear(8);
    frame11Appear(8);
    frame2Appear(9);
    frame2toysAppear(10);
    textcolorAppear(16); 
}
// End non-ISI animation code

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
