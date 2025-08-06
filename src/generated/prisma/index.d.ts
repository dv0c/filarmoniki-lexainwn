
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Students
 * 
 */
export type Students = $Result.DefaultSelection<Prisma.$StudentsPayload>
/**
 * Model Instruments
 * 
 */
export type Instruments = $Result.DefaultSelection<Prisma.$InstrumentsPayload>
/**
 * Model Charges
 * 
 */
export type Charges = $Result.DefaultSelection<Prisma.$ChargesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.students.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.students.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.students`: Exposes CRUD operations for the **Students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.StudentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instruments`: Exposes CRUD operations for the **Instruments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instruments.findMany()
    * ```
    */
  get instruments(): Prisma.InstrumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charges`: Exposes CRUD operations for the **Charges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charges
    * const charges = await prisma.charges.findMany()
    * ```
    */
  get charges(): Prisma.ChargesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Students: 'Students',
    Instruments: 'Instruments',
    Charges: 'Charges'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "students" | "instruments" | "charges"
      txIsolationLevel: never
    }
    model: {
      Students: {
        payload: Prisma.$StudentsPayload<ExtArgs>
        fields: Prisma.StudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findFirst: {
            args: Prisma.StudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findMany: {
            args: Prisma.StudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          create: {
            args: Prisma.StudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          createMany: {
            args: Prisma.StudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          update: {
            args: Prisma.StudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          deleteMany: {
            args: Prisma.StudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.StudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      Instruments: {
        payload: Prisma.$InstrumentsPayload<ExtArgs>
        fields: Prisma.InstrumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          findFirst: {
            args: Prisma.InstrumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          findMany: {
            args: Prisma.InstrumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>[]
          }
          create: {
            args: Prisma.InstrumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          createMany: {
            args: Prisma.InstrumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InstrumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          update: {
            args: Prisma.InstrumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InstrumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentsPayload>
          }
          aggregate: {
            args: Prisma.InstrumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstruments>
          }
          groupBy: {
            args: Prisma.InstrumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InstrumentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InstrumentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InstrumentsCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsCountAggregateOutputType> | number
          }
        }
      }
      Charges: {
        payload: Prisma.$ChargesPayload<ExtArgs>
        fields: Prisma.ChargesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          findFirst: {
            args: Prisma.ChargesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          findMany: {
            args: Prisma.ChargesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>[]
          }
          create: {
            args: Prisma.ChargesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          createMany: {
            args: Prisma.ChargesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChargesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          update: {
            args: Prisma.ChargesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          deleteMany: {
            args: Prisma.ChargesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChargesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargesPayload>
          }
          aggregate: {
            args: Prisma.ChargesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharges>
          }
          groupBy: {
            args: Prisma.ChargesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChargesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChargesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChargesCountArgs<ExtArgs>
            result: $Utils.Optional<ChargesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    students?: StudentsOmit
    instruments?: InstrumentsOmit
    charges?: ChargesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    charges: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | StudentsCountOutputTypeCountChargesArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargesWhereInput
  }


  /**
   * Count Type InstrumentsCountOutputType
   */

  export type InstrumentsCountOutputType = {
    charges: number
  }

  export type InstrumentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | InstrumentsCountOutputTypeCountChargesArgs
  }

  // Custom InputTypes
  /**
   * InstrumentsCountOutputType without action
   */
  export type InstrumentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentsCountOutputType
     */
    select?: InstrumentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentsCountOutputType without action
   */
  export type InstrumentsCountOutputTypeCountChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    address: string | null
    phoneNumber: string | null
    hasUniform: boolean | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    address: string | null
    phoneNumber: string | null
    hasUniform: boolean | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    address: number
    phoneNumber: number
    hasUniform: number
    _all: number
  }


  export type StudentsMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phoneNumber?: true
    hasUniform?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phoneNumber?: true
    hasUniform?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phoneNumber?: true
    hasUniform?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to aggregate.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithAggregationInput | StudentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: StudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type StudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    phoneNumber?: boolean
    hasUniform?: boolean
    charges?: boolean | Students$chargesArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>



  export type StudentsSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    phoneNumber?: boolean
    hasUniform?: boolean
  }

  export type StudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "address" | "phoneNumber" | "hasUniform", ExtArgs["result"]["students"]>
  export type StudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | Students$chargesArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Students"
    objects: {
      charges: Prisma.$ChargesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      address: string
      phoneNumber: string
      hasUniform: boolean
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type StudentsGetPayload<S extends boolean | null | undefined | StudentsDefaultArgs> = $Result.GetResult<Prisma.$StudentsPayload, S>

  type StudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface StudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Students'], meta: { name: 'Students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {StudentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentsFindUniqueArgs>(args: SelectSubset<T, StudentsFindUniqueArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentsFindFirstArgs>(args?: SelectSubset<T, StudentsFindFirstArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentsFindManyArgs>(args?: SelectSubset<T, StudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {StudentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends StudentsCreateArgs>(args: SelectSubset<T, StudentsCreateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentsCreateManyArgs>(args?: SelectSubset<T, StudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {StudentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends StudentsDeleteArgs>(args: SelectSubset<T, StudentsDeleteArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {StudentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentsUpdateArgs>(args: SelectSubset<T, StudentsUpdateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentsDeleteManyArgs>(args?: SelectSubset<T, StudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentsUpdateManyArgs>(args: SelectSubset<T, StudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {StudentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends StudentsUpsertArgs>(args: SelectSubset<T, StudentsUpsertArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const students = await prisma.students.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Students.
     * @param {StudentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const students = await prisma.students.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentsCountArgs>(
      args?: Subset<T, StudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Students model
   */
  readonly fields: StudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charges<T extends Students$chargesArgs<ExtArgs> = {}>(args?: Subset<T, Students$chargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Students model
   */
  interface StudentsFieldRefs {
    readonly id: FieldRef<"Students", 'String'>
    readonly firstName: FieldRef<"Students", 'String'>
    readonly lastName: FieldRef<"Students", 'String'>
    readonly address: FieldRef<"Students", 'String'>
    readonly phoneNumber: FieldRef<"Students", 'String'>
    readonly hasUniform: FieldRef<"Students", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Students findUnique
   */
  export type StudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findUniqueOrThrow
   */
  export type StudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findFirst
   */
  export type StudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findFirstOrThrow
   */
  export type StudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findMany
   */
  export type StudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students create
   */
  export type StudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Students.
     */
    data: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
  }

  /**
   * Students createMany
   */
  export type StudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
  }

  /**
   * Students update
   */
  export type StudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Students.
     */
    data: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
    /**
     * Choose, which Students to update.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students updateMany
   */
  export type StudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students upsert
   */
  export type StudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Students to update in case it exists.
     */
    where: StudentsWhereUniqueInput
    /**
     * In case the Students found by the `where` argument doesn't exist, create a new Students with this data.
     */
    create: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
    /**
     * In case the Students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
  }

  /**
   * Students delete
   */
  export type StudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter which Students to delete.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students deleteMany
   */
  export type StudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Students findRaw
   */
  export type StudentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Students aggregateRaw
   */
  export type StudentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Students.charges
   */
  export type Students$chargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    where?: ChargesWhereInput
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    cursor?: ChargesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargesScalarFieldEnum | ChargesScalarFieldEnum[]
  }

  /**
   * Students without action
   */
  export type StudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
  }


  /**
   * Model Instruments
   */

  export type AggregateInstruments = {
    _count: InstrumentsCountAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  export type InstrumentsMinAggregateOutputType = {
    id: string | null
    barcode: string | null
    instrumentType: string | null
    brand: string | null
    status: string | null
    comments: string | null
  }

  export type InstrumentsMaxAggregateOutputType = {
    id: string | null
    barcode: string | null
    instrumentType: string | null
    brand: string | null
    status: string | null
    comments: string | null
  }

  export type InstrumentsCountAggregateOutputType = {
    id: number
    barcode: number
    instrumentType: number
    brand: number
    status: number
    comments: number
    _all: number
  }


  export type InstrumentsMinAggregateInputType = {
    id?: true
    barcode?: true
    instrumentType?: true
    brand?: true
    status?: true
    comments?: true
  }

  export type InstrumentsMaxAggregateInputType = {
    id?: true
    barcode?: true
    instrumentType?: true
    brand?: true
    status?: true
    comments?: true
  }

  export type InstrumentsCountAggregateInputType = {
    id?: true
    barcode?: true
    instrumentType?: true
    brand?: true
    status?: true
    comments?: true
    _all?: true
  }

  export type InstrumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to aggregate.
     */
    where?: InstrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentsOrderByWithRelationInput | InstrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentsMaxAggregateInputType
  }

  export type GetInstrumentsAggregateType<T extends InstrumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstruments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstruments[P]>
      : GetScalarType<T[P], AggregateInstruments[P]>
  }




  export type InstrumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentsWhereInput
    orderBy?: InstrumentsOrderByWithAggregationInput | InstrumentsOrderByWithAggregationInput[]
    by: InstrumentsScalarFieldEnum[] | InstrumentsScalarFieldEnum
    having?: InstrumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentsCountAggregateInputType | true
    _min?: InstrumentsMinAggregateInputType
    _max?: InstrumentsMaxAggregateInputType
  }

  export type InstrumentsGroupByOutputType = {
    id: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments: string | null
    _count: InstrumentsCountAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  type GetInstrumentsGroupByPayload<T extends InstrumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    instrumentType?: boolean
    brand?: boolean
    status?: boolean
    comments?: boolean
    charges?: boolean | Instruments$chargesArgs<ExtArgs>
    _count?: boolean | InstrumentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruments"]>



  export type InstrumentsSelectScalar = {
    id?: boolean
    barcode?: boolean
    instrumentType?: boolean
    brand?: boolean
    status?: boolean
    comments?: boolean
  }

  export type InstrumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barcode" | "instrumentType" | "brand" | "status" | "comments", ExtArgs["result"]["instruments"]>
  export type InstrumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | Instruments$chargesArgs<ExtArgs>
    _count?: boolean | InstrumentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InstrumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instruments"
    objects: {
      charges: Prisma.$ChargesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barcode: string
      instrumentType: string
      brand: string
      status: string
      comments: string | null
    }, ExtArgs["result"]["instruments"]>
    composites: {}
  }

  type InstrumentsGetPayload<S extends boolean | null | undefined | InstrumentsDefaultArgs> = $Result.GetResult<Prisma.$InstrumentsPayload, S>

  type InstrumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentsCountAggregateInputType | true
    }

  export interface InstrumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instruments'], meta: { name: 'Instruments' } }
    /**
     * Find zero or one Instruments that matches the filter.
     * @param {InstrumentsFindUniqueArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentsFindUniqueArgs>(args: SelectSubset<T, InstrumentsFindUniqueArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instruments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentsFindUniqueOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsFindFirstArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentsFindFirstArgs>(args?: SelectSubset<T, InstrumentsFindFirstArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsFindFirstOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instruments.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instruments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentsFindManyArgs>(args?: SelectSubset<T, InstrumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instruments.
     * @param {InstrumentsCreateArgs} args - Arguments to create a Instruments.
     * @example
     * // Create one Instruments
     * const Instruments = await prisma.instruments.create({
     *   data: {
     *     // ... data to create a Instruments
     *   }
     * })
     * 
     */
    create<T extends InstrumentsCreateArgs>(args: SelectSubset<T, InstrumentsCreateArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentsCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instruments = await prisma.instruments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentsCreateManyArgs>(args?: SelectSubset<T, InstrumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instruments.
     * @param {InstrumentsDeleteArgs} args - Arguments to delete one Instruments.
     * @example
     * // Delete one Instruments
     * const Instruments = await prisma.instruments.delete({
     *   where: {
     *     // ... filter to delete one Instruments
     *   }
     * })
     * 
     */
    delete<T extends InstrumentsDeleteArgs>(args: SelectSubset<T, InstrumentsDeleteArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instruments.
     * @param {InstrumentsUpdateArgs} args - Arguments to update one Instruments.
     * @example
     * // Update one Instruments
     * const instruments = await prisma.instruments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentsUpdateArgs>(args: SelectSubset<T, InstrumentsUpdateArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentsDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instruments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentsDeleteManyArgs>(args?: SelectSubset<T, InstrumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instruments = await prisma.instruments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentsUpdateManyArgs>(args: SelectSubset<T, InstrumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instruments.
     * @param {InstrumentsUpsertArgs} args - Arguments to update or create a Instruments.
     * @example
     * // Update or create a Instruments
     * const instruments = await prisma.instruments.upsert({
     *   create: {
     *     // ... data to create a Instruments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instruments we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentsUpsertArgs>(args: SelectSubset<T, InstrumentsUpsertArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * @param {InstrumentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const instruments = await prisma.instruments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InstrumentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Instruments.
     * @param {InstrumentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const instruments = await prisma.instruments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InstrumentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instruments.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentsCountArgs>(
      args?: Subset<T, InstrumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstrumentsAggregateArgs>(args: Subset<T, InstrumentsAggregateArgs>): Prisma.PrismaPromise<GetInstrumentsAggregateType<T>>

    /**
     * Group by Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstrumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentsGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstrumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instruments model
   */
  readonly fields: InstrumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instruments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charges<T extends Instruments$chargesArgs<ExtArgs> = {}>(args?: Subset<T, Instruments$chargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instruments model
   */
  interface InstrumentsFieldRefs {
    readonly id: FieldRef<"Instruments", 'String'>
    readonly barcode: FieldRef<"Instruments", 'String'>
    readonly instrumentType: FieldRef<"Instruments", 'String'>
    readonly brand: FieldRef<"Instruments", 'String'>
    readonly status: FieldRef<"Instruments", 'String'>
    readonly comments: FieldRef<"Instruments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instruments findUnique
   */
  export type InstrumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where: InstrumentsWhereUniqueInput
  }

  /**
   * Instruments findUniqueOrThrow
   */
  export type InstrumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where: InstrumentsWhereUniqueInput
  }

  /**
   * Instruments findFirst
   */
  export type InstrumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentsOrderByWithRelationInput | InstrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * Instruments findFirstOrThrow
   */
  export type InstrumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentsOrderByWithRelationInput | InstrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * Instruments findMany
   */
  export type InstrumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentsOrderByWithRelationInput | InstrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * Instruments create
   */
  export type InstrumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Instruments.
     */
    data: XOR<InstrumentsCreateInput, InstrumentsUncheckedCreateInput>
  }

  /**
   * Instruments createMany
   */
  export type InstrumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentsCreateManyInput | InstrumentsCreateManyInput[]
  }

  /**
   * Instruments update
   */
  export type InstrumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Instruments.
     */
    data: XOR<InstrumentsUpdateInput, InstrumentsUncheckedUpdateInput>
    /**
     * Choose, which Instruments to update.
     */
    where: InstrumentsWhereUniqueInput
  }

  /**
   * Instruments updateMany
   */
  export type InstrumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentsUpdateManyMutationInput, InstrumentsUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentsWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instruments upsert
   */
  export type InstrumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Instruments to update in case it exists.
     */
    where: InstrumentsWhereUniqueInput
    /**
     * In case the Instruments found by the `where` argument doesn't exist, create a new Instruments with this data.
     */
    create: XOR<InstrumentsCreateInput, InstrumentsUncheckedCreateInput>
    /**
     * In case the Instruments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentsUpdateInput, InstrumentsUncheckedUpdateInput>
  }

  /**
   * Instruments delete
   */
  export type InstrumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
    /**
     * Filter which Instruments to delete.
     */
    where: InstrumentsWhereUniqueInput
  }

  /**
   * Instruments deleteMany
   */
  export type InstrumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentsWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instruments findRaw
   */
  export type InstrumentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Instruments aggregateRaw
   */
  export type InstrumentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Instruments.charges
   */
  export type Instruments$chargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    where?: ChargesWhereInput
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    cursor?: ChargesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargesScalarFieldEnum | ChargesScalarFieldEnum[]
  }

  /**
   * Instruments without action
   */
  export type InstrumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruments
     */
    select?: InstrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruments
     */
    omit?: InstrumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentsInclude<ExtArgs> | null
  }


  /**
   * Model Charges
   */

  export type AggregateCharges = {
    _count: ChargesCountAggregateOutputType | null
    _avg: ChargesAvgAggregateOutputType | null
    _sum: ChargesSumAggregateOutputType | null
    _min: ChargesMinAggregateOutputType | null
    _max: ChargesMaxAggregateOutputType | null
  }

  export type ChargesAvgAggregateOutputType = {
    amount: number | null
  }

  export type ChargesSumAggregateOutputType = {
    amount: number | null
  }

  export type ChargesMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    instrumentId: string | null
    date: Date | null
    amount: number | null
  }

  export type ChargesMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    instrumentId: string | null
    date: Date | null
    amount: number | null
  }

  export type ChargesCountAggregateOutputType = {
    id: number
    studentId: number
    instrumentId: number
    date: number
    amount: number
    _all: number
  }


  export type ChargesAvgAggregateInputType = {
    amount?: true
  }

  export type ChargesSumAggregateInputType = {
    amount?: true
  }

  export type ChargesMinAggregateInputType = {
    id?: true
    studentId?: true
    instrumentId?: true
    date?: true
    amount?: true
  }

  export type ChargesMaxAggregateInputType = {
    id?: true
    studentId?: true
    instrumentId?: true
    date?: true
    amount?: true
  }

  export type ChargesCountAggregateInputType = {
    id?: true
    studentId?: true
    instrumentId?: true
    date?: true
    amount?: true
    _all?: true
  }

  export type ChargesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charges to aggregate.
     */
    where?: ChargesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charges
    **/
    _count?: true | ChargesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargesMaxAggregateInputType
  }

  export type GetChargesAggregateType<T extends ChargesAggregateArgs> = {
        [P in keyof T & keyof AggregateCharges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharges[P]>
      : GetScalarType<T[P], AggregateCharges[P]>
  }




  export type ChargesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargesWhereInput
    orderBy?: ChargesOrderByWithAggregationInput | ChargesOrderByWithAggregationInput[]
    by: ChargesScalarFieldEnum[] | ChargesScalarFieldEnum
    having?: ChargesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargesCountAggregateInputType | true
    _avg?: ChargesAvgAggregateInputType
    _sum?: ChargesSumAggregateInputType
    _min?: ChargesMinAggregateInputType
    _max?: ChargesMaxAggregateInputType
  }

  export type ChargesGroupByOutputType = {
    id: string
    studentId: string
    instrumentId: string
    date: Date
    amount: number | null
    _count: ChargesCountAggregateOutputType | null
    _avg: ChargesAvgAggregateOutputType | null
    _sum: ChargesSumAggregateOutputType | null
    _min: ChargesMinAggregateOutputType | null
    _max: ChargesMaxAggregateOutputType | null
  }

  type GetChargesGroupByPayload<T extends ChargesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargesGroupByOutputType[P]>
            : GetScalarType<T[P], ChargesGroupByOutputType[P]>
        }
      >
    >


  export type ChargesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    instrumentId?: boolean
    date?: boolean
    amount?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charges"]>



  export type ChargesSelectScalar = {
    id?: boolean
    studentId?: boolean
    instrumentId?: boolean
    date?: boolean
    amount?: boolean
  }

  export type ChargesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "instrumentId" | "date" | "amount", ExtArgs["result"]["charges"]>
  export type ChargesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentsDefaultArgs<ExtArgs>
  }

  export type $ChargesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charges"
    objects: {
      student: Prisma.$StudentsPayload<ExtArgs>
      instrument: Prisma.$InstrumentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      instrumentId: string
      date: Date
      amount: number | null
    }, ExtArgs["result"]["charges"]>
    composites: {}
  }

  type ChargesGetPayload<S extends boolean | null | undefined | ChargesDefaultArgs> = $Result.GetResult<Prisma.$ChargesPayload, S>

  type ChargesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargesCountAggregateInputType | true
    }

  export interface ChargesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charges'], meta: { name: 'Charges' } }
    /**
     * Find zero or one Charges that matches the filter.
     * @param {ChargesFindUniqueArgs} args - Arguments to find a Charges
     * @example
     * // Get one Charges
     * const charges = await prisma.charges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargesFindUniqueArgs>(args: SelectSubset<T, ChargesFindUniqueArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargesFindUniqueOrThrowArgs} args - Arguments to find a Charges
     * @example
     * // Get one Charges
     * const charges = await prisma.charges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargesFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesFindFirstArgs} args - Arguments to find a Charges
     * @example
     * // Get one Charges
     * const charges = await prisma.charges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargesFindFirstArgs>(args?: SelectSubset<T, ChargesFindFirstArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesFindFirstOrThrowArgs} args - Arguments to find a Charges
     * @example
     * // Get one Charges
     * const charges = await prisma.charges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargesFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charges
     * const charges = await prisma.charges.findMany()
     * 
     * // Get first 10 Charges
     * const charges = await prisma.charges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargesWithIdOnly = await prisma.charges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargesFindManyArgs>(args?: SelectSubset<T, ChargesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charges.
     * @param {ChargesCreateArgs} args - Arguments to create a Charges.
     * @example
     * // Create one Charges
     * const Charges = await prisma.charges.create({
     *   data: {
     *     // ... data to create a Charges
     *   }
     * })
     * 
     */
    create<T extends ChargesCreateArgs>(args: SelectSubset<T, ChargesCreateArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charges.
     * @param {ChargesCreateManyArgs} args - Arguments to create many Charges.
     * @example
     * // Create many Charges
     * const charges = await prisma.charges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargesCreateManyArgs>(args?: SelectSubset<T, ChargesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Charges.
     * @param {ChargesDeleteArgs} args - Arguments to delete one Charges.
     * @example
     * // Delete one Charges
     * const Charges = await prisma.charges.delete({
     *   where: {
     *     // ... filter to delete one Charges
     *   }
     * })
     * 
     */
    delete<T extends ChargesDeleteArgs>(args: SelectSubset<T, ChargesDeleteArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charges.
     * @param {ChargesUpdateArgs} args - Arguments to update one Charges.
     * @example
     * // Update one Charges
     * const charges = await prisma.charges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargesUpdateArgs>(args: SelectSubset<T, ChargesUpdateArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charges.
     * @param {ChargesDeleteManyArgs} args - Arguments to filter Charges to delete.
     * @example
     * // Delete a few Charges
     * const { count } = await prisma.charges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargesDeleteManyArgs>(args?: SelectSubset<T, ChargesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charges
     * const charges = await prisma.charges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargesUpdateManyArgs>(args: SelectSubset<T, ChargesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Charges.
     * @param {ChargesUpsertArgs} args - Arguments to update or create a Charges.
     * @example
     * // Update or create a Charges
     * const charges = await prisma.charges.upsert({
     *   create: {
     *     // ... data to create a Charges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charges we want to update
     *   }
     * })
     */
    upsert<T extends ChargesUpsertArgs>(args: SelectSubset<T, ChargesUpsertArgs<ExtArgs>>): Prisma__ChargesClient<$Result.GetResult<Prisma.$ChargesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charges that matches the filter.
     * @param {ChargesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const charges = await prisma.charges.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChargesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Charges.
     * @param {ChargesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const charges = await prisma.charges.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChargesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesCountArgs} args - Arguments to filter Charges to count.
     * @example
     * // Count the number of Charges
     * const count = await prisma.charges.count({
     *   where: {
     *     // ... the filter for the Charges we want to count
     *   }
     * })
    **/
    count<T extends ChargesCountArgs>(
      args?: Subset<T, ChargesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargesAggregateArgs>(args: Subset<T, ChargesAggregateArgs>): Prisma.PrismaPromise<GetChargesAggregateType<T>>

    /**
     * Group by Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargesGroupByArgs['orderBy'] }
        : { orderBy?: ChargesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charges model
   */
  readonly fields: ChargesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instrument<T extends InstrumentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentsDefaultArgs<ExtArgs>>): Prisma__InstrumentsClient<$Result.GetResult<Prisma.$InstrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charges model
   */
  interface ChargesFieldRefs {
    readonly id: FieldRef<"Charges", 'String'>
    readonly studentId: FieldRef<"Charges", 'String'>
    readonly instrumentId: FieldRef<"Charges", 'String'>
    readonly date: FieldRef<"Charges", 'DateTime'>
    readonly amount: FieldRef<"Charges", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Charges findUnique
   */
  export type ChargesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where: ChargesWhereUniqueInput
  }

  /**
   * Charges findUniqueOrThrow
   */
  export type ChargesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where: ChargesWhereUniqueInput
  }

  /**
   * Charges findFirst
   */
  export type ChargesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where?: ChargesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargesScalarFieldEnum | ChargesScalarFieldEnum[]
  }

  /**
   * Charges findFirstOrThrow
   */
  export type ChargesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where?: ChargesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargesScalarFieldEnum | ChargesScalarFieldEnum[]
  }

  /**
   * Charges findMany
   */
  export type ChargesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where?: ChargesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargesOrderByWithRelationInput | ChargesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charges.
     */
    cursor?: ChargesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    distinct?: ChargesScalarFieldEnum | ChargesScalarFieldEnum[]
  }

  /**
   * Charges create
   */
  export type ChargesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * The data needed to create a Charges.
     */
    data: XOR<ChargesCreateInput, ChargesUncheckedCreateInput>
  }

  /**
   * Charges createMany
   */
  export type ChargesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charges.
     */
    data: ChargesCreateManyInput | ChargesCreateManyInput[]
  }

  /**
   * Charges update
   */
  export type ChargesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * The data needed to update a Charges.
     */
    data: XOR<ChargesUpdateInput, ChargesUncheckedUpdateInput>
    /**
     * Choose, which Charges to update.
     */
    where: ChargesWhereUniqueInput
  }

  /**
   * Charges updateMany
   */
  export type ChargesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charges.
     */
    data: XOR<ChargesUpdateManyMutationInput, ChargesUncheckedUpdateManyInput>
    /**
     * Filter which Charges to update
     */
    where?: ChargesWhereInput
    /**
     * Limit how many Charges to update.
     */
    limit?: number
  }

  /**
   * Charges upsert
   */
  export type ChargesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * The filter to search for the Charges to update in case it exists.
     */
    where: ChargesWhereUniqueInput
    /**
     * In case the Charges found by the `where` argument doesn't exist, create a new Charges with this data.
     */
    create: XOR<ChargesCreateInput, ChargesUncheckedCreateInput>
    /**
     * In case the Charges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargesUpdateInput, ChargesUncheckedUpdateInput>
  }

  /**
   * Charges delete
   */
  export type ChargesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
    /**
     * Filter which Charges to delete.
     */
    where: ChargesWhereUniqueInput
  }

  /**
   * Charges deleteMany
   */
  export type ChargesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charges to delete
     */
    where?: ChargesWhereInput
    /**
     * Limit how many Charges to delete.
     */
    limit?: number
  }

  /**
   * Charges findRaw
   */
  export type ChargesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Charges aggregateRaw
   */
  export type ChargesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Charges without action
   */
  export type ChargesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charges
     */
    select?: ChargesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charges
     */
    omit?: ChargesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const StudentsScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    phoneNumber: 'phoneNumber',
    hasUniform: 'hasUniform'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const InstrumentsScalarFieldEnum: {
    id: 'id',
    barcode: 'barcode',
    instrumentType: 'instrumentType',
    brand: 'brand',
    status: 'status',
    comments: 'comments'
  };

  export type InstrumentsScalarFieldEnum = (typeof InstrumentsScalarFieldEnum)[keyof typeof InstrumentsScalarFieldEnum]


  export const ChargesScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    instrumentId: 'instrumentId',
    date: 'date',
    amount: 'amount'
  };

  export type ChargesScalarFieldEnum = (typeof ChargesScalarFieldEnum)[keyof typeof ChargesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentsWhereInput = {
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    id?: StringFilter<"Students"> | string
    firstName?: StringFilter<"Students"> | string
    lastName?: StringFilter<"Students"> | string
    address?: StringFilter<"Students"> | string
    phoneNumber?: StringFilter<"Students"> | string
    hasUniform?: BoolFilter<"Students"> | boolean
    charges?: ChargesListRelationFilter
  }

  export type StudentsOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    hasUniform?: SortOrder
    charges?: ChargesOrderByRelationAggregateInput
  }

  export type StudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    firstName?: StringFilter<"Students"> | string
    lastName?: StringFilter<"Students"> | string
    address?: StringFilter<"Students"> | string
    phoneNumber?: StringFilter<"Students"> | string
    hasUniform?: BoolFilter<"Students"> | boolean
    charges?: ChargesListRelationFilter
  }, "id">

  export type StudentsOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    hasUniform?: SortOrder
    _count?: StudentsCountOrderByAggregateInput
    _max?: StudentsMaxOrderByAggregateInput
    _min?: StudentsMinOrderByAggregateInput
  }

  export type StudentsScalarWhereWithAggregatesInput = {
    AND?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    OR?: StudentsScalarWhereWithAggregatesInput[]
    NOT?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Students"> | string
    firstName?: StringWithAggregatesFilter<"Students"> | string
    lastName?: StringWithAggregatesFilter<"Students"> | string
    address?: StringWithAggregatesFilter<"Students"> | string
    phoneNumber?: StringWithAggregatesFilter<"Students"> | string
    hasUniform?: BoolWithAggregatesFilter<"Students"> | boolean
  }

  export type InstrumentsWhereInput = {
    AND?: InstrumentsWhereInput | InstrumentsWhereInput[]
    OR?: InstrumentsWhereInput[]
    NOT?: InstrumentsWhereInput | InstrumentsWhereInput[]
    id?: StringFilter<"Instruments"> | string
    barcode?: StringFilter<"Instruments"> | string
    instrumentType?: StringFilter<"Instruments"> | string
    brand?: StringFilter<"Instruments"> | string
    status?: StringFilter<"Instruments"> | string
    comments?: StringNullableFilter<"Instruments"> | string | null
    charges?: ChargesListRelationFilter
  }

  export type InstrumentsOrderByWithRelationInput = {
    id?: SortOrder
    barcode?: SortOrder
    instrumentType?: SortOrder
    brand?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    charges?: ChargesOrderByRelationAggregateInput
  }

  export type InstrumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstrumentsWhereInput | InstrumentsWhereInput[]
    OR?: InstrumentsWhereInput[]
    NOT?: InstrumentsWhereInput | InstrumentsWhereInput[]
    barcode?: StringFilter<"Instruments"> | string
    instrumentType?: StringFilter<"Instruments"> | string
    brand?: StringFilter<"Instruments"> | string
    status?: StringFilter<"Instruments"> | string
    comments?: StringNullableFilter<"Instruments"> | string | null
    charges?: ChargesListRelationFilter
  }, "id">

  export type InstrumentsOrderByWithAggregationInput = {
    id?: SortOrder
    barcode?: SortOrder
    instrumentType?: SortOrder
    brand?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    _count?: InstrumentsCountOrderByAggregateInput
    _max?: InstrumentsMaxOrderByAggregateInput
    _min?: InstrumentsMinOrderByAggregateInput
  }

  export type InstrumentsScalarWhereWithAggregatesInput = {
    AND?: InstrumentsScalarWhereWithAggregatesInput | InstrumentsScalarWhereWithAggregatesInput[]
    OR?: InstrumentsScalarWhereWithAggregatesInput[]
    NOT?: InstrumentsScalarWhereWithAggregatesInput | InstrumentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instruments"> | string
    barcode?: StringWithAggregatesFilter<"Instruments"> | string
    instrumentType?: StringWithAggregatesFilter<"Instruments"> | string
    brand?: StringWithAggregatesFilter<"Instruments"> | string
    status?: StringWithAggregatesFilter<"Instruments"> | string
    comments?: StringNullableWithAggregatesFilter<"Instruments"> | string | null
  }

  export type ChargesWhereInput = {
    AND?: ChargesWhereInput | ChargesWhereInput[]
    OR?: ChargesWhereInput[]
    NOT?: ChargesWhereInput | ChargesWhereInput[]
    id?: StringFilter<"Charges"> | string
    studentId?: StringFilter<"Charges"> | string
    instrumentId?: StringFilter<"Charges"> | string
    date?: DateTimeFilter<"Charges"> | Date | string
    amount?: FloatNullableFilter<"Charges"> | number | null
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    instrument?: XOR<InstrumentsScalarRelationFilter, InstrumentsWhereInput>
  }

  export type ChargesOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    instrumentId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    student?: StudentsOrderByWithRelationInput
    instrument?: InstrumentsOrderByWithRelationInput
  }

  export type ChargesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargesWhereInput | ChargesWhereInput[]
    OR?: ChargesWhereInput[]
    NOT?: ChargesWhereInput | ChargesWhereInput[]
    studentId?: StringFilter<"Charges"> | string
    instrumentId?: StringFilter<"Charges"> | string
    date?: DateTimeFilter<"Charges"> | Date | string
    amount?: FloatNullableFilter<"Charges"> | number | null
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    instrument?: XOR<InstrumentsScalarRelationFilter, InstrumentsWhereInput>
  }, "id">

  export type ChargesOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    instrumentId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    _count?: ChargesCountOrderByAggregateInput
    _avg?: ChargesAvgOrderByAggregateInput
    _max?: ChargesMaxOrderByAggregateInput
    _min?: ChargesMinOrderByAggregateInput
    _sum?: ChargesSumOrderByAggregateInput
  }

  export type ChargesScalarWhereWithAggregatesInput = {
    AND?: ChargesScalarWhereWithAggregatesInput | ChargesScalarWhereWithAggregatesInput[]
    OR?: ChargesScalarWhereWithAggregatesInput[]
    NOT?: ChargesScalarWhereWithAggregatesInput | ChargesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charges"> | string
    studentId?: StringWithAggregatesFilter<"Charges"> | string
    instrumentId?: StringWithAggregatesFilter<"Charges"> | string
    date?: DateTimeWithAggregatesFilter<"Charges"> | Date | string
    amount?: FloatNullableWithAggregatesFilter<"Charges"> | number | null
  }

  export type StudentsCreateInput = {
    id?: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
    charges?: ChargesCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
    charges?: ChargesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
    charges?: ChargesUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
    charges?: ChargesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentsCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
  }

  export type StudentsUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentsUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstrumentsCreateInput = {
    id?: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments?: string | null
    charges?: ChargesCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentsUncheckedCreateInput = {
    id?: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments?: string | null
    charges?: ChargesUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentsUpdateInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: ChargesUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentsUncheckedUpdateInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: ChargesUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentsCreateManyInput = {
    id?: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments?: string | null
  }

  export type InstrumentsUpdateManyMutationInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentsUncheckedUpdateManyInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChargesCreateInput = {
    id?: string
    date?: Date | string
    amount?: number | null
    student: StudentsCreateNestedOneWithoutChargesInput
    instrument: InstrumentsCreateNestedOneWithoutChargesInput
  }

  export type ChargesUncheckedCreateInput = {
    id?: string
    studentId: string
    instrumentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    student?: StudentsUpdateOneRequiredWithoutChargesNestedInput
    instrument?: InstrumentsUpdateOneRequiredWithoutChargesNestedInput
  }

  export type ChargesUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChargesCreateManyInput = {
    id?: string
    studentId: string
    instrumentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChargesUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChargesListRelationFilter = {
    every?: ChargesWhereInput
    some?: ChargesWhereInput
    none?: ChargesWhereInput
  }

  export type ChargesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentsCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    hasUniform?: SortOrder
  }

  export type StudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    hasUniform?: SortOrder
  }

  export type StudentsMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    hasUniform?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type InstrumentsCountOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    instrumentType?: SortOrder
    brand?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type InstrumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    instrumentType?: SortOrder
    brand?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type InstrumentsMinOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    instrumentType?: SortOrder
    brand?: SortOrder
    status?: SortOrder
    comments?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StudentsScalarRelationFilter = {
    is?: StudentsWhereInput
    isNot?: StudentsWhereInput
  }

  export type InstrumentsScalarRelationFilter = {
    is?: InstrumentsWhereInput
    isNot?: InstrumentsWhereInput
  }

  export type ChargesCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    instrumentId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
  }

  export type ChargesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ChargesMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    instrumentId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
  }

  export type ChargesMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    instrumentId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
  }

  export type ChargesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ChargesCreateNestedManyWithoutStudentInput = {
    create?: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput> | ChargesCreateWithoutStudentInput[] | ChargesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutStudentInput | ChargesCreateOrConnectWithoutStudentInput[]
    createMany?: ChargesCreateManyStudentInputEnvelope
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
  }

  export type ChargesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput> | ChargesCreateWithoutStudentInput[] | ChargesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutStudentInput | ChargesCreateOrConnectWithoutStudentInput[]
    createMany?: ChargesCreateManyStudentInputEnvelope
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChargesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput> | ChargesCreateWithoutStudentInput[] | ChargesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutStudentInput | ChargesCreateOrConnectWithoutStudentInput[]
    upsert?: ChargesUpsertWithWhereUniqueWithoutStudentInput | ChargesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ChargesCreateManyStudentInputEnvelope
    set?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    disconnect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    delete?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    update?: ChargesUpdateWithWhereUniqueWithoutStudentInput | ChargesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ChargesUpdateManyWithWhereWithoutStudentInput | ChargesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
  }

  export type ChargesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput> | ChargesCreateWithoutStudentInput[] | ChargesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutStudentInput | ChargesCreateOrConnectWithoutStudentInput[]
    upsert?: ChargesUpsertWithWhereUniqueWithoutStudentInput | ChargesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ChargesCreateManyStudentInputEnvelope
    set?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    disconnect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    delete?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    update?: ChargesUpdateWithWhereUniqueWithoutStudentInput | ChargesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ChargesUpdateManyWithWhereWithoutStudentInput | ChargesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
  }

  export type ChargesCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput> | ChargesCreateWithoutInstrumentInput[] | ChargesUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutInstrumentInput | ChargesCreateOrConnectWithoutInstrumentInput[]
    createMany?: ChargesCreateManyInstrumentInputEnvelope
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
  }

  export type ChargesUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput> | ChargesCreateWithoutInstrumentInput[] | ChargesUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutInstrumentInput | ChargesCreateOrConnectWithoutInstrumentInput[]
    createMany?: ChargesCreateManyInstrumentInputEnvelope
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ChargesUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput> | ChargesCreateWithoutInstrumentInput[] | ChargesUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutInstrumentInput | ChargesCreateOrConnectWithoutInstrumentInput[]
    upsert?: ChargesUpsertWithWhereUniqueWithoutInstrumentInput | ChargesUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: ChargesCreateManyInstrumentInputEnvelope
    set?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    disconnect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    delete?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    update?: ChargesUpdateWithWhereUniqueWithoutInstrumentInput | ChargesUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: ChargesUpdateManyWithWhereWithoutInstrumentInput | ChargesUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
  }

  export type ChargesUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput> | ChargesCreateWithoutInstrumentInput[] | ChargesUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: ChargesCreateOrConnectWithoutInstrumentInput | ChargesCreateOrConnectWithoutInstrumentInput[]
    upsert?: ChargesUpsertWithWhereUniqueWithoutInstrumentInput | ChargesUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: ChargesCreateManyInstrumentInputEnvelope
    set?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    disconnect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    delete?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    connect?: ChargesWhereUniqueInput | ChargesWhereUniqueInput[]
    update?: ChargesUpdateWithWhereUniqueWithoutInstrumentInput | ChargesUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: ChargesUpdateManyWithWhereWithoutInstrumentInput | ChargesUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
  }

  export type StudentsCreateNestedOneWithoutChargesInput = {
    create?: XOR<StudentsCreateWithoutChargesInput, StudentsUncheckedCreateWithoutChargesInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutChargesInput
    connect?: StudentsWhereUniqueInput
  }

  export type InstrumentsCreateNestedOneWithoutChargesInput = {
    create?: XOR<InstrumentsCreateWithoutChargesInput, InstrumentsUncheckedCreateWithoutChargesInput>
    connectOrCreate?: InstrumentsCreateOrConnectWithoutChargesInput
    connect?: InstrumentsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type StudentsUpdateOneRequiredWithoutChargesNestedInput = {
    create?: XOR<StudentsCreateWithoutChargesInput, StudentsUncheckedCreateWithoutChargesInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutChargesInput
    upsert?: StudentsUpsertWithoutChargesInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutChargesInput, StudentsUpdateWithoutChargesInput>, StudentsUncheckedUpdateWithoutChargesInput>
  }

  export type InstrumentsUpdateOneRequiredWithoutChargesNestedInput = {
    create?: XOR<InstrumentsCreateWithoutChargesInput, InstrumentsUncheckedCreateWithoutChargesInput>
    connectOrCreate?: InstrumentsCreateOrConnectWithoutChargesInput
    upsert?: InstrumentsUpsertWithoutChargesInput
    connect?: InstrumentsWhereUniqueInput
    update?: XOR<XOR<InstrumentsUpdateToOneWithWhereWithoutChargesInput, InstrumentsUpdateWithoutChargesInput>, InstrumentsUncheckedUpdateWithoutChargesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ChargesCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    amount?: number | null
    instrument: InstrumentsCreateNestedOneWithoutChargesInput
  }

  export type ChargesUncheckedCreateWithoutStudentInput = {
    id?: string
    instrumentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesCreateOrConnectWithoutStudentInput = {
    where: ChargesWhereUniqueInput
    create: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput>
  }

  export type ChargesCreateManyStudentInputEnvelope = {
    data: ChargesCreateManyStudentInput | ChargesCreateManyStudentInput[]
  }

  export type ChargesUpsertWithWhereUniqueWithoutStudentInput = {
    where: ChargesWhereUniqueInput
    update: XOR<ChargesUpdateWithoutStudentInput, ChargesUncheckedUpdateWithoutStudentInput>
    create: XOR<ChargesCreateWithoutStudentInput, ChargesUncheckedCreateWithoutStudentInput>
  }

  export type ChargesUpdateWithWhereUniqueWithoutStudentInput = {
    where: ChargesWhereUniqueInput
    data: XOR<ChargesUpdateWithoutStudentInput, ChargesUncheckedUpdateWithoutStudentInput>
  }

  export type ChargesUpdateManyWithWhereWithoutStudentInput = {
    where: ChargesScalarWhereInput
    data: XOR<ChargesUpdateManyMutationInput, ChargesUncheckedUpdateManyWithoutStudentInput>
  }

  export type ChargesScalarWhereInput = {
    AND?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
    OR?: ChargesScalarWhereInput[]
    NOT?: ChargesScalarWhereInput | ChargesScalarWhereInput[]
    id?: StringFilter<"Charges"> | string
    studentId?: StringFilter<"Charges"> | string
    instrumentId?: StringFilter<"Charges"> | string
    date?: DateTimeFilter<"Charges"> | Date | string
    amount?: FloatNullableFilter<"Charges"> | number | null
  }

  export type ChargesCreateWithoutInstrumentInput = {
    id?: string
    date?: Date | string
    amount?: number | null
    student: StudentsCreateNestedOneWithoutChargesInput
  }

  export type ChargesUncheckedCreateWithoutInstrumentInput = {
    id?: string
    studentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesCreateOrConnectWithoutInstrumentInput = {
    where: ChargesWhereUniqueInput
    create: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput>
  }

  export type ChargesCreateManyInstrumentInputEnvelope = {
    data: ChargesCreateManyInstrumentInput | ChargesCreateManyInstrumentInput[]
  }

  export type ChargesUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: ChargesWhereUniqueInput
    update: XOR<ChargesUpdateWithoutInstrumentInput, ChargesUncheckedUpdateWithoutInstrumentInput>
    create: XOR<ChargesCreateWithoutInstrumentInput, ChargesUncheckedCreateWithoutInstrumentInput>
  }

  export type ChargesUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: ChargesWhereUniqueInput
    data: XOR<ChargesUpdateWithoutInstrumentInput, ChargesUncheckedUpdateWithoutInstrumentInput>
  }

  export type ChargesUpdateManyWithWhereWithoutInstrumentInput = {
    where: ChargesScalarWhereInput
    data: XOR<ChargesUpdateManyMutationInput, ChargesUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type StudentsCreateWithoutChargesInput = {
    id?: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
  }

  export type StudentsUncheckedCreateWithoutChargesInput = {
    id?: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    hasUniform: boolean
  }

  export type StudentsCreateOrConnectWithoutChargesInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutChargesInput, StudentsUncheckedCreateWithoutChargesInput>
  }

  export type InstrumentsCreateWithoutChargesInput = {
    id?: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments?: string | null
  }

  export type InstrumentsUncheckedCreateWithoutChargesInput = {
    id?: string
    barcode: string
    instrumentType: string
    brand: string
    status: string
    comments?: string | null
  }

  export type InstrumentsCreateOrConnectWithoutChargesInput = {
    where: InstrumentsWhereUniqueInput
    create: XOR<InstrumentsCreateWithoutChargesInput, InstrumentsUncheckedCreateWithoutChargesInput>
  }

  export type StudentsUpsertWithoutChargesInput = {
    update: XOR<StudentsUpdateWithoutChargesInput, StudentsUncheckedUpdateWithoutChargesInput>
    create: XOR<StudentsCreateWithoutChargesInput, StudentsUncheckedCreateWithoutChargesInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutChargesInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutChargesInput, StudentsUncheckedUpdateWithoutChargesInput>
  }

  export type StudentsUpdateWithoutChargesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentsUncheckedUpdateWithoutChargesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    hasUniform?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstrumentsUpsertWithoutChargesInput = {
    update: XOR<InstrumentsUpdateWithoutChargesInput, InstrumentsUncheckedUpdateWithoutChargesInput>
    create: XOR<InstrumentsCreateWithoutChargesInput, InstrumentsUncheckedCreateWithoutChargesInput>
    where?: InstrumentsWhereInput
  }

  export type InstrumentsUpdateToOneWithWhereWithoutChargesInput = {
    where?: InstrumentsWhereInput
    data: XOR<InstrumentsUpdateWithoutChargesInput, InstrumentsUncheckedUpdateWithoutChargesInput>
  }

  export type InstrumentsUpdateWithoutChargesInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentsUncheckedUpdateWithoutChargesInput = {
    barcode?: StringFieldUpdateOperationsInput | string
    instrumentType?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChargesCreateManyStudentInput = {
    id?: string
    instrumentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    instrument?: InstrumentsUpdateOneRequiredWithoutChargesNestedInput
  }

  export type ChargesUncheckedUpdateWithoutStudentInput = {
    instrumentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChargesUncheckedUpdateManyWithoutStudentInput = {
    instrumentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChargesCreateManyInstrumentInput = {
    id?: string
    studentId: string
    date?: Date | string
    amount?: number | null
  }

  export type ChargesUpdateWithoutInstrumentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    student?: StudentsUpdateOneRequiredWithoutChargesNestedInput
  }

  export type ChargesUncheckedUpdateWithoutInstrumentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChargesUncheckedUpdateManyWithoutInstrumentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}