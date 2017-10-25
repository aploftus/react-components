class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
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