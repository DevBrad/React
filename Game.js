class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myStyle = {
      color: "green",
      fontFamily: "Gill Sans",
      fontSize: "34px",
      margin: "20px 0px 10px 10px",
    };
    return (
      <div className-="games" id={this.props.id}>
        <h1 style={myStyle}> {this.props.title}</h1>
        <p style={{ backgroundColor: " 	#F5F5F5" }}>{this.props.description}</p>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}
