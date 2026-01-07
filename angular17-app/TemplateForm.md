# Template Form 

-  Open template form with modal
``` html

  <div class=" d-flex justify-content-end align-items-center  border-bottom-0 mt-2">
    <button class="btn btn-primary add-user-btn" (click)="openAddUser()">
      <i class="bi bi-person-plus me-1"></i> Add User
    </button>
  </div>

<div class="modal" id="userModal" #userModal>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add User</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="closeModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <label for="">Name</label>
              <input type="text" name="" id="" class="form-control" placeholder="name" [(ngModel)]="userObj.name">
            </div>
            <div class="col-lg-6">
              <label for="">Email</label>
              <input type="text" name="" id="" class="form-control" placeholder="Email" [(ngModel)]="userObj.email">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label for="">City</label>
              <input type="text" name="" id="" class="form-control" placeholder="City" [(ngModel)]="userObj.city">
            </div>
            <div class="col-lg-6">
              <label for="">State</label>
              <input type="text" name="" id="" class="form-control" placeholder="State" [(ngModel)]="userObj.state">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label for="">Pincode</label>
              <input type="text" name="" id="" class="form-control" placeholder="pincode" [(ngModel)]="userObj.pincode">
            </div>

          </div>
          <div class="row">
            <!-- <div class="col-lg-12"> -->
              <label for="">Address</label>
              <textarea name="address" id="" [(ngModel)]="userObj.address"></textarea>
            <!-- </div> -->

          </div>
        </div>
        <div class="modal-footer">
          @if(userObj.id==0)
          {

            <button type="button" class="btn btn-primary" (click)="onSubmit()">Submit</button>
          }
          @else{
            <button type="button" class="btn btn-success" (click)="updateUser()">Edit</button>

          }
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
```

``` javascript
@ViewChild('userModal') usermodal: ElementRef | undefined;
 openAddUser() {
    const modal = document.getElementById('userModal');
    console.log(modal);
    if (modal) {
      modal.style.display = 'block';
    }
  }
```

- Template Form Validation
- added form with reference variable #userForm="ngForm" 
- if used form tag then need to add name attribute to each and everty field
- change type button to submit of form submit button

``` html
<div class="modal" id="userModal" #userModal>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add User</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="closeModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form #userForm="ngForm" >
            <div class="row">
            <div class="col-lg-6">
              <label for="">Name</label>
              <input type="text"  id="" name="username" class="form-control" minlength="3"  #name="ngModel" placeholder="name" [(ngModel)]="userObj.name" required>
              <div class="text-danger" *ngIf="name.invalid &&(name.touched || name.dirty) ||showError">
                <!-- {{name.errors |json}} -->
                <span *ngIf="name.errors?.['required']">This is required</span>
                <span *ngIf="name.errors?.['minlength']"> 3 char is needed</span>
              </div>
            </div>
            <div class="col-lg-6">
              <label for="">Email</label>
              <input type="text" name="email" id="" class="form-control" #email="ngModel" placeholder="Email" [(ngModel)]="userObj.email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required>
                <div class="text-danger" *ngIf="email.invalid &&(email.touched || email.dirty) || showError">
                  <span *ngIf="email.errors?.['required']">Email is required</span>
                  <span *ngIf="email.errors?.['pattern']">Enter Proper email id</span>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label for="">City</label>
              <input type="text" name="city" id="" class="form-control" placeholder="City" [(ngModel)]="userObj.city">
            </div>
            <div class="col-lg-6">
              <label for="">State</label>
              <input type="text" name="state" id="" class="form-control" placeholder="State" [(ngModel)]="userObj.state">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <label for="">Pincode</label>
              <input type="text" name="pincode" id="" class="form-control" placeholder="pincode" [(ngModel)]="userObj.pincode">
            </div>

          </div>
          <div class="row">
            <!-- <div class="col-lg-12"> -->
              <label for="">Address</label>
              <textarea name="address" id="" [(ngModel)]="userObj.address"></textarea>
            <!-- </div> -->

          </div>
          </form>
        </div>
        <div class="modal-footer">
          @if(userObj.id==0)
          {

            <button type="submit" class="btn btn-primary" (click)="userForm.valid?onSubmit(userForm):showError=true;">Submit</button>
          }
          @else{
            <button type="button" class="btn btn-success" (click)="updateUser()">Edit</button>

          }
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
```