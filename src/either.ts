type Fn<T> = (val: T) => any;

export interface ILeft<T> {
  map: () => ILeft<T>;
  chain: () => ILeft<T>;
  fold: (f: Fn<T>) => any;
}

export interface IRight<T> {
  map: (f: Fn<T>) => IRight<any>;
  chain: (f: Fn<T>) => any;
  fold: (f: Fn<T>, g: Fn<T>) => any;
}

export const Left = <T>(val: T): ILeft<T> => ({
  map: () => Left(val),
  chain: () => Left(val),
  fold: f => f(val)
});

export const Right = <T>(val: T): IRight<T> => ({
  map: f => Right(f(val)),
  chain: f => f(val),
  fold: (f, g = i => i) => g(val)
});

export type Either<T> = IRight<T> | ILeft<T>;

Right(1)
  .chain(x => Right(x + 1))
  .fold(x => console.log(x), y => console.log(y));
