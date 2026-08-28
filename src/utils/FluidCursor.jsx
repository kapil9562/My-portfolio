import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[data-fluid-cursor="true"]'
    );

    // Script already loaded
    if (existingScript) return;

    const script = document.createElement("script");

    script.src = "/fluid.js";
    script.async = true;
    script.dataset.fluidCursor = "true";

    document.body.appendChild(script);
  }, []);

  return (
    <canvas
      id="fluid-canvas"
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
