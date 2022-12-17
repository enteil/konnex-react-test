import response from "../helpers/response.js"

export default function (req, res, next) {
  const { body } = req
  if (!body || !body.data)
    return response(
      req,
      res,
      null
    )(null, { status: 500, code: "request.body.invalid" })
  next()
}
