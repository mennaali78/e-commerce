"use client";
import React, { useContext, useEffect, useState } from "react";
import getLoggedUserCart from "@/CartActions/getUserCart.action";
import RemoveCartItem from "@/CartActions/removeCartitem.action";
import UpdateCartQuantity from "@/CartActions/updateCartQuantity.action";
import ClearCart from "@/CartActions/clearCartItem.action";
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { CartProductType } from './../../types/cart.type';
import Link from "next/link";
import Image from "next/image";
export default function Cart() {
  const [cartId, setcartId] = useState("")
  const [total, settotal] = useState(0)
 const {numberOfCartItem,setnumberOfCartItem} = useContext(CartContext)!;
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [removeDisabled, setremoveDisabled] = useState(false);
  const [updateDisabled, setupdateDisabled] = useState(false);
  const [updateLoading, setupdateLoading] = useState(false);
  const [currentId, setcurrentId] = useState("");

   async function getUserCart() {
    try {
     const res = await getLoggedUserCart();
    
      if (res.status === "success") {
       
        setcartId(res.cartId)
        settotal(res.data.totalCartPrice)
        setProducts(res.data.products);
        setisLoading(false);

      }
    } catch (err) {
    
      toast.error("can't show cart success")
      setisLoading(false);
    }
  }
  async function Clear() {
   const res = await ClearCart();
  
      if (res.message === "success") {
        setnumberOfCartItem(0);
       getUserCart();
      }
   
  }

  async function UpdateProduct(id:string,count:string,sign:string){
    setcurrentId(id);
    setupdateDisabled(true);
    setupdateLoading(true);
     setremoveDisabled(true);
   const res = await UpdateCartQuantity(id,count);
   
    if(res.status === "success"){
      setProducts(res.data.products);
      setupdateDisabled(false);
      setupdateLoading(false);
       setremoveDisabled(false);
      toast.success("Quantity updated successfully",{position:"top-center",duration:2000});
      if(sign === "+"){
        setnumberOfCartItem(numberOfCartItem + 1)
      }
      else if(sign === "-"){
        setnumberOfCartItem(numberOfCartItem - 1)
      }
      getUserCart();
    }
    else {
      setupdateDisabled(false);
      setupdateLoading(false);
       setremoveDisabled(false);
      toast.error("can't updated this product",{position:"top-center",duration:2000})

    }
  }

  async function handleRemoveItem(id:string){
     setupdateDisabled(true);
    setremoveDisabled(true);
    const res = await RemoveCartItem(id);
 
  if(res.status === "success"){
   setupdateDisabled(false);
    setProducts(res.data.products);
    toast.success("Product Deleted Successfully",{position:"top-center",duration:2000});
    let sum = 0;
    res.data.products.forEach((product:CartProductType) =>{
      sum += product.count;
    })
    setnumberOfCartItem(sum);
    setremoveDisabled(false);
    getUserCart();
  }
  else {
    toast.error("Can't Delete This Product now",{position:"top-center",duration:2000})
    setremoveDisabled(false);
     setupdateDisabled(false);
 
  }
 
  }
  useEffect(() => {
    getUserCart();
  }, []);



  if(isLoading){
    return <h1 className="text-center text-3xl font-bold my-12 text-slate-900">
         Loading.....
        </h1>
  }
  return <>

  
    
      {products.length > 0 ? (
        
        <div className="w-2/3 mx-auto my-12">
          <span>
    <Button variant="destructive" onClick={()=>Clear()} className="cursor-pointer my-4">Clear Cart Item</Button>

          </span>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="text-center text-3xl font-bold bg-emerald-500 p-5 my-4">Total Cart Price:{total}</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product:CartProductType) => (
                  <tr key={product._id}
                
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4">
                    <Image src={product.product.imageCover} width={500} height={500} className="w-16 md:w-32 max-w-full max-h-full" alt="product"/>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button disabled={updateDisabled} onClick={()=>UpdateProduct(product.product.id,`${product.count -1}`,"-")}
                          className="inline-flex items-center disabled:bg-slate-300 justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Decrease quantity</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                            >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                              />
                          </svg>
                        </button>
                        <div>
                        {product.product.id === currentId? (
                        updateLoading?(
                        <i className="fas fa-spinner fa-spin"></i>
                        ):(
                        <span>{product.count}</span>
                        )
                        ):(
                        <span>{product.count}</span>
                        
                        )}
                    
                        </div>
                        <button  disabled={updateDisabled} onClick={()=>UpdateProduct(product.product.id,`${product.count +1}`,"+")}
                          className="inline-flex items-center justify-center disabled:bg-300 h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Increase quantity</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                     {product.price * product.count} EGP
                    </td>
                    <td className="px-6 py-4">

                      <button disabled={removeDisabled} onClick={()=> handleRemoveItem(product.product.id)} className="text-red-500 font-semibold cursor-pointer disabled:slate-900 disabled:p-2 disabled:rounded-2xl disabled:text-white">Remove</button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         <Link href={`/checkout/${cartId}`}> <Button className="bg-black text-white w-full cursor-pointer my-4 p-4 hover:bg-blue-800 mb-4" >Online Checkout Now</Button></Link>
         <Link href={`/cashOrder/${cartId}`}> <Button className="bg-black text-white w-full cursor-pointer my-4 p-4 hover:bg-blue-800" >Cash Checkout Now </Button></Link>
        </div>
      ) : (
        <h1 className="text-center text-3xl font-bold my-12 text-red-600">
          No Products Added yet!
        </h1>
      )}
    </>
 
}
