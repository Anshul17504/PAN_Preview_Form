export default function GenderRow({ number }: { number: string }) {
  return (
    <div className="d-flex border-bottom border-2 border-dark">

      {/* Number */}
      <div
        className="d-flex align-items-center justify-content-center border-end border-2 border-dark"
        style={{ width: 60 }}
      >
        {number}.
      </div>

      {/* Label */}
      <div
        className="d-flex align-items-center px-2 border-end border-2 border-dark"
        style={{ width: 200 }}
      >
        Gender
      </div>

      {/* Value */}
      <div
        className="flex-grow-1 px-3 py-2"
        style={{ backgroundColor: "#FFF6D8" }}
      >
        <div>(i) Male</div>
        <div>(ii) Female ✓</div>
        <div>(iii) Transgender</div>
        <div className="fst-italic">(select one)</div>
      </div>

    </div>
  );
}
