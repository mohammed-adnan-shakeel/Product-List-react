import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addToList = () => {
    const product = value.trim();

    if (!product) return;

    setList([...list, product]);
    setValue("");
  };

  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addToList();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Product Catalog</h1>
        <p className="subtitle">
          Add products to your catalog and click a product to remove it.
        </p>

        <div className="input-section">
          <input
            type="text"
            value={value}
            placeholder="Enter product name"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={addToList}>Add Product</button>
        </div>

        <div className="catalog">
          <h2>Products</h2>

          {list.length === 0 ? (
            <p className="empty-message">
              No products added yet.
            </p>
          ) : (
            <ol>
              {list.map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  onClick={() => deleteItem(i)}
                  title="Click to delete"
                >
                  {item}
                </li>
              ))}
            </ol>
          )}
        </div>

        {list.length > 0 && (
          <p className="hint">
            Click on a product to delete it.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
