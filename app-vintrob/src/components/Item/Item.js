import './Item.css'
import { link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className='ItemImg' />
            </picture>
            <section>
                <p className='info'>
                    Precio: ${product.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <link to= {`/item/${product.id}`} className='Option' >Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item