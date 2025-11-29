export default function FormHeader() {
  return (
    <div className="p-3 fw-bold">

      <div className="d-flex justify-content-between align-items-center">

        {/* LEFT PHOTO */}
        <div
          className="bg-white d-flex justify-content-center align-items-center border border-2 border-dark"
          style={{ width: 110, height: 140 }}
        >
          <img
            src="/photo.png"
            alt="photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* CENTER TEXT */}
        <div className="text-center px-4">
          <div className="fw-bold">FORM NO. 49A(I) [15.A.F01]</div>
          <div className="fw-bold">[See rule 114] [15.A.R04]</div>
          <div className="fw-bold mt-1">(e-Form)</div>

          <div className="fw-bold mt-2">Application for Allotment of Permanent Account Number</div>
          <div className="fw-bold">[For an Individual being a Citizen of India]</div>

          <div className="fw-bold small mt-3">
            To avoid mistake(s), please follow the accompanying instructions and examples
            <br />
            before filling up the form
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div
          className="bg-white d-flex justify-content-center align-items-center border border-2 border-dark"
          style={{ width: 110, height: 140 }}
        >
          <img
            src="/photo.png"
            alt="photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
}
