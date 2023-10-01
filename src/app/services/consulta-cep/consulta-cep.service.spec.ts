import { TestBed } from "@angular/core/testing";

import { ConsultaCepService } from "./consulta-cep.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ConsultaCepService", () => {
  let service: ConsultaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCepService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsultaCepService);
  });

  // it("should be created", () => {
  //   expect(service).toBeTruthy();
  // });

  it("call api get", () => {
    service
      .getConsultaCep("83413633")
      .subscribe((cepInfos) => console.info("cepInfos"));
  });
});
