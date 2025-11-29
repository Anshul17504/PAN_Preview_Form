export default function FormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 p-0 bg-white border border-2 border-dark">
        {children}
      </div>
    </div>
  );
}
