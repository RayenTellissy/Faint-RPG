class Player extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: "",
      level: 1,
      xp: 0,
      gold: 0,
      stage: 1
    }
  }

  componentDidMount(){
    this.setName()
  }
  setName(){
    const name=prompt("Enter your name")
    this.setState({
      name: name
    })
  }
  render(){
    return(
      <div id="stats">
        <div id="stats-container">
          <p className="stat"><span className="stat-label">Name:</span> {this.state.name}</p>
          <p className="stat"><span className="stat-label">Level:</span> {this.state.level}</p>
          <p className="stat"><span className="stat-label">XP:</span> {this.state.xp}</p>
          <p className="stat"><span className="stat-label">Gold:</span> {this.state.gold}</p>
        </div>
      </div>
    )
  }
}


class Stage1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      character: "Images/Character/standDown.png",
      characterX: 550,
      characterY: 400,
      velocityRight: 5,
      velocityLeft: -5,
      velocityUp: -5,
      velocityDown: 5,
      isWPressed: false,
      isSPressed: false,
      isAPressed: false,
      isDPressed: false
    }
  }
  componentDidMount(){
    /* key down event            */
    // W event
    addEventListener("keydown", (event)=>{
      if(event.keyCode===87){
        this.setState({
          character: "Images/Character/walkUp.png",
          characterY: this.state.characterY+this.state.velocityUp,
          isWPressed: true
        })
      }
        // A event
      if(event.keyCode===65){
        this.setState({
          character: "Images/Character/walkLeft.png",
          characterX: this.state.characterX+this.state.velocityLeft,
          isAPressed: true
        })
      }
        // S event
      if(event.keyCode===83){
        this.setState({
          character: "Images/Character/walkDown.png",
          characterY: this.state.characterY+this.state.velocityDown,
          isSPressed: true
        })
      }
       // D event
      if(event.keyCode===68){
        this.setState({
          character: "Images/Character/walkRight.png",
          characterX: this.state.characterX+this.state.velocityRight,
          isDPressed: true
        })
      }
    })
    /*          key up event              */
    addEventListener("keyup", (event)=>{
      if(event.keyCode===87){
        this.setState({
          isWPressed: false
        })
      }
        // A event
      if(event.keyCode===65){
        this.setState({
          isAPressed: false
        })
      }
        // S event
      if(event.keyCode===83){
        this.setState({
          isSPressed: false
        })
      }
       // D event
      if(event.keyCode===68){
        this.setState({
          isDPressed: false
        })
      }
    })
    setInterval(()=>{
      var characterX=this.state.characterX
      var characterY=this.state.characterY
      
      if(this.state.isWPressed){
        characterY+=this.state.velocityUp
      }
      if(this.state.isSPressed){
        characterY+=this.state.velocityDown
      }
      if(this.state.isAPressed){
        characterX+=this.state.velocityLeft
      }
      if(this.state.isDPressed){
        characterX+=this.state.velocityRight
      }
      this.setState({
        characterX: characterX,
        characterY: characterY
      })
    },16)
  }
  render(){
    return(
      <div>
        <div id="canvas">
          <img style={{height: "100px", transform: `translateX(${this.state.characterX}px) translateY(${this.state.characterY}px)`}} src={this.state.character}></img>
        </div>
      </div>
    )
  }
}

var App=()=>(
  <div>
    <Stage1/>
    <Player/>
  </div>
)

ReactDOM.render(<App/>,document.getElementById("app"))