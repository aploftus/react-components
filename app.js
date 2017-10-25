// TODO
var Bananas = () => (
  <li>bananas</li>
);

var Tomatoes = () => (
  <li>tomatoes</li>
);

var GroceryList = () => (
  <ul>
    <Bananas />
    <Tomatoes />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
