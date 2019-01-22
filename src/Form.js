import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button, Input, Alert} from 'reactstrap';

const showResults = (values) => {
  window.alert(JSON.stringify(values,null,2))
}

const validate = values => {
  const errors = {}

  if(!values.firstName) {
    errors.firstName = "Required"
  }

  if(!values.email) {
    errors.email = "Required"
  }

  return errors
}

const renderInput = ({input,meta,label,placeholder}) => 
     <div>
        <pre>
          {JSON.stringify(meta,0,2)}
        </pre>
        <Label>{label}</Label>

        
        
        <Input placeholder={placeholder} { ...input} />

        {/* display error from meta */}
        {/* short circuit oerator */}
        {meta.error && meta.touched &&
         <Alert>{meta.error}</Alert>}

     </div>

//prop handleSubmit is  injected by reduxForm
let DemoForm = ({handleSubmit, submitting}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
      <div>


          <Field name="firstName"  label="firstname"   component={renderInput}   type={"text"}  placeholder="First Name"   />
          <Field name="email" label="email" component={renderInput}  type={"email"}  placeholder="Email"    />

        <Button  type="submit" >Submit</Button>
      </div>
      </form>
  )
}
DemoForm = reduxForm ({
  form : 'demo',
  destroyOnUnmount : false,
  validate
})(DemoForm)

export default DemoForm