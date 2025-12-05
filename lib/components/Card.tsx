import { ReactNode } from "react";
import Card from "react-bootstrap/Card";


interface BaseCardProps {
  title: string;
  children: ReactNode; 
}

export function BaseCard({ title, children }: BaseCardProps) {
  return (
    <Card className="p-3 m-2">
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}
