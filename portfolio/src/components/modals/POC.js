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

export default function POC() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} style={{ fontFamily: "Kufam", borderWidth: '4px' }}>
        • PRO Unlimited (EA) •<br/>Quality Assurance Tester<br/>Point of Contact
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          PRO Unlimited (Electronic Arts)<br/>March 2011 - March 2012, July 2012 - June 2013
        </DialogTitle>
        <DialogContent dividers>
          <div className="experience-bullets">
            <p style={{ textAlign: "center" }}>Quality Assurance Tester - Baton Rouge LA</p>
            <p>• Tested video games to ensure that they met certain requirements.</p>
            <p>• Found any bugs and reported them in a professional and well-explained manner.</p>
            <p>• Accurately filled out tasks and time spent on those tasks in DevTest.</p>
            <p>• Participated in the legal certification of multiple major Electronic Arts titles.</p>
            <p style={{ textAlign: "center", marginTop: "10%" }}>Point of Contact - Baton Rouge LA</p>
            <p>• Communicated with developers to ensure issues were fixed in a timely manner.</p>
            <p>• Held attendance and managed scheduling for a team of 50.</p>
            <p>• Distributed various reports dealing with issues and stability of the product being tested.</p>
            <p>• Distributed tasks and managed all testers during the night shift.</p>
            <p>• Handled the Quality Assurance side of regressions during the night shift.</p>
            <p>• Was the main point of contact during night shift for the developers on project SSX.</p>
            <p>• Tracked the night shift testers' bug count and their progress.</p>
            <p>• Helped all testers with any questions they had to the best of my abilities.</p>
            <p>• Used problem-solving skills to help the improvement of testers who were not doing as well as others.</p>
            <p>• Trained all new night shift testers.</p>
            <p>• Held pod meetings to encourage efficiency and communication.</p>
            <p>• Looked over and edited all bugs written by testers before they were submitted.</p>
            <p>• Created and kept up with Excel documents.</p>
            <p>• Handled conflicts between testers that did not need to be extended to Human Resources.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
