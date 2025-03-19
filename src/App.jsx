import { useState, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"

function App() {

    //STATE
    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart( item ){
        //findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
        //findIndex() no modifica el array original.
        const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
        
        if (itemExist >= 0) { //Existe en el carrito
            const updateCart = [...cart];
            updateCart[itemExist].quantity++;
            setCart(updateCart);
        }else{
            console.log('No existe en el carrito');
            item.quantity = 1;
            setCart( prevCart => [...prevCart, item] );
        }

    }

    return (
        <>

        <Header/>

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar
                        key={guitar.id}
                        guitar={guitar}
                        cart={cart}
                        setCart={setCart}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>

        </>
    )
}

export default App
