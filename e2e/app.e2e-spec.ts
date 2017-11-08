import { AwsSdkS3Page } from './app.po';

describe('aws-sdk-s3 App', () => {
  let page: AwsSdkS3Page;

  beforeEach(() => {
    page = new AwsSdkS3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
