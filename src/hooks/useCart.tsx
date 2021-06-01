import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
  const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      // TODO
      const newItemCart = [...cart];

      const product = newItemCart.find(({ id }) => id === productId);
      const stock = await api.get(`stock/${productId}`);
      const { amount } = stock.data as Stock;
      const currentAmount = product ? product.amount + 1 : 0;

      if(currentAmount > amount){
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }
      
      if(product){
        const updateAmountProduct = newItemCart.map((product) => product.id === productId ?
          {
            ...product, amount: currentAmount
          } : product
        );
        setCart(updateAmountProduct);
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(updateAmountProduct));
        return;
      }else{
        const newProduct = await api.get(`products/${productId}`);
        const product = {
          ...newProduct.data,
          amount: 1,
        }
        newItemCart.push(product);
        setCart(newItemCart);
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(newItemCart));
        return;
      }

    } catch {
      // TODO
      toast.error('Erro na adição do produto');
      return;
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
      const removeItemCart = [...cart];
      const productExist = removeItemCart.find((product) => product.id === productId);
      
      if(!productExist){
        toast.error('Erro na remoção do produto');
        return;
      }
      
      const removedItemCart = removeItemCart.filter((product) => product.id !== productId);

      if(removedItemCart){
        setCart(removedItemCart);
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(removedItemCart));
        return;
      }
    } catch {
      // TODO
      toast.error('Erro na remoção do produto');
      return;
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
      const newCart = [...cart];
      const stock = await api.get(`stock/${productId}`);
      const { amount: stockAmount } = stock.data as Stock;

      if(amount <= 0){
        return;  
      }

      if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updateAmountProduct = newCart.map((product) => product.id === productId ?
      {
          ...product, amount: amount
        } : product
      );
      setCart(updateAmountProduct);
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updateAmountProduct));
      return;
      
    } catch {
      // TODO
      toast.error('Erro na alteração de quantidade do produto');
      return;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
