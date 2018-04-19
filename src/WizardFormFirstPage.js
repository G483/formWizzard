import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>Choose the best city</label>
        <Field name="city" component="select">
          <option value="Copenhagen">Copenhagen</option>
          <option value="Berlin">Berlin</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Sarajevo">Sarajevo</option>
        </Field>
        <button type="submit" className="next">
          Next
        </button>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormFirstPage)
