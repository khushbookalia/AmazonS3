import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';


// AWS.config.region = "us-east-2";
const s3 = new AWS.S3({ region: 'ap-south-1' });

const bucketName = "thisisatrialfromsiddhartha";
const async = require('async')

let file, fileName, ETag;

const createMainBucket = (callback) => {
  console.log("inside createMainBucket")
  const bucketParams = {
    Bucket: bucketName
  };
  s3.headBucket(bucketParams, function (err, data) {
    if (err) {
      console.log("Error in HeadBucket>>>.. ", err)
      s3.createBucket(bucketParams, function (err, data) {
        if (err) {
          console.log("Error", err)
          callback(err, null)
        } else {
          callback(null, data)
        }
      });
    } else {
      callback(null, data)
    }
  })
}

const createItemObject = (callback) => {
  const params = {
    Bucket: bucketName,
    Key: `${fileName}`,//$ sets scope
    ACL: 'public-read',
    Body: file
  };
  s3.putObject(params, function (err, data) {
    if (err) {
      console.log("Error uploading image: ", err);
      callback(err, null)
    } else {
      console.log("Successfully uploaded image on S3", data);
      ETag = data.ETag;
      console.log("etag>>>", ETag)
      callback(null, data)

    }
  })

}

@Injectable()
export class Aws01Service {
  logoFile;
  files: BehaviorSubject<{}[]> = new BehaviorSubject<{}[]>([]);
  constructor() { }

  upload(fileInput: any) {
    this.logoFile = fileInput;
    console.log("item to upload-->>", this.logoFile)
    file = this.logoFile;
    fileName = this.logoFile.name;
    async.series([
      // createMainBucket,
      createItemObject
    ], (err, result) => {
      if (err) return err
      else return { message: "Successfully uploaded" }
    })
  }

  getAllData() {
    let bucket = new AWS.S3({ params: { Bucket: 'thisisatrialfromsiddhartha' } });
    let self = this;
    console.log("in service");
    bucket.listObjects(function (err, data) {
        if (err) {
          console.log('error', err);
        } else {
          console.log("data recieved>>>", data.Contents);
          self.files.next(data.Contents)
        }
      });
    
  }

  getSingleData() {
    var params = { Bucket: bucketName, ETag: ETag, Key: '' }
    s3.getObject(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log("got single detail-->>", data);           // successful response
    });
  }


}
