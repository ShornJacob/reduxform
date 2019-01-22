https://chewcodeblog.wordpress.com/2019/01/22/redux-form-basics/


A basic redux form

//prop handleSubmit is  injected by reduxForm
let DemoForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
    ...

    ...


DemoForm = reduxForm ({
  form : 'demo',
  destroyOnUnmount : false
})(DemoForm) 

//destroyOnmount is added