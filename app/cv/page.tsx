import React from "react";

function Page() {
  return (
    <div>
      <object
        data="/MyCV1.pdf"
        type="application/pdf"
        width="100%"
        height="1000px"
      >
        <p>
          Your browser does not support PDFs. Please download the PDF to view it:{" "}
          <a href="/MyCV1.pdf"target="_blank"
                  rel="noopener noreferrer" >
            Download PDF
          </a>
        </p>
      </object>
    </div>
  );
}

export default Page;
