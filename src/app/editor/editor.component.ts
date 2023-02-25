import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  isEditable = true;
  fileString: any;
  imageFile: any =
    'https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg';
  context!: CanvasRenderingContext2D;
  @ViewChild('mycanvas') mycanvas!: ElementRef;

  constructor(private _snackbar: MatSnackBar) {}

  onFileSelected(event: any): void {
    var reader = new FileReader();
    this.imageFile = event.target.files[0]

    console.log(event.target.files[0])
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.fileString = reader.result;

      if (this.fileString) {
        this._snackbar.open('Image Uploaded!', 'DISCARD');
      }
    };
  }

  save(img: any) {
    saveAs(img, 'output.jpg');
  }

  cancel() {}
}
