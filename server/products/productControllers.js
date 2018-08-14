const addProductAttempt = (req,res) => {
    res.send("You are in addProductAttempt");
};

const searchProductAttempt = (req, res) => {
    res.send('you are in searchProductAttempt');
};

const searchViaCatagoryAttempt = (req, res) => {
    res.send('You are in searchViaCatagoryAttempt');
};

module.exports = {
    addProductAttempt,
    searchProductAttempt,
    searchViaCatagoryAttempt
};