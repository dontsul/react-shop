import { GoodsItem } from './GoodsItem';

const GoodsList = (props) => {
    const { goods = [], addToBasket = Function.prototype } = props;
    if (!goods.length) {
        console.log(goods.id);
        return <h3>Ничего нет</h3>;
    }
    return (
        <div className="goods">
            {goods.map((card) => {
                return (
                    <GoodsItem
                        {...card}
                        key={card.id}
                        addToBasket={addToBasket}
                    />
                );
            })}
        </div>
    );
};

export { GoodsList };
