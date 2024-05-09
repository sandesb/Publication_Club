import React, { useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfjs from 'pdfjs';
// Specify the PDF.js version

const pdfjsVersion = '2.11.338';
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

const PdfFlipbook = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await getDocument(pdfUrl).promise;
        const firstPage = await pdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1.2 });
        const canvas = canvasRef.current;

        if (canvas) {
          const context = canvas.getContext('2d');
          const outputScale = window.devicePixelRatio || 1;

          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          await firstPage.render(renderContext).promise;
        }
      } catch (error) {
        console.error('Failed to render PDF:', error);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} />;
};

export default PdfFlipbook;