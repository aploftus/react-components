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

var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

var groceryItems = ['banana', 'apple', 'orange'];

var GroceryList = () => (
  <ul>
    <GroceryListItem item = {'banana'} />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
// ReactDOM.render(<GroceryList />, document.getElementById("app"));
