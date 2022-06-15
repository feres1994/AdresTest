import React, { useState,useEffect } from "react";
import axios from "axios"
import BaseDataTable from "../../components/partials/data-table";
import data from "./data";
import "../../assets/styles/main-design-system.css";

export default function Index() {
  const [applications, setApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
      axios.get('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f').then(res => setApplication(res.data.result.auditLog))
  })

  return (
    <div>
      <BaseDataTable
        cells={data}
        content={applications}
        contentName={"ccc"}
        isLoading={isLoading}
      />
    </div>
  );
}
