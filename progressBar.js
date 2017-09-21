function ProgressBar(duration){
    var progressBarDiv = {};
    var intervalId = null;
    var perSec = 0;

    this.duration = duration;
    this.perSec = 100/duration;
    var parentDiv = document.getElementById('js_progressBars');
    this.progressBarDiv = document.createElement('div');
    this.progressBarDiv.style.width = "10px";
    this.progressBarDiv.style.backgroundColor = "red"
    this.progressBarDiv.style.height = "25px";
    this.progressBarDiv.style.borderRadius = "10px";
    this.status = 0;
    parentDiv.appendChild(this.progressBarDiv);

    $(document).on( "pauseProgressBars", function() {
      window.status = "1";
    });

    this.play = function() {
      var that = this;
      that.intervalId = setInterval(function(){
        if(window.status === "1"){
          clearInterval(that.intervalId);
        } else {
          var curLength = that.progressBarDiv.style.width.slice(0, -2);
          that.progressBarDiv.style.width  = (parseInt(curLength, 10) + that.perSec) + "px";
        }
      }, 1000);
    };
  };



// function ProgressBar(duration){
//     var progressBarDiv = {};
//     var intervalId = null;
//     var perSec = 0;
//     var status = null;
//
//     this.duration = duration;
//     this.perSec = 100/duration;
//     var parentDiv = document.getElementById('js_progressBars');
//     this.progressBarDiv = document.createElement('div');
//     this.progressBarDiv.style.width = "10px";
//     this.progressBarDiv.style.backgroundColor = "red"
//     this.progressBarDiv.style.height = "25px";
//     this.progressBarDiv.style.borderRadius = "10px";
//     parentDiv.appendChild(this.progressBarDiv);
//   }
//
//
//     ProgressBar.prototype.play = function() {
//       var that = this;
//       for (var i = 0; i < this.perSec; i++) {
//         if(status!== "1"){
//           intervalId = setInterval(function(){
//             if(status === "1"){
//               clearInterval(intervalId);
//             } else {
//               var curLength = that.progressBarDiv.style.width.slice(0, -2);
//               that.progressBarDiv.style.width  = (parseInt(curLength, 10) + that.perSec) + "px";
//             }
//           }, 1000);
//         }else {
//           clearInterval(intervalId);
//         }
//       }
//     };
//
//     ProgressBar.prototype.pause = function() {
//       status = 1;
//     }
