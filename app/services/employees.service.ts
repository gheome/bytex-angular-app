import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEmployee } from "../interfaces/employee";
@Injectable()
export class EmployeesService {
  constructor(public http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(
      "https://n161.tech/api/dummyapi/user?limit=5&page=1");
  }

  getEmployee(id): Observable<any> {
    let url = "https://n161.tech/api/dummyapi/user/" + id;
    return this.http.get<any>(url);
  }
}
