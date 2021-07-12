import {
  Default,
  Enum,
  Format,
  MaxLength,
  MinLength,
  Required
} from "@tsed/schema";

enum Genders {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}

export class EmployeeModel {
  @Required()
  id: string;

  @Enum(Genders)
  gender: string;

  @Required()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @Format("date-time")
  birthday: Date = new Date();

  @Required()
  @MinLength(1)
  @MaxLength(50)
  department: string;

  @Required()
  payment = +Number(0);

  @Format("date-time")
  @Default(Date.now)
  createdAt: Date = new Date();
}