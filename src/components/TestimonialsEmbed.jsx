import { useEffect } from "react";

export default function TestimonialEmbed({ id, src }) {
  useEffect(() => {
    // Load the resizer script only once
    if (!window.__testimonialScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://testimonial.to/js/iframeResizer.min.js";
      script.async = true;

      script.onload = () => {
        window.__testimonialScriptLoaded = true;

        if (window.iFrameResize) {
          window.iFrameResize(
            { log: false, checkOrigin: false },
            `#${id}`
          );
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already loaded → just resize this iframe
      if (window.iFrameResize) {
        window.iFrameResize(
          { log: false, checkOrigin: false },
          `#${id}`
        );
      }
    }
  }, [id]);

  return (
    <iframe
      id={id}
      src={src}
      frameBorder="0"
      scrolling="no"
      width="100%"
      style={{ border: "none" }}
    ></iframe>
  );
}
