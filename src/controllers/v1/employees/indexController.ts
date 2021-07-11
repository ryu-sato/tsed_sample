import {Controller, Get, Post, Patch, PathParams, BodyParams } from "@tsed/common";
import {Inject} from "@tsed/di";
import { Groups,Summary, Returns } from "@tsed/schema";
import { EmployeeModel } from "../../../models/EmployeeModel";
// import {Employee} from "@prisma/client";

import { PrismaService } from "../../../services/PrismaService";

@Controller("/employees")
export class EmployeesCtrl {
  @Inject()
  protected prisma: PrismaService;

  @Get("/")
  @(Returns(200, Array).Of(EmployeeModel))
  async index() {
    return this.prisma.employee.findMany();
  }

  @Get("/:id")
  @Summary("Return a employee by his id")
  @Returns(200, EmployeeModel)
  async show(@PathParams("id") id: number) {
    return this.prisma.employee.findUnique({where: {id}});
  }

  @Post("/")
  @Summary("Create a new employee")
  @Returns(201, EmployeeModel)
  async create(@BodyParams() @Groups("creation") employee: EmployeeModel) {
    return this.prisma.employee.create({data: employee});
  }

  @Patch("/:id")
  @Summary("Update a employee")
  @Returns(201, EmployeeModel)
  async update(@PathParams("id") id: number, @BodyParams() @Groups("creation") employee: EmployeeModel) {
    return this.prisma.employee.update({where: {id}, data: employee});
  }
}
