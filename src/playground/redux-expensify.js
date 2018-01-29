import { createStore, combineReducers } from "redux";
import uuid from "uuid";
/// Actions : Add expense, remove expense, Edit expense, set text filter, sort by date, sort by amount
// set start date, set end date

const addExpense = ({
    description = '',
    note = "",
    amount = 0,
    creatAt = 0} = {} ) => ({
        type : 'ADD_EXPENSE',
        expense : {
            id : uuid(),
            description,
            note,
            amount,
            creatAt
        }
});

const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});
// Expenses reducers

const expensesReducersDefaultState = [];
const expensesReducers = ( state = expensesReducersDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' : return [...state, action.expense];
        case 'REMOVE_EXPENSE' : return state.filter( ({ id }) => id !== action.id)
        default : return state;
    }
};

const filtersReducersDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};
 
const filtersReducers = ( state = filtersReducersDefaultState, action) => {
    switch(action.type){
        default : return state;
    }
}
// Store Creation

const store = createStore(combineReducers({
    expenses : expensesReducers,
    filters : filtersReducers
}));

const unsubscribe = store.subscribe ( () => {
console.log(store.getState());
});

store.dispatch(addExpense());
const expenseToRemove = store.dispatch(addExpense({description: 'Rent', amount : 100}));
store.dispatch(addExpense({description : 'Travel', amount : 700}));
store.dispatch(removeExpense({ id : expenseToRemove.expense.id}));

const demoState = {
    expenses : [{
        id : 'id',
        description : 'January rent',
        note : 'this was the final paymenet for that adress',
        amount : 54500,
        createdAt : 0
    }],
    filters : { // to search or sort by
        text : 'rent',
        sortBy : 'amount', // date or amount
        startDate : undefined,
        endDate : undefined
    }
};
