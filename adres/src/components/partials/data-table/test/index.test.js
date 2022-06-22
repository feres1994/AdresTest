import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Row from "../row"


const cells = [
    {
      id: "logId",
      name: "logId",
      dbName: "logId",
      sortable: false,
      dataType: "Number",
      hiddenInMobile: true
    },
    {
      id: "applicationId",
      name: "Application Id",
      dbName: "applicationId",
      sortable: true,
      dataType: "Number",
      hiddenInMobile: true
  
    },]

const record = {
    logId: 843816019981720,
actionType: "SUBMIT_APPLICATION",
applicationId: 999981634772446,
applicationType: "ADD_COMPANY",
companyId: null,
creationTimestamp: "2021-12-12 23:30:48",
ip: "10.11.0.93",
logId: 843816019981720,
logInfo: null,
ownerId: null,
source: "ONLINE",
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
userId: 91030}



describe('Data Table', () => {
it('should render one row that put each element in record under its cell DB name', () => {
    render(<table>
    <tbody>
        <Row cells={cells}
    record={record}
    />
     </tbody>
     </table>
    )

   
})

it("should render the same logId value found in record object", () => {
    render(<table>
        <tbody>
        <Row cells={cells}
        record={record}
        />
    </tbody>
    </table>);

    const rowElements = screen.getAllByTestId("record-item");
    expect(rowElements[0].innerHTML).toBe("843816019981720");
  
  });




} )