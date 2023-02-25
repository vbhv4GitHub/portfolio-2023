import { styled } from '@mui/system';
import Timeline from '@mui/lab/Timeline';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const TimelineDot = styled(MuiTimelineDot)({ margin: 0 });
const TimelineConnector = styled(MuiTimelineConnector)({ width: 1 });

export default function EducationAndExperience() {
  return (
    <Timeline sx={{ xs: { p: 0 }, '.MuiTimelineItem-root:before': { xs: { flex: 0 }, sm: { flex: 1 } } }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ opacity: 0 }} />
          <TimelineDot color="secondary">
            <SchoolOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="text.secondary">
            2011 - 2012
          </Typography>
          <Typography variant="h6" component="span">
            Higher Secondary School
          </Typography>
          <Typography>Got introduced to C++</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <SchoolOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="text.secondary">
            2014 - 2016
          </Typography>
          <Typography variant="h6" component="span">
            Diploma in Computer Science &amp; Engineering
          </Typography>
          <Typography>Had to do it for the sake of it</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <WorkOutlineOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="text.secondary">
            July 2020 - Nov 2020
          </Typography>
          <Typography variant="h6" component="span">
            Raj Transport
          </Typography>
          <Typography>Part-time data entry operator</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <WorkOutlineOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="text.secondary">
            Dec 2020 - Jan 2021
          </Typography>
          <Typography variant="h6" component="span">
            Sunground Technologies
          </Typography>
          <Typography>Wordpress developer</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <WorkOutlineOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ opacity: 0 }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="text.secondary">
            Jun 2021 - NOW
          </Typography>
          <Typography variant="h6" component="span">
            Codemancers
          </Typography>
          <Typography>Full stack web developer</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
