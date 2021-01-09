import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;


export function fetchProducts()     {
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local:String){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}

    `)
}

export function saveOrder(payLoad: OrderPayLoad) {
    return axios.post(`${API_URL}/orders`, payLoad);
}