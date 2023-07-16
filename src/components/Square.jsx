

function Square(props) {
  return (
    <div  className="square border border-5 rounded-4 border-primary " onClick={()=>props.onClick(props.index)} ><h1>{props.value}</h1></div>
  )
}

export default Square