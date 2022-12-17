export default function (app, db, response) {
  return async function (req, res, next) {
    try {
      let {
        user,
        body: {
          data: { password },
        },
      } = req;
      const match = await user.truePassword(password);
      if (!match)
        return response(req, res)(null, {
          status: 400,
          code: "data.badPassword",
        });

      next();
    } catch (err) {
      return response(req, res)(null, {
        err,
        status: 500,
        code: "Algo salió mal",
      });
    }
  };
}
