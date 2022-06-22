import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input  from "../input"

const mockSetInput = jest.fn()

describe('Input', () => {
it('should render same text passed into a label prop', () => {
    render(<Input
        label="Application ID" />)

    const labelElement= screen.getByText(/Application ID/i)
    expect(labelElement).toBeInTheDocument()
 

})

it('should render an input element', () => {
  render(<Input
      label="Application ID"
      placeholder="application id"/>)

  const inputElement= screen.getByPlaceholderText(/application id/i)
  expect(inputElement).toBeInTheDocument()
})


it('should be able to fill an input', () => {
  render(<Input
      label="Application ID"
      placeholder="application id"
      getInputValue={mockSetInput}
      />)

  const inputElement= screen.getByPlaceholderText(/application id/i)
  fireEvent.change(inputElement, {target: {value: "app id"}})
  expect(inputElement.value).toBe("app id")
})



} )