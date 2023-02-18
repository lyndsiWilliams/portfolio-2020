import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

export const styles = (theme) => ({
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

export const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ?? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
});

export const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Modal = (buttonText, modalTitle, contentTitle, contentDescription) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Button data-testid="TLmodal" variant="contained" color="secondary" onClick={handleClickOpen} style={{ fontFamily: "Kufam", borderWidth: '4px' }}>
        {buttonText}
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose} >
          <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 'bold' }}>{modalTitle}</span>
        </DialogTitle>
        <DialogContent dividers>
          <div className="experience-bullets">
            <p style={{ textAlign: "center", fontFamily: "'Raleway', sans-serif", fontSize: '1.5em', fontWeight: 'bold' }}>{contentTitle}</p>
            {contentDescription}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
