export default function Bill({ bill, onEnterBill }) {
  return (
    <div>
      <label>How much was the bill</label>

      <input type="text" value={bill} onChange={(e) => onEnterBill(e)} />
    </div>
  );
}
