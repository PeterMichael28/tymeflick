// routes/signupRoutes.ts
import CreateIndividualAccount from '../features/signUp/individualAccount/createIndividualAccount'
import CreateIndividualPassword from '../features/signUp/individualAccount/createPassword'
import ConfirmIndividualEmail from '../features/signUp/individualAccount/confirmEmail'
import WelcomePage from '../features/signUp/individualAccount/welcomePage'

import CreateSmallBusinessAccount from '../features/signUp/smallBusiness/createSmallBusinessAccount'
import CreateAdminAccount from '../features/signUp/smallBusiness/createAdminAccount'
import CreateSmallBusinessPassword from '../features/signUp/smallBusiness/createPassword'
import ConfirmSmallBusinessEmail from '../features/signUp/smallBusiness/confirmEmail'

import CreateMediumBusinessAccount from '../features/signUp/mediumBussiness/createAccount'
import CreateAdminMeduminBusinessAccount from '../features/signUp/mediumBussiness/createAdminAccount'
import CreateMediumBusinessPassword from '../features/signUp/mediumBussiness/createPassword'
import ConfirmMediumBusinessEmail from '../features/signUp/mediumBussiness/confirmEmail'

import CreateEnterpriseAccount from '../features/signUp/enterpriseAccount/createAccount'
import CreateContactPersonaccount from '../features/signUp/enterpriseAccount/createContactPersonaccount'
import SpecificRequirement from '../features/signUp/enterpriseAccount/specificRequirement'

export const signupRoutes = {
  individual: [
    { path: 'create-account', element: <CreateIndividualAccount /> },
    { path: 'create-password', element: <CreateIndividualPassword /> },
    { path: 'confirm-email', element: <ConfirmIndividualEmail /> },
    { path: 'welcome-email', element: <WelcomePage /> },
  ],
  small: [
    { path: 'create-account', element: <CreateSmallBusinessAccount /> },
    { path: 'create-admin-account', element: <CreateAdminAccount /> },
    { path: 'create-password', element: <CreateSmallBusinessPassword /> },
    { path: 'confirm-email', element: <ConfirmSmallBusinessEmail /> },
  ],
  medium: [
    { path: 'create-account', element: <CreateMediumBusinessAccount /> },
    { path: 'create-admin-account', element: <CreateAdminMeduminBusinessAccount /> },
    { path: 'create-password', element: <CreateMediumBusinessPassword /> },
    { path: 'confirm-email', element: <ConfirmMediumBusinessEmail /> },
  ],
  enterprise: [
    { path: 'create-account', element: <CreateEnterpriseAccount /> },
    { path: 'create-contact-person-account', element: <CreateContactPersonaccount /> },
    { path: 'specific-requirements', element: <SpecificRequirement /> },
  ],
}
