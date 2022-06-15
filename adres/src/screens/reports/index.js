import React,{useState} from 'react'
import BaseDataTable from '../../components/partials/data-table'
import data from "./data"

export default function Index() {

const [applications,setApplication] = useState([])
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
