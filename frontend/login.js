const handleLogin = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Login successful', data);
    } else {
      console.error('Login failed', data);
    }
  };