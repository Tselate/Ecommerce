import React, {useState, useEffect} from "react"

function ProductSearch () {
    const [item, setItem] = useState("")
    const [itemResults, setItemResults] = useState("")

    const itemsStored = JSON.parse(sessionStorage.getItem("itemsKey")) || []

    //On page load, load all of the products available

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItemResults(json))
    }, []);

  
    // Form submission will call this asyn function to fetch SearchSpring API data and set it to ItemResults and Pagination 
    const itemLookUp = async (e) => {
        e.preventDefault()

        const url = item === "all" ? "https://fakestoreapi.com/products" :  `https://fakestoreapi.com/products/category/${item}`

        try {
            const result = await fetch (url)
            const data = await result.json()
            setItemResults(data)
            console.log(data)
        }catch(err) {
            alert("Item not found")
        } 
    }

    //Function to add product to cart 
    function addProduct (e) {
        console.log("Please add me")
        console.log(e)
        console.log(e.parentNode)
        console.log(e.childElement)

      
    }

   

    // Updated items stored in session storage as well as pagination and searched item in session storage
    if (itemResults) {
        itemsStored.splice(0, 1, itemResults)
        sessionStorage.setItem("itemsKey", JSON.stringify(itemsStored))
    }

    //****PAGE DISPLAY*****//


    return (
        <div className="container"> 
           <div className="form-container" >
           <h6 className="logo">SHAP TIL' U DROP</h6>
               <form name="myForm" className="search-form" onSubmit={itemLookUp}>
                    <select 
                        placeholder="Search here..."
                        className="searchInput"
                        value={item}
                        onChange= {(e) => setItem(e.target.value)}
                    >
                    <option value="all">All</option>  
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    </select>

                    <button className="searchBtn" type="submit">Search</button>
               </form>             
            </div>    

    
           <div className="resultDisplay">
                    {itemsStored[0] ? itemsStored[0].map(item => (
                        <div className="itemCard" key={item.id}>
                            <div className="itemInfo">
                                <img className="itemImg" src={item.image} alt="Item"/>
                                <p className="itemName">{item.title}</p>
                                <p className="itemPrice">${item.price % 1 === 0 ? item.price + ".00" : item.price}</p>
                                <button className="cartBtn" onClick={addProduct}>Add to Cart</button>
                            </div>
                        </div>
                     
                    )) : <div className="loading">Loading...</div>}

               </div>
        </div>
    )
}



    

export default ProductSearch
