import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

export default function CustomTable({
  columns,
  rows,
  editAction,
  deleteAction,
  otherAction,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const arrToStr = (inp) => {
    let output = "";
    if (Array.isArray(inp)) {
      for (let i = 0; i < inp.length; i++) {
        output += inp[i].name + "";
      }
      return output;
    } else {
      return inp;
    }
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, fontWeight: 600 }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ top: 0, fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                index = index + page * 10;

                console.log(index, page);

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const col = column.id;
                      const value = row[col];

                      let actValue = "";
                      if (Array.isArray(value)) {
                        console.log("11111111111111", row[col][0]);
                        actValue = row[col][0].name || row[col][0].company_name;
                      } else {
                        actValue = row[col];
                      }

                      return (
                        <TableCell>
                          {arrToStr(actValue) || "".toString()}
                        </TableCell>
                      );
                    })}

                    <TableCell>
                      {otherAction && (
                        <Button size="small" onClick={() => otherAction(index)}>
                          {" "}
                          Approve / Reject
                        </Button>
                      )}
                      {deleteAction && (
                        <Button
                          size="small"
                          onClick={() => deleteAction(index)}
                        >
                          {" "}
                          <DeleteIcon />
                        </Button>
                      )}
                      {editAction && (
                        <Button size="small" onClick={() => editAction(index)}>
                          {" "}
                          <EditIcon />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
