import { CommonModule } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-temp-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-error.component.html',
  styleUrl: './temp-error.component.css'
})
export class TempErrorComponent {

  @Input() controlName!: NgModel;
  @Input() label: String = 'This Field';
  @Input() showError = false;

  alertMessage = input<string>('')
  closeAlert = output<void>();


  // isShowError(): boolean | null {
  //   return this.controlName.invalid && (this.controlName.touched || this.controlName.dirty || this.showError)
  // }
  isShowError(): boolean {
    return !!(
      this.controlName?.invalid &&
      (this.controlName?.touched ||
        this.controlName?.dirty ||
        this.showError)
    );
  }
  onClose() {

    this.closeAlert.emit();
  }
  get errorMessage() {
    if (!this.controlName) return null;
    if (!this.controlName.errors?.['required']) {
      return null
    }

    if (this.controlName.errors?.['required']) {
      return `${this.label} is required`
    }

    if (this.controlName.errors?.['minLength']) {
      const required = this.controlName.errors?.['minLength'].requiredLength;
      return `${this.label} must be at least ${required} characters`;
    }

    if (this.controlName.errors?.['pattern']) {
      return `Enter valid ${this.label.toLowerCase()}`
    }
    return null;
  }
}

