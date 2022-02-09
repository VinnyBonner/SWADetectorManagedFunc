module.exports = async function (context, req) {
    throw new Error('Throw makes it go boom!');    
    context.res.json({
        text: "Hello from the API"
    });
};
