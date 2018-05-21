import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{

    state = {
        description : '',
        note : '',
        amount : '',
        createAt : moment(),
        calendarFocused : false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({
            description
        }));
        console.log(this.state);
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        const regex = /^\d*(\.\d{0,2})?$/;
        if(amount.match(regex))
        this.setState( () => ({
            amount
        }));
        console.log(this.state);
    }
    
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({
            note
        }));
        console.log(this.state);
    } 

    onDateChange = createAt => this.setState({ createAt });

    onFocusChange = ({ focused }) => this.setState({ calendarFocused : focused });

    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <br />
                    <SingleDatePicker
                        date={this.state.createAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths = {1} 
                        isOutsideRange = { () => false } 
                        id="your_unique_id" // PropTypes.string.isRequired,
                        
                    />        
                    <br />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange} ></textarea>
                    <input type="submit" value="Add Expense" />
                </form>
             </div>
        );
    }
}