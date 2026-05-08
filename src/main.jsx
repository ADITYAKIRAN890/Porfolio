import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

// The Site Key is safe to be public in the frontend code
const RECAPTCHA_SITE_KEY = '6Lf0SN8sAAAAAHF5U4RqQC_fsabp0ZZZ60tg9RZa';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
