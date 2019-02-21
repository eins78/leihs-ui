import React, { Fragment as F } from 'react'
import f from 'lodash'
import { Let } from './Util'
import { Hr } from './Bootstrap'
import { VisuallyHidden } from './Bootstrap'
import FlashMessages from './FlashMessages'
import { Translator as T } from '../locale/translate'

export const NavbarLogin = ({
  returnTo,
  formAction,
  requireUserInput = false,
  locales
}) => {
  const t = T(locales)

  return (
    <form
      className="ui-form-signin form-inline my-2 my-lg-0"
      action={formAction}
      method="POST"
    >
      <div className="input-group">
        <input
          name="user"
          type="text"
          className="form-control"
          placeholder={t('sign_in_nav_userparam_label')}
          aria-label={t('sign_in_nav_userparam_label')}
          aria-describedby="button-addon2"
          required={requireUserInput}
          autoCapitalize="off"
          autoCorrect="off"
        />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit" id="button-addon2">
            Login
          </button>
        </div>
      </div>
      <HiddenPasswordField label={t('sign_in_password')} />
      {returnTo && <input type="hidden" name="return_to" value={returnTo} />}
    </form>
  )
}
NavbarLogin.defaultProps = {
  formAction: '/sign-in'
}

export const SignInCard = ({
  authFlow,
  authSystems,
  messages,
  locales,
  autoFocusUserField = true
}) => {
  const t = T(locales)
  const userParam = f.get(authFlow, 'user')
  const returnTo = f.get(authFlow, 'returnTo') || '/'
  const extAuths = f.filter(authSystems, { type: 'external' })
  const pwAuth = f.find(authSystems, { type: 'password' })
  const hasFailed =
    !!userParam && f.some(messages, ({ level }) => level === 'error')

  const step = !userParam || hasFailed ? 1 : 2

  const firstStep = step === 1 && (
    <F>
      <form
        className="ui-form-signin"
        method={authFlow.form.method}
        action={authFlow.form.action}
      >
        <label htmlFor={'inputEmail'} className="sr-only">
          {t('sign_in_userparam_label')}
        </label>
        <input
          id={'inputEmail'}
          name="user"
          required
          placeholder={t('sign_in_userparam_label')}
          className="form-control"
          defaultValue={userParam || ''}
          autoFocus={true}
          autoCapitalize="off"
          autoCorrect="off"
        />

        <HiddenPasswordField label={t('sign_in_password')} />

        <button className="btn btn-success btn-block mt-3" type="submit">
          {t('sign_in_btn_continue')}
        </button>
      </form>
      {/*
        {false && <ResetUser userName={userParam} resetLink={'./sign-in'} />}
      */}
    </F>
  )

  const secondStep = step === 2 && (
    <F>
      {!f.isEmpty(extAuths) && (
        <React.Fragment>
          {/* <h2 className="h5 mb-2 font-weight-normal">
            {'Anmelden mit externem Dienst'}
          </h2> */}
          {f.map(extAuths, ({ id, name, description, ...o }) => (
            <form
              className="ui-form-signin mt-2"
              key={id}
              method="POST"
              action={`/sign-in/external-authentication/${id}/request`}
            >
              <input
                type="hidden"
                name="user-unique-id"
                value={userParam || ''}
              />
              <button
                className="btn btn-lg btn-success btn-block"
                href={o.external_url}
                type="submit"
              >
                {/* {'ZHdK-Login'} */}
                {name}
              </button>
              <small>{description}</small>
            </form>
          ))}
        </React.Fragment>
      )}

      {!f.isEmpty(extAuths) && !f.isEmpty(pwAuth) && (
        <Hr className="pb-3 pt-4">oder</Hr>
      )}

      <Let {...pwAuth}>
        {({ id, description, title }) => (
          <form
            key={id}
            className="ui-form-signin"
            method={authFlow.form.method}
            action={authFlow.form.action}
          >
            <h2 className="h5 mb-4 font-weight-normal">
              {title || t('sign_in_pwauth_default_title')}
              <small>{description}</small>
            </h2>
            <label htmlFor={'inputEmail'} className="sr-only">
              {t('sign_in_userparam_label')}
            </label>
            <input
              id={'inputEmail'}
              name="user"
              className="form-control"
              required
              value={userParam || ''}
              readOnly
              style={{
                marginBottom: '-1px',
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
              }}
            />

            <label htmlFor={'inputPassword'} className="sr-only">
              {t('sign_in_password')}
            </label>
            <input
              type="password"
              name="password"
              id={'inputPassword'}
              placeholder={t('sign_in_password')}
              required
              autoComplete="current-password"
              className="form-control"
              style={{
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
              }}
            />

            <button className="btn btn-success btn-block mt-3" type="submit">
              {t('sign_in_btn_continue')}
            </button>
          </form>
        )}
      </Let>
      {/* <ResetUser userName={userParam} resetLink={'./sign-in'} /> */}
      {false && (
        <p className="mt-3">
          <a href={returnTo} className="btn btn-block btn-outline-secondary">
            {t('sign_in_btn_cancel_back')}
          </a>
        </p>
      )}
    </F>
  )

  return (
    <section
      className="card shadow-sm text-center p-4 pb-5 pb-sm-4 m-auto"
      style={{
        maxWidth: '30rem'
      }}
    >
      <h1 className="h3 my-3 font-weight-normal">{authFlow.title}</h1>
      <hr className="mb-4" />
      <FlashMessages
        messages={messages}
        className="rounded"
        messageClasses="h5 rounded"
      />
      {firstStep}
      {secondStep}
    </section>
  )
}

// partials

// const ResetUser = ({ userName, resetLink }) => (
//   <p className="mt-3">
//     Not <code>{userName}</code>? <br />
//     <a href={resetLink}>Log in as different user</a>
//   </p>
// )

const HiddenPasswordField = ({ label = 'Password' }) => (
  <VisuallyHidden>
    {/* NOTE: hidden field signals backend it was invisibly autofilled */}
    <input type="hidden" name="invisible-password" value="true" />
    <label>
      {label}
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        className="form-control"
      />
    </label>
  </VisuallyHidden>
)
