import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = (props) => {

  return (
    <form>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
      </form>
  )
}
Form = reduxForm ({
  form : 'simple'
})(Form)

export default Form