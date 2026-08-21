import reactRouterLogo from "../assets/example.svg";
import Teacher from "../sandbox/Teacher.jsx";
import Welcome from "../sandbox/Welcome.jsx";
import Greeting from "../sandbox/Greeting.jsx";
import Button from "../sandbox/Button.jsx";

const publicLogoUrl = `${import.meta.env.BASE_URL}logo.webp`;

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <Greeting name="Jane" />
        <Greeting name="Anna" />
        <Greeting name="Ole" />
        <Button />
        <p>Welcome to the home page...</p>
        <article>
          <h2>Displaying images in React</h2>

          <h3>1. Import from src/assets</h3>
          <p>
            Import the image file at the top of your component. The image is
            bundled with your app and gets a unique filename for better caching.
          </p>
          <img src={reactRouterLogo} alt="Example SVG" className="img-small" />

          <h3>2. Public folder</h3>
          <p>
            Place the image in the /public folder and reference it by path. The
            file is served directly without any processing.
          </p>
          <img
            src={publicLogoUrl}
            alt="Favicon from public folder"
            className="img-small"
          />

          <h3>3. External URL</h3>
          <p>
            Use a full URL to load an image from the internet, just like in
            regular HTML.
          </p>
          <img
            src="https://picsum.photos/200"
            alt="Random external image"
            className="img-medium"
          />
        </article>
      </main>
    </>
  );
}
