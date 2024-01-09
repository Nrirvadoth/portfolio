import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineCard from './Timeline-card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import myApi from './config.js'

const dataJson = await fetch(`${myApi}/events`);
const data = await dataJson.json();

const theme = createTheme({
  typography: {
    fontFamily: ['Work Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#88DCFC',
    },
  },
});

export default function MyTimeline() {
  return (
    <ThemeProvider theme={theme}>
      <Timeline position="alternate">
        {data.map((TimelineElement, index, arr) => (
          <TimelineCard
            key={TimelineElement._id}
            date={TimelineElement.date}
            event={TimelineElement.event}
            desc={TimelineElement.desc}
            pos={index % 2 === 0 ? 'TimelineRight' : 'TimelineLeft'}
            last={index === arr.length - 1 ? true : false}
          />
        ))}
      </Timeline>
    </ThemeProvider>
  );
}
