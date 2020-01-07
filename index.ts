import { DeepOmit } from "ts-essentials";

type Test = {
  id: string;
  age: number;
  name?: string;
};

type OmittedTest = DeepOmit<Test, { age: never }>;

const test = { id: "asd" };

const checkTest: OmittedTest = test;
