class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  onListItemHover() {
    this.setState({
      selected: !this.state.selected 
    });
  }

  render() {
    let style = {
      fontWeight: this.state.selected ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
        onMouseEnter={this.onListItemHover.bind(this)} 
        onMouseLeave={this.onListItemHover.bind(this)}
      >{this.props.item}</li>
    );
  }
};

let groceryItems = ['banana', 'apple', 'orange', 'carrot'];

const GroceryList = (props) => {
  const groceryItems = props.items.map(item => <GroceryListItem item = {item} />);

  return (
    <ul>
      {groceryItems}
    </ul>
  );
};

ReactDOM.render(<GroceryList items = {groceryItems} />, document.getElementById("app"));