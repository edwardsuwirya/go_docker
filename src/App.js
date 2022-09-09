import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get('api/products');
            const productResults = response.data.message;
            setProducts(productResults);
        }
        getProduct();
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                {products.map((p) => (
                    <div key={p.Id}>{p.ProductName} with {p.CategoryName}</div>
                ))}
            </header>
        </div>
    );
}

export default App;
