import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-southeast-2_tbPlFcdEp',
    ClientId: '2kcrodmqtpt69h61ghfetq3lpa'
};

export default new CognitoUserPool(poolData);
