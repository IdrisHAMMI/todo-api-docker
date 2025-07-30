const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err);

  // Default error response
  let error = {
    success: false,
    message: 'Internal Server Error'
  };

  // Handle specific error types (like validation)
  if (err.name === 'ValidationError') {
    error.message = 'Validation Error';
    error.details = err.message;
    return res.status(400).json(error);
  }

  if (err.name === 'CastError') {
    error.message = 'Invalid ID format';
    return res.status(400).json(error);
  }

  // JSON parsing errors
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    error.message = 'Invalid JSON format';
    return res.status(400).json(error);
  }

  // Default server error
  res.status(err.status || 500).json(error);
};

module.exports = errorHandler;