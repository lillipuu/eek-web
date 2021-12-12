import {config} from './config';
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-dependency-injection';
import * as qs from 'querystringify';
import {status, parseError} from './serviceHelper';

@inject(HttpClient)
export class ApiService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  setHeaders() {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);
  }

  get(path: string, params?: object) {
    const options = {
      method: 'GET',
      headers: this.setHeaders()
    };
    return this.http.fetch(`${config.api_url}${path}?${qs.stringify(params)}`,options)
      .then(status)
      .catch(parseError)
  }

}
