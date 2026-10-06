export default function Increment({counts, setCounts}) {
  return (
    <>
    <h2>Child  Count is {counts}</h2>
      <button onClick={() => setCounts(counts + 1)}>Increment</button>
    </>
  );
}
