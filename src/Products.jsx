import React from 'react'
import viteImage from '../public/vite.svg'
import { Link } from 'react-router-dom'

function Products() {

const productsData = [
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
]

  return (
    <div>
        {
            productsData.map((ele) => {
                return (
                        <div className='card'>
                        <div>
                            <Link to={`/ProductInformation/${ele.id}`}>
                                <img src={ele.image}/>
                            </Link>
                        </div>
                        <div>
                            <div>{ele.brand}</div>
                            <div>{ele.cost}</div>
                        </div>
                    </div>
                ) 
            })
        }
    </div>
  )
}

export default Products