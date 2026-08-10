import { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W;
    let H;
    let animationId;

    const pts = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const mkPt = () => {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.6 + 0.2,
      };
    };

    for (let i = 0; i < 80; i++) {
      pts.push(mkPt());
    }

    const animPts = () => {
      ctx.clearRect(0, 0, W, H);

      // Particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) {
          p.vx *= -1;
        }

        if (p.y < 0 || p.y > H) {
          p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(240, 66, 106, ${p.a})`;

        ctx.fill();
      });

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;

          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 120) {
            ctx.beginPath();

            ctx.moveTo(
              pts[i].x,
              pts[i].y
            );

            ctx.lineTo(
              pts[j].x,
              pts[j].y
            );

            ctx.strokeStyle = `rgba(
              240,
              66,
              106,
              ${0.12 * (1 - d / 120)}
            )`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animPts);
    };

    animPts();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-[.45] bg-[radial-gradient(ellipse_70%_55%_at_15%_50%,rgba(240,66,106,0.2)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(167,139,250,0.2)_0%,transparent_60%)]"
    />
  );
};

export default ParticleCanvas;