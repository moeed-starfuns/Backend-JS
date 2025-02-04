// 2ND Approach mostly used

const asyncHandler = (requestHandler) => {
  // Always use return it will return the function where we use asyncHandler
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export default asyncHandler;

//FIRST APPROACH
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
