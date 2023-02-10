const char = (props) => {
  const style = {
    border: "1px solid #333",
    padding: "18px",
    margin: "16px",
    display: "inline-block",
  }

  return (
    <div style={style} onClick={props.click} >{props.char}</div>
  )
}

export default char