import { Card } from "pixel-retroui";

export default function RetroCard() {
  return (
    <Card
      bg="black"
      textColor="white"
      borderColor="white"
      shadowColor="white"
      className="p-4 text-center"
      style={{ position: 'relative', zIndex: 101, background: 'black', border: '2px solid white', boxShadow: '0 0 8px white' }}
    >
      <h2>Card Title</h2>
      <p>This is the card content.</p>
    </Card>
  );
}
