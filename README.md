# aws-server-less-boilerplate-cron-Job
This a simple boilerplate for deploying a NodeJS Cron Job in AWS server less service (Lambda function)

### Description
This cron job will be triggered every minute and will log "Hello world"

### Prerequisites
Install and configure the Serverless Framework

```
$ npm install -g serverless
```

Configure Serverless Framework with your AWS credentials

```
$ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
```

### Deployment

```
$ sls deploy
```

### See logs

```
$ serverless logs --function hello --tail
```