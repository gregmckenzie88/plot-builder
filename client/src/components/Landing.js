import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to Emaily!</h2>
      <div style={{ maxWidth: '500px', textAlign: 'left', margin: '0 auto'}}>
        <p>This app is designed to collect feedback from your users so you can stay on track.</p>
        <p>This instance is for demonstration purposes only, so please add credits using the following credit card number: <em>4242 4242 4242 4242</em>, and set the expiration date for sometime in the future.</p>
        <p>Happy emailing,</p>
        <p>- Greg McKenzie</p>
      </div>

    </div>
  );
}

export default Landing;
