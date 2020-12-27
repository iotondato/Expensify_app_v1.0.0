import moment from 'moment';
import {setSartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';


//Todos

//setStartDate test -> 'SET_START_DATE'
test('should generate set start date action obbject', () => {
    const action = setSartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});


//setEndDate test -> 'SET_END_DATE'
test('should generate set end date action obbject', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});


//sortByDate test -> 'SORT_BY_DATE'
test('should generate sort by date action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

//sortByAmount test -> 'SORT_BY_AMOUNT'
test('should generate sort by date amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

//setTextFilter test -> 'SET_TEXT_FILTER'
test('should generate set text filter action default object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter action default object', () => {
    const textTest = 'String';
    const action = setTextFilter(textTest);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: textTest
    });
});