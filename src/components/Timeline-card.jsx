import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function TimelineCard({ date, name, description, last, pos }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        {last === true ? <TimelineDot variant="outlined" color="primary" /> : <TimelineDot color="primary" />}
        {last === true ? '' : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }} className={pos}>
        <Typography color="primary">{date}</Typography>
        <Typography variant="h6" component="span">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
