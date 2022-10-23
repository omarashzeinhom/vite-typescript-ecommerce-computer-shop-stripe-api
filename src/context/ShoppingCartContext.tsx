import { createContext, useContext, useState ,ReactNode } from "react";




// Shopping Card Provider Start 

type ShoppingCartProviderProps={
    children: ReactNode
}

type CartItemProps = {
    // retrieve only the CartItem Id 
    id: number,
    quantity: number,
};


// Shopping Cart Context Start 
type ShoppingCartContextProps = {
    getItemQuantity: (id: number)=> number
    increaseCartQuantity: (id: number)=> void
    decreaseCartQuantity: (id: number)=> void
    removefromCart: (id: number)=> void
};


const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart(){
return  useContext(ShoppingCartContext)
};



//returns children object
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    //renders out the cart
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);


    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    
    function increaseCartQuantity(id: number){
        setCartItems(currentItems => {
            if (currentItems.find(item=> item.id === id) == null){
                return [...currentItems, {id: id,quantity: 1}]
        
        } else{
                return currentItems.map((item)=>{
                    if(item.id === id){
                        return {...item,  quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

  

    function decreaseCartQuantity(id: number){
        setCartItems(currentItems=>{
            if(currentItems.find(item=> item.id == id) ==null ){
                return currentItems.filter(item=> item.id !== id)
            }else{
                return currentItems.map((item)=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity -1}
                    }else{
                        return item;
                    }
                }); //return end
            }; //ifend
        }); //setend
    };//func end

    function removefromCart(id: number){
setCartItems(currentItems=>{
    return currentItems.filter(item=> item.id !== id) 
})
    }








return <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity, decreaseCartQuantity , removefromCart}}>
    {children}
</ShoppingCartContext.Provider>

}


// Shopping Card Provider End
