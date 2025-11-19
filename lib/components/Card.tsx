import Card from "react-bootstrap/Card";

export function BaseCard({ title, children }) {
  return (
    <Card className="p-3 m-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}
