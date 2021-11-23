import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import { DeleteOutlined, Edit } from "@mui/icons-material";
import { productRows } from "../dummydata";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 25px 0;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Cell>
            <Avatar sx={{ marginRight: "10px" }} src={params.row.image} />
            {params.row.name}
          </Cell>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Cell>
            <Link to={"/products/" + params.row.id}>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteOutlined />
            </IconButton>
          </Cell>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default ProductList;
