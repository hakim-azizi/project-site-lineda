import React, { useRef } from 'react';

import "../style/image-zoomer.css"

export type PictureProps = {
  picture: string;
};

const ImageZoomer: React.FC<PictureProps> = ({ picture }) => {
  const zoomerBoxRef = useRef<HTMLDivElement | null>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  const magnifiedImageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const zoomerBox = zoomerBoxRef.current;
    const originalImage = originalImageRef.current;
    const magnifiedImage = magnifiedImageRef.current;

    if (!zoomerBox || !originalImage || !magnifiedImage) return;

    const style = magnifiedImage.style;
    const x = e.pageX - zoomerBox.offsetLeft;
    const y = e.pageY - zoomerBox.offsetTop;
    const imgWidth = originalImage.offsetWidth;
    const imgHeight = originalImage.offsetHeight;

    let xperc = (x / imgWidth) * 100;
    let yperc = (y / imgHeight) * 100;

    // Allow scrolling past the edges of the image
    if (x > 0.01 * imgWidth) {
      xperc += 0.15 * xperc;
    }
    if (y >= 0.01 * imgHeight) {
      yperc += 0.15 * yperc;
    }

    style.backgroundPositionX = `${xperc - 9}%`;
    style.backgroundPositionY = `${yperc - 9}%`;

    style.left = `${x - 90}px`;
    style.top = `${y - 90}px`;
  };

  return (
    <figure
      id="img-zoomer-box"
      ref={zoomerBoxRef}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden' }}
    >
      <img
        id="img-1"
        ref={originalImageRef}
        src={picture}
        alt="Original"
        style={{ width: '100%', height: 'auto' }}
      />
      <div
        id="img-2"
        ref={magnifiedImageRef}
        style={{
          position: 'absolute',
          width: '10.625rem',
          height: '10.625rem',
          backgroundImage: 'url(../../../asset/photo/photo-article6-zoom.jpg)',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          borderRadius: '100%'
        }}
      ></div>
    </figure>
  );
};

export default ImageZoomer;
