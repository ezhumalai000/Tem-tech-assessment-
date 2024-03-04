import {
    Component
} from '@angular/core';

import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms '; import {
    FirebaseStorageService
} from'./firebase -storage . service';

@Component ({

    selector: 'my-app,

    templateUrl: './app. component . html'

    styleUrls: [./app. component .scss J

    })

    export class AppComponent {

        public files Form = new FormGroup({
            file: new FormControl (null, Validators . required),

            public files = J;

            constructor (private firebaseStorage: FirebaseStorageService)
        }

            onInit() {}
            public sendForm () {
                if (this.files == []) {

                    return;

                }

                console. log(this. files);

                this. files . map (file => {



                    const tarea = this. firebaseStorage. tareaCloudStorage (file . name, file);
                )
                }
                public getDataImage (event) {
                    console.log(event); this.files . push (event);

                }