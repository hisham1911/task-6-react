import Progress from "./progress";

function Skills() {
  return (
    <div className="skills bg-dark">
      <div className="container text-light  py-5 text-center">
        <div className="col-12 container">
          <p className="display-4">Skills</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic
            molestiae explicabo deleniti, non quas ducimus. A quae iusto
            voluptate culpa, nisi nam magnam cupiditate consequatur consectetur
            quo obcaecati perferendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo hic molestiae explicabo deleniti, non quas
            ducimus. A quae iusto voluptate culpa, nisi nam magnam cupiditate
            consequatur consectetur quo obcaecati perferendis.
          </p>
        </div>
        <div className="row py-5">
          <div class="col-5 d-flex flex-column align-content-center flex-wrap my-auto">
            <button className="btn btn-dark py-4 rounded-0 border-bottom fs-5 mb-2">
              MY FOUCS
            </button>
            <button className="btn text-start btn-dark p-3 rounded-0 fs-5">
              UI/UX Design
            </button>
            <button className="btn text-start btn-dark p-3 rounded-0 fs-5">
              Responsive Design
            </button>
            <button className="btn text-start btn-dark p-3 rounded-0 fs-5">
              Web Design
            </button>
            <button className="btn text-start btn-dark p-3 rounded-0 fs-5">
              Mobile App Design
            </button>
          </div>
          <div className="col-7 d-flex flex-column">
            <Progress p={35} n={"HTML"}/>
            <Progress p={75} n={"CSS"}/>
            <Progress p={35} n={"HTML"}/>
            <Progress p={35} n={"HTML"}/>
            <Progress p={35} n={"HTML"}/>
            <Progress p={35} n={"HTML"}/>
            <Progress p={35} n={"HTML"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
