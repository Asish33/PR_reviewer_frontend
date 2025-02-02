import Button from "../components/githubButton";
import Dashboard from "./dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  function fun() {
    window.location.href =
      "https://pr-reviewer-backend.onrender.com/auth/github";
  }


  return (
    <div className="bg-rice min-h-screen w-full flex flex-col justify-center items-center">
      <Button onClick={fun} />
    </div>
  );
}

export default App;
