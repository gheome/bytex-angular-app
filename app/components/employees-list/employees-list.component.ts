import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"]
})
export class EmployeesListComponent implements OnInit {
  json: any;
  public employees;
  public id: any;
  name = "Alex";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
  constructor(public _employeeService: EmployeesService, public router: Router) {}

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(result => this.employees = result.data);
  }

  logId(event){
    this.router.navigate(['/employee'], { queryParams: {id: event} });
  }

  



}
