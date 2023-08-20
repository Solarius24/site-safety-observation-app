interface buttonData {
  color: string;
  text: string;
  onClickHandler: any;
}

export function Button({ color, text, onClickHandler }: buttonData) {
  return (
    <button onClick={onClickHandler} style={{ backgroundColor: `${color}` }}>
      {text}
    </button>
  );
}
