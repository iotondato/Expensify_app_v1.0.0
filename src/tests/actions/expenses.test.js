import {addExpense, editExpense, removeExpense } from '../../actions/expenses';


//Todos

//Test of remove expense action
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
}); 

// Test editExpense action
test('should setup remove expense edit object', () =>{
    const action = editExpense('123abc', {note: 'this note is a test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'this note is a test'
        }
    });
});

// Test of addExpense action
test('should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 10900,
        createdAt: 100000,
        note: 'this is a note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expese action object with default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});

