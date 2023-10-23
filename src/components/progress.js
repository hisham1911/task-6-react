// import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(props) {
    return ( 
        <div className="p row mx-auto mb-3">
              <span className="title col-3 d-flex justify-content-center align-items-center">
                {props.n}
              </span>
              <div
                className="col-9 progress rounded-0 p-0"
                role="progressbar"
                aria-label="Example 20px high"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 50 }}
              >
                <div className="progress-bar" style={{ width: `${props.p}%` }} />
              </div>
            </div>
        // <ProgressBar variant="info" now={60} />
     );
}

export default Progress;