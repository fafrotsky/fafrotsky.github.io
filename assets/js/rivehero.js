const r = new rive.Rive({
  src: "fafhome.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Artboard",
  stateMachines: ["State Machine 1"],
  automaticallyHandleEvents: true,
  isTouchScrollEnabled: false,
  layout: new rive.Layout({
    fit: rive.Fit.Layout,

  }),
  onLoad: () => {
    const inputs = r.stateMachineInputs("State Machine 1");
    r.resizeDrawingSurfaceToCanvas();

    
  },

  onStateChange: (riveEvent) => {
    const newStates = riveEvent.data;
    newStates.forEach((state) => {
      if (state.indexOf("TwitchLink") > -1) {
        window.location.href = "https://www.twitch.tv/fafrotskyvt";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

      if (state.indexOf("YTLink") > -1) {
        window.location.href = "https://www.youtube.com/@Fafrotsky/featured";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

      if (state.indexOf("AboutPage") > -1) {
        window.location.href = "about.html";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

      if (state.indexOf("CommsPage") > -1) {
        window.location.href = "tos-overview.html";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

      if (state.indexOf("ContactPage") > -1) {
        window.location.href = "contact.html";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

      if (state.indexOf("PortfolioPage") > -1) {
        window.location.href = "portfolio.html";
      } else if (state.indexOf("PromptHover") > -1) {
        document.getElementById("canvas").style.cursor = "pointer";
      } else if (state.indexOf("PromptIdle") > -1) {
        document.getElementById("canvas").style.cursor = "default";
      }

    });
  }

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

