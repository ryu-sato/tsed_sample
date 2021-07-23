import { Prisma, Employee } from "@prisma/client";
import { Controller, Get, Post, Patch, Delete, PathParams, BodyParams } from "@tsed/common";
import { Inject } from "@tsed/di";
import { Summary, Returns } from "@tsed/schema";
import { EmployeeModel } from "../../../models/EmployeeModel";
import { PrismaService } from "../../../services/PrismaService";

@Controller("/employees")
export class EmployeesCtrl {
  @Inject()
  protected prisma: PrismaService;

  @Get("/")
  @(Returns(200, Array).Of(EmployeeModel))
  async index(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  @Get("/:id")
  @Summary("Return a employee by his id")
  @Returns(200, EmployeeModel)
  async show(@PathParams("id") id: number): Promise<Employee | null> {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  @Post("/")
  @Summary("Create a new employee")
  @Returns(201, EmployeeModel)
  async create(@BodyParams() employee: Prisma.EmployeeCreateInput): Promise<Employee> {
    return this.prisma.employee.create({ data: employee });
  }

  @Patch("/:id")
  @Summary("Update a employee")
  @Returns(206, EmployeeModel)
  async update(@PathParams("id") id: number, @BodyParams() employee: Prisma.EmployeeUpdateArgs): Promise<Employee> {
    return this.prisma.employee.update({ where: { id }, data: employee });
  }

  @Delete("/:id")
  @Summary("Delete a employee")
  @Returns(200, EmployeeModel)
  async delete(@PathParams("id") id: number): Promise<Employee> {
    return this.prisma.employee.delete({ where: { id } });
  }
}
