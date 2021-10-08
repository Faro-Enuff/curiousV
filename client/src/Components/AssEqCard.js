import { Card, Typography } from "@mui/material";

const AssEqCard = ({ header, body }) => {
  return (
    <Card sx={{ mt: "15%" }}>
      <Typography variant="h6">{header}</Typography>
      <Typography variant="body1">{body}</Typography>
    </Card>
  );
};

export default AssEqCard;
