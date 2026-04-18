/**
 * ============================================================
 * ERROR HANDLER MIDDLEWARE - middleware/errorHandler.js
 * ============================================================
 * This is a global error handler registered in index.js
 * AFTER all routes. Express recognises it as an error handler
 * because it has 4 parameters: (err, req, res, next).
 *
 * Any route that calls next(err) or throws an unhandled
 * error will land here instead of crashing the server.
 *
 * Status 500 = Internal Server Error (something went wrong
 * on the server side that we didn't expect).
 * ============================================================
 */

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
