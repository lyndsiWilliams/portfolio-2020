import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

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
