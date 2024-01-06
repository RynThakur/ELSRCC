import React from 'react';

const PdfComponent = ({ pdfTitle, pdfPath }) => {
  return (
    <div className="pdf-item button">
      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        {pdfTitle}
      </a>
    </div>
  );
};

export default PdfComponent;
