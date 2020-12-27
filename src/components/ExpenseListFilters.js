import React from 'react';
import {connect} from 'react-redux';
import {setSartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';


class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            calendarFocused: null,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    //?Funtions
    onDatesChange({startDate, endDate}){
        this.props.dispatch(setSartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange(calendarFocused){
        this.setState(() => ({
            calendarFocused
        }));
    }

    render () {
        return(
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) =>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>

                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        }else if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >

                    <option value="date"> Date </option>

                    <option value='amount'> Amount </option>

                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);