import React, { useEffect, useState } from 'react';

const withAdminAuthentication = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      // Retrieve the stored user data from local storage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        console.log('Stored User Data:', userData);
        if (userData.type === 'admin') {
          setAuthenticated(true);
        } else {
            window.location.href = '/admin'; // Redirect to the admin page for non-admin users
        }
      } else {
        window.location.href = '/admin'; // Redirect to the admin page for unauthenticated users
      }
    }, []);

    if (!authenticated) {
      return null; // Render nothing if not authenticated
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAdminAuthentication;
