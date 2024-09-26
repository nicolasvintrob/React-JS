import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, price, stock }) => {
    const [quantity, setQuantiy] = useState(0)

    const handleOnAdd = (count) => {
        console.log('Agregue al carrito')
        setQuantiy(count)
    }

    return (
        <article className="CardItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='Itemimg' />
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Descripcion: {description}
                </p>
                <p className="info">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
               {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <button> Ir al carrito </button>}
            </footer>
        </article>
    )
}

export default ItemDetail