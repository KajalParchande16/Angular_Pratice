import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../shared/model/bucket';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {
  bucketList$:Observable<Bucket[]>=new Observable();
  constructor(private store:Store<{bucket:Bucket[]}>)
  {
    this.bucketList$=store.pipe(select('bucket'));
  }

}
