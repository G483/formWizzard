import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3>Select age group.</h3>
      <div>
        <label htmlFor="overTen">Over 10 years of age</label>
        <Field name="overTen" id="overTen" component="input" type="checkbox"/>
      </div>
      <div>
        <label htmlFor="overTwentyOne">Over 21 years of age</label>
        <Field name="overTwentyOne" id="overTwentyOne" component="input" type="checkbox"/>
      </div>
      <div>
        <label htmlFor="overFifty">Over 50 years of age</label>
        <Field name="overFifty" id="overFifty" component="input" type="checkbox"/>
      </div>
      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
      <button type="submit" className="next">
        Next
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
