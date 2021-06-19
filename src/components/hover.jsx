export default function Hover(props) {
  return (
    <>
      <div onMouseOver={props.handleIncrement}>
        The counter is hovered {props.data} times
      </div>
      <button onClick={props.handleReset}>Reset</button>
    </>
  );
}
