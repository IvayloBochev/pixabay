# pixabay
App consuming data from the pixabay API. React + Firebase + Bootstrap

# how to run
1 - npm i

2 - create .env.local file in the root folder of the project

3 - paste the following values in the newly created .env.local file:

REACT_APP_FIREBASE_API_KEY=AIzaSyAWlVmYtlnr08W-V_OwiMJ904PjLIXl0O8
REACT_APP_FIREBASE_AUTH_DOMAIN=auth-development-5b702.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=auth-development-5b702
REACT_APP_FIREBASE_STORAGE_BUCKET=auth-development-5b702.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=918374886636
REACT_APP_FIREBASE_APP_ID=1:918374886636:web:f15c5aace231c79c4b89c9
REACT_APP_PIXABAY_API_KEY=11198306-685aa0913485801b3874de361
REACT_APP_PIXABAY_URL=https://pixabay.com

4 - npm start

# how to use
Sign in with your email or create an account in the sign up section. 
You'll receive an account verification email. After signup you are also signed in and redirected to the search page.

You can now use the image search in the main page.

You can update your password - try to change your password, logout then log in with your new password.

# potential improvements

Make components more modular and reusable. 0.5 days

Add tests. 0.5 days

Add more search options and sections like colors, sizing, orientation, pagination, adding favorite photos. 1 - 1.5 days

Add more profile customisation like profile photo, default search option etc. 0.5 days