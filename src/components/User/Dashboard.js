import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Checkbox,
  Button,
  Tooltip,
} from "@mui/material";
import CommunicationModal from "./CommunicationModel";

const Dashboard = ({ data, onUpdate }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle company selection (multi-select)
  const handleSelect = (companyName) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyName)
        ? prev.filter((name) => name !== companyName)
        : [...prev, companyName]
    );
  };

  // Open and close modal
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Handle submission of communication
  const handleCommunicationSubmit = (communication) => {
    const updatedData = data.map((item) =>
      selectedCompanies.includes(item.companyName)
        ? {
            ...item,
            lastCommunications: [
              `${communication.communicationType}: ${communication.date} - ${communication.notes}`,
              ...item.lastCommunications.slice(0, 4),
            ],
            nextCommunication: "TBD", // Set placeholder for next communication
            isOverdue: false, // Reset overdue highlight
            isToday: false, // Reset today's highlight
          }
        : item
    );
    onUpdate(updatedData); // Update parent state
    setSelectedCompanies([]); // Reset selections
    handleCloseModal(); // Close modal
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Last Five Communications</TableCell>
            <TableCell>Next Scheduled Communication</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: item.isOverdue
                  ? "red"
                  : item.isToday
                  ? "yellow"
                  : "white", // Reset to white when both flags are false
              }}
            >
              <TableCell>
                <Checkbox
                  checked={selectedCompanies.includes(item.companyName)}
                  onChange={() => handleSelect(item.companyName)}
                />
              </TableCell>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>
                {item.lastCommunications.map((comm, idx) => {
                  const [summary, notes] = comm.split(" - ");
                  return (
                    <Tooltip key={idx} title={notes || "No notes"}>
                      <span style={{ display: "block", cursor: "pointer" }}>
                        {summary}
                      </span>
                    </Tooltip>
                  );
                })}
              </TableCell>
              <TableCell>{item.nextCommunication}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        disabled={selectedCompanies.length === 0}
      >
        Communication Performed
      </Button>
      <CommunicationModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCommunicationSubmit}
      />
    </div>
  );
};

export default Dashboard;
