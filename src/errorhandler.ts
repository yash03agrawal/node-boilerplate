/**
 * err, req, res, next are
 * important for
 * this to work
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const ErrorHandler = (err, req, res, next) => {
  console.log('something went wrong', err);
  return res.status(500).send({
    message: 'something went wrong'
  });
};
