import "./App.css";
import CMButton from "./components/CMButton/CMButton";

import CMDialog from "./components/CMDialog/CMDialog";
import CMDialogDisclosure from "./components/CMDialogDisclosure/CMDialogDisclosure";
import { useDialogState } from "reakit/Dialog";

function App() {
  const dialog = useDialogState();

  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <h1 aria-label="Page Title">Page Title</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="sections">
          <section>
            <h2>Fill this form</h2>

            <form aria-label="Contact information">
              <label>
                <span className="form-label">Name</span>
                <input type="text" />
              </label>

              <label>
                <span className="form-label">Surname</span>
                <input type="text" />
              </label>

              <CMButton isIcon label="Send" />
            </form>
          </section>

          <section>
            <h2>About this dog</h2>
            <img
              width="270px"
              src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
              alt="Happy smiling dog"
            />
          </section>
        </div>

        <div className="dialog-example">
          <CMDialogDisclosure label="Open dialog" {...dialog}></CMDialogDisclosure>
          <CMDialog {...dialog} aria-label="Small popup dialog.">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CMDialog>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
