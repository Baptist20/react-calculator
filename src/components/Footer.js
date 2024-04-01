export default function Footer({ bill, service1, service2 }) {
  const tip = (bill * service1) / 100 + (bill * service2) / 100;
  const total = bill + tip;
  return (
    <div>
      <footer>{`You Pay $${total} ($${bill} + $${tip})`}</footer>
    </div>
  );
}
