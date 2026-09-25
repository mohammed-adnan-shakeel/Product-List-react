import { useState } from "react";
import "./App.css";
function App() {
const [list, setList] = useState([]);
const [value, setValue] = useState("");
const addToList = () => {
let tempArr = list;
tempArr.push(value);
setList(tempArr);
setValue("");
};
const deleteItem = (index) => {
let temp = list.filter((item, i) => i !== index);
setList(temp);
};
return (
<div className="App">
<fieldset>
<h>Add Product to List</h><br></br>
<input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
<button onClick={addToList}> Click to Add </button><br></br><br></br>
<h>Product Catalog</h><br></br>
<ol>
{list.map((item, i) => <li onClick={() => deleteItem(i)}>{item} </li>)}
</ol>
<h>Click on Product to Delete</h><br></br>
</fieldset></div>
);
}export default App;
