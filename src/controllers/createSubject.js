const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async event => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'Subjects',
    Item: {
      subjectId: uuid.v4(),
      name: data.name,
      questions: data.questions || []
    }
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subject created successfully', subject: params.Item })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not create subject' })
    };
  }
};
