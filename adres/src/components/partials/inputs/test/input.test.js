import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input  from "../input"


describe('Input', () => {
it('should render same text passed into a label prop', () => {
    render(<Input
        label="Application ID"
   
      />)

    const labelElement= screen.getByText(/Application ID/i)
    expect(labelElement).toBeInTheDocument()
 

})



} )