import React, { useState } from "react";
import { TextField, Button, Table, TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CommunicationMethods = () => {
  const [methods, setMethods] = useState([]);
  const [newMethod, setNewMethod] = useState({ name: "", description: "", mandatory: false });

  const handleAddMethod = () => {
    if (newMethod.name.trim() === "") return;
    setMethods([...methods, { ...newMethod, id: Date.now() }]);
    setNewMethod({ name: "", description: "", mandatory: false });
  };

  const handleDeleteMethod = (id) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  return (
    <div>
      <h2>Communication Methods</h2>
      <TextField
        label="Name"
        value={newMethod.name}
        onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={newMethod.description}
        onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={handleAddMethod}
      >
        Add Method
      </Button>
      <Table>
        {methods.map((method) => (
          <TableRow key={method.id}>
            <TableCell>{method.name}</TableCell>
            <TableCell>{method.description}</TableCell>
            <TableCell>
              <IconButton onClick={() => handleDeleteMethod(method.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default CommunicationMethods;
