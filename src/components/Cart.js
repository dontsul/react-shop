const Cart = (props) => {
    const { quantity = 0, handleBasketShow = Function.prtotype } = props;
    return (
        <div
            className="cart indigo darken-3 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
};

export { Cart };
