import React, {useCallback} from "react";
import Categories from "../Categories";
import SortPopup from "../SortPopup";
import PizzaBlock from "../Pizza-block/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/actions/filtersAC";
import {useEffect} from "react";
import LoadingBlock from "../Pizza-block/LoadingBlock";
import {fetchPizzas} from "../../redux/actions/pizzasAC";
import {addPizzaToCart} from "../../redux/actions/cartAC";

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

export const Home = (props) => {
    const {items, isLoaded} = useSelector(({pizzas}) => pizzas);
    const cartItems = useSelector(({cart}) => cart.items);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, [category]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickItem={onSelectCategory}
                            items={categoryNames}/>
                <SortPopup activeSortType={sortBy}
                           items={sortItems}
                           onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ?
                    items.map(obj => <PizzaBlock
                        onAddPizza={handleAddPizzaToCart}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                        key={obj.id}
                        {...obj}/>)
                    :
                    Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    )
}