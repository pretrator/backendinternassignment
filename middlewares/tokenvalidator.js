const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

module.exports.logincheck=(request,response,next)=>{
    const body = request.body
    const token = getTokenFrom(request)
    console.log(token)
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }
        request.decoded=decodedToken
        return next()
    }
    catch{
        return response.status(401).json({ error: 'token missing or invalid' })
    }
}