import Card from "./Card";

export default function Gallery({ designs }) {

  if (designs.length === 0) {
    return (
      <div
        className="text-center py-28"
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "1.4rem",
          fontStyle: "italic",
        }}
      >
        No designs match your search.
      </div>
    );
  }

  return (
    <div
      style={{
        columns: "3 300px", 
        columnGap: "1.5rem",
      }}
    >
      {designs.map((d) => (
        <div key={d.id} style={{ breakInside: "avoid", marginBottom: "1.5rem" }}>
          <Card design={d} />
        </div>
      ))}
    </div>
  );
}