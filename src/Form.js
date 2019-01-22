import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Label, Button} from 'reactstrap';


let DemoForm = (props) => {
  return (
    <form>
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
  form : 'demo'
})(DemoForm)

export default DemoForm