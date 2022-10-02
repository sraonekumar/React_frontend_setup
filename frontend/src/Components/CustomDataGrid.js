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

export default function CustomDataGrid({
  headers = [],
  rows = [],
  title = "",
}) {
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
                <StyledTableCell align={"left"}>
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
          {rows.map((row, i) => (
            <StyledTableRow
              key={`${title}_${Math.floor(100000 + Math.random() * 900000)}`}
            >
              {Object.entries(row)?.map((subitem) => {
                let [key, value] = subitem,
                  intial = 0;
                return intial++ === 0 ? (
                  <StyledTableCell component="th" scope="row">
                    {value}
                  </StyledTableCell>
                ) : (
                  <StyledTableCell align="left">{value}</StyledTableCell>
                );
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
