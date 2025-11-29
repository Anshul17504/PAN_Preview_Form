interface SectionRowProps {
  number: string;
  label: string;
  value: string;
  noBorder?: boolean;   // NEW PROP
}

export default function SectionRow({ number, label, value, noBorder }: SectionRowProps) {
  return (
    <div className={`d-flex ${noBorder ? "" : "border-bottom border-2 border-dark"}`}>

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
        {label}
      </div>

      {/* Value */}
      <div
        className="flex-grow-1 d-flex align-items-center px-3"
        style={{ backgroundColor: "#FFF6D8" }}
      >
        {value}
      </div>

    </div>
  );
}
