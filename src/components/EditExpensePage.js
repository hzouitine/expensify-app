import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    console.log(props.match.params.id);
    return (
        <div>
        EditExpensePage Componenet
        </div>
    );
}   

export default EditExpensePage;