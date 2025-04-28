  const r = new rive.Rive({
      src: "fafreference.riv",
 
      canvas: document.getElementById("canvas"),
      autoplay: true,
    
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
  });

  
function handleResize() {
  r.resizeDrawingSurfaceToCanvas();
}

// Subscribe to window size changes
window.addEventListener('resize', handleResize);

// Subscribe to devicePixelRatio changes
window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
  .addEventListener("change", handleResize);


  
  // Add event listener and provide callback to handle Rive Event
  r.on(rive.EventType.RiveEvent, onRiveEventReceived);
