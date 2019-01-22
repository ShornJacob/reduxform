import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button} from 'reactstrap';

const showResults = (values) => {
  window.alert(JSON.stringify(values,null,2))
}

//props are injected by reduxForm
let DemoForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
      <div>
        <Label>First Name</Label>
        <div>
          <Field
            name="firstName"
            component="input"
            type={"text"}
            placeholder="First Name"
          />
        </div>

        <Label>Email</Label>
        <div>
          <Field
            name="email"
            component="input"
            type={"email"}
            placeholder="Email"
          />
        </div>
        <Button  type="submit">Submit</Button>
      </div>
      </form>
  )
}
DemoForm = reduxForm ({
  form : 'demo',
  destroyOnUnmount : false
})(DemoForm)

export default DemoForm