/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css';
import  StepsHeader  from './stepsHeader';
import ProductsList from './ProductList'
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { OrderLocationData, Product } from './types';
import OrderLocation from './OrderLocation';

function Orders() {

    const [products, setProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();


    useEffect(()    => {
            fetchProducts()
                .then(response => setProducts(response.data))
                .catch(error => console.log(error))
    },  []);

    return (
        <div className="order-container">
           <StepsHeader />
           <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;