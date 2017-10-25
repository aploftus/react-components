// TODO

// Here we create a `TodoList` component
var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);
// var Bananas = () => (
//   <li>bananas</li>
// );

// var Tomatoes = () => (
//   <li>tomatoes</li>
// );

const GroceryListItem = (props) => (
  <li>{props.item}</li>
);

let groceryItems = ['banana', 'apple', 'orange'];

const GroceryList = (props) => {
  const groceryItems = props.items.map(item => <GroceryListItem item = {item} />);

  return ( <ul>
    {groceryItems}
  </ul> )
};

ReactDOM.render(<GroceryList items = {groceryItems} />, document.getElementById("app"));
// ReactDOM.render(<GroceryList />, document.getElementById("app"));
