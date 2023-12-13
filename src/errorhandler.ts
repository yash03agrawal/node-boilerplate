export const ErrorHandler = (err, req, res, next) => {
  console.log('something went wrong', err);
  return res.status(500).send({
    message: 'something went wrong'
  });
};
