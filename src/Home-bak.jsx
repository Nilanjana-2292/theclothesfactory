import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Create link elements for the CSS files
    const styleCSS = document.createElement("link");
    // styleCSS.rel = "stylesheet";
    // styleCSS.href = "/css/style.css";

    const responsiveCSS = document.createElement("link");
    // responsiveCSS.rel = "stylesheet";
    // responsiveCSS.href = "/css/responsive.css";

    // Append them to <head>
    document.head.appendChild(styleCSS);
    document.head.appendChild(responsiveCSS);

    // Cleanup function to remove them on unmount (when navigating away)
    return () => {
      document.head.removeChild(styleCSS);
      document.head.removeChild(responsiveCSS);
    };
  }, []); // Empty dependency array: runs only on mount and unmount

  return (
    <div>
      <h1>Home Page</h1>
      {/* Your homepage content */}
    </div>
  );
};

export default Home;
