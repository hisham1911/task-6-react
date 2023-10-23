import "./header.css";
function Header() {
  return (
    <div className="header align-items-center container-fluid row">
      <div className="text-center col-5">
        <p className="text-light display-4 fw-bold">Esraa Hassaan</p>
        <p className="text-light display-6">Web developer & Designer</p>
        <button type="button" class="mt-3 btn btn-outline-light btn-lg">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
