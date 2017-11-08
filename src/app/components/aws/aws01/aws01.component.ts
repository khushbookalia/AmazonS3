import { Component, OnInit } from '@angular/core';
import { Aws01Service } from './../../../services/aws/aws01.service';

@Component({
  selector: 'app-aws01',
  templateUrl: './aws01.component.html',
  styleUrls: ['./aws01.component.css']
})
export class Aws01Component implements OnInit {
  logoFile;
  allFiles:any=[];
  constructor(private Aws01Service:Aws01Service) { }

  ngOnInit() {
    this.getData();
    console.log("NG ON INIT");
    this.Aws01Service.files.subscribe(data=>{
      console.log("data is >>>>>>>>....",data)
      this.allFiles=data;
    })
  }

  logoFileEvent(fileInput: any) {
    this.logoFile = <Array<File>>fileInput.target.files;
    console.log("Files to upload ", this.logoFile, "our first file", this.logoFile[0].name);
  }
  upload() {
    var a= this.Aws01Service.upload(this.logoFile[0]);
    console.log(a)
  }
  getData(){
    this.Aws01Service.getAllData();
  }
  getSingleData(){
    this.Aws01Service.getSingleData();
  }

}
