import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "./sharedFunctionality";

export default function Superset() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Button
        data-testid="TLmodal"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        style={{ fontFamily: "Kufam", borderWidth: "4px" }}
      >
        • The Apache Software Foundation •<br />
        Apache Superset Committer
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          <span
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          >
            The Apache Software Foundation
            <br />
            October 2021 - Present
          </span>
        </DialogTitle>
        <DialogContent dividers>
          <div className="experience-bullets">
            <p
              style={{
                textAlign: "center",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
            >
              Apache Superset Committer - Remote
            </p>
            <p>• Implement feature work with clean, maintainable code</p>
            <p>
              • Review code in pull requests to ensure everything stayed within
              the project's code styles
            </p>
            <p>
              • Remove tech debt by cleaning up errors/warnings in the code,
              converting JavaScript files to TypeScript, and converting Enzyme
              test files to React Testing Library
            </p>
            <p>• Improve and maintain frontend component tests</p>
            <p>
              • Contribute to an ongoing initiative to remove async warnings
              from the test suite
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
