const { decryptData } = require("../../utils/hash");

const ctrlCallBack = async (req, res) => {
  const phone = req.query.p;
  const body = req.query.b;
  const adapterDB = req.db;
  const adapterProvider = req.ws;

  const bodyString = String(body);



  if (phone && body) {
    await adapterProvider.sendText(
      `${phone}@c.us`, bodyString);
  }
  
  res.send({ data: "Success" }); 


};

module.exports = { ctrlCallBack };
