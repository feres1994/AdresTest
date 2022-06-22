import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from "./index"
import PageItem from "./page"


describe('Page', () => {
it('test basic renders', () => {
    render(<Page  />)
 

})
it("should render the number + 1 in page props", () => {
    render(<PageItem page={1}/>);

    const pageElement = screen.getByTestId("page-item");
    expect(pageElement.innerHTML).toBe("2")
    
  });


} )