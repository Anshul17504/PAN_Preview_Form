export default function FormHeader() {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      {/* Outer Header Border Box (less padding & less top space) */}
      <div
        className="border border-2 border-dark bg-white p-2"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div className="d-flex justify-content-between align-items-center">

          {/* LEFT PHOTO BOX */}
          <div className="col-auto">
            <div
              className="border border-dark bg-white d-flex justify-content-center align-items-center p-0"
              style={{ width: 120, height: 150, overflow: "hidden" }}
            >
              <img
                src="./photo.png"
                alt="photo"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="col text-center px-3">
            <div className="fw-bold">
              FORM NO. 49A(I) [15.A.F01]
            </div>

            <div className="fw-bold">
              [See rule 114] [15.A.R04]
            </div>

            <div className="fw-bold mt-1">
              (e-Form)
            </div>

            <div className="fw-bold mt-2">
              Application for Allotment of Permanent Account Number
            </div>

            <div className="fw-bold">
              [For an Individual being a Citizen of India]
            </div>

            {/* Controlled space above text */}
            <div className="fw-bold fst-italic mt-4 small">
              To avoid mistake(s), please follow the accompanying
              instructions and examples before filling up the form
            </div>
          </div>

          {/* RIGHT PHOTO BOX */}
          <div className="col-auto">
            <div
              className="border border-dark bg-white d-flex justify-content-center align-items-center p-0"
              style={{ width: 120, height: 150, overflow: "hidden" }}
            >
              <img
                src="./photo.png"
                alt="photo"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
