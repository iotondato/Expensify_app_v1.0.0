import moment from 'moment';

export default [
    {
        id:'1',
        description:'Gum', 
        note:'', 
        amount:19, 
        createdAt: moment(0).valueOf()
    },{
        id: '2',
        description:'Rent', 
        note: '', 
        amount:109500, 
        createdAt: moment(0).subtract(4, 'day').valueOf()
    },{
        id:'3',
        description:'Credit Card', 
        note:'', 
        amount:45000, 
        createdAt: moment(0).add(4, 'day').valueOf()
    }
];
