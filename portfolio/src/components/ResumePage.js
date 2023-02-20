import React from "react";

const ResumePage = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src =
    "https://docs.google.com/document/d/1sIeUKgb66eY6x4j_ds-gc3JoEtYQwGtT8Axwcoa0t6Q/view";
  return (
    <div>
      <iframe
        src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"}
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default ResumePage;
