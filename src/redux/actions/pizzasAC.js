import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    /*axios
        .get(
            `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
                sortBy.order
            }`,)
        .then(({data}) => {
            dispatch(setPizzas(data));
        });*/
     axios.get('http://localhost:3000/db.json')
         .then(({data}) => {
             dispatch(setPizzas(data.pizzas));
         });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

