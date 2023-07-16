

function Square(props) {
  return (
    <div className="square" onClick={()=>props.onClick(props.index)} ><h1>{props.value}</h1></div>
  )
}

export default Square