import React from "react";
import { Badge, List, ListItem, ListItemText, Box } from "@mui/material";

const Notifications = ({ overdueTasks, todayTasks }) => {
  return (
    <div>
      <h2>Notifications</h2>

      {/* Overdue Communications */}
      <Box sx={{ mb: 2, backgroundColor: "red", color: "white", padding: 2, borderRadius: 1 }}>
        <Badge badgeContent={overdueTasks.length} color="error">
          <h3>Overdue Communications</h3>
        </Badge>
        <List>
          {overdueTasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={task.companyName}
                secondary={`Overdue Since: ${task.overdueSince}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Today's Communications */}
      <Box sx={{ backgroundColor: "yellow", padding: 2, borderRadius: 1 }}>
        <Badge badgeContent={todayTasks.length} color="primary">
          <h3>Today's Communications</h3>
        </Badge>
        <List>
          {todayTasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={task.companyName}
                secondary={`Scheduled For: ${task.scheduledFor}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Notifications;
