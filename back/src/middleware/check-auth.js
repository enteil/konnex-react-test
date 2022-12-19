export default function (app, db, response) {
  const { User, Session } = db;

  return async function (req, res, next) {
    try {
      const { query, headers } = req;
      const headerToken = query.token ? query.token : headers.authorization;
      if (!headerToken) {
        return response(req, res)(null, { code: "auth.noToken", status: 401 });
      }
      const splitToken = headerToken.split(" ")[1];
      if (!splitToken) {
        return response(req, res)(null, {
          code: "auth.invalidToken",
          status: 401,
        });
      }
      const queryBuilder = {
        attributes: ["id", "lastAt", "ip", "createdAt"],
        include: [
          {
            model: User,
            required: true,
          },
        ],
        where: [{ token: splitToken }, { active: 1 }],
      };
      const session = await Session.findOne(queryBuilder);
      if (!session) {
        return response(req, res)(null, { code: "auth.failed", status: 401 });
      }
      const user = session.User;
      if (user.blocked) {
        return response(req, res)(null, { code: "user.blocked", status: 401 });
      }
      await session.update({ lastAt: Date.now() });
      req.user = user;
      req.session = session;
      next();
    } catch (err) {
      console.log("AUTH FAILED", Date.now(), err);
      return response(
        req,
        res,
        null
      )(null, { err, code: "Algo salió mal", status: 500 });
    }
  };
}
