export default function (app, db, response) {
  const { User } = db;
  return async function (req, res, next) {
    try {
      const {
        body: {
          data: { email },
        },
      } = req;
      const queryBuilder = {
        where: {
          email,
        },
      };
      let user = await User.findOne(queryBuilder);
      if (!user) {
        return response(req, res)(null, {
          status: 404,
          code: "El usuario no existe",
        });
      }
      req.user = user;
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
