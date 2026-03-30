import { SearchIcon } from 'lucide-react'
import ProductCard from '../ui/ProductCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"

const Shop = () => {

    const [Products, setProducts] = useState([])

    const params = useParams();
    console.log(params.collection)

    useEffect(() => {
        const FetchAllProducts = async () => {
            if (params.collection) {
                try {
                    let response = await axios.get(`https://dummyjson.com/products/category/${params.collection}`)
                    console.log(response.data.products)
                    setProducts(response.data.products)
                } catch (error) {
                    console.log(error)
                }
            } else {
                try {
                    let response = await axios.get(`https://dummyjson.com/products`)
                    console.log(response.data.products)
                    setProducts(response.data.products)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        FetchAllProducts()
    }, [])

    return (
        <>
            <section>
                {/* title bar */}
                <div className='bg-gray-100 w-full py-16 text-center'>
                    <h1 className='text-5xl font-medium py-4'>Shop</h1>
                    <p className='text-lg font-normal text-gray-500'>Home / Shop</p>
                </div>

                {/* filter and products */}
                <div className='py-10'>
                    {/* filter and search*/}
                    <div className='flex items-center justify-center gap-4'>
                        {/* search bar */}
                        <div className='w-3/4 flex items-center border border-red-950 px-4 py-4 gap-4 '>
                            <SearchIcon />
                            <input type="text" placeholder='Search Products...' className='outline-none text-md w-full' />
                        </div>
                        {/* filter */}
                        <div className='1/4 bg-red-950 text-white gap-4 px-4 py-4'>
                            <select>
                                <option className='bg-red-950 text-white my-3' >Default</option>
                                <option className='bg-red-950 text-white my-3' value="">A to Z</option>
                                <option className='bg-red-950 text-white my-3' value="">Z to A</option>
                            </select>
                        </div>

                    </div>

                    {/* products div */}
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8'>
                            {Products.map((data) => {
                                return (
                                    <Link to={`product/${data.id}`} key={data.id}>
                                        <ProductCard product_data={data} />
                                    </Link>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop