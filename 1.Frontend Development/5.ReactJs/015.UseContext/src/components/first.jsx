import Second from "./second";
export default function First({ name }) {
  return (
    <>
      <h2>First Child</h2>
      <Second name={name} />
    </>
  );
}
