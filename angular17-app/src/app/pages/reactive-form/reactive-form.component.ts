import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, NgSelectModule, ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  jobTypes = ['Full-time', 'Part-time', 'Contractor', 'Intern'];

  constructor() {
    this.adNewContact();
    this.applicationForm.valueChanges.subscribe(()=>{
      // debugger;
      const formValue=this.applicationForm.value;
      debugger;
      const {fName,mName,lName,}=formValue;
      const fullName=fName + " "+ mName +" "+ lName;
      // this.applicationForm.controls['fullName'].setValue(fullName);
      // if we change direct control values form then it will goes to dead loop
      // so need to set emitEvent
      this.applicationForm.patchValue({fullName:fullName},{emitEvent:false});

      // patchValue is used to update particular fields
      // setvalue used to set whle form controls =>reset form

    })
  }
  personal = {
    firstName: '',
    middleName: '',
    lastName: '',
    fullName: ''
  };

  job = {
    isWorking: true,
    jobType: '',
    ownBusiness: false,
    businessName: '',
    businessType: '',
    annualIncome: '',
    company: '',
    position: '',
    salary: ''
  };

  contact = {
    personalEmail: '',
    officialEmail: '',
    mobileNumbers: ['']
  };


  applicationForm: FormGroup = new FormGroup({
    fName: new FormControl(""),
    mName: new FormControl(""),
    lName: new FormControl(""),
    fullName: new FormControl(""),
    isWorking: new FormControl("No"),
    jobType: new FormControl(""),
    isOwnBusiness: new FormControl(""),
    companyDetails: new FormGroup({
      companyName: new FormControl(""),
      position: new FormControl(""),
      salary: new FormControl(""),
    }),
    businessDetails: new FormGroup({
      businessName: new FormControl(""),
      businessType: new FormControl(""),
      anualIncome: new FormControl(""),
    }),
    personalEmail: new FormControl(""),
    businessEmail: new FormControl(""),
    contactList: new FormArray([]),
    loanList: new FormArray([])
  })

  adNewContact() {
    const contactForm = new FormGroup({
      contactNo: new FormControl("")
    });
    this.contacts.push(contactForm);
  }
  get contacts(): FormArray {
    return this.applicationForm.controls['contactList'] as FormArray
  }
  // updateFullName() {
  //   this.personal.fullName = [this.personal.firstName, this.personal.middleName, this.personal.lastName]
  //     .filter(Boolean)
  //     .join(' ');
  // }

  addMobile() {
    this.contact.mobileNumbers.push('');
  }

  removeMobile(index: number) {
    // if (this.contact.mobileNumbers.length > 1) {
    //   this.contact.mobileNumbers.splice(index, 1);
    // }
    this.contacts.removeAt(index);
  }

}
