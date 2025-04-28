  const r = new rive.Rive({
      src: "fafreference.riv",
 
      canvas: document.getElementById("canvas"),
      autoplay: true,
    
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
  });