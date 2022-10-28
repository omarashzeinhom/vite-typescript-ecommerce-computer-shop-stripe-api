import { createContext, useContext, useState ,ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";




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
    openCart:()=> void
    closeCart:()=> void
    getItemQuantity: (id: number)=> number
    increaseCartQuantity: (id: number)=> void
    decreaseCartQuantity: (id: number)=> void
    removefromCart: (id: number)=> void
    cartQuantity: number
    cartItems: CartItemProps[]
};


const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart(){
return  useContext(ShoppingCartContext)
};




//returns children object
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    //renders out the cart
    const [isOpen , setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("Default Shopping",[]);
    //

    const cartQuantity = cartItems.reduce((quantity,item)=> item.quantity + quantity, 0);



    const openCart = () => setIsOpen(true); 
    const closeCart = () => setIsOpen(false); 

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








return (
    <ShoppingCartContext.Provider 
    value={{getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity , 
    removefromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity,
    
    }}>
    {children}
</ShoppingCartContext.Provider>
)

}


// Shopping Card Provider End
