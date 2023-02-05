const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    return (
        <li className="collection-item" id={id}>
            {name}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => {
                    decQuantity(id);
                }}
            >
                remove
            </i>{' '}
            x{quantity}
            <i
                className="material-icons basket-quantity"
                onClick={() => {
                    incQuantity(id);
                }}
            >
                add
            </i>{' '}
            = {price * quantity} грн.
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i
                    title="Удалить товар"
                    className="material-icons basket-delete"
                >
                    close
                </i>
            </span>
        </li>
    );
};
export { BasketItem };
