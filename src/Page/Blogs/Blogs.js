import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-info my-4'>This is Blogs</h3>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <h4>Difference between authentication and authorization?</h4>
                    <p>Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.</p>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h4>Why are you using firebase?</h4>
                    <p>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.Aug</p>
                    <h4>What other options do you have to implement authentication?</h4>
                    <p>Some Common Authentication Types
                        1. Password-based authentication. Passwords are the most common methods of authentication. ...
                        2. Multi-factor authentication. ...
                        3. Certificate-based authentication. ...
                        4. Biometric authentication. ...
                        5. Token-based authentication.</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h4>What other services does firebase provide other than authentication
                    </h4>
                    <p>What are different services that Firebase provide to use?
                        There are many services which Firebase provides, Most useful of them are:
                        1. Cloud Firestore.
                        2. Cloud Functions.
                        3. Authentication.
                        4. Hosting.
                        5. Cloud Storage.
                        6. Google Analytics.
                        7. Predictions.
                        8. Cloud Messaging.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;