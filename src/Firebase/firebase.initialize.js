import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/* 
steps for authentication
-----------------------

Step-1: Initail Setup

1.firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

-----------------------------

Step-2 setup component: 
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

------------------------------------------

step-3: set auth system

1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from Firebase

---------------------------------------------

step-4 : Create auth context

1. Create a Auth context
2. Create context Provider
3. Set context Provider context value
4. use Auth Provider
5. Create useAuth hook

-------------------------------------------

step-5 : Create Private route
1. Create Private Route
2. set private route

-----------------------------------------------

step-6:
1. after login redirect user


*/