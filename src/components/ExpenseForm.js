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
        createdAt : moment(),
        calendarFocused : false,
        error : ''
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
        const regex = /^\d{1,}(\.\d{0,2})?$/;
        if(!amount || amount.match(regex))
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

    onDateChange = createdAt => {
        if(createdAt){
            this.setState({ createdAt });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error = "Please provide a description and amount";
            this.setState( () => ({ error }));
        } else {
            this.setState( () => ({error : ''}));
        }
        this.props.onSubmit({
            description : this.state.description,
            amount : parseFloat(this.state.amount, 10) * 100,
            createdAt : this.state.createdAt.valueOf(),
            note : this.state.note
        })

    }
    onFocusChange = ({ focused }) => this.setState({ calendarFocused : focused });

    render(){
        return (
            <div>
                {this.state.error &&<p style={{color : "red"}}>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
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