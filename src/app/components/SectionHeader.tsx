export default function SectionHeader({ title }: { title: string }) {
  return (
    <div
      className="text-center py-2 fw-bold border-top border-bottom border-2 border-dark"
      style={{ backgroundColor: "#D8E7F3" }}
    >
      {title}
    </div>
  );
}
