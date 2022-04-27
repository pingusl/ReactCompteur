import logo from "../img/calculette.png";
const Header = () => {
  return (
    <header className="header">
      <span>
        <img src={logo} className="image" />
      </span>

      <span> React Counter</span>
    </header>
  );
};
export default Header;
