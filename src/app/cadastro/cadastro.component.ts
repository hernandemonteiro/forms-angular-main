import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../services/consulta-cep/consulta-cep.service";
import { ConsultaCep } from "../interfaces/ConsultaCep";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private cepService: ConsultaCepService) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["sucesso"]);
    } else {
      Object.keys(form.controls).map((input) => {
        form.controls?.[input]?.markAsTouched();
      });
    }
  }

  consultaCEP(event: any, form: NgForm): void {
    const cep = event.target.value;
    if (form.controls?.["cep"]?.valid) {
      this.cepService.getConsultaCep(cep).subscribe((cepInfos) => {
        if (cepInfos.erro) {
          form.controls?.["cep"]?.setErrors({
            api: true,
          });
          return;
        }
        this.completeAdressFormInputs(cepInfos, form);
      });
    }
  }

  private completeAdressFormInputs(dados: ConsultaCep, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      bairro: dados.bairro,
      complemento: dados.complemento,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
