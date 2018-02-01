import { createStore, combineReducers } from "redux";
import uuid from "uuid";
/// Actions : Add expense, remove expense, Edit expense, set text filter, sort by date, sort by amount
// set start date, set end date

const addExpense = ({
    description = '',
    note = "",
    amount = 0,
    createdAt = 0} = {} ) => ({
        type : 'ADD_EXPENSE',
        expense : {
            id : uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

const editExpense = ( id , { updates }= {} ) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});
// Expenses reducers

const expensesReducersDefaultState = [];
const expensesReducers = ( state = expensesReducersDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' : return [...state, action.expense];
        case 'REMOVE_EXPENSE' : return state.filter( ({ id }) => id !== action.id);
        case 'EDIT_EXPENSE' : return state.map((expense) => {
            if(expense.id === action.id){
                return { 
                    ...expense ,
                    ...action.updates }
                }
            else
                return expense;
            });
        default : return state;
    }
};

const setTextFilter = (text = '' ) => ({
    type : 'SET_TEXT_FILTER',
    text : text
})

const sortByAmount= () => ({
    type : 'SORT_BY_AMOUNT'
});


const sortByDate= () => ({
    type : 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate 
});

const setEndDate = ( endDate ) => ({
    type : 'SET_END_DATE',
    endDate
});

const filtersReducersDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};
 
const filtersReducers = ( state = filtersReducersDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER' : return { ...state, text : action.text };
        case 'SORT_BY_DATE': return { ...state, sortBy : 'date' };
        case 'SORT_BY_AMOUNT': return { ...state, sortBy : 'amount' };
        case 'SET_START_DATE' : return {...state , startDate : action.startDate };
        case 'SET_END_DATE' : return {...state , endDate : action.endDate };
        default : return state;
    }
}

// get Visibles expenses ( expenses, filters)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>  {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch; 
    }).sort( (a,b) => {
        if( sortBy == 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        if( sortBy == 'amount')
            return a.amount < b.amount ? 1 : -1;
    });
};

// Store Creation

const store = createStore(combineReducers({
    expenses : expensesReducers,
    filters : filtersReducers
}));

const unsubscribe = store.subscribe ( () => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});

store.dispatch(addExpense());
const expenseToRemove = store.dispatch(addExpense({description: 'Rent', amount : 100, createdAt : 150}));
const expenseToEdit = store.dispatch(addExpense({description : 'Travel', amount : 700, createdAt : -1000}));
// store.dispatch(removeExpense({ id : expenseToRemove.expense.id}));
// store.dispatch(editExpense(expenseToEdit.expense.id , { amount : 600 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));

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
