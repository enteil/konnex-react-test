export default function (app, db, response) {
  const { User } = db;
  return {
    login: async function (req, res) {
      try {
        const {
          user,
          headers,
          body: { data },
        } = req;
        const isTruePassword = await user.truePassword(data.password);
        if (!isTruePassword) {
          return response(req, res)(null, {
            status: 400,
            code: "Contraseña incorrecta",
          });
        }
        const ipAddress =
          headers["x-forwarded-for"] || req.connection.remoteAddress;
        const session = await user.createSession({ ipAddress });
        return response(
          req,
          res
        )({
          id: user.id,
          token: session.token,
          name: user.name,
        });
      } catch (err) {
        return response(req, res)(null, {
          err,
          status: 500,
          code: "Algo salió mal",
        });
      }
    },
    logout: async function (req, res) {
      try {
        const { session } = req;
        await session.update({
          active: 0,
        });
        return response(req, res)(null);
      } catch (err) {
        return response(req, res)(null, {
          err,
          status: 500,
          code: "Algo salió mal",
        });
      }
    },
    register: async function (req, res) {
      try {
        const {
          headers,
          body: { data },
        } = req;
        const ipAddress =
          headers["x-forwarded-for"] || req.connection.remoteAddress;
        const cifratePassword = await User.prototype.createPassword(
          data.password
        );
        const newUserData = {
          name: data.name,
          email: data.email,
          password: cifratePassword,
        };

        const user = await User.create(newUserData);
        const session = await user.createSession({ ipAddress });
        return response(
          req,
          res
        )({
          id: user.id,
          token: session.token,
          name: user.name,
        });
      } catch (err) {
        return response(req, res)(null, {
          err,
          status: 500,
          code: "Algo salió mal",
        });
      }
    },
  };
}
