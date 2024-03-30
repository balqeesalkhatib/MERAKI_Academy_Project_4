const authorization = (string) => {
  return (req, res, next) => {
    if (req.token.permissions.includes(string)) {
      next();
    }
    else{
        res.status(403).json({
            success: false,
            message: `Unauthorized`,
          });
    }
  };
};
module.exports = authorization;
