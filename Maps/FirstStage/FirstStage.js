export default class Map extends React.Component{
  constructor(props){
    super(props)
    this.state={
      map: "Maps/dogmap.png"
    }
  }
  render(){
    return(
      <div id="canvas" style={{backgroundImage: `url(${this.state.map})`}}>
        <img style={{height: "200px"}} src={"Images/Bosses/Xanafin.png"}></img>
      </div>
    )
  }
}