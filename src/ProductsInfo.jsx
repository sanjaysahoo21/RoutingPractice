import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import viteImage from '../public/vite.svg'

function ProductsInfo() {
    const {id} = useParams();
    const Data = [
            {
                id : "1",
                image : viteImage,
                brand : 'Roadster',
                cost : '7899'
            },
            {
                id : "2",
                image : viteImage,
                brand : 'highLander',
                cost : '6987'
            },
            {
                id : "3",
                image : viteImage,
                brand : 'Rare rabbit',
                cost : '8977'
            }
    ];
    const [data, setData] = useState(null);
    useEffect(() => {
        const dataFound = Data.find((ele) => ele.id === id);
        setData(dataFound);
    },[id])
    if (data == null) {
        return <h2>Loading product information...</h2>;
    }
  return (
    <>
        <div className='container'>
            <div>
                <img src={data.image}/>
            </div>
            <div>{data.brand}</div>
            <div>{data.cost}</div>
        </div>
    </>
  )
}

export default ProductsInfo