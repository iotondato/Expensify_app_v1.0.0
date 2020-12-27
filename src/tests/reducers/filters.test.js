import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () =>{
    const state = filtersReducer(undefined, {type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currenState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    };
    const action = {type:"SORT_BY_DATE"};
    const state = filtersReducer(currenState, action);
    expect(state.sortBy).toBe('date');
});

//? should set text filter
test('should set text filter', () =>{
    const text = 'this is my text filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

//? should set startDate
test('should set startDate', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

//? should set endDate
test('should set startDate', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});
