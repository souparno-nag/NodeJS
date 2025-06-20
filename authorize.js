// const authorize = (req, res, next) => {
//   console.log('authorize')
//   next()
// }

const authorize = (req, res, next) => {
  const {user} = req.query
  if (user && user === 'john') {
    req.user = {name: 'john', id: 3}
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
  next()
}

module.exports = authorize

