import React, { useState,useEffect } from "react";
import API from '../../utils/API.js'
import BaseDataTable from "../../components/partials/data-table";
import BasePagination from "../../components/partials/base-pagination/index"
import data from "./data";
import "../../assets/styles/main-design-system.css";

export default function Index() {
  const [applications, setApplication] = useState([]);
  const [totalPages,setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
      API({
          methods: "get",
          url: "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f?number=1"
      }).then(res => {
          setApplication(res.data.result.auditLog)
          setTotalPages(res.data.result.totalPages)
        })
  },[])

  return (
    <div>
      <BaseDataTable
        cells={data}
        content={applications}
        contentName={"ccc"}
        isLoading={isLoading}
      />
      {totalPages}
      <BasePagination pages={totalPages} />
    </div>
  );
}
