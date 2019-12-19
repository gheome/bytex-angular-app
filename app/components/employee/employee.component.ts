import { Component, OnInit, AfterContentInit } from "@angular/core";
import { EmployeesService } from "src/app/services/employees.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  public id: any;
  public employee: any;
  public params: any;
  canShow: boolean = false;

  constructor(
    public _employeeService: EmployeesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });

    this._employeeService.getEmployee(this.id).subscribe(result => {
      this.employee = result;
      this.canShow = true;
    });
  }
}
