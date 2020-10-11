import './ProductSingle.css'
import React, {useState, useEffect} from 'react'
import {singleProducts} from '../../services/amahack-api.service'

export default function ProductSingle(props) {
    const [prod, setProd] = useState([])
    const [user] = useState(props.user)

    useEffect(() => {
        singleProducts(props.location.state.id)
            .then(product => {
                console.log(product)
                setProd(product.prod)
            })
            .catch((e) => console.log(e))
    }, [setProd])

    return (
        <>
            <div>Hola mundo</div>
            <div>{prod.name}</div>
            <div>{prod.description}</div>
            <div>{prod.price}</div>
            <div><img src={prod.image} alt={`${prod.name} pic`} /></div>
            <div><strong>posted by</strong> <img src={user.image} alt={`${user.name} avatar`} />{user.name}</div>
{prod.user === user.id ? 'editar producto' : ''}
        </>
    )
}