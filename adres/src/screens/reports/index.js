import React,{useState} from 'react'
import BaseDataTable from '../../components/partials/data-table'
import data from "./data"

export default function Index() {

const [applications,setApplication] = useState([

            {
                "logId": 906468196730134,
                "applicationId": null,
                "applicationType": null,
                "companyId": null,
                "actionType": "DARI_REFRESH_TOKEN",
                "ip": "10.11.0.89",
                "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
                "userId": 115678,
                "source": null,
                "ownerId": null,
                "logInfo": null,
                "creationTimestamp": "2022-01-31 17:29:00"
            },
            {
                "logId": 365001413757985,
                "applicationId": null,
                "applicationType": null,
                "companyId": null,
                "actionType": "DARI_REFRESH_TOKEN",
                "ip": "10.11.1.39",
                "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
                "userId": 115678,
                "source": null,
                "ownerId": null,
                "logInfo": null,
                "creationTimestamp": "2022-01-31 17:51:01"
            },
           ])
const [isLoading,setIsLoading] = useState(true)


  return (
    <div>

        <BaseDataTable 
        cells={data}
        content={applications}
        contentName={'ccc'}
        isLoading={isLoading}
        />
    </div>
  )
}
