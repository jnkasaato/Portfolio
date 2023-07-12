import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact" >
    <div className="container mt-5" id="contact">
      <h3 className="mb-3">Wanna say hi?</h3>
      <h5><br/>Let's talk!</h5>
      <form onSubmit={onSubmit}>
        <div className = "contact__name-email">
          <div className="mb-3">
            <label className="form-label" htmlFor="name" ><h4>NAME</h4></label>
            <input className="form-control"  placeholder=" Enter your name" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email"><h4>EMAIL ADDRESS</h4></label>
            <input className="form-control"  placeholder=" Enter your email" type="email" id="email" required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message"><h4>MESSAGE</h4></label>
          <textarea className="form-control" placeholder=" Enter your message" id="message" required /><br/><br/>
        </div>

        <button className="btn btn-danger" type="submit" id="submit">
          SUBMIT
        </button>

      </form>
    </div>
  </div>

  )
}
export default Contact