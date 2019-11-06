import { Left, Right } from "./either";

export const tryCatch = <T>(f: () => any) => {
  try {
    return Right<T>(f());
  } catch (err) {
    return Left<Error>(err);
  }
};
