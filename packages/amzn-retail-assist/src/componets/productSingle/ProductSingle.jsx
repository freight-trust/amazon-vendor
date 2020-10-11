import './ProductSingle.css'
import React, {useState, useEffect} from 'react'
import {deleteProduct, editProduct, singleProducts} from '../../services/amahack-api.service'
import {Link, Redirect} from 'react-router-dom'

export default function ProductSingle(props) {
    const [prod, setProd] = useState([])
    const [user] = useState(props.user)
    const [prodId] = useState(props.location.state.id)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        singleProducts(prodId)
            .then(product => {
                console.log(product)
                setProd(product.prod)
                setReviews(product.prod.reviews)
            })
            .catch((e) => console.log(e))
    }, [setProd])

    const onSubmit = (e) => {
        console.log('clicked')
        e.preventDefault()
        editProduct(prodId)
            .then(editedProduct => setProd(editedProduct))
            .catch((e) => console.log(e))
    }

    const deleteProd = (e) => {
        e.preventDefault()
        deleteProduct(prodId)
            .then(() => {
                console.log('producto eliminado')
                return (<Redirect to='/product' />)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <div>Hola mundo</div>
            <div>{prod.name}</div>
            <div>{prod.description}</div>
            <div>{prod.price}</div>
            <div>
            <strong>Score</strong> 
            {reviews.reduce((acc,el) => (acc + parseInt(el.score)) , 0) / reviews.length}
            </div>
            <div><img src={prod.image} alt={`${prod.name} pic`} /></div>
            <div><strong>posted by</strong> <img src={user.image} alt={`${user.name} avatar`} />{user.name}</div>
            <hr />
            <h1>Reviews</h1>
            <div className="row">
                {reviews.map(el => (
                    <div className="col-12 col-sm-4">
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <p><smal>{el.score}</smal></p>
                        <p><strong>posted by</strong> <img src={el.user.image} alt=""/>{el.user.name}</p>
                    </div>
                ))}
            </div>
            <hr />


            {prod.user === user.id ? (<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Edit product</button>
            ) : ''}
            {prod.user === user.id ? (<Link onClick={deleteProd} className="product-card__single">Delete product</Link>) : ''}


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editing product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="recipient-name" name="name" placeholder={prod.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={prod.description}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-price" className="col-form-label">Price</label>
                                    <input type="text" className="form-control" id="recipient-price" name="price" placeholder={prod.price} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-image" className="col-form-label">Image URL</label>
                                    <input type="text" className="form-control" id="recipient-image" name="image" placeholder={prod.image} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Edit product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}