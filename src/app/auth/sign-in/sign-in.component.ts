import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent implements OnInit {
  private fb = inject(FormBuilder);

  readonly formGroup: FormGroup = this.fb.group({
    // email: this.fb.control(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
