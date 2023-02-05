import { BasketItem } from './BasketItem';

const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => {
                    return (
                        <BasketItem
                            key={item.id}
                            removeFromBasket={removeFromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            {...item}
                        />
                    );
                })
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice} грн.
            </li>
            <li className="collection-item ">
                <button className="btn btn-small">Оформить заказ</button>
            </li>
            <i
                title="Закрыть"
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
};

export { BasketList };
