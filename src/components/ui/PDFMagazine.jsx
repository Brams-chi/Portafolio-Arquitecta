import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


const CustomLoading = () => (
  <div style={{ textAlign: "center", padding: "40px", fontSize: "18px" }}>
    <p>📖 Buscando...</p>
  </div>
);

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFMagazine = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pages, setPages] = useState([]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    if (numPages) {
      const temp = [];
      for (let i = 1; i <= numPages; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [numPages]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
        backgroundColor: "#fafdff"
      }}
    >
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<CustomLoading />}>
        <HTMLFlipBook
          width={500}
          height={700}
          showCover={true}
          style={{
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            borderRadius: "16px",
          }}
        >
          {pages.map((pageNum) => (
            <div
              key={pageNum}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "8px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <Page pageNumber={pageNum} width={500} height={700} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
    </div>
  );
};

export default PDFMagazine;
