export const checkProductData = (req, res, next) => {
    const { title, price, description, category, image } = req.body
    const error = [];
    for (const key in req.body) {
        if (req.body[key] === "") {
            error.push(`${key} is required`)
        }
    }
    if (error.length > 0) {
        return res.status(400).json({ error })
    }
    next()

}

    