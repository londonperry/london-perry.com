import Dither from "./components/Dither";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/pixelact-ui/card";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function App() {
  // Create a background root div if it doesn't exist
  useEffect(() => {
    let bgRoot = document.getElementById("bg-root");
    if (!bgRoot) {
      bgRoot = document.createElement("div");
      bgRoot.id = "bg-root";
      document.body.appendChild(bgRoot);
    }
    return () => {
      // Optionally clean up if needed
      // document.body.removeChild(bgRoot)
    };
  }, []);

  return (
    <>
      {/* Dither background rendered via portal */}
      {typeof window !== "undefined" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
              pointerEvents: "auto",
            }}
          >
            <Dither mouseRadius={0.15} />
          </div>,
          document.getElementById("bg-root") || document.body
        )}
      {/* Site content goes here */}
      <div className="fixed inset-0 z-10 min-h-screen flex items-center justify-center pointer-events-none dark">
        <Card className="min-w-[320px] max-w-[400px] w-full">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
          </CardHeader>
          <CardContent>
            My name is London Perry and I am a Business Analyst based out of
            Boise, ID
          </CardContent>
          <CardFooter>{/* Add footer content here if needed */}</CardFooter>
        </Card>
        {/* ...your site content... */}
      </div>
    </>
  );
}

export default App;
