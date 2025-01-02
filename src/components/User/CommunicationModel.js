import React, { useState } from "react";
import { Modal, Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const communicationMethods = [
  { value: "LinkedIn Post", label: "LinkedIn Post" },
  { value: "LinkedIn Message", label: "LinkedIn Message" },
  { value: "Email", label: "Email" },
  { value: "Phone Call", label: "Phone Call" },
  { value: "Other", label: "Other" },
];

const CommunicationModel = ({ open, onClose, onSubmit }) => {
  const [communicationType, setCommunicationType] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!communicationType || !date) {
      alert("Please fill in all fields!");
      return;
    }
    onSubmit({ communicationType, date, notes });
    setCommunicationType("");
    setDate("");
    setNotes("");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Log Communication
        </Typography>
        <TextField
          select
          label="Communication Type"
          value={communicationType}
          onChange={(e) => setCommunicationType(e.target.value)}
          fullWidth
          margin="normal"
        >
          {communicationMethods.map((method) => (
            <MenuItem key={method.value} value={method.value}>
              {method.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Notes"
          multiline
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommunicationModel;
