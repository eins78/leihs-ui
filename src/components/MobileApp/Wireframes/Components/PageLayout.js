import React from 'react'
import Navbar from './Navbar'

import '../tmp-styles.css';

// TODO: preTitle naja

export default function PageLayout({ title, preTitle, children }) {
  return <div className="tmp-page-layout">
    <Navbar brandName="Leihs" />
    <div className="p-4">
      {preTitle && <h4 className="text-center text-uppercase">{preTitle}</h4>}
      <h3 className="text-center text-uppercase mb-4">{title}</h3>
      <div>
        {children}
      </div>
    </div>
  </div>
}