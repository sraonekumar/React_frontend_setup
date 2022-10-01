import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableSortLabel } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey,
    color: theme.palette.common.black,
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function CustomDataGrid() {
  const headers = [
    {
      title: "Dessert (100g serving)",
      sorting: false,
    },
    {
      title: "Calories",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Fat (g)",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Carbs (g)",
      sorting: true,
      direction: "asc",
    },
    {
      title: "Protein (g)",
      sorting: false,
    },
  ];
  const [orientation, setOrientation] = React.useState(headers);
  const handleSort = (id) => {
    setOrientation(
      orientation?.map((item, i) => {
        return id === i
          ? { ...item, direction: item?.direction === "asc" ? "desc" : "asc" }
          : item;
      })
    );
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 450,
        width: "100%",
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
        background: "#fff",
      }}
    >
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            {orientation?.map((item, i) => {
              return (
                <StyledTableCell align={i > 0 ? "right" : ""}>
                  {item?.sorting ? (
                    <TableSortLabel
                      direction={item?.direction || ""}
                      onClick={() => handleSort(i)}
                      hideSortIcon={false}
                      IconComponent={() => {
                        return item?.direction === "asc" ? (
                          <KeyboardArrowDown />
                        ) : (
                          <KeyboardArrowUp />
                        );
                      }}
                    >
                      {item?.title}
                    </TableSortLabel>
                  ) : (
                    item?.title
                  )}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
