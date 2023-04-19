import { RepoErrorCode } from '../result/base/BaseResult';
export default class BaseResponse {
  private headers: { [key: string]: string } = {};
  private statusCode: RepoErrorCode;

  constructor(private readonly body: any) {
    this.body = body;
  }

  public setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  public setStatus(statusCode: RepoErrorCode): void {
    this.statusCode = statusCode;
  }

  public build(): any {
    return {
      statusCode: Number(this.statusCode),
      body: this.body,
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
    };
  }
}
