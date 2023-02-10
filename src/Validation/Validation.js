const validation = (props) => {
  let notiText = "Input is long enought"
  let textColor = "blue"

  if (props.inputLength <= 5) {
    notiText = "Input is too short"
    textColor = "red"
  } 

  return <p style={{color:textColor}} >{notiText}</p>
}

export default validation