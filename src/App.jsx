import Button from "../components/githubButton";
import LogOutButton from "../components/logoutButton";
import Dashboard from "./dashboard";

function App() {
  function fun() {
    window.location.href =
      "https://pr-reviewer-backend.onrender.com/auth/github";
  }

  return (
    <div className="bg-rice min-h-screen w-full flex flex-col justify-center items-center">
      <Button onClick={fun} />
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
