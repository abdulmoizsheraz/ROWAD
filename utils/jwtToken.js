// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
        Date.now() + 60 * 24 * 60 * 60 * 1000 // Token expiration time (in milliseconds)
    ),
    httpOnly: true,
    secure: true,             // Ensure the cookie is sent only over HTTPS (recommended for production)
    sameSite: "strict",       // Restrict cookie to same-site requests only
    path: "/",                // Path where the cookie is accessible (root path)
}

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
