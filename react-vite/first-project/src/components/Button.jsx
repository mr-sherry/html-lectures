function Button({ text, padding }) {
  return (
    <button
      style={{
        padding: padding,
        backgroundColor: 'black',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      {text}
    </button>
  );
}

export default Button;
