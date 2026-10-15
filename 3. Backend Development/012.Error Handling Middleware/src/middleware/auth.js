const Auth = (req, res, next)=>{
    const token = "ABCDEF"
    const access = token === "ABCDEF" ? 1: 0
    if(!access) return res.status(403).send("No Permission")
        next()
}
module.exports = {Auth}