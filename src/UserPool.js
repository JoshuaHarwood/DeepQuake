import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-southeast-2_QkZp9hPKk',
    ClientId: '47tev12a7afqi75aokr1sqnock'
};

export default new CognitoUserPool(poolData);
