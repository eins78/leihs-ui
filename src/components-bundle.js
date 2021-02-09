import * as AppLayout from './components/MobileApp/AppLayout'
import Bold from './components/Bold'
import DebugProps from './components/DebugProps'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'

import PasswordForgotPage from './pages/PasswordForgotPage'
import PasswordForgotSuccessPage from './pages/PasswordForgotSuccessPage'
import PasswordResetPage from './pages/PasswordResetPage'
import PasswordResetSuccessPage from './pages/PasswordResetSuccessPage'

const Components = {
  Bold,
  DebugProps,
  Navbar,

  AppLayout,
  CategoryList: require('./components/MobileApp/CategoryList').default,
  ModelList: require('./components/MobileApp/ModelList').default,
  ModelFilterForm: require('./components/MobileApp/ModelFilterForm').default,
  BookingCalendar: require('./components/MobileApp/BookingCalendar').BookingCalendar,

  // pages:
  HomePage,
  SignInPage,

  PasswordForgotPage,
  PasswordForgotSuccessPage,
  PasswordResetPage,
  PasswordResetSuccessPage
}

export default Components
