export default function Click(props) {
  return (
    <>
      <div onClick={props.handleIncrement}>
        The counter is Clicked {props.data} times
      </div>
      <button onClick={props.handleReset}>Reset</button>
    </>
  );
}
