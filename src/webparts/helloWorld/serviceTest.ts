import { ServiceScope } from "@microsoft/sp-core-library";
import { SPHttpClient } from "@microsoft/sp-http";

export default class TestService {
  private _spHttpClient: SPHttpClient;
  private _setupCompleted: boolean;

  constructor(serviceScope: ServiceScope) {

    this._setupCompleted = false;

    serviceScope.whenFinished(() => {
      this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);
    });

  }

  public test(): void {
    if (this._setupCompleted || this._spHttpClient.isNavigate) {
      console.log("test");
    }
  }
}
