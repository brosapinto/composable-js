import { Left, Right } from "./either";

export const fromNil = <T>(val?: T | null) =>
  val == null ? Left(val) : Right<T>(val!);
