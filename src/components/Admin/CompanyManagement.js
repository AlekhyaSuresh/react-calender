import React, { useState } from "react";
import { TextField, Button, Table, TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: "", location: "", linkedIn: "" });

  const handleAddCompany = () => {
    if (newCompany.name.trim() === "") return;
    setCompanies([...companies, { ...newCompany, id: Date.now() }]);
    setNewCompany({ name: "", location: "", linkedIn: "" });
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div>
      <h2>Company Management</h2>
      <TextField
        label="Name"
        value={newCompany.name}
        onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        value={newCompany.location}
        onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="LinkedIn Profile"
        value={newCompany.linkedIn}
        onChange={(e) => setNewCompany({ ...newCompany, linkedIn: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddCompany}>
        Add Company
      </Button>
      <Table>
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.location}</TableCell>
            <TableCell>{company.linkedIn}</TableCell>
            <TableCell>
              <IconButton onClick={() => handleDeleteCompany(company.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default CompanyManagement;
