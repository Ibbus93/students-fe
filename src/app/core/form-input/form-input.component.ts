import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <p [formGroup]="group">
      <label for="{{attributeName}}">{{label}}</label>
      <input
        type="{{type}}"
        id="{{attributeName}}"
        class="form-control"
        formControlName="{{attributeName}}"
        placeholder="{{placeholder}}"
        maxlength="{{maxLength}}"
        min="{{minValue}}"
        max="{{maxValue}}"
      />
    </p>
  `,
})

export class FormInputComponent {
  @Input() group: FormGroup;
  @Input() attributeName: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type: string;

  @Input() dimensionClass: string;

  @Input() minValue;
  @Input() maxValue;
  @Input() maxLength;

  @HostBinding('class') @Input('class') classList = '';

}
