export default function (req, res, next = null) {
  return function (response, error = null) {
    if (error) {
      if (error.err) console.log(error.err);
      res.status(error.status).json({
        date: Date.now(),
        statusCode: error.status,
        message: error.code,
      });
      if (next) next();
      return;
    }

    res.status(200).json({
      statusCode: 200,
      message: "Successful",
      data: response,
      _channel: "web",
    });
    if (next) next();
    return;
  };
}
