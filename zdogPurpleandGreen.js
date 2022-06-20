// zdog-demo.js
// const TAU = Zdog.TAU;
// const black = '#000';
const neonGreen = '#9f0';
const neonPurple = '#90f';

let isSpinning = true;
// create illo
let illo = new Zdog.Illustration({
  // "Illustration holds all the shapes to the scene!"
  // set to veriable illo
    // set canvas with selector
    element: '.zdog-canvas',
    // zoom 4 times
    zoom: 2,
    isCentered: true,
    resize: 'true',
    dragRotate: true,
    // stop rotation when dragging starts
  onDragStart: function() { isSpinning = false;},
});

  var logoGroup = new Zdog.Group({
    addTo: illo, 
  })

  let slashPurple = new Zdog.Shape({
    // SLASH
    addTo: logoGroup, stroke: 10, color: neonPurple, translate: {x: 15},
    path: [
      {x: 16, y: -20}, //Start
      {x: -16, y: 20}, //End
    ],
  });

  let greaterThan = new Zdog.Shape({
    addTo: logoGroup, stroke: 10, color: neonPurple, translate: { x: 30}, closed: false, 
    path: [
      {x : 16, y : -20 }, // start
      {x : 32, y : 0}, //bend
      {x : 16, y : 20}, //end
    ],
  });

  let lesserThan = new Zdog.Shape({
    addTo: logoGroup, stroke: 10, color: neonPurple, translate: { x: -30}, closed: false, 
    path: [
      {x : 16, y : -20 },// Keep Start the same
      {x : -1, y : 0}, //bend
      {x : 16, y : 20}, //end
    ],
  });



  function animate(){
  // rotate illo each frame (Y-axis)
  if ( isSpinning ) {
    illo.rotate.y += 0.01;
  }
   // update & render
   illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
  }

  // start animation
  // this starts the function
animate();
  
 