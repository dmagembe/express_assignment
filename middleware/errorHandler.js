const errorHandler = (err, req, res, next) => {
  // Log the full error to the terminal for debugging
  console.error('Unhandled error:', err.stack)

  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server',
    error: err.message   // shows the actual error message
  })
}

module.exports = errorHandler
