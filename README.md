# Angular_Pratice
# Template form with modal without form tag

```html
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
