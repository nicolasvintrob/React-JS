const products = [
    {
        id: '1',
        name: 'iPhone 12',
        price: 1.000,
        category: 'Celulares',
        img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg',
        stock: 25,
        description: 'Descripcion Iphone 12'
    },
]
export const getProductById = (id) => {
    return new Promise ((resolve )=> {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === id))
        }, 2000)
    })
}