import React from 'react'

export default function Navbar({ brandName = 'Leihs' }) {
  return <nav
    className="tmp-navbar ui-main-nav navbar navbar-light text-xl py-0 px-4 sticky-top flex-nowrap justify-content-between"
  >
    <div className="navbar-nav w-100">
      <div className="mr-auto">
        <a className="nav-item nav-link px-0">
          <span className="ui-icon ui-menu-icon">☰</span>
        </a>
      </div>
    </div>
    <div className="mx-auto">
      {!!brandName && (
        <a className="navbar-brand m-0 font-semibold text-xl">
          {' ' + brandName + ' '}
        </a>
      )}
    </div>
    <div className="navbar-nav w-100">
      <div className="ml-auto d-flex align-items-center">
        <div className="mx-auto px-2 text-xs">
          <span className="text-color-info" />
        </div>{' '}
        <a href="/app/borrow/order" className="nav-item nav-link px-0">
          (3)
        </a>
      </div>
    </div>
  </nav>
}