import React from 'react'
import { LeihsPage } from '../../src/components/styleguide'
import Navbar from '../../src/components/Navbar'

const LEIHS_GREEN = '#afec81'

export const exampleParams = {
  me: {
    user: {
      name: 'Normin Normalo'
    }
  },
  locales: [
    { name: 'Deutsch', href: '/set-locale/de' },
    { name: 'English', href: '/set-locale/en' },
    { name: 'Español', href: '/set-locale/es' }
  ],
  subApps: {
    borrow: true,
    admin: true,
    procure: true,
    manage: [{ name: 'XYZ', href: '/manage/xyz' }],
    styleguide: false
  },
  appColor: LEIHS_GREEN,
  appTitle: 'LeihsApp',
  appMenu: [
    {
      title: 'AAA',
      href: '/aaa',
      icon: 'Settings',
      active: false,
      attr: { 'data-foo': 'bar' }
    },
    {
      title: 'BBB',
      href: '/bbb',
      icon: 'Categories',
      active: true
    },
    {
      title: 'CCC',
      href: '/ccc',
      icon: 'Users',
      active: false
    },
    {
      title: 'Kontakt',
      href: 'http://example.com',
      icon: 'Contact',
      active: false
    }
  ]
}

const NavbarDummyPage = () => {
  return (
    <LeihsPage>
      <Navbar config={exampleParams} />
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Great App</h1>
        <p className="lead">This is a great app with an even greater navbar.</p>
        <p className="lead">
          See <a href="./colors">all the colors</a> and{' '}
          <a href="./variants">more variants</a>
          ..
        </p>
        <small>those (example) params are rendered:</small>
        <pre className="text-bold text-left w-50 m-auto p-3 card bg-warning">
          {JSON.stringify(exampleParams, 0, 2)}
        </pre>
      </div>{' '}
    </LeihsPage>
  )
}

export default NavbarDummyPage
