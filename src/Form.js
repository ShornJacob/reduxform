import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button} from 'reactstrap';

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

const renderInput = ({input,meta,label}) => 
     <div>
        <pre>
          {JSON.stringify(meta,0,2)}
        </pre>
        <label>{label}</label>
        <input { ...input} />
     </div>

//props are  injected by reduxForm
let DemoForm = ({handleSubmit, submitting}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
      <div>

        <div>
          <Field
            name="firstName"
            label="firstname"
            component={renderInput}
            type={"text"}
            placeholder="First Name"
          />
        </div>


        <div>
          <Field
            name="email"
            label="email"
            component={renderInput}
            type={"email"}
            placeholder="Email"
          />
        </div>
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