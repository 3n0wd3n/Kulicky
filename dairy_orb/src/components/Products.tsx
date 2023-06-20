import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="5">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows: any = [];
  let lastCategory: any = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {/* pro vytvoření mezery  */}
        {/* {" "} */}
        Only show products in stock
      </div>
    </form>
  );
}

function NavBar() {
    return (
      <ul className="main_nav_container">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    );
  }

const PRODUCTS = [
  {
    category: "Temporary Bowl",
    price: "$5",
    stocked: true,
    name: "Bowl For Moderate Eater",
  },
  {
    category: "Temporary Bowl",
    price: "$6",
    stocked: true,
    name: "Bowl For Overeater",
  },
  {
    category: "Long Lasting Bowl",
    price: "$10",
    stocked: true,
    name: "Bowl For Moderate Eater",
  },
  {
    category: "Long Lasting Bowl",
    price: "$12",
    stocked: true,
    name: "Bowl For Overeater",
  },
  {
    category: "Spoon",
    price: "$2",
    stocked: true,
    name: "Digger Style",
  },
  {
    category: "Spoon",
    price: "$1",
    stocked: true,
    name: "Selector Style",
  },
  {
    category: "Pin",
    price: "$2",
    stocked: true,
    name: "Dairy Lover",
  },
  {
    category: "Pin",
    price: "$2",
    stocked: false,
    name: "Yogurt Lover",
  },
  {
    category: "Our mix",
    price: "$4",
    stocked: true,
    name: "Fitness",
  },
  {
    category: "Our mix",
    price: "$4",
    stocked: true,
    name: "Low Carbs",
  },
  {
    category: "Our mix",
    price: "$4",
    stocked: false,
    name: "Seasson Mix",
  },
  {
    category: "Our mix",
    price: "$4",
    stocked: true,
    name: "High Protein Mix",
  },
  {
    category: "Our mix",
    price: "$4",
    stocked: true,
    name: "Surprise",
  },
];

function Products() {
  return (
    <div className="product_container">
      <NavBar />
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default Products;
