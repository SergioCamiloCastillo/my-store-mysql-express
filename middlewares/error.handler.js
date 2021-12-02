const { ValidationError } = require('sequelize');
//ValidationError es una instancia de sequelize para detectar errores
function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    //instanceof verifica si el error viene desde el sequelize, es decir la consulta a bd
    res.status(409).json({
      statusCode: 409,
      message: err.errors.message,
      errors: err.errors
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
