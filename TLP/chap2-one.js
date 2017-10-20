// ########
//  #####
//   ###
//    #

function drawDiagram(){
  const outerLength = 4;
  const innerLength = 8;
  for (var i = 0; i < outerLength; i++) {
    for (var j = 0; j < innerLength; j++) {
      if(j > i && j < innerLength -  (1 + i){
        console.log("#");
      }
      else {
        console.log(" ");
      }
    }
  }
}

drawDiagram();
