import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkVpcEc2 from '../lib/cdk-vpc-ec2-stack';

test('Stack synthesizes', () => {
  const app = new cdk.App();
  const stack = new CdkVpcEc2.CdkVpcEc2Stack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
  expect(Object.keys(template.toJSON().Resources ?? {}).length).toBeGreaterThan(0);
});
