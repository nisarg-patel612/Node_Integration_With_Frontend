import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FakeStoreAPi = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='fakestore-api-main'>
            <h1 style={{textAlign: 'center'}}>Fake Store Data from API</h1>
            <table border="1" cellPadding="10px" cellSpacing="2px">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Products</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                            <td><a href={`/product/${product.id}`}>{product.title}</a></td>
                            <td><img src={product.image} alt={product.title} width="50" /></td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default FakeStoreAPi;
