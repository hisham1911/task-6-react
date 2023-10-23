function About() {
  return (
      <div className="container-fluid row py-5">
        <div className="col-5 text-center">
          <p className="display-4 about-title pt-0">About me</p>
        </div>
        <div className="col-7 about-text">
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic
            molestiae explicabo deleniti, non quas ducimus. A quae iusto
            voluptate culpa, nisi nam magnam cupiditate consequatur consectetur
            quo obcaecati perferendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo hic molestiae explicabo deleniti, non quas
            ducimus. A quae iusto voluptate culpa, nisi nam magnam cupiditate
            consequatur consectetur quo obcaecati perferendis.
          </p>
        <button className="btn btn-dark px-4 my-4 rounded-0 border border-2 border-info">Download Resume</button>
        </div>
      </div>
  );
}

export default About;
