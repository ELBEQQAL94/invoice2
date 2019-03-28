import React from 'react';
import Button from '@material-ui/core/Button';
const MyButton = ({text, submit}) => {
    return (
        <Button onClick={(event) => submit(event)} style={{ background : '#f26d39', color : '#EEE', width : '100%', borderRadius : '30px', margin : '3em 0'}}>{text}</Button>
    );
};

export default MyButton;