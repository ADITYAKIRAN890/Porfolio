export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    // Verify token with Google's API
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
      method: 'POST',
    });
    
    const data = await response.json();

    // Check if verification was successful and score is acceptable
    if (data.success && data.score >= 0.5) {
      return res.status(200).json({ 
        success: true, 
        message: 'Verification successful',
        score: data.score
      });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: 'Verification failed. Possible bot activity detected.',
        errors: data['error-codes']
      });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error during verification' 
    });
  }
}
