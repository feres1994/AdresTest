import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import BaseDataTable from "../../components/partials/data-table";
import BasePagination from "../../components/partials/base-pagination/index";
import Filters from "./filters/index";
import Loader from '../../components/partials/loader'
import data from "./data";
import "../../assets/styles/main-design-system.css";

export default function Index() {
  const [applications, setApplication] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [params, setParams] = useState({
    
  });
  const [sortByDirection, setSortByDirection] = useState({
    direction: "",
    sortBy: "",
  });

  const paginatedData = applications.slice(
    currentPage * 10 - 10,
    currentPage * 10
  );

  function fetchData() {
    setIsLoading(true);
    API({
      methods: "get",
      url: "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f",
      params,
    }).then((res) => {
      setApplication(res.data.result.auditLog);
      setTotalPages(res.data.result.auditLog.length);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchData();
  }, [currentPage, params]);

  function getParams(newFilterParams) {
    setParams({ ...params, ...newFilterParams });
  }
  function setSort(value, direction) {
    setSortByDirection({
      direction,
      sortBy: value,
    });
    setParams({ ...params, sortBy: value, direction });
  }

  return (
    <div>
      {
          loading && <Loader />
      }
      <Filters filterData={(newFilterParams) => getParams(newFilterParams)} />
      <BaseDataTable
        cells={data}
        content={paginatedData}
        setSort={(value, direction) => setSort(value, direction)}
        sortByDirection={sortByDirection}
        isLoading={loading}
      />
      <BasePagination
        pages={totalPages / 10}
        emitCurrentPage={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
