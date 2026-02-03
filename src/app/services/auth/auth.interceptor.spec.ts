import { TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { AuthInterceptor } from "./auth.interceptor";

describe("AuthInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthInterceptor],
    }),
  );

  it("should be created", () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).to.exist;
  });
});
