export default function (app, db, response) {
  return async function (req, res, next) {
    try {
      const {
        body: {
          data: { password, confirmPassword },
        },
      } = req;
      if (password != confirmPassword) {
        return response(req, res)(null, {
          status: 400,
          code: "La contraseña y la confirmacion de la contraseña no coniciden",
        });
      }
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
