import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function TimelineCard({ date, event, desc, last, pos }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        {last === true ? '' : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }} className={pos}>
        <Typography color="primary">{date}</Typography>
        <Typography variant="h6" component="span">
          {event}
        </Typography>
        <Typography>{desc}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineCard;
