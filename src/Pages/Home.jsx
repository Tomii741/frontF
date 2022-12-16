
import React from 'react';
import products from '../data';

const Home = () => {
    return (
        <div className="section m-5">
            <h2>
                Home Page
            </h2>
            <div className="products">
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h5>
                                {product.name}
                            </h5>
                            <img src={product.image} alt={product.name} />
                        </article>
                    );
                })}
            </div>
        </div>
    )
}

export default Home;