import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "./sharedFunctionality";

export default function Preset() {
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
        • Preset •<br />
        Full Stack Software Engineer
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          <span
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          >
            Preset
            <br />
            March 2021 - February 2023
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
              Full Stack Software Engineer - Remote
            </p>
            <p>
              • Worked with a team of frontend and backend developers, QA, and
              design using Scrum/Agile methodology
            </p>
            <p>
              • Planned out feature work by breaking it down into tickets and
              building architectural diagrams
            </p>
            <p>• Implemented feature work with clean, maintainable code</p>
            <p>
              • Reviewed code in pull requests to ensure everything stayed
              within the project's code styles
            </p>
            <p>
              • Created dynamic functional components to be used throughout the
              product
            </p>
            <p>
              • Removed tech debt by cleaning up errors/warnings in the code,
              converting JavaScript files to TypeScript, and converting Enzyme
              test files to React Testing Library
            </p>
            <p>• Improved and maintained frontend component tests</p>
            <p>
              • Upkept an ongoing initiative to remove async warnings from the
              test suite
            </p>
            <p>
              • Co-lead the Community Partners program - we helped new
              open-sourcers learn to contribute to open source projects by
              assisting with their first Superset contributions
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
