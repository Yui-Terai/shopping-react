module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {

      console.log("answering req to /products")
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });


  };
  const getOne = (req,res)=> {
    console.log("getting one")
   // let steve = JSON.stringify(req)

   let searchStr = req.body.data


  }
  return {
    getAll: getAll,
    getOne:getOne
  };
};
