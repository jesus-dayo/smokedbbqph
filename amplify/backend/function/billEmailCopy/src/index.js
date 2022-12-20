const aws = require('aws-sdk');
const ses = new aws.SES();
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    if (record.eventName === 'INSERT') {
      const billId = record.dynamodb.NewImage.id.S;
      const updatedAt = record.dynamodb.NewImage.updatedAt.S;
      console.log('sending email ...', updatedAt);
      await ses.sendEmail({
        Destination: {
          ToAddresses: [process.env?.SES_EMAIL],
        },
        Source: process.env?.SES_EMAIL,
        Message: {
          Subject: {
            Data: `${process.env?.ENV} - PJSmokeGrill - Thank You for your Purchase!`,
          },
          Body: {
            Text: {
              Data: 'test',
            },
          },
        },
        ConfigurationSetName: 'sending-email',
      });
    }
  }
  return Promise.resolve(`Successfully sent email to ${process.env.SES_EMAIL}`);
};
