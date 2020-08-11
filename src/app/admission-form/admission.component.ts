import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
    selector: 'admission',
    templateUrl: './admission.component.html',
    styleUrls: ['./admission.component.css']
})

export class AdmissionComponent implements OnInit{
    admissionForm: FormGroup;  
    isSubmitted: boolean = false;  

    constructor(private forms: FormBuilder) {
        this.admissionForm = this.forms.group({
            name: new FormControl('', [  
                Validators.maxLength(20),  
                Validators.pattern("^[a-zA-Z]+$") ]), 
            
            lastname: new FormControl('', [  
                Validators.maxLength(20),  
                Validators.pattern("^[a-zA-Z]+$") ]), 

            class: new FormControl('', [Validators.pattern("^[a-zA-Z0-9]+$") ]),
            year: new FormControl('', [
                this.YearValidator, 
                Validators.pattern("^[0-9]+$") ]),
            marks: new FormControl('', [Validators.pattern("^[0-9]+$") ])
        })
        
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        this.isSubmitted = true
        if (this.admissionForm.valid ) {
           window.alert('Data submitted successfully!')
           console.log(this.admissionForm.value);
        }
    }

    YearValidator(control: AbstractControl): {[key: string]: any} | null  {
        if (control.value && control.value > 2017) {
          return { 'isYearValid': true };
        }
        return null;
      }

}
