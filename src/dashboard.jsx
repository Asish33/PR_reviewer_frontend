import LogOutButton from "../components/logoutButton"

const Dashboard=()=>{

    function Logoutfun(){
        window.location.href =
          "https://pr-reviewer-backend.onrender.com/logout";
          console.log("hi")
    }

    return (
      <div>
        Dashboard
        <LogOutButton onClick={Logoutfun}></LogOutButton>
      </div>
    );
}

export default Dashboard