import React, { useDeferredValue, useState, useTransition } from 'react'

export default function SearchProduct() {
    const [search,setSearch] = useState('');
    const [product,setProduct] = useState([])
    const defferedInput = useDeferredValue(search)
    const [isPending, startTransition] = useTransition()
    const [loading,setLoading] = useState("Loading....")
    const handleSearch = e => {
        setSearch(e.target.value)
        startTransition(()=>{
            const data = [];
            for(let i=0;i<100;i++){
                data.push(defferedInput)
            }
            setProduct(data)
        })
    }
  return (
    <div>
        <input onChange={handleSearch} 
        type="text" name="" id="" 
        placeholder='Search Product' 
        />
        {
            isPending ? loading : (
                product.map((items,index)=>{
                    return <div key={index}>{items}</div>
                })
            )
        }
    </div>
  )
}
