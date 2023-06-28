export function CounterSizeGenerator(props) {
  function handleSizeChange(e) {
    const number = parseInt(e.target.value);
    props.onSizeChange(isNaN(number) ? 0 : number);
  }

  return <div>
    <span>Size:</span>
    <input value={props.size || ''} onChange={handleSizeChange}/>
  </div>;
}
