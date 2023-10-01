import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})
export class MaiorIdadeDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const yearInput = parseInt(control.value?.split("-")[0]);
    const minYear = new Date().getFullYear() - 18;
    const isOverAge = yearInput <= minYear;

    return isOverAge
      ? null
      : {
          maiorIdadeValidator: true,
        };
  }
  constructor() {}
}
