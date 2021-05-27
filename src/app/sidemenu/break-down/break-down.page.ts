import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { ActionSheetController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-break-down',
  templateUrl: './break-down.page.html',
  styleUrls: ['./break-down.page.scss'],
})
export class BreakDownPage implements OnInit {

  images = [];

  constructor(private platform:Platform,
    private router:Router,private imagePicker:ImagePicker,
     private actionSheetController:ActionSheetController,
    private photoViewer:PhotoViewer,private camera:Camera) { }

  

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      debugger
      console.log("Back press handler!");
     this.router.navigate(["/tabs"]);
    });
  }

  async getImage()
  {

  
    const actionSheet = await this.actionSheetController.create({
      header: 'Upload images from',
      buttons: [{
        text: 'Gallery',
        icon: 'images',
        handler: () => {

          this.selectImage();
         
        }
      }, {
        text: 'camera',
        icon: 'camera',
        handler: () => {


          this.takePicture();
          
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



  selectImage()
  {

    
      // this.imagePicker.getPictures({
      //   maximumImagesCount: 15,
      //   outputType: 1

      // }).then(selectedImg => {
      //   selectedImg.forEach(i =>
      //     { 

      //       debugger;

      //       this.images.push("data:image/jpeg;base64," + i)

      //       debugger;

      //       console.log(this.images);

      //     });
      // },
      // (err) => {

      //   debugger

      //   console.log(err);

      // })

      this.imagePicker.getPictures({ 
         maximumImagesCount: 15,
         outputType: 1
        }).then((results) => {
        for (var i = 0; i < results.length; i++) {


          this.images.push("data:image/jpeg;base64," + results[i])

            console.log('Image URI: ' + results[i]);
        }
      }, (err) => { });
    

  }


    takePicture() {

    
    

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
  
       console.log(imageData);
  
       debugger;
      
  
       if(imageData==null || imageData=="")
       {
  
         
  
       }
       else
       {
  
        this.images.push("data:image/jpeg;base64," + imageData);
  
       }
  
      
    
      }, (err) => {
  
       // Handle error
      });
     
       
  
    }
   

zoom(image)
{

  this.photoViewer.show(image, '', {share: false});


}


}
