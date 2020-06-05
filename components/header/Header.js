import Link from "next/link";
import "./Header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header">{props.appTitle}</div>
  </Link>
);

export default Header;

// ===== style object ===== //

// const headerStyle = {
//  backgroundColor: "blue",
//   color: "white",
//   width: "100%",
//   height: "50px"
// };

// const Header = () => (
//   <div className="Header" style={headerStyle}>
//     HEADER
//   </div>
// );

// export default Header;