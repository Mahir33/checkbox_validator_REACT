import React from 'react'

const ValidationMessage = (props) => {
  const { txt } = props
  return (
    <p>{txt}</p>
  )
}

const OrderForm = (props) => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age">I confirm, that I am more then 16 years old.</label>
      <br />
      <button type="submit">Buy a ticket!</button>
    </form>
  )
}

class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Great! You can buy a ticket!" />
      } else {
        return <ValidationMessage txt="Sorry, you are too young... Try again when you are more then 16!" />
      }
    } else { return null }
  }

  render() {
    const { isConfirmed, isFormSubmitted } = this.state

    return (
      <>
        <h1>Buy a ticket and see the best movie of this year!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    )
  }
}

export default TicketShop;