import Bold from './components/Bold'
import DebugProps from './components/DebugProps'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'

import PasswordForgotPage from './pages/PasswordForgotPage'
import PasswordForgotSuccessPage from './pages/PasswordForgotSuccessPage'
import PasswordResetPage from './pages/PasswordResetPage'
import PasswordResetSuccessPage from './pages/PasswordResetSuccessPage'

export const Components = {
  Bold,
  DebugProps,
  Navbar,

  CategoryList: require('./components/MobileApp/CategoryList').default,
  ModelList: require('./components/MobileApp/ModelList').default,
  SearchForm: require('./components/MobileApp/SearchForm').default,

  // pages:
  HomePage,
  SignInPage,

  PasswordForgotPage,
  PasswordForgotSuccessPage,
  PasswordResetPage,
  PasswordResetSuccessPage
}
