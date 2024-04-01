export default function Rate1({ service1, onSetService1 }) {
  return (
    <div>
      <label>How did you like the service?</label>
      <select
        value={service1}
        key={service1}
        onChange={(e) => onSetService1(e)}
      >
        <option value={0}>
          Dissatisfied <span>0%</span>
        </option>
        <option value={5}>
          It was Okay <span>5%</span>
        </option>
        <option value={10}>
          It was good <span>10%</span>
        </option>
        <option value={20}>
          Absolutely Amazing <span>20%</span>
        </option>
      </select>
    </div>
  );
}
