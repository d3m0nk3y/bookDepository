const { insert } = require("../sql");
const { validationHelper } = require("./../../../common");
(() => {
    module.exports = async (req, res, next) => {
        let msg =await validationHelper.valid(req.body);
        res.status(200).send(msg);
    }
})(module.exports)