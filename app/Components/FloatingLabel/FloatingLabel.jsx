import React, { Component, Fragment } from 'react';
import {
    ControlLabel, FormGroup, FormControl, Button, Row, Col
} from 'react-bootstrap';
// import { render } from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import FloatingLabel, {
    floatingStyles,
    focusStyles,
    inputStyles,
    labelStyles
  } from 'floating-label-react';

import './FloatingLabel.scss';  


const inputStyle = {
    floating: {
      ...floatingStyles,
      border: '0px',
      fontSize: '12px',
      padding: '0px 5px',
    },
    focus: {
      ...focusStyles,
      padding: '16px 10px 5px 10px',
      borderColor: '#4A90E2',
      
    },
    input: {
      ...inputStyles,
      width: '100%',
      float: 'left',
      fontSize: '16px',
      padding: '16px 10px 5px 10px',
      backgroundColor: 'transparent',
      border: '1px solid #DADCDF',
      borderBottomColor: '#DADCDF',
      borderRadius: '4px',
      backgroundColor: '#F9FAFB',
      borderColor: '#DADCDF',
    },
    label: {
      ...labelStyles,
      width: '100%',
      float: 'left',
      height: '44px',
      paddingTop: '0px',
      marginBottom:'0px',      
    },
    span:{
        fontSize: '16px',
        color: '#939393',
        padding: '10px',
    }
  }


  const floatingLabelField = ({
    label, type, input,
    meta: { touched, error },
}) => (
    <Fragment>
        <FormGroup className={ touched && (error && ( "errorBorder" )) } >
            <FloatingLabel
                {...input}
                placeholder={label}
                autoComplete="off"
                styles={inputStyle}
                type={type} />
            {touched && (error && ( <span className="error_text"> {error} </span> ))}
        </FormGroup>
    </Fragment>);




export default floatingLabelField;

