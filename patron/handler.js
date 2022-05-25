module.exports.get  =  axios => async ( req, res ) => {
    const data =  await axios.get( 'http://jsonplaceholder.typicode.com/user' );
    res.send(data);
}