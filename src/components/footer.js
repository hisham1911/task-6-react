function Footer() {
  return (
    <div className="bg-dark py-4 text-light">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p className="mb-3 h3">GET IN TOUCH</p>
            <i className="fa fa-facebook"></i>
            <span className="ms-3 fs-5">facebook</span>
            <br />
            <i className="fa fa-instagram"></i>
            <span className="ms-3 fs-5">instagram</span>
            <br />
            <i className="fa fa-twitter"></i>
            <span className="ms-3 fs-5">twitter</span>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-light rounded-0 px-4">
              CONTACT ME
            </button>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <i className="fa fa-facebook fs-3 me-2"></i>
            <i className="fa fa-instagram fs-3 me-2"></i>
            <i className="fa fa-twitter fs-3 me-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
