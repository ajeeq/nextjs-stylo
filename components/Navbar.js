import "./NavBar.scss";
import NavButton from "./NavButton";

const NavBar = props => (
  <div className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;

// ===== style object ===== //

// const navBarStyle = {
//   backgroundColor: "red",
//   color: "white",
//   width: "100%",
//   height: "60px"
// };
  
// const NavBar = () => (
//   <div className="NavBar" style={navBarStyle}>
//     NAVBAR
//   </div>
// );

// export default NavBar;  