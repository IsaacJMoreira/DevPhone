import react, { useEffect } from "react"

interface IProvider {
    cardItem: any, 
    setCardItem: any
}
 
export const CardContext = react.createContext({} as IProvider)

const getInitLocalStorage = () => {
    const produtoLocalStorage = localStorage.getItem("Card");
    return produtoLocalStorage ? JSON.parse(produtoLocalStorage) : []
}

export function Provider({children}: {children: react.ReactNode}) {
    const [cardItem, setCardItem] = react.useState<IProvider[]>(getInitLocalStorage);

    useEffect(() => {
        localStorage.setItem('Card', JSON.stringify(cardItem))
      }, [cardItem]);

    return (
        <CardContext.Provider value={ {cardItem, setCardItem} }>
            { children }
        </CardContext.Provider>
    );
};

