import React from 'react'

import { ImageThumbnail } from './ImageThumbnail'

const ListAsGridSquare = ({ baseClass, list = [] }) => {
  return (
    <div className={`${baseClass} d-flex flex-wrap`}>
      {list.map(({ id, href, imgSrc, caption, subCaption, isDimmed }) => (
        <div key={id} className="w-50 min-h-16" style={{ opacity: isDimmed ? 0.35 : 1 }}>
          <div
            className={`${baseClass}-item max-w-sm rounded-lg overflow-hidden bg-white px-2 mb-3`}
            style={{ opacity: 1 }}
          >
            <ImageThumbnail href={href} imgSrc={imgSrc} />
            <div className="mx-0 mt-1 text-base leading-snug">
              <a className="text-color-content" href={href}>
                <span className="d-block text-truncate font-bold">{caption}</span>
                <span className="d-block text-truncate">{subCaption}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListAsGridSquare
