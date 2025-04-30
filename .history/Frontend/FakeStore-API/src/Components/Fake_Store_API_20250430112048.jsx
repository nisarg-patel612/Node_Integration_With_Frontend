import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';

const FakeStoreAPi = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className='fakestore-api-main'>
            <h1 style={{ textAlign: 'center' }}>Fake Store Data from API</h1>
            <table className="table-bordered-custom" cellPadding="10px" cellSpacing="2px">

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

            <div className='d-flex justify-content-center mt-3'>
                <Pagination>
                    <Pagination.Prev
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                    />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </div>
        </div>
    );
};

export default FakeStoreAPi;
