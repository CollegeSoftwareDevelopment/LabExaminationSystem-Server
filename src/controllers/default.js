module.exports.handler = async event => {
    const message = JSON.parse(event.body);
    // Handle incoming messages
    return {
      statusCode: 200,
      body: 'Message received.',
    };
  };
  