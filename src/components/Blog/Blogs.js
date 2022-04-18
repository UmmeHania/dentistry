import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>

            <h3 className='fw-bold'>1.What is the difference between authorization and authentication?</h3>
            Ans: Authentication factors determine the various elements the system use to verify one's identity prior to granting him access to anything from accessing a file to requesting a bank transaction. A user's identity can be determined by what he knows, what he has, or what he is. When it comes to security, at least two or all the three authentication factors must be verified in order to grant someone access to the system.
            Authorization is the process to determine whether the authenticated user has access to the particular resources. It verifies your rights to grant you access to resources such as information, databases, files, etc. Authorization usually comes after authentication which confirms your privileges to perform.
            <h3 className='fw-bold'> Why are you using firebase? What other options do you have to implement authentication?</h3>
            Ans:Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.
            The other options I have to implement authentication is LInekIn,Instagram,Spotify etc
            <h3 className='fw-bold'> What other services does firebase provide other than authentication</h3>
            Ans: It provides Cloud Firestore,Cloud Functions,Authentication,Hosting,Cloud Storage,Google Analytics,Predictions and Cloud Messaging.
        </div>
    );
};

export default Blogs;