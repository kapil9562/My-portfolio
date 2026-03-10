import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/fluid.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <canvas
      id="fluid-canvas"
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}