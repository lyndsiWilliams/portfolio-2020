import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle } from './sharedFunctionality';

export default function TeamLead() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button data-testid="TLmodal" variant="contained" color="secondary" onClick={handleClickOpen} style={{ fontFamily: "Kufam", borderWidth: '4px' }}>
        • Bloom Institute of Technology (formerly Lambda School) •<br/>Team Lead
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose} >
          <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 'bold' }}>Bloom Institute of Technology (formerly Lambda School)<br/>March 2020 - June 2020</span>
        </DialogTitle>
        <DialogContent dividers>
          <div className="experience-bullets">
            <p style={{ textAlign: "center", fontFamily: "'Raleway', sans-serif", fontSize: '1.5em', fontWeight: 'bold' }}>Team Lead - Remote</p>
            <p>• Provided daily feedback and issue resolution of all curriculum through Slack, help channel, and/or code review.</p>
            <p>• Delivered 1:1 feedback and code review on a weekly basis</p>
            <p>• Led a team of 7-9 students that emulates a real work environment using Agile methodology</p>
            <p>• Mentored a team of 7-9 students on how to learn effectively and solve programming problems</p>
            <p>• Reviewed student code and provided detailed feedback on areas of improvement</p>
            <p>• Facilitated daily standup meetings to build camaraderie, encourage sharing of ideas and work progress, and provide guidance for that week's study material</p>
            <p>• Delivered supplemental lectures on various topics related to software engineering</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
