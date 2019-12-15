const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const lambda = new AWS.Lambda(
    {
        apiVersion: '2015-03-31',
        endpoint: 'http://127.0.0.1:3001/'    // endpoint of lambda function you are trying to invoke. In this case, it is the locally active lambda by SAM
    }
);

lambdaHandler = async(event) => {
    const params = {
        FunctionName: 'HelloWorldFunction',
        InvocationType: 'RequestResponse',
        Payload: new Buffer.from('{"content": "練習"}')    // this will be passed to the invoked function as event data
    };

    const result = await lambda.invoke(params).promise();
    console.log('invocation result..... ', result);

    return {
        statusCode: 200,
        message: 'invoke lambda function succeeded!'
    }
};


lambdaHandler({});

