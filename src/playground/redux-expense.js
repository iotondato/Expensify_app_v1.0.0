import {createStore, combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';
// Todos

//ADD_EXPENSE
const add_expense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setSartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//?Expense Reducer 
// Aqui ficaram todas as manupulações que ocorrerão com o modelo expenses
const expensesReducerDefaltState = [];

const expensesReducer = (state=expensesReducerDefaltState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            });

        default:
            return state;
    }
};

//?FiltersReducer
// Aqui ficaram todas as manupulações que ocorrerão com o modelo filters
const filtersReducerDefaultSatate = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state=filtersReducerDefaultSatate, action) =>{
    console.log(action)
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//Store Create
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleEspenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleEspenses);
});

const expenseOne = store.dispatch(add_expense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(add_expense({description: 'Coffee', amount: 1, createdAt: -1000 }));
const expenseThree = store.dispatch(add_expense({description: 'Grogu', amount: 300, createdAt: 9001}));

// //store.dispatch(removeExpence({id:expenseOne.expense.id}));
//store.dispatch(editExpense(expenseOne.expense.id, {amount: 500}));
//store.dispatch(setTextFilter('c'));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

store.dispatch(setSartDate(-10000));
store.dispatch(setEndDate(100000));

// Este é um modelo em bloco
const demoState = {
    expenses:[{
        id: '',
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }],
    filters:{
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    }
};

