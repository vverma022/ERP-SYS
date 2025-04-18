
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model departments
 * 
 */
export type departments = $Result.DefaultSelection<Prisma.$departmentsPayload>
/**
 * Model pillars
 * 
 */
export type pillars = $Result.DefaultSelection<Prisma.$pillarsPayload>
/**
 * Model assigned_kpi
 * 
 */
export type assigned_kpi = $Result.DefaultSelection<Prisma.$assigned_kpiPayload>
/**
 * Model kpi
 * 
 */
export type kpi = $Result.DefaultSelection<Prisma.$kpiPayload>
/**
 * Model qoc
 * 
 */
export type qoc = $Result.DefaultSelection<Prisma.$qocPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pillars`: Exposes CRUD operations for the **pillars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pillars
    * const pillars = await prisma.pillars.findMany()
    * ```
    */
  get pillars(): Prisma.pillarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assigned_kpi`: Exposes CRUD operations for the **assigned_kpi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assigned_kpis
    * const assigned_kpis = await prisma.assigned_kpi.findMany()
    * ```
    */
  get assigned_kpi(): Prisma.assigned_kpiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kpi`: Exposes CRUD operations for the **kpi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kpis
    * const kpis = await prisma.kpi.findMany()
    * ```
    */
  get kpi(): Prisma.kpiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qoc`: Exposes CRUD operations for the **qoc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qocs
    * const qocs = await prisma.qoc.findMany()
    * ```
    */
  get qoc(): Prisma.qocDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    users: 'users',
    departments: 'departments',
    pillars: 'pillars',
    assigned_kpi: 'assigned_kpi',
    kpi: 'kpi',
    qoc: 'qoc'
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
      modelProps: "users" | "departments" | "pillars" | "assigned_kpi" | "kpi" | "qoc"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      departments: {
        payload: Prisma.$departmentsPayload<ExtArgs>
        fields: Prisma.departmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findFirst: {
            args: Prisma.departmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findMany: {
            args: Prisma.departmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          create: {
            args: Prisma.departmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          createMany: {
            args: Prisma.departmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          delete: {
            args: Prisma.departmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          update: {
            args: Prisma.departmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          deleteMany: {
            args: Prisma.departmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          upsert: {
            args: Prisma.departmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.departmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      pillars: {
        payload: Prisma.$pillarsPayload<ExtArgs>
        fields: Prisma.pillarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pillarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pillarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          findFirst: {
            args: Prisma.pillarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pillarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          findMany: {
            args: Prisma.pillarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>[]
          }
          create: {
            args: Prisma.pillarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          createMany: {
            args: Prisma.pillarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pillarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>[]
          }
          delete: {
            args: Prisma.pillarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          update: {
            args: Prisma.pillarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          deleteMany: {
            args: Prisma.pillarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pillarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pillarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>[]
          }
          upsert: {
            args: Prisma.pillarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pillarsPayload>
          }
          aggregate: {
            args: Prisma.PillarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePillars>
          }
          groupBy: {
            args: Prisma.pillarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PillarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pillarsCountArgs<ExtArgs>
            result: $Utils.Optional<PillarsCountAggregateOutputType> | number
          }
        }
      }
      assigned_kpi: {
        payload: Prisma.$assigned_kpiPayload<ExtArgs>
        fields: Prisma.assigned_kpiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assigned_kpiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assigned_kpiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          findFirst: {
            args: Prisma.assigned_kpiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assigned_kpiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          findMany: {
            args: Prisma.assigned_kpiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>[]
          }
          create: {
            args: Prisma.assigned_kpiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          createMany: {
            args: Prisma.assigned_kpiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.assigned_kpiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>[]
          }
          delete: {
            args: Prisma.assigned_kpiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          update: {
            args: Prisma.assigned_kpiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          deleteMany: {
            args: Prisma.assigned_kpiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assigned_kpiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.assigned_kpiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>[]
          }
          upsert: {
            args: Prisma.assigned_kpiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assigned_kpiPayload>
          }
          aggregate: {
            args: Prisma.Assigned_kpiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssigned_kpi>
          }
          groupBy: {
            args: Prisma.assigned_kpiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Assigned_kpiGroupByOutputType>[]
          }
          count: {
            args: Prisma.assigned_kpiCountArgs<ExtArgs>
            result: $Utils.Optional<Assigned_kpiCountAggregateOutputType> | number
          }
        }
      }
      kpi: {
        payload: Prisma.$kpiPayload<ExtArgs>
        fields: Prisma.kpiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kpiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kpiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          findFirst: {
            args: Prisma.kpiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kpiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          findMany: {
            args: Prisma.kpiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>[]
          }
          create: {
            args: Prisma.kpiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          createMany: {
            args: Prisma.kpiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kpiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>[]
          }
          delete: {
            args: Prisma.kpiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          update: {
            args: Prisma.kpiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          deleteMany: {
            args: Prisma.kpiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kpiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kpiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>[]
          }
          upsert: {
            args: Prisma.kpiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kpiPayload>
          }
          aggregate: {
            args: Prisma.KpiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKpi>
          }
          groupBy: {
            args: Prisma.kpiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KpiGroupByOutputType>[]
          }
          count: {
            args: Prisma.kpiCountArgs<ExtArgs>
            result: $Utils.Optional<KpiCountAggregateOutputType> | number
          }
        }
      }
      qoc: {
        payload: Prisma.$qocPayload<ExtArgs>
        fields: Prisma.qocFieldRefs
        operations: {
          findUnique: {
            args: Prisma.qocFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.qocFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          findFirst: {
            args: Prisma.qocFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.qocFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          findMany: {
            args: Prisma.qocFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>[]
          }
          create: {
            args: Prisma.qocCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          createMany: {
            args: Prisma.qocCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.qocCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>[]
          }
          delete: {
            args: Prisma.qocDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          update: {
            args: Prisma.qocUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          deleteMany: {
            args: Prisma.qocDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.qocUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.qocUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>[]
          }
          upsert: {
            args: Prisma.qocUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qocPayload>
          }
          aggregate: {
            args: Prisma.QocAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQoc>
          }
          groupBy: {
            args: Prisma.qocGroupByArgs<ExtArgs>
            result: $Utils.Optional<QocGroupByOutputType>[]
          }
          count: {
            args: Prisma.qocCountArgs<ExtArgs>
            result: $Utils.Optional<QocCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    users?: usersOmit
    departments?: departmentsOmit
    pillars?: pillarsOmit
    assigned_kpi?: assigned_kpiOmit
    kpi?: kpiOmit
    qoc?: qocOmit
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
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    pillars: number
    members: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillars?: boolean | DepartmentsCountOutputTypeCountPillarsArgs
    members?: boolean | DepartmentsCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountPillarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pillarsWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PillarsCountOutputType
   */

  export type PillarsCountOutputType = {
    assigned_kpi: number
  }

  export type PillarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_kpi?: boolean | PillarsCountOutputTypeCountAssigned_kpiArgs
  }

  // Custom InputTypes
  /**
   * PillarsCountOutputType without action
   */
  export type PillarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PillarsCountOutputType
     */
    select?: PillarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PillarsCountOutputType without action
   */
  export type PillarsCountOutputTypeCountAssigned_kpiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assigned_kpiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    dept_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    dept_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_email: string | null
    user_password: string | null
    user_role: string | null
    dept_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_email: string | null
    user_password: string | null
    user_role: string | null
    dept_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_email: number
    user_password: number
    user_role: number
    dept_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    dept_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    dept_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_password?: true
    user_role?: true
    dept_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_password?: true
    user_role?: true
    dept_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_password?: true
    user_role?: true
    dept_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    user_name: string
    user_email: string
    user_password: string
    user_role: string
    dept_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_password?: boolean
    user_role?: boolean
    dept_id?: boolean
    department?: boolean | users$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_password?: boolean
    user_role?: boolean
    dept_id?: boolean
    department?: boolean | users$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_password?: boolean
    user_role?: boolean
    dept_id?: boolean
    department?: boolean | users$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_password?: boolean
    user_role?: boolean
    dept_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_name" | "user_email" | "user_password" | "user_role" | "dept_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | users$departmentArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | users$departmentArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | users$departmentArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      department: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string
      user_email: string
      user_password: string
      user_role: string
      dept_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends users$departmentArgs<ExtArgs> = {}>(args?: Subset<T, users$departmentArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly user_email: FieldRef<"users", 'String'>
    readonly user_password: FieldRef<"users", 'String'>
    readonly user_role: FieldRef<"users", 'String'>
    readonly dept_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.department
   */
  export type users$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    dept_id: number | null
    hod_id: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    dept_id: number | null
    hod_id: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
    hod_id: number | null
    dept_creation: Date | null
    hod_name: string | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
    hod_id: number | null
    dept_creation: Date | null
    hod_name: string | null
  }

  export type DepartmentsCountAggregateOutputType = {
    dept_id: number
    dept_name: number
    hod_id: number
    dept_creation: number
    hod_name: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    dept_id?: true
    hod_id?: true
  }

  export type DepartmentsSumAggregateInputType = {
    dept_id?: true
    hod_id?: true
  }

  export type DepartmentsMinAggregateInputType = {
    dept_id?: true
    dept_name?: true
    hod_id?: true
    dept_creation?: true
    hod_name?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    dept_id?: true
    dept_name?: true
    hod_id?: true
    dept_creation?: true
    hod_name?: true
  }

  export type DepartmentsCountAggregateInputType = {
    dept_id?: true
    dept_name?: true
    hod_id?: true
    dept_creation?: true
    hod_name?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type departmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentsWhereInput
    orderBy?: departmentsOrderByWithAggregationInput | departmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    dept_id: number
    dept_name: string
    hod_id: number | null
    dept_creation: Date | null
    hod_name: string | null
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends departmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
    hod_id?: boolean
    dept_creation?: boolean
    hod_name?: boolean
    pillars?: boolean | departments$pillarsArgs<ExtArgs>
    members?: boolean | departments$membersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
    hod_id?: boolean
    dept_creation?: boolean
    hod_name?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
    hod_id?: boolean
    dept_creation?: boolean
    hod_name?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectScalar = {
    dept_id?: boolean
    dept_name?: boolean
    hod_id?: boolean
    dept_creation?: boolean
    hod_name?: boolean
  }

  export type departmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dept_id" | "dept_name" | "hod_id" | "dept_creation" | "hod_name", ExtArgs["result"]["departments"]>
  export type departmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillars?: boolean | departments$pillarsArgs<ExtArgs>
    members?: boolean | departments$membersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departments"
    objects: {
      pillars: Prisma.$pillarsPayload<ExtArgs>[]
      members: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dept_id: number
      dept_name: string
      hod_id: number | null
      dept_creation: Date | null
      hod_name: string | null
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type departmentsGetPayload<S extends boolean | null | undefined | departmentsDefaultArgs> = $Result.GetResult<Prisma.$departmentsPayload, S>

  type departmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departments'], meta: { name: 'departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentsFindUniqueArgs>(args: SelectSubset<T, departmentsFindUniqueArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentsFindFirstArgs>(args?: SelectSubset<T, departmentsFindFirstArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `dept_id`
     * const departmentsWithDept_idOnly = await prisma.departments.findMany({ select: { dept_id: true } })
     * 
     */
    findMany<T extends departmentsFindManyArgs>(args?: SelectSubset<T, departmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends departmentsCreateArgs>(args: SelectSubset<T, departmentsCreateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentsCreateManyArgs>(args?: SelectSubset<T, departmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `dept_id`
     * const departmentsWithDept_idOnly = await prisma.departments.createManyAndReturn({
     *   select: { dept_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends departmentsDeleteArgs>(args: SelectSubset<T, departmentsDeleteArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentsUpdateArgs>(args: SelectSubset<T, departmentsUpdateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentsDeleteManyArgs>(args?: SelectSubset<T, departmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentsUpdateManyArgs>(args: SelectSubset<T, departmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `dept_id`
     * const departmentsWithDept_idOnly = await prisma.departments.updateManyAndReturn({
     *   select: { dept_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends departmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends departmentsUpsertArgs>(args: SelectSubset<T, departmentsUpsertArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsGroupByArgs} args - Group by arguments.
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
      T extends departmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentsGroupByArgs['orderBy'] }
        : { orderBy?: departmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departments model
   */
  readonly fields: departmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pillars<T extends departments$pillarsArgs<ExtArgs> = {}>(args?: Subset<T, departments$pillarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends departments$membersArgs<ExtArgs> = {}>(args?: Subset<T, departments$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the departments model
   */ 
  interface departmentsFieldRefs {
    readonly dept_id: FieldRef<"departments", 'Int'>
    readonly dept_name: FieldRef<"departments", 'String'>
    readonly hod_id: FieldRef<"departments", 'Int'>
    readonly dept_creation: FieldRef<"departments", 'DateTime'>
    readonly hod_name: FieldRef<"departments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * departments findUnique
   */
  export type departmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findFirst
   */
  export type departmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findMany
   */
  export type departmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments create
   */
  export type departmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }

  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments createManyAndReturn
   */
  export type departmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments update
   */
  export type departmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments updateManyAndReturn
   */
  export type departmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments upsert
   */
  export type departmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }

  /**
   * departments delete
   */
  export type departmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * departments.pillars
   */
  export type departments$pillarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    where?: pillarsWhereInput
    orderBy?: pillarsOrderByWithRelationInput | pillarsOrderByWithRelationInput[]
    cursor?: pillarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PillarsScalarFieldEnum | PillarsScalarFieldEnum[]
  }

  /**
   * departments.members
   */
  export type departments$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * departments without action
   */
  export type departmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
  }


  /**
   * Model pillars
   */

  export type AggregatePillars = {
    _count: PillarsCountAggregateOutputType | null
    _avg: PillarsAvgAggregateOutputType | null
    _sum: PillarsSumAggregateOutputType | null
    _min: PillarsMinAggregateOutputType | null
    _max: PillarsMaxAggregateOutputType | null
  }

  export type PillarsAvgAggregateOutputType = {
    pillar_id: number | null
    department_id: number | null
  }

  export type PillarsSumAggregateOutputType = {
    pillar_id: number | null
    department_id: number | null
  }

  export type PillarsMinAggregateOutputType = {
    pillar_id: number | null
    pillar_name: string | null
    pillar_creation: Date | null
    department_id: number | null
  }

  export type PillarsMaxAggregateOutputType = {
    pillar_id: number | null
    pillar_name: string | null
    pillar_creation: Date | null
    department_id: number | null
  }

  export type PillarsCountAggregateOutputType = {
    pillar_id: number
    pillar_name: number
    pillar_creation: number
    department_id: number
    _all: number
  }


  export type PillarsAvgAggregateInputType = {
    pillar_id?: true
    department_id?: true
  }

  export type PillarsSumAggregateInputType = {
    pillar_id?: true
    department_id?: true
  }

  export type PillarsMinAggregateInputType = {
    pillar_id?: true
    pillar_name?: true
    pillar_creation?: true
    department_id?: true
  }

  export type PillarsMaxAggregateInputType = {
    pillar_id?: true
    pillar_name?: true
    pillar_creation?: true
    department_id?: true
  }

  export type PillarsCountAggregateInputType = {
    pillar_id?: true
    pillar_name?: true
    pillar_creation?: true
    department_id?: true
    _all?: true
  }

  export type PillarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pillars to aggregate.
     */
    where?: pillarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pillars to fetch.
     */
    orderBy?: pillarsOrderByWithRelationInput | pillarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pillarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pillars
    **/
    _count?: true | PillarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PillarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PillarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PillarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PillarsMaxAggregateInputType
  }

  export type GetPillarsAggregateType<T extends PillarsAggregateArgs> = {
        [P in keyof T & keyof AggregatePillars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePillars[P]>
      : GetScalarType<T[P], AggregatePillars[P]>
  }




  export type pillarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pillarsWhereInput
    orderBy?: pillarsOrderByWithAggregationInput | pillarsOrderByWithAggregationInput[]
    by: PillarsScalarFieldEnum[] | PillarsScalarFieldEnum
    having?: pillarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PillarsCountAggregateInputType | true
    _avg?: PillarsAvgAggregateInputType
    _sum?: PillarsSumAggregateInputType
    _min?: PillarsMinAggregateInputType
    _max?: PillarsMaxAggregateInputType
  }

  export type PillarsGroupByOutputType = {
    pillar_id: number
    pillar_name: string
    pillar_creation: Date | null
    department_id: number
    _count: PillarsCountAggregateOutputType | null
    _avg: PillarsAvgAggregateOutputType | null
    _sum: PillarsSumAggregateOutputType | null
    _min: PillarsMinAggregateOutputType | null
    _max: PillarsMaxAggregateOutputType | null
  }

  type GetPillarsGroupByPayload<T extends pillarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PillarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PillarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PillarsGroupByOutputType[P]>
            : GetScalarType<T[P], PillarsGroupByOutputType[P]>
        }
      >
    >


  export type pillarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pillar_id?: boolean
    pillar_name?: boolean
    pillar_creation?: boolean
    department_id?: boolean
    assigned_kpi?: boolean | pillars$assigned_kpiArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    _count?: boolean | PillarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillars"]>

  export type pillarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pillar_id?: boolean
    pillar_name?: boolean
    pillar_creation?: boolean
    department_id?: boolean
    department?: boolean | departmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillars"]>

  export type pillarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pillar_id?: boolean
    pillar_name?: boolean
    pillar_creation?: boolean
    department_id?: boolean
    department?: boolean | departmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pillars"]>

  export type pillarsSelectScalar = {
    pillar_id?: boolean
    pillar_name?: boolean
    pillar_creation?: boolean
    department_id?: boolean
  }

  export type pillarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pillar_id" | "pillar_name" | "pillar_creation" | "department_id", ExtArgs["result"]["pillars"]>
  export type pillarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_kpi?: boolean | pillars$assigned_kpiArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    _count?: boolean | PillarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pillarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentsDefaultArgs<ExtArgs>
  }
  export type pillarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentsDefaultArgs<ExtArgs>
  }

  export type $pillarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pillars"
    objects: {
      assigned_kpi: Prisma.$assigned_kpiPayload<ExtArgs>[]
      department: Prisma.$departmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pillar_id: number
      pillar_name: string
      pillar_creation: Date | null
      department_id: number
    }, ExtArgs["result"]["pillars"]>
    composites: {}
  }

  type pillarsGetPayload<S extends boolean | null | undefined | pillarsDefaultArgs> = $Result.GetResult<Prisma.$pillarsPayload, S>

  type pillarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pillarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PillarsCountAggregateInputType | true
    }

  export interface pillarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pillars'], meta: { name: 'pillars' } }
    /**
     * Find zero or one Pillars that matches the filter.
     * @param {pillarsFindUniqueArgs} args - Arguments to find a Pillars
     * @example
     * // Get one Pillars
     * const pillars = await prisma.pillars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pillarsFindUniqueArgs>(args: SelectSubset<T, pillarsFindUniqueArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pillars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pillarsFindUniqueOrThrowArgs} args - Arguments to find a Pillars
     * @example
     * // Get one Pillars
     * const pillars = await prisma.pillars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pillarsFindUniqueOrThrowArgs>(args: SelectSubset<T, pillarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pillars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsFindFirstArgs} args - Arguments to find a Pillars
     * @example
     * // Get one Pillars
     * const pillars = await prisma.pillars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pillarsFindFirstArgs>(args?: SelectSubset<T, pillarsFindFirstArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pillars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsFindFirstOrThrowArgs} args - Arguments to find a Pillars
     * @example
     * // Get one Pillars
     * const pillars = await prisma.pillars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pillarsFindFirstOrThrowArgs>(args?: SelectSubset<T, pillarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pillars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pillars
     * const pillars = await prisma.pillars.findMany()
     * 
     * // Get first 10 Pillars
     * const pillars = await prisma.pillars.findMany({ take: 10 })
     * 
     * // Only select the `pillar_id`
     * const pillarsWithPillar_idOnly = await prisma.pillars.findMany({ select: { pillar_id: true } })
     * 
     */
    findMany<T extends pillarsFindManyArgs>(args?: SelectSubset<T, pillarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pillars.
     * @param {pillarsCreateArgs} args - Arguments to create a Pillars.
     * @example
     * // Create one Pillars
     * const Pillars = await prisma.pillars.create({
     *   data: {
     *     // ... data to create a Pillars
     *   }
     * })
     * 
     */
    create<T extends pillarsCreateArgs>(args: SelectSubset<T, pillarsCreateArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pillars.
     * @param {pillarsCreateManyArgs} args - Arguments to create many Pillars.
     * @example
     * // Create many Pillars
     * const pillars = await prisma.pillars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pillarsCreateManyArgs>(args?: SelectSubset<T, pillarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pillars and returns the data saved in the database.
     * @param {pillarsCreateManyAndReturnArgs} args - Arguments to create many Pillars.
     * @example
     * // Create many Pillars
     * const pillars = await prisma.pillars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pillars and only return the `pillar_id`
     * const pillarsWithPillar_idOnly = await prisma.pillars.createManyAndReturn({
     *   select: { pillar_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pillarsCreateManyAndReturnArgs>(args?: SelectSubset<T, pillarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pillars.
     * @param {pillarsDeleteArgs} args - Arguments to delete one Pillars.
     * @example
     * // Delete one Pillars
     * const Pillars = await prisma.pillars.delete({
     *   where: {
     *     // ... filter to delete one Pillars
     *   }
     * })
     * 
     */
    delete<T extends pillarsDeleteArgs>(args: SelectSubset<T, pillarsDeleteArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pillars.
     * @param {pillarsUpdateArgs} args - Arguments to update one Pillars.
     * @example
     * // Update one Pillars
     * const pillars = await prisma.pillars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pillarsUpdateArgs>(args: SelectSubset<T, pillarsUpdateArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pillars.
     * @param {pillarsDeleteManyArgs} args - Arguments to filter Pillars to delete.
     * @example
     * // Delete a few Pillars
     * const { count } = await prisma.pillars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pillarsDeleteManyArgs>(args?: SelectSubset<T, pillarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pillars
     * const pillars = await prisma.pillars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pillarsUpdateManyArgs>(args: SelectSubset<T, pillarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pillars and returns the data updated in the database.
     * @param {pillarsUpdateManyAndReturnArgs} args - Arguments to update many Pillars.
     * @example
     * // Update many Pillars
     * const pillars = await prisma.pillars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pillars and only return the `pillar_id`
     * const pillarsWithPillar_idOnly = await prisma.pillars.updateManyAndReturn({
     *   select: { pillar_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pillarsUpdateManyAndReturnArgs>(args: SelectSubset<T, pillarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pillars.
     * @param {pillarsUpsertArgs} args - Arguments to update or create a Pillars.
     * @example
     * // Update or create a Pillars
     * const pillars = await prisma.pillars.upsert({
     *   create: {
     *     // ... data to create a Pillars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pillars we want to update
     *   }
     * })
     */
    upsert<T extends pillarsUpsertArgs>(args: SelectSubset<T, pillarsUpsertArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsCountArgs} args - Arguments to filter Pillars to count.
     * @example
     * // Count the number of Pillars
     * const count = await prisma.pillars.count({
     *   where: {
     *     // ... the filter for the Pillars we want to count
     *   }
     * })
    **/
    count<T extends pillarsCountArgs>(
      args?: Subset<T, pillarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PillarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PillarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PillarsAggregateArgs>(args: Subset<T, PillarsAggregateArgs>): Prisma.PrismaPromise<GetPillarsAggregateType<T>>

    /**
     * Group by Pillars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pillarsGroupByArgs} args - Group by arguments.
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
      T extends pillarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pillarsGroupByArgs['orderBy'] }
        : { orderBy?: pillarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pillarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPillarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pillars model
   */
  readonly fields: pillarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pillars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pillarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned_kpi<T extends pillars$assigned_kpiArgs<ExtArgs> = {}>(args?: Subset<T, pillars$assigned_kpiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    department<T extends departmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentsDefaultArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pillars model
   */ 
  interface pillarsFieldRefs {
    readonly pillar_id: FieldRef<"pillars", 'Int'>
    readonly pillar_name: FieldRef<"pillars", 'String'>
    readonly pillar_creation: FieldRef<"pillars", 'DateTime'>
    readonly department_id: FieldRef<"pillars", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pillars findUnique
   */
  export type pillarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter, which pillars to fetch.
     */
    where: pillarsWhereUniqueInput
  }

  /**
   * pillars findUniqueOrThrow
   */
  export type pillarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter, which pillars to fetch.
     */
    where: pillarsWhereUniqueInput
  }

  /**
   * pillars findFirst
   */
  export type pillarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter, which pillars to fetch.
     */
    where?: pillarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pillars to fetch.
     */
    orderBy?: pillarsOrderByWithRelationInput | pillarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pillars.
     */
    cursor?: pillarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pillars.
     */
    distinct?: PillarsScalarFieldEnum | PillarsScalarFieldEnum[]
  }

  /**
   * pillars findFirstOrThrow
   */
  export type pillarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter, which pillars to fetch.
     */
    where?: pillarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pillars to fetch.
     */
    orderBy?: pillarsOrderByWithRelationInput | pillarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pillars.
     */
    cursor?: pillarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pillars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pillars.
     */
    distinct?: PillarsScalarFieldEnum | PillarsScalarFieldEnum[]
  }

  /**
   * pillars findMany
   */
  export type pillarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter, which pillars to fetch.
     */
    where?: pillarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pillars to fetch.
     */
    orderBy?: pillarsOrderByWithRelationInput | pillarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pillars.
     */
    cursor?: pillarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pillars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pillars.
     */
    skip?: number
    distinct?: PillarsScalarFieldEnum | PillarsScalarFieldEnum[]
  }

  /**
   * pillars create
   */
  export type pillarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * The data needed to create a pillars.
     */
    data: XOR<pillarsCreateInput, pillarsUncheckedCreateInput>
  }

  /**
   * pillars createMany
   */
  export type pillarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pillars.
     */
    data: pillarsCreateManyInput | pillarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pillars createManyAndReturn
   */
  export type pillarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * The data used to create many pillars.
     */
    data: pillarsCreateManyInput | pillarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pillars update
   */
  export type pillarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * The data needed to update a pillars.
     */
    data: XOR<pillarsUpdateInput, pillarsUncheckedUpdateInput>
    /**
     * Choose, which pillars to update.
     */
    where: pillarsWhereUniqueInput
  }

  /**
   * pillars updateMany
   */
  export type pillarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pillars.
     */
    data: XOR<pillarsUpdateManyMutationInput, pillarsUncheckedUpdateManyInput>
    /**
     * Filter which pillars to update
     */
    where?: pillarsWhereInput
    /**
     * Limit how many pillars to update.
     */
    limit?: number
  }

  /**
   * pillars updateManyAndReturn
   */
  export type pillarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * The data used to update pillars.
     */
    data: XOR<pillarsUpdateManyMutationInput, pillarsUncheckedUpdateManyInput>
    /**
     * Filter which pillars to update
     */
    where?: pillarsWhereInput
    /**
     * Limit how many pillars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pillars upsert
   */
  export type pillarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * The filter to search for the pillars to update in case it exists.
     */
    where: pillarsWhereUniqueInput
    /**
     * In case the pillars found by the `where` argument doesn't exist, create a new pillars with this data.
     */
    create: XOR<pillarsCreateInput, pillarsUncheckedCreateInput>
    /**
     * In case the pillars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pillarsUpdateInput, pillarsUncheckedUpdateInput>
  }

  /**
   * pillars delete
   */
  export type pillarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
    /**
     * Filter which pillars to delete.
     */
    where: pillarsWhereUniqueInput
  }

  /**
   * pillars deleteMany
   */
  export type pillarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pillars to delete
     */
    where?: pillarsWhereInput
    /**
     * Limit how many pillars to delete.
     */
    limit?: number
  }

  /**
   * pillars.assigned_kpi
   */
  export type pillars$assigned_kpiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    where?: assigned_kpiWhereInput
    orderBy?: assigned_kpiOrderByWithRelationInput | assigned_kpiOrderByWithRelationInput[]
    cursor?: assigned_kpiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Assigned_kpiScalarFieldEnum | Assigned_kpiScalarFieldEnum[]
  }

  /**
   * pillars without action
   */
  export type pillarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pillars
     */
    select?: pillarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pillars
     */
    omit?: pillarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pillarsInclude<ExtArgs> | null
  }


  /**
   * Model assigned_kpi
   */

  export type AggregateAssigned_kpi = {
    _count: Assigned_kpiCountAggregateOutputType | null
    _avg: Assigned_kpiAvgAggregateOutputType | null
    _sum: Assigned_kpiSumAggregateOutputType | null
    _min: Assigned_kpiMinAggregateOutputType | null
    _max: Assigned_kpiMaxAggregateOutputType | null
  }

  export type Assigned_kpiAvgAggregateOutputType = {
    assigned_kpi_id: number | null
    pillar_id: number | null
    kpi_value: number | null
  }

  export type Assigned_kpiSumAggregateOutputType = {
    assigned_kpi_id: number | null
    pillar_id: number | null
    kpi_value: number | null
  }

  export type Assigned_kpiMinAggregateOutputType = {
    assigned_kpi_id: number | null
    pillar_id: number | null
    kpi_name: string | null
    kpi_status: string | null
    added_date: Date | null
    resolved_date: Date | null
    comments: string | null
    kpi_value: number | null
    kpi_description: string | null
  }

  export type Assigned_kpiMaxAggregateOutputType = {
    assigned_kpi_id: number | null
    pillar_id: number | null
    kpi_name: string | null
    kpi_status: string | null
    added_date: Date | null
    resolved_date: Date | null
    comments: string | null
    kpi_value: number | null
    kpi_description: string | null
  }

  export type Assigned_kpiCountAggregateOutputType = {
    assigned_kpi_id: number
    pillar_id: number
    kpi_name: number
    kpi_status: number
    form_data: number
    added_date: number
    resolved_date: number
    comments: number
    kpi_value: number
    kpi_description: number
    form_input: number
    _all: number
  }


  export type Assigned_kpiAvgAggregateInputType = {
    assigned_kpi_id?: true
    pillar_id?: true
    kpi_value?: true
  }

  export type Assigned_kpiSumAggregateInputType = {
    assigned_kpi_id?: true
    pillar_id?: true
    kpi_value?: true
  }

  export type Assigned_kpiMinAggregateInputType = {
    assigned_kpi_id?: true
    pillar_id?: true
    kpi_name?: true
    kpi_status?: true
    added_date?: true
    resolved_date?: true
    comments?: true
    kpi_value?: true
    kpi_description?: true
  }

  export type Assigned_kpiMaxAggregateInputType = {
    assigned_kpi_id?: true
    pillar_id?: true
    kpi_name?: true
    kpi_status?: true
    added_date?: true
    resolved_date?: true
    comments?: true
    kpi_value?: true
    kpi_description?: true
  }

  export type Assigned_kpiCountAggregateInputType = {
    assigned_kpi_id?: true
    pillar_id?: true
    kpi_name?: true
    kpi_status?: true
    form_data?: true
    added_date?: true
    resolved_date?: true
    comments?: true
    kpi_value?: true
    kpi_description?: true
    form_input?: true
    _all?: true
  }

  export type Assigned_kpiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assigned_kpi to aggregate.
     */
    where?: assigned_kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_kpis to fetch.
     */
    orderBy?: assigned_kpiOrderByWithRelationInput | assigned_kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assigned_kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assigned_kpis
    **/
    _count?: true | Assigned_kpiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Assigned_kpiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Assigned_kpiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Assigned_kpiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Assigned_kpiMaxAggregateInputType
  }

  export type GetAssigned_kpiAggregateType<T extends Assigned_kpiAggregateArgs> = {
        [P in keyof T & keyof AggregateAssigned_kpi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssigned_kpi[P]>
      : GetScalarType<T[P], AggregateAssigned_kpi[P]>
  }




  export type assigned_kpiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assigned_kpiWhereInput
    orderBy?: assigned_kpiOrderByWithAggregationInput | assigned_kpiOrderByWithAggregationInput[]
    by: Assigned_kpiScalarFieldEnum[] | Assigned_kpiScalarFieldEnum
    having?: assigned_kpiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Assigned_kpiCountAggregateInputType | true
    _avg?: Assigned_kpiAvgAggregateInputType
    _sum?: Assigned_kpiSumAggregateInputType
    _min?: Assigned_kpiMinAggregateInputType
    _max?: Assigned_kpiMaxAggregateInputType
  }

  export type Assigned_kpiGroupByOutputType = {
    assigned_kpi_id: number
    pillar_id: number
    kpi_name: string
    kpi_status: string
    form_data: JsonValue
    added_date: Date | null
    resolved_date: Date | null
    comments: string | null
    kpi_value: number | null
    kpi_description: string | null
    form_input: JsonValue | null
    _count: Assigned_kpiCountAggregateOutputType | null
    _avg: Assigned_kpiAvgAggregateOutputType | null
    _sum: Assigned_kpiSumAggregateOutputType | null
    _min: Assigned_kpiMinAggregateOutputType | null
    _max: Assigned_kpiMaxAggregateOutputType | null
  }

  type GetAssigned_kpiGroupByPayload<T extends assigned_kpiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Assigned_kpiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Assigned_kpiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Assigned_kpiGroupByOutputType[P]>
            : GetScalarType<T[P], Assigned_kpiGroupByOutputType[P]>
        }
      >
    >


  export type assigned_kpiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigned_kpi_id?: boolean
    pillar_id?: boolean
    kpi_name?: boolean
    kpi_status?: boolean
    form_data?: boolean
    added_date?: boolean
    resolved_date?: boolean
    comments?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
    form_input?: boolean
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigned_kpi"]>

  export type assigned_kpiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigned_kpi_id?: boolean
    pillar_id?: boolean
    kpi_name?: boolean
    kpi_status?: boolean
    form_data?: boolean
    added_date?: boolean
    resolved_date?: boolean
    comments?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
    form_input?: boolean
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigned_kpi"]>

  export type assigned_kpiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigned_kpi_id?: boolean
    pillar_id?: boolean
    kpi_name?: boolean
    kpi_status?: boolean
    form_data?: boolean
    added_date?: boolean
    resolved_date?: boolean
    comments?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
    form_input?: boolean
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigned_kpi"]>

  export type assigned_kpiSelectScalar = {
    assigned_kpi_id?: boolean
    pillar_id?: boolean
    kpi_name?: boolean
    kpi_status?: boolean
    form_data?: boolean
    added_date?: boolean
    resolved_date?: boolean
    comments?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
    form_input?: boolean
  }

  export type assigned_kpiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assigned_kpi_id" | "pillar_id" | "kpi_name" | "kpi_status" | "form_data" | "added_date" | "resolved_date" | "comments" | "kpi_value" | "kpi_description" | "form_input", ExtArgs["result"]["assigned_kpi"]>
  export type assigned_kpiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }
  export type assigned_kpiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }
  export type assigned_kpiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pillar?: boolean | pillarsDefaultArgs<ExtArgs>
  }

  export type $assigned_kpiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assigned_kpi"
    objects: {
      pillar: Prisma.$pillarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assigned_kpi_id: number
      pillar_id: number
      kpi_name: string
      kpi_status: string
      form_data: Prisma.JsonValue
      added_date: Date | null
      resolved_date: Date | null
      comments: string | null
      kpi_value: number | null
      kpi_description: string | null
      form_input: Prisma.JsonValue | null
    }, ExtArgs["result"]["assigned_kpi"]>
    composites: {}
  }

  type assigned_kpiGetPayload<S extends boolean | null | undefined | assigned_kpiDefaultArgs> = $Result.GetResult<Prisma.$assigned_kpiPayload, S>

  type assigned_kpiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assigned_kpiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Assigned_kpiCountAggregateInputType | true
    }

  export interface assigned_kpiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assigned_kpi'], meta: { name: 'assigned_kpi' } }
    /**
     * Find zero or one Assigned_kpi that matches the filter.
     * @param {assigned_kpiFindUniqueArgs} args - Arguments to find a Assigned_kpi
     * @example
     * // Get one Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assigned_kpiFindUniqueArgs>(args: SelectSubset<T, assigned_kpiFindUniqueArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assigned_kpi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assigned_kpiFindUniqueOrThrowArgs} args - Arguments to find a Assigned_kpi
     * @example
     * // Get one Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assigned_kpiFindUniqueOrThrowArgs>(args: SelectSubset<T, assigned_kpiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assigned_kpi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiFindFirstArgs} args - Arguments to find a Assigned_kpi
     * @example
     * // Get one Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assigned_kpiFindFirstArgs>(args?: SelectSubset<T, assigned_kpiFindFirstArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assigned_kpi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiFindFirstOrThrowArgs} args - Arguments to find a Assigned_kpi
     * @example
     * // Get one Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assigned_kpiFindFirstOrThrowArgs>(args?: SelectSubset<T, assigned_kpiFindFirstOrThrowArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assigned_kpis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assigned_kpis
     * const assigned_kpis = await prisma.assigned_kpi.findMany()
     * 
     * // Get first 10 Assigned_kpis
     * const assigned_kpis = await prisma.assigned_kpi.findMany({ take: 10 })
     * 
     * // Only select the `assigned_kpi_id`
     * const assigned_kpiWithAssigned_kpi_idOnly = await prisma.assigned_kpi.findMany({ select: { assigned_kpi_id: true } })
     * 
     */
    findMany<T extends assigned_kpiFindManyArgs>(args?: SelectSubset<T, assigned_kpiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assigned_kpi.
     * @param {assigned_kpiCreateArgs} args - Arguments to create a Assigned_kpi.
     * @example
     * // Create one Assigned_kpi
     * const Assigned_kpi = await prisma.assigned_kpi.create({
     *   data: {
     *     // ... data to create a Assigned_kpi
     *   }
     * })
     * 
     */
    create<T extends assigned_kpiCreateArgs>(args: SelectSubset<T, assigned_kpiCreateArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assigned_kpis.
     * @param {assigned_kpiCreateManyArgs} args - Arguments to create many Assigned_kpis.
     * @example
     * // Create many Assigned_kpis
     * const assigned_kpi = await prisma.assigned_kpi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assigned_kpiCreateManyArgs>(args?: SelectSubset<T, assigned_kpiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assigned_kpis and returns the data saved in the database.
     * @param {assigned_kpiCreateManyAndReturnArgs} args - Arguments to create many Assigned_kpis.
     * @example
     * // Create many Assigned_kpis
     * const assigned_kpi = await prisma.assigned_kpi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assigned_kpis and only return the `assigned_kpi_id`
     * const assigned_kpiWithAssigned_kpi_idOnly = await prisma.assigned_kpi.createManyAndReturn({
     *   select: { assigned_kpi_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends assigned_kpiCreateManyAndReturnArgs>(args?: SelectSubset<T, assigned_kpiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assigned_kpi.
     * @param {assigned_kpiDeleteArgs} args - Arguments to delete one Assigned_kpi.
     * @example
     * // Delete one Assigned_kpi
     * const Assigned_kpi = await prisma.assigned_kpi.delete({
     *   where: {
     *     // ... filter to delete one Assigned_kpi
     *   }
     * })
     * 
     */
    delete<T extends assigned_kpiDeleteArgs>(args: SelectSubset<T, assigned_kpiDeleteArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assigned_kpi.
     * @param {assigned_kpiUpdateArgs} args - Arguments to update one Assigned_kpi.
     * @example
     * // Update one Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assigned_kpiUpdateArgs>(args: SelectSubset<T, assigned_kpiUpdateArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assigned_kpis.
     * @param {assigned_kpiDeleteManyArgs} args - Arguments to filter Assigned_kpis to delete.
     * @example
     * // Delete a few Assigned_kpis
     * const { count } = await prisma.assigned_kpi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assigned_kpiDeleteManyArgs>(args?: SelectSubset<T, assigned_kpiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assigned_kpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assigned_kpis
     * const assigned_kpi = await prisma.assigned_kpi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assigned_kpiUpdateManyArgs>(args: SelectSubset<T, assigned_kpiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assigned_kpis and returns the data updated in the database.
     * @param {assigned_kpiUpdateManyAndReturnArgs} args - Arguments to update many Assigned_kpis.
     * @example
     * // Update many Assigned_kpis
     * const assigned_kpi = await prisma.assigned_kpi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assigned_kpis and only return the `assigned_kpi_id`
     * const assigned_kpiWithAssigned_kpi_idOnly = await prisma.assigned_kpi.updateManyAndReturn({
     *   select: { assigned_kpi_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends assigned_kpiUpdateManyAndReturnArgs>(args: SelectSubset<T, assigned_kpiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assigned_kpi.
     * @param {assigned_kpiUpsertArgs} args - Arguments to update or create a Assigned_kpi.
     * @example
     * // Update or create a Assigned_kpi
     * const assigned_kpi = await prisma.assigned_kpi.upsert({
     *   create: {
     *     // ... data to create a Assigned_kpi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assigned_kpi we want to update
     *   }
     * })
     */
    upsert<T extends assigned_kpiUpsertArgs>(args: SelectSubset<T, assigned_kpiUpsertArgs<ExtArgs>>): Prisma__assigned_kpiClient<$Result.GetResult<Prisma.$assigned_kpiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assigned_kpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiCountArgs} args - Arguments to filter Assigned_kpis to count.
     * @example
     * // Count the number of Assigned_kpis
     * const count = await prisma.assigned_kpi.count({
     *   where: {
     *     // ... the filter for the Assigned_kpis we want to count
     *   }
     * })
    **/
    count<T extends assigned_kpiCountArgs>(
      args?: Subset<T, assigned_kpiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Assigned_kpiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assigned_kpi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Assigned_kpiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Assigned_kpiAggregateArgs>(args: Subset<T, Assigned_kpiAggregateArgs>): Prisma.PrismaPromise<GetAssigned_kpiAggregateType<T>>

    /**
     * Group by Assigned_kpi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assigned_kpiGroupByArgs} args - Group by arguments.
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
      T extends assigned_kpiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assigned_kpiGroupByArgs['orderBy'] }
        : { orderBy?: assigned_kpiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, assigned_kpiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssigned_kpiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assigned_kpi model
   */
  readonly fields: assigned_kpiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assigned_kpi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assigned_kpiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pillar<T extends pillarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pillarsDefaultArgs<ExtArgs>>): Prisma__pillarsClient<$Result.GetResult<Prisma.$pillarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the assigned_kpi model
   */ 
  interface assigned_kpiFieldRefs {
    readonly assigned_kpi_id: FieldRef<"assigned_kpi", 'Int'>
    readonly pillar_id: FieldRef<"assigned_kpi", 'Int'>
    readonly kpi_name: FieldRef<"assigned_kpi", 'String'>
    readonly kpi_status: FieldRef<"assigned_kpi", 'String'>
    readonly form_data: FieldRef<"assigned_kpi", 'Json'>
    readonly added_date: FieldRef<"assigned_kpi", 'DateTime'>
    readonly resolved_date: FieldRef<"assigned_kpi", 'DateTime'>
    readonly comments: FieldRef<"assigned_kpi", 'String'>
    readonly kpi_value: FieldRef<"assigned_kpi", 'Float'>
    readonly kpi_description: FieldRef<"assigned_kpi", 'String'>
    readonly form_input: FieldRef<"assigned_kpi", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * assigned_kpi findUnique
   */
  export type assigned_kpiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter, which assigned_kpi to fetch.
     */
    where: assigned_kpiWhereUniqueInput
  }

  /**
   * assigned_kpi findUniqueOrThrow
   */
  export type assigned_kpiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter, which assigned_kpi to fetch.
     */
    where: assigned_kpiWhereUniqueInput
  }

  /**
   * assigned_kpi findFirst
   */
  export type assigned_kpiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter, which assigned_kpi to fetch.
     */
    where?: assigned_kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_kpis to fetch.
     */
    orderBy?: assigned_kpiOrderByWithRelationInput | assigned_kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assigned_kpis.
     */
    cursor?: assigned_kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assigned_kpis.
     */
    distinct?: Assigned_kpiScalarFieldEnum | Assigned_kpiScalarFieldEnum[]
  }

  /**
   * assigned_kpi findFirstOrThrow
   */
  export type assigned_kpiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter, which assigned_kpi to fetch.
     */
    where?: assigned_kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_kpis to fetch.
     */
    orderBy?: assigned_kpiOrderByWithRelationInput | assigned_kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assigned_kpis.
     */
    cursor?: assigned_kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assigned_kpis.
     */
    distinct?: Assigned_kpiScalarFieldEnum | Assigned_kpiScalarFieldEnum[]
  }

  /**
   * assigned_kpi findMany
   */
  export type assigned_kpiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter, which assigned_kpis to fetch.
     */
    where?: assigned_kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assigned_kpis to fetch.
     */
    orderBy?: assigned_kpiOrderByWithRelationInput | assigned_kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assigned_kpis.
     */
    cursor?: assigned_kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assigned_kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assigned_kpis.
     */
    skip?: number
    distinct?: Assigned_kpiScalarFieldEnum | Assigned_kpiScalarFieldEnum[]
  }

  /**
   * assigned_kpi create
   */
  export type assigned_kpiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * The data needed to create a assigned_kpi.
     */
    data: XOR<assigned_kpiCreateInput, assigned_kpiUncheckedCreateInput>
  }

  /**
   * assigned_kpi createMany
   */
  export type assigned_kpiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assigned_kpis.
     */
    data: assigned_kpiCreateManyInput | assigned_kpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assigned_kpi createManyAndReturn
   */
  export type assigned_kpiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * The data used to create many assigned_kpis.
     */
    data: assigned_kpiCreateManyInput | assigned_kpiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * assigned_kpi update
   */
  export type assigned_kpiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * The data needed to update a assigned_kpi.
     */
    data: XOR<assigned_kpiUpdateInput, assigned_kpiUncheckedUpdateInput>
    /**
     * Choose, which assigned_kpi to update.
     */
    where: assigned_kpiWhereUniqueInput
  }

  /**
   * assigned_kpi updateMany
   */
  export type assigned_kpiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assigned_kpis.
     */
    data: XOR<assigned_kpiUpdateManyMutationInput, assigned_kpiUncheckedUpdateManyInput>
    /**
     * Filter which assigned_kpis to update
     */
    where?: assigned_kpiWhereInput
    /**
     * Limit how many assigned_kpis to update.
     */
    limit?: number
  }

  /**
   * assigned_kpi updateManyAndReturn
   */
  export type assigned_kpiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * The data used to update assigned_kpis.
     */
    data: XOR<assigned_kpiUpdateManyMutationInput, assigned_kpiUncheckedUpdateManyInput>
    /**
     * Filter which assigned_kpis to update
     */
    where?: assigned_kpiWhereInput
    /**
     * Limit how many assigned_kpis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * assigned_kpi upsert
   */
  export type assigned_kpiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * The filter to search for the assigned_kpi to update in case it exists.
     */
    where: assigned_kpiWhereUniqueInput
    /**
     * In case the assigned_kpi found by the `where` argument doesn't exist, create a new assigned_kpi with this data.
     */
    create: XOR<assigned_kpiCreateInput, assigned_kpiUncheckedCreateInput>
    /**
     * In case the assigned_kpi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assigned_kpiUpdateInput, assigned_kpiUncheckedUpdateInput>
  }

  /**
   * assigned_kpi delete
   */
  export type assigned_kpiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
    /**
     * Filter which assigned_kpi to delete.
     */
    where: assigned_kpiWhereUniqueInput
  }

  /**
   * assigned_kpi deleteMany
   */
  export type assigned_kpiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assigned_kpis to delete
     */
    where?: assigned_kpiWhereInput
    /**
     * Limit how many assigned_kpis to delete.
     */
    limit?: number
  }

  /**
   * assigned_kpi without action
   */
  export type assigned_kpiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assigned_kpi
     */
    select?: assigned_kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assigned_kpi
     */
    omit?: assigned_kpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assigned_kpiInclude<ExtArgs> | null
  }


  /**
   * Model kpi
   */

  export type AggregateKpi = {
    _count: KpiCountAggregateOutputType | null
    _avg: KpiAvgAggregateOutputType | null
    _sum: KpiSumAggregateOutputType | null
    _min: KpiMinAggregateOutputType | null
    _max: KpiMaxAggregateOutputType | null
  }

  export type KpiAvgAggregateOutputType = {
    kpi_id: number | null
    kpi_value: number | null
  }

  export type KpiSumAggregateOutputType = {
    kpi_id: number | null
    kpi_value: number | null
  }

  export type KpiMinAggregateOutputType = {
    kpi_id: number | null
    kpi_name: string | null
    kpi_created_at: Date | null
    kpi_updated_at: Date | null
    kpi_value: number | null
    kpi_description: string | null
  }

  export type KpiMaxAggregateOutputType = {
    kpi_id: number | null
    kpi_name: string | null
    kpi_created_at: Date | null
    kpi_updated_at: Date | null
    kpi_value: number | null
    kpi_description: string | null
  }

  export type KpiCountAggregateOutputType = {
    kpi_id: number
    kpi_name: number
    kpi_created_at: number
    kpi_updated_at: number
    form_data: number
    kpi_value: number
    kpi_description: number
    _all: number
  }


  export type KpiAvgAggregateInputType = {
    kpi_id?: true
    kpi_value?: true
  }

  export type KpiSumAggregateInputType = {
    kpi_id?: true
    kpi_value?: true
  }

  export type KpiMinAggregateInputType = {
    kpi_id?: true
    kpi_name?: true
    kpi_created_at?: true
    kpi_updated_at?: true
    kpi_value?: true
    kpi_description?: true
  }

  export type KpiMaxAggregateInputType = {
    kpi_id?: true
    kpi_name?: true
    kpi_created_at?: true
    kpi_updated_at?: true
    kpi_value?: true
    kpi_description?: true
  }

  export type KpiCountAggregateInputType = {
    kpi_id?: true
    kpi_name?: true
    kpi_created_at?: true
    kpi_updated_at?: true
    form_data?: true
    kpi_value?: true
    kpi_description?: true
    _all?: true
  }

  export type KpiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kpi to aggregate.
     */
    where?: kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kpis to fetch.
     */
    orderBy?: kpiOrderByWithRelationInput | kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kpis
    **/
    _count?: true | KpiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KpiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KpiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KpiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KpiMaxAggregateInputType
  }

  export type GetKpiAggregateType<T extends KpiAggregateArgs> = {
        [P in keyof T & keyof AggregateKpi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKpi[P]>
      : GetScalarType<T[P], AggregateKpi[P]>
  }




  export type kpiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kpiWhereInput
    orderBy?: kpiOrderByWithAggregationInput | kpiOrderByWithAggregationInput[]
    by: KpiScalarFieldEnum[] | KpiScalarFieldEnum
    having?: kpiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KpiCountAggregateInputType | true
    _avg?: KpiAvgAggregateInputType
    _sum?: KpiSumAggregateInputType
    _min?: KpiMinAggregateInputType
    _max?: KpiMaxAggregateInputType
  }

  export type KpiGroupByOutputType = {
    kpi_id: number
    kpi_name: string
    kpi_created_at: Date | null
    kpi_updated_at: Date | null
    form_data: JsonValue
    kpi_value: number | null
    kpi_description: string | null
    _count: KpiCountAggregateOutputType | null
    _avg: KpiAvgAggregateOutputType | null
    _sum: KpiSumAggregateOutputType | null
    _min: KpiMinAggregateOutputType | null
    _max: KpiMaxAggregateOutputType | null
  }

  type GetKpiGroupByPayload<T extends kpiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KpiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KpiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KpiGroupByOutputType[P]>
            : GetScalarType<T[P], KpiGroupByOutputType[P]>
        }
      >
    >


  export type kpiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kpi_id?: boolean
    kpi_name?: boolean
    kpi_created_at?: boolean
    kpi_updated_at?: boolean
    form_data?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
  }, ExtArgs["result"]["kpi"]>

  export type kpiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kpi_id?: boolean
    kpi_name?: boolean
    kpi_created_at?: boolean
    kpi_updated_at?: boolean
    form_data?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
  }, ExtArgs["result"]["kpi"]>

  export type kpiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kpi_id?: boolean
    kpi_name?: boolean
    kpi_created_at?: boolean
    kpi_updated_at?: boolean
    form_data?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
  }, ExtArgs["result"]["kpi"]>

  export type kpiSelectScalar = {
    kpi_id?: boolean
    kpi_name?: boolean
    kpi_created_at?: boolean
    kpi_updated_at?: boolean
    form_data?: boolean
    kpi_value?: boolean
    kpi_description?: boolean
  }

  export type kpiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kpi_id" | "kpi_name" | "kpi_created_at" | "kpi_updated_at" | "form_data" | "kpi_value" | "kpi_description", ExtArgs["result"]["kpi"]>

  export type $kpiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kpi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kpi_id: number
      kpi_name: string
      kpi_created_at: Date | null
      kpi_updated_at: Date | null
      form_data: Prisma.JsonValue
      kpi_value: number | null
      kpi_description: string | null
    }, ExtArgs["result"]["kpi"]>
    composites: {}
  }

  type kpiGetPayload<S extends boolean | null | undefined | kpiDefaultArgs> = $Result.GetResult<Prisma.$kpiPayload, S>

  type kpiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kpiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KpiCountAggregateInputType | true
    }

  export interface kpiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kpi'], meta: { name: 'kpi' } }
    /**
     * Find zero or one Kpi that matches the filter.
     * @param {kpiFindUniqueArgs} args - Arguments to find a Kpi
     * @example
     * // Get one Kpi
     * const kpi = await prisma.kpi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kpiFindUniqueArgs>(args: SelectSubset<T, kpiFindUniqueArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kpi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kpiFindUniqueOrThrowArgs} args - Arguments to find a Kpi
     * @example
     * // Get one Kpi
     * const kpi = await prisma.kpi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kpiFindUniqueOrThrowArgs>(args: SelectSubset<T, kpiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kpi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiFindFirstArgs} args - Arguments to find a Kpi
     * @example
     * // Get one Kpi
     * const kpi = await prisma.kpi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kpiFindFirstArgs>(args?: SelectSubset<T, kpiFindFirstArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kpi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiFindFirstOrThrowArgs} args - Arguments to find a Kpi
     * @example
     * // Get one Kpi
     * const kpi = await prisma.kpi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kpiFindFirstOrThrowArgs>(args?: SelectSubset<T, kpiFindFirstOrThrowArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kpis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kpis
     * const kpis = await prisma.kpi.findMany()
     * 
     * // Get first 10 Kpis
     * const kpis = await prisma.kpi.findMany({ take: 10 })
     * 
     * // Only select the `kpi_id`
     * const kpiWithKpi_idOnly = await prisma.kpi.findMany({ select: { kpi_id: true } })
     * 
     */
    findMany<T extends kpiFindManyArgs>(args?: SelectSubset<T, kpiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kpi.
     * @param {kpiCreateArgs} args - Arguments to create a Kpi.
     * @example
     * // Create one Kpi
     * const Kpi = await prisma.kpi.create({
     *   data: {
     *     // ... data to create a Kpi
     *   }
     * })
     * 
     */
    create<T extends kpiCreateArgs>(args: SelectSubset<T, kpiCreateArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kpis.
     * @param {kpiCreateManyArgs} args - Arguments to create many Kpis.
     * @example
     * // Create many Kpis
     * const kpi = await prisma.kpi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kpiCreateManyArgs>(args?: SelectSubset<T, kpiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kpis and returns the data saved in the database.
     * @param {kpiCreateManyAndReturnArgs} args - Arguments to create many Kpis.
     * @example
     * // Create many Kpis
     * const kpi = await prisma.kpi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kpis and only return the `kpi_id`
     * const kpiWithKpi_idOnly = await prisma.kpi.createManyAndReturn({
     *   select: { kpi_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kpiCreateManyAndReturnArgs>(args?: SelectSubset<T, kpiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kpi.
     * @param {kpiDeleteArgs} args - Arguments to delete one Kpi.
     * @example
     * // Delete one Kpi
     * const Kpi = await prisma.kpi.delete({
     *   where: {
     *     // ... filter to delete one Kpi
     *   }
     * })
     * 
     */
    delete<T extends kpiDeleteArgs>(args: SelectSubset<T, kpiDeleteArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kpi.
     * @param {kpiUpdateArgs} args - Arguments to update one Kpi.
     * @example
     * // Update one Kpi
     * const kpi = await prisma.kpi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kpiUpdateArgs>(args: SelectSubset<T, kpiUpdateArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kpis.
     * @param {kpiDeleteManyArgs} args - Arguments to filter Kpis to delete.
     * @example
     * // Delete a few Kpis
     * const { count } = await prisma.kpi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kpiDeleteManyArgs>(args?: SelectSubset<T, kpiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kpis
     * const kpi = await prisma.kpi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kpiUpdateManyArgs>(args: SelectSubset<T, kpiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kpis and returns the data updated in the database.
     * @param {kpiUpdateManyAndReturnArgs} args - Arguments to update many Kpis.
     * @example
     * // Update many Kpis
     * const kpi = await prisma.kpi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kpis and only return the `kpi_id`
     * const kpiWithKpi_idOnly = await prisma.kpi.updateManyAndReturn({
     *   select: { kpi_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kpiUpdateManyAndReturnArgs>(args: SelectSubset<T, kpiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kpi.
     * @param {kpiUpsertArgs} args - Arguments to update or create a Kpi.
     * @example
     * // Update or create a Kpi
     * const kpi = await prisma.kpi.upsert({
     *   create: {
     *     // ... data to create a Kpi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kpi we want to update
     *   }
     * })
     */
    upsert<T extends kpiUpsertArgs>(args: SelectSubset<T, kpiUpsertArgs<ExtArgs>>): Prisma__kpiClient<$Result.GetResult<Prisma.$kpiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiCountArgs} args - Arguments to filter Kpis to count.
     * @example
     * // Count the number of Kpis
     * const count = await prisma.kpi.count({
     *   where: {
     *     // ... the filter for the Kpis we want to count
     *   }
     * })
    **/
    count<T extends kpiCountArgs>(
      args?: Subset<T, kpiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KpiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kpi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KpiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KpiAggregateArgs>(args: Subset<T, KpiAggregateArgs>): Prisma.PrismaPromise<GetKpiAggregateType<T>>

    /**
     * Group by Kpi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kpiGroupByArgs} args - Group by arguments.
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
      T extends kpiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kpiGroupByArgs['orderBy'] }
        : { orderBy?: kpiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kpiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKpiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kpi model
   */
  readonly fields: kpiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kpi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kpiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the kpi model
   */ 
  interface kpiFieldRefs {
    readonly kpi_id: FieldRef<"kpi", 'Int'>
    readonly kpi_name: FieldRef<"kpi", 'String'>
    readonly kpi_created_at: FieldRef<"kpi", 'DateTime'>
    readonly kpi_updated_at: FieldRef<"kpi", 'DateTime'>
    readonly form_data: FieldRef<"kpi", 'Json'>
    readonly kpi_value: FieldRef<"kpi", 'Float'>
    readonly kpi_description: FieldRef<"kpi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kpi findUnique
   */
  export type kpiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter, which kpi to fetch.
     */
    where: kpiWhereUniqueInput
  }

  /**
   * kpi findUniqueOrThrow
   */
  export type kpiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter, which kpi to fetch.
     */
    where: kpiWhereUniqueInput
  }

  /**
   * kpi findFirst
   */
  export type kpiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter, which kpi to fetch.
     */
    where?: kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kpis to fetch.
     */
    orderBy?: kpiOrderByWithRelationInput | kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kpis.
     */
    cursor?: kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kpis.
     */
    distinct?: KpiScalarFieldEnum | KpiScalarFieldEnum[]
  }

  /**
   * kpi findFirstOrThrow
   */
  export type kpiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter, which kpi to fetch.
     */
    where?: kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kpis to fetch.
     */
    orderBy?: kpiOrderByWithRelationInput | kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kpis.
     */
    cursor?: kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kpis.
     */
    distinct?: KpiScalarFieldEnum | KpiScalarFieldEnum[]
  }

  /**
   * kpi findMany
   */
  export type kpiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter, which kpis to fetch.
     */
    where?: kpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kpis to fetch.
     */
    orderBy?: kpiOrderByWithRelationInput | kpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kpis.
     */
    cursor?: kpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kpis.
     */
    skip?: number
    distinct?: KpiScalarFieldEnum | KpiScalarFieldEnum[]
  }

  /**
   * kpi create
   */
  export type kpiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * The data needed to create a kpi.
     */
    data: XOR<kpiCreateInput, kpiUncheckedCreateInput>
  }

  /**
   * kpi createMany
   */
  export type kpiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kpis.
     */
    data: kpiCreateManyInput | kpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kpi createManyAndReturn
   */
  export type kpiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * The data used to create many kpis.
     */
    data: kpiCreateManyInput | kpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kpi update
   */
  export type kpiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * The data needed to update a kpi.
     */
    data: XOR<kpiUpdateInput, kpiUncheckedUpdateInput>
    /**
     * Choose, which kpi to update.
     */
    where: kpiWhereUniqueInput
  }

  /**
   * kpi updateMany
   */
  export type kpiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kpis.
     */
    data: XOR<kpiUpdateManyMutationInput, kpiUncheckedUpdateManyInput>
    /**
     * Filter which kpis to update
     */
    where?: kpiWhereInput
    /**
     * Limit how many kpis to update.
     */
    limit?: number
  }

  /**
   * kpi updateManyAndReturn
   */
  export type kpiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * The data used to update kpis.
     */
    data: XOR<kpiUpdateManyMutationInput, kpiUncheckedUpdateManyInput>
    /**
     * Filter which kpis to update
     */
    where?: kpiWhereInput
    /**
     * Limit how many kpis to update.
     */
    limit?: number
  }

  /**
   * kpi upsert
   */
  export type kpiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * The filter to search for the kpi to update in case it exists.
     */
    where: kpiWhereUniqueInput
    /**
     * In case the kpi found by the `where` argument doesn't exist, create a new kpi with this data.
     */
    create: XOR<kpiCreateInput, kpiUncheckedCreateInput>
    /**
     * In case the kpi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kpiUpdateInput, kpiUncheckedUpdateInput>
  }

  /**
   * kpi delete
   */
  export type kpiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
    /**
     * Filter which kpi to delete.
     */
    where: kpiWhereUniqueInput
  }

  /**
   * kpi deleteMany
   */
  export type kpiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kpis to delete
     */
    where?: kpiWhereInput
    /**
     * Limit how many kpis to delete.
     */
    limit?: number
  }

  /**
   * kpi without action
   */
  export type kpiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kpi
     */
    select?: kpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kpi
     */
    omit?: kpiOmit<ExtArgs> | null
  }


  /**
   * Model qoc
   */

  export type AggregateQoc = {
    _count: QocCountAggregateOutputType | null
    _avg: QocAvgAggregateOutputType | null
    _sum: QocSumAggregateOutputType | null
    _min: QocMinAggregateOutputType | null
    _max: QocMaxAggregateOutputType | null
  }

  export type QocAvgAggregateOutputType = {
    qoc_id: number | null
  }

  export type QocSumAggregateOutputType = {
    qoc_id: number | null
  }

  export type QocMinAggregateOutputType = {
    qoc_id: number | null
    qoc_name: string | null
    qoc_email: string | null
    qoc_password: string | null
    qoc_role: string | null
  }

  export type QocMaxAggregateOutputType = {
    qoc_id: number | null
    qoc_name: string | null
    qoc_email: string | null
    qoc_password: string | null
    qoc_role: string | null
  }

  export type QocCountAggregateOutputType = {
    qoc_id: number
    qoc_name: number
    qoc_email: number
    qoc_password: number
    qoc_role: number
    _all: number
  }


  export type QocAvgAggregateInputType = {
    qoc_id?: true
  }

  export type QocSumAggregateInputType = {
    qoc_id?: true
  }

  export type QocMinAggregateInputType = {
    qoc_id?: true
    qoc_name?: true
    qoc_email?: true
    qoc_password?: true
    qoc_role?: true
  }

  export type QocMaxAggregateInputType = {
    qoc_id?: true
    qoc_name?: true
    qoc_email?: true
    qoc_password?: true
    qoc_role?: true
  }

  export type QocCountAggregateInputType = {
    qoc_id?: true
    qoc_name?: true
    qoc_email?: true
    qoc_password?: true
    qoc_role?: true
    _all?: true
  }

  export type QocAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qoc to aggregate.
     */
    where?: qocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qocs to fetch.
     */
    orderBy?: qocOrderByWithRelationInput | qocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qocs
    **/
    _count?: true | QocCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QocAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QocSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QocMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QocMaxAggregateInputType
  }

  export type GetQocAggregateType<T extends QocAggregateArgs> = {
        [P in keyof T & keyof AggregateQoc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQoc[P]>
      : GetScalarType<T[P], AggregateQoc[P]>
  }




  export type qocGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qocWhereInput
    orderBy?: qocOrderByWithAggregationInput | qocOrderByWithAggregationInput[]
    by: QocScalarFieldEnum[] | QocScalarFieldEnum
    having?: qocScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QocCountAggregateInputType | true
    _avg?: QocAvgAggregateInputType
    _sum?: QocSumAggregateInputType
    _min?: QocMinAggregateInputType
    _max?: QocMaxAggregateInputType
  }

  export type QocGroupByOutputType = {
    qoc_id: number
    qoc_name: string
    qoc_email: string
    qoc_password: string
    qoc_role: string
    _count: QocCountAggregateOutputType | null
    _avg: QocAvgAggregateOutputType | null
    _sum: QocSumAggregateOutputType | null
    _min: QocMinAggregateOutputType | null
    _max: QocMaxAggregateOutputType | null
  }

  type GetQocGroupByPayload<T extends qocGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QocGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QocGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QocGroupByOutputType[P]>
            : GetScalarType<T[P], QocGroupByOutputType[P]>
        }
      >
    >


  export type qocSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qoc_id?: boolean
    qoc_name?: boolean
    qoc_email?: boolean
    qoc_password?: boolean
    qoc_role?: boolean
  }, ExtArgs["result"]["qoc"]>

  export type qocSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qoc_id?: boolean
    qoc_name?: boolean
    qoc_email?: boolean
    qoc_password?: boolean
    qoc_role?: boolean
  }, ExtArgs["result"]["qoc"]>

  export type qocSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qoc_id?: boolean
    qoc_name?: boolean
    qoc_email?: boolean
    qoc_password?: boolean
    qoc_role?: boolean
  }, ExtArgs["result"]["qoc"]>

  export type qocSelectScalar = {
    qoc_id?: boolean
    qoc_name?: boolean
    qoc_email?: boolean
    qoc_password?: boolean
    qoc_role?: boolean
  }

  export type qocOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"qoc_id" | "qoc_name" | "qoc_email" | "qoc_password" | "qoc_role", ExtArgs["result"]["qoc"]>

  export type $qocPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "qoc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      qoc_id: number
      qoc_name: string
      qoc_email: string
      qoc_password: string
      qoc_role: string
    }, ExtArgs["result"]["qoc"]>
    composites: {}
  }

  type qocGetPayload<S extends boolean | null | undefined | qocDefaultArgs> = $Result.GetResult<Prisma.$qocPayload, S>

  type qocCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<qocFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QocCountAggregateInputType | true
    }

  export interface qocDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['qoc'], meta: { name: 'qoc' } }
    /**
     * Find zero or one Qoc that matches the filter.
     * @param {qocFindUniqueArgs} args - Arguments to find a Qoc
     * @example
     * // Get one Qoc
     * const qoc = await prisma.qoc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends qocFindUniqueArgs>(args: SelectSubset<T, qocFindUniqueArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qoc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {qocFindUniqueOrThrowArgs} args - Arguments to find a Qoc
     * @example
     * // Get one Qoc
     * const qoc = await prisma.qoc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends qocFindUniqueOrThrowArgs>(args: SelectSubset<T, qocFindUniqueOrThrowArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qoc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocFindFirstArgs} args - Arguments to find a Qoc
     * @example
     * // Get one Qoc
     * const qoc = await prisma.qoc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends qocFindFirstArgs>(args?: SelectSubset<T, qocFindFirstArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qoc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocFindFirstOrThrowArgs} args - Arguments to find a Qoc
     * @example
     * // Get one Qoc
     * const qoc = await prisma.qoc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends qocFindFirstOrThrowArgs>(args?: SelectSubset<T, qocFindFirstOrThrowArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qocs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qocs
     * const qocs = await prisma.qoc.findMany()
     * 
     * // Get first 10 Qocs
     * const qocs = await prisma.qoc.findMany({ take: 10 })
     * 
     * // Only select the `qoc_id`
     * const qocWithQoc_idOnly = await prisma.qoc.findMany({ select: { qoc_id: true } })
     * 
     */
    findMany<T extends qocFindManyArgs>(args?: SelectSubset<T, qocFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qoc.
     * @param {qocCreateArgs} args - Arguments to create a Qoc.
     * @example
     * // Create one Qoc
     * const Qoc = await prisma.qoc.create({
     *   data: {
     *     // ... data to create a Qoc
     *   }
     * })
     * 
     */
    create<T extends qocCreateArgs>(args: SelectSubset<T, qocCreateArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qocs.
     * @param {qocCreateManyArgs} args - Arguments to create many Qocs.
     * @example
     * // Create many Qocs
     * const qoc = await prisma.qoc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends qocCreateManyArgs>(args?: SelectSubset<T, qocCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qocs and returns the data saved in the database.
     * @param {qocCreateManyAndReturnArgs} args - Arguments to create many Qocs.
     * @example
     * // Create many Qocs
     * const qoc = await prisma.qoc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qocs and only return the `qoc_id`
     * const qocWithQoc_idOnly = await prisma.qoc.createManyAndReturn({
     *   select: { qoc_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends qocCreateManyAndReturnArgs>(args?: SelectSubset<T, qocCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qoc.
     * @param {qocDeleteArgs} args - Arguments to delete one Qoc.
     * @example
     * // Delete one Qoc
     * const Qoc = await prisma.qoc.delete({
     *   where: {
     *     // ... filter to delete one Qoc
     *   }
     * })
     * 
     */
    delete<T extends qocDeleteArgs>(args: SelectSubset<T, qocDeleteArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qoc.
     * @param {qocUpdateArgs} args - Arguments to update one Qoc.
     * @example
     * // Update one Qoc
     * const qoc = await prisma.qoc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends qocUpdateArgs>(args: SelectSubset<T, qocUpdateArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qocs.
     * @param {qocDeleteManyArgs} args - Arguments to filter Qocs to delete.
     * @example
     * // Delete a few Qocs
     * const { count } = await prisma.qoc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends qocDeleteManyArgs>(args?: SelectSubset<T, qocDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qocs
     * const qoc = await prisma.qoc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends qocUpdateManyArgs>(args: SelectSubset<T, qocUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qocs and returns the data updated in the database.
     * @param {qocUpdateManyAndReturnArgs} args - Arguments to update many Qocs.
     * @example
     * // Update many Qocs
     * const qoc = await prisma.qoc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qocs and only return the `qoc_id`
     * const qocWithQoc_idOnly = await prisma.qoc.updateManyAndReturn({
     *   select: { qoc_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends qocUpdateManyAndReturnArgs>(args: SelectSubset<T, qocUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qoc.
     * @param {qocUpsertArgs} args - Arguments to update or create a Qoc.
     * @example
     * // Update or create a Qoc
     * const qoc = await prisma.qoc.upsert({
     *   create: {
     *     // ... data to create a Qoc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qoc we want to update
     *   }
     * })
     */
    upsert<T extends qocUpsertArgs>(args: SelectSubset<T, qocUpsertArgs<ExtArgs>>): Prisma__qocClient<$Result.GetResult<Prisma.$qocPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocCountArgs} args - Arguments to filter Qocs to count.
     * @example
     * // Count the number of Qocs
     * const count = await prisma.qoc.count({
     *   where: {
     *     // ... the filter for the Qocs we want to count
     *   }
     * })
    **/
    count<T extends qocCountArgs>(
      args?: Subset<T, qocCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QocCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QocAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QocAggregateArgs>(args: Subset<T, QocAggregateArgs>): Prisma.PrismaPromise<GetQocAggregateType<T>>

    /**
     * Group by Qoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qocGroupByArgs} args - Group by arguments.
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
      T extends qocGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: qocGroupByArgs['orderBy'] }
        : { orderBy?: qocGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, qocGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQocGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the qoc model
   */
  readonly fields: qocFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for qoc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__qocClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the qoc model
   */ 
  interface qocFieldRefs {
    readonly qoc_id: FieldRef<"qoc", 'Int'>
    readonly qoc_name: FieldRef<"qoc", 'String'>
    readonly qoc_email: FieldRef<"qoc", 'String'>
    readonly qoc_password: FieldRef<"qoc", 'String'>
    readonly qoc_role: FieldRef<"qoc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * qoc findUnique
   */
  export type qocFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter, which qoc to fetch.
     */
    where: qocWhereUniqueInput
  }

  /**
   * qoc findUniqueOrThrow
   */
  export type qocFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter, which qoc to fetch.
     */
    where: qocWhereUniqueInput
  }

  /**
   * qoc findFirst
   */
  export type qocFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter, which qoc to fetch.
     */
    where?: qocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qocs to fetch.
     */
    orderBy?: qocOrderByWithRelationInput | qocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qocs.
     */
    cursor?: qocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qocs.
     */
    distinct?: QocScalarFieldEnum | QocScalarFieldEnum[]
  }

  /**
   * qoc findFirstOrThrow
   */
  export type qocFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter, which qoc to fetch.
     */
    where?: qocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qocs to fetch.
     */
    orderBy?: qocOrderByWithRelationInput | qocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qocs.
     */
    cursor?: qocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qocs.
     */
    distinct?: QocScalarFieldEnum | QocScalarFieldEnum[]
  }

  /**
   * qoc findMany
   */
  export type qocFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter, which qocs to fetch.
     */
    where?: qocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qocs to fetch.
     */
    orderBy?: qocOrderByWithRelationInput | qocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qocs.
     */
    cursor?: qocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qocs.
     */
    skip?: number
    distinct?: QocScalarFieldEnum | QocScalarFieldEnum[]
  }

  /**
   * qoc create
   */
  export type qocCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * The data needed to create a qoc.
     */
    data: XOR<qocCreateInput, qocUncheckedCreateInput>
  }

  /**
   * qoc createMany
   */
  export type qocCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many qocs.
     */
    data: qocCreateManyInput | qocCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * qoc createManyAndReturn
   */
  export type qocCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * The data used to create many qocs.
     */
    data: qocCreateManyInput | qocCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * qoc update
   */
  export type qocUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * The data needed to update a qoc.
     */
    data: XOR<qocUpdateInput, qocUncheckedUpdateInput>
    /**
     * Choose, which qoc to update.
     */
    where: qocWhereUniqueInput
  }

  /**
   * qoc updateMany
   */
  export type qocUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update qocs.
     */
    data: XOR<qocUpdateManyMutationInput, qocUncheckedUpdateManyInput>
    /**
     * Filter which qocs to update
     */
    where?: qocWhereInput
    /**
     * Limit how many qocs to update.
     */
    limit?: number
  }

  /**
   * qoc updateManyAndReturn
   */
  export type qocUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * The data used to update qocs.
     */
    data: XOR<qocUpdateManyMutationInput, qocUncheckedUpdateManyInput>
    /**
     * Filter which qocs to update
     */
    where?: qocWhereInput
    /**
     * Limit how many qocs to update.
     */
    limit?: number
  }

  /**
   * qoc upsert
   */
  export type qocUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * The filter to search for the qoc to update in case it exists.
     */
    where: qocWhereUniqueInput
    /**
     * In case the qoc found by the `where` argument doesn't exist, create a new qoc with this data.
     */
    create: XOR<qocCreateInput, qocUncheckedCreateInput>
    /**
     * In case the qoc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qocUpdateInput, qocUncheckedUpdateInput>
  }

  /**
   * qoc delete
   */
  export type qocDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
    /**
     * Filter which qoc to delete.
     */
    where: qocWhereUniqueInput
  }

  /**
   * qoc deleteMany
   */
  export type qocDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qocs to delete
     */
    where?: qocWhereInput
    /**
     * Limit how many qocs to delete.
     */
    limit?: number
  }

  /**
   * qoc without action
   */
  export type qocDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qoc
     */
    select?: qocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qoc
     */
    omit?: qocOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_password: 'user_password',
    user_role: 'user_role',
    dept_id: 'dept_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    dept_id: 'dept_id',
    dept_name: 'dept_name',
    hod_id: 'hod_id',
    dept_creation: 'dept_creation',
    hod_name: 'hod_name'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const PillarsScalarFieldEnum: {
    pillar_id: 'pillar_id',
    pillar_name: 'pillar_name',
    pillar_creation: 'pillar_creation',
    department_id: 'department_id'
  };

  export type PillarsScalarFieldEnum = (typeof PillarsScalarFieldEnum)[keyof typeof PillarsScalarFieldEnum]


  export const Assigned_kpiScalarFieldEnum: {
    assigned_kpi_id: 'assigned_kpi_id',
    pillar_id: 'pillar_id',
    kpi_name: 'kpi_name',
    kpi_status: 'kpi_status',
    form_data: 'form_data',
    added_date: 'added_date',
    resolved_date: 'resolved_date',
    comments: 'comments',
    kpi_value: 'kpi_value',
    kpi_description: 'kpi_description',
    form_input: 'form_input'
  };

  export type Assigned_kpiScalarFieldEnum = (typeof Assigned_kpiScalarFieldEnum)[keyof typeof Assigned_kpiScalarFieldEnum]


  export const KpiScalarFieldEnum: {
    kpi_id: 'kpi_id',
    kpi_name: 'kpi_name',
    kpi_created_at: 'kpi_created_at',
    kpi_updated_at: 'kpi_updated_at',
    form_data: 'form_data',
    kpi_value: 'kpi_value',
    kpi_description: 'kpi_description'
  };

  export type KpiScalarFieldEnum = (typeof KpiScalarFieldEnum)[keyof typeof KpiScalarFieldEnum]


  export const QocScalarFieldEnum: {
    qoc_id: 'qoc_id',
    qoc_name: 'qoc_name',
    qoc_email: 'qoc_email',
    qoc_password: 'qoc_password',
    qoc_role: 'qoc_role'
  };

  export type QocScalarFieldEnum = (typeof QocScalarFieldEnum)[keyof typeof QocScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_name?: StringFilter<"users"> | string
    user_email?: StringFilter<"users"> | string
    user_password?: StringFilter<"users"> | string
    user_role?: StringFilter<"users"> | string
    dept_id?: IntNullableFilter<"users"> | number | null
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_role?: SortOrder
    dept_id?: SortOrderInput | SortOrder
    department?: departmentsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_name?: StringFilter<"users"> | string
    user_password?: StringFilter<"users"> | string
    user_role?: StringFilter<"users"> | string
    dept_id?: IntNullableFilter<"users"> | number | null
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }, "user_id" | "user_email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_role?: SortOrder
    dept_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    user_name?: StringWithAggregatesFilter<"users"> | string
    user_email?: StringWithAggregatesFilter<"users"> | string
    user_password?: StringWithAggregatesFilter<"users"> | string
    user_role?: StringWithAggregatesFilter<"users"> | string
    dept_id?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type departmentsWhereInput = {
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    dept_id?: IntFilter<"departments"> | number
    dept_name?: StringFilter<"departments"> | string
    hod_id?: IntNullableFilter<"departments"> | number | null
    dept_creation?: DateTimeNullableFilter<"departments"> | Date | string | null
    hod_name?: StringNullableFilter<"departments"> | string | null
    pillars?: PillarsListRelationFilter
    members?: UsersListRelationFilter
  }

  export type departmentsOrderByWithRelationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    hod_id?: SortOrderInput | SortOrder
    dept_creation?: SortOrderInput | SortOrder
    hod_name?: SortOrderInput | SortOrder
    pillars?: pillarsOrderByRelationAggregateInput
    members?: usersOrderByRelationAggregateInput
  }

  export type departmentsWhereUniqueInput = Prisma.AtLeast<{
    dept_id?: number
    dept_name?: string
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    hod_id?: IntNullableFilter<"departments"> | number | null
    dept_creation?: DateTimeNullableFilter<"departments"> | Date | string | null
    hod_name?: StringNullableFilter<"departments"> | string | null
    pillars?: PillarsListRelationFilter
    members?: UsersListRelationFilter
  }, "dept_id" | "dept_name">

  export type departmentsOrderByWithAggregationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    hod_id?: SortOrderInput | SortOrder
    dept_creation?: SortOrderInput | SortOrder
    hod_name?: SortOrderInput | SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _avg?: departmentsAvgOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
    _sum?: departmentsSumOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    OR?: departmentsScalarWhereWithAggregatesInput[]
    NOT?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    dept_id?: IntWithAggregatesFilter<"departments"> | number
    dept_name?: StringWithAggregatesFilter<"departments"> | string
    hod_id?: IntNullableWithAggregatesFilter<"departments"> | number | null
    dept_creation?: DateTimeNullableWithAggregatesFilter<"departments"> | Date | string | null
    hod_name?: StringNullableWithAggregatesFilter<"departments"> | string | null
  }

  export type pillarsWhereInput = {
    AND?: pillarsWhereInput | pillarsWhereInput[]
    OR?: pillarsWhereInput[]
    NOT?: pillarsWhereInput | pillarsWhereInput[]
    pillar_id?: IntFilter<"pillars"> | number
    pillar_name?: StringFilter<"pillars"> | string
    pillar_creation?: DateTimeNullableFilter<"pillars"> | Date | string | null
    department_id?: IntFilter<"pillars"> | number
    assigned_kpi?: Assigned_kpiListRelationFilter
    department?: XOR<DepartmentsScalarRelationFilter, departmentsWhereInput>
  }

  export type pillarsOrderByWithRelationInput = {
    pillar_id?: SortOrder
    pillar_name?: SortOrder
    pillar_creation?: SortOrderInput | SortOrder
    department_id?: SortOrder
    assigned_kpi?: assigned_kpiOrderByRelationAggregateInput
    department?: departmentsOrderByWithRelationInput
  }

  export type pillarsWhereUniqueInput = Prisma.AtLeast<{
    pillar_id?: number
    pillar_name_department_id?: pillarsPillar_nameDepartment_idCompoundUniqueInput
    AND?: pillarsWhereInput | pillarsWhereInput[]
    OR?: pillarsWhereInput[]
    NOT?: pillarsWhereInput | pillarsWhereInput[]
    pillar_name?: StringFilter<"pillars"> | string
    pillar_creation?: DateTimeNullableFilter<"pillars"> | Date | string | null
    department_id?: IntFilter<"pillars"> | number
    assigned_kpi?: Assigned_kpiListRelationFilter
    department?: XOR<DepartmentsScalarRelationFilter, departmentsWhereInput>
  }, "pillar_id" | "pillar_name_department_id">

  export type pillarsOrderByWithAggregationInput = {
    pillar_id?: SortOrder
    pillar_name?: SortOrder
    pillar_creation?: SortOrderInput | SortOrder
    department_id?: SortOrder
    _count?: pillarsCountOrderByAggregateInput
    _avg?: pillarsAvgOrderByAggregateInput
    _max?: pillarsMaxOrderByAggregateInput
    _min?: pillarsMinOrderByAggregateInput
    _sum?: pillarsSumOrderByAggregateInput
  }

  export type pillarsScalarWhereWithAggregatesInput = {
    AND?: pillarsScalarWhereWithAggregatesInput | pillarsScalarWhereWithAggregatesInput[]
    OR?: pillarsScalarWhereWithAggregatesInput[]
    NOT?: pillarsScalarWhereWithAggregatesInput | pillarsScalarWhereWithAggregatesInput[]
    pillar_id?: IntWithAggregatesFilter<"pillars"> | number
    pillar_name?: StringWithAggregatesFilter<"pillars"> | string
    pillar_creation?: DateTimeNullableWithAggregatesFilter<"pillars"> | Date | string | null
    department_id?: IntWithAggregatesFilter<"pillars"> | number
  }

  export type assigned_kpiWhereInput = {
    AND?: assigned_kpiWhereInput | assigned_kpiWhereInput[]
    OR?: assigned_kpiWhereInput[]
    NOT?: assigned_kpiWhereInput | assigned_kpiWhereInput[]
    assigned_kpi_id?: IntFilter<"assigned_kpi"> | number
    pillar_id?: IntFilter<"assigned_kpi"> | number
    kpi_name?: StringFilter<"assigned_kpi"> | string
    kpi_status?: StringFilter<"assigned_kpi"> | string
    form_data?: JsonFilter<"assigned_kpi">
    added_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    resolved_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    comments?: StringNullableFilter<"assigned_kpi"> | string | null
    kpi_value?: FloatNullableFilter<"assigned_kpi"> | number | null
    kpi_description?: StringNullableFilter<"assigned_kpi"> | string | null
    form_input?: JsonNullableFilter<"assigned_kpi">
    pillar?: XOR<PillarsScalarRelationFilter, pillarsWhereInput>
  }

  export type assigned_kpiOrderByWithRelationInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_name?: SortOrder
    kpi_status?: SortOrder
    form_data?: SortOrder
    added_date?: SortOrderInput | SortOrder
    resolved_date?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    kpi_value?: SortOrderInput | SortOrder
    kpi_description?: SortOrderInput | SortOrder
    form_input?: SortOrderInput | SortOrder
    pillar?: pillarsOrderByWithRelationInput
  }

  export type assigned_kpiWhereUniqueInput = Prisma.AtLeast<{
    assigned_kpi_id?: number
    AND?: assigned_kpiWhereInput | assigned_kpiWhereInput[]
    OR?: assigned_kpiWhereInput[]
    NOT?: assigned_kpiWhereInput | assigned_kpiWhereInput[]
    pillar_id?: IntFilter<"assigned_kpi"> | number
    kpi_name?: StringFilter<"assigned_kpi"> | string
    kpi_status?: StringFilter<"assigned_kpi"> | string
    form_data?: JsonFilter<"assigned_kpi">
    added_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    resolved_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    comments?: StringNullableFilter<"assigned_kpi"> | string | null
    kpi_value?: FloatNullableFilter<"assigned_kpi"> | number | null
    kpi_description?: StringNullableFilter<"assigned_kpi"> | string | null
    form_input?: JsonNullableFilter<"assigned_kpi">
    pillar?: XOR<PillarsScalarRelationFilter, pillarsWhereInput>
  }, "assigned_kpi_id">

  export type assigned_kpiOrderByWithAggregationInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_name?: SortOrder
    kpi_status?: SortOrder
    form_data?: SortOrder
    added_date?: SortOrderInput | SortOrder
    resolved_date?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    kpi_value?: SortOrderInput | SortOrder
    kpi_description?: SortOrderInput | SortOrder
    form_input?: SortOrderInput | SortOrder
    _count?: assigned_kpiCountOrderByAggregateInput
    _avg?: assigned_kpiAvgOrderByAggregateInput
    _max?: assigned_kpiMaxOrderByAggregateInput
    _min?: assigned_kpiMinOrderByAggregateInput
    _sum?: assigned_kpiSumOrderByAggregateInput
  }

  export type assigned_kpiScalarWhereWithAggregatesInput = {
    AND?: assigned_kpiScalarWhereWithAggregatesInput | assigned_kpiScalarWhereWithAggregatesInput[]
    OR?: assigned_kpiScalarWhereWithAggregatesInput[]
    NOT?: assigned_kpiScalarWhereWithAggregatesInput | assigned_kpiScalarWhereWithAggregatesInput[]
    assigned_kpi_id?: IntWithAggregatesFilter<"assigned_kpi"> | number
    pillar_id?: IntWithAggregatesFilter<"assigned_kpi"> | number
    kpi_name?: StringWithAggregatesFilter<"assigned_kpi"> | string
    kpi_status?: StringWithAggregatesFilter<"assigned_kpi"> | string
    form_data?: JsonWithAggregatesFilter<"assigned_kpi">
    added_date?: DateTimeNullableWithAggregatesFilter<"assigned_kpi"> | Date | string | null
    resolved_date?: DateTimeNullableWithAggregatesFilter<"assigned_kpi"> | Date | string | null
    comments?: StringNullableWithAggregatesFilter<"assigned_kpi"> | string | null
    kpi_value?: FloatNullableWithAggregatesFilter<"assigned_kpi"> | number | null
    kpi_description?: StringNullableWithAggregatesFilter<"assigned_kpi"> | string | null
    form_input?: JsonNullableWithAggregatesFilter<"assigned_kpi">
  }

  export type kpiWhereInput = {
    AND?: kpiWhereInput | kpiWhereInput[]
    OR?: kpiWhereInput[]
    NOT?: kpiWhereInput | kpiWhereInput[]
    kpi_id?: IntFilter<"kpi"> | number
    kpi_name?: StringFilter<"kpi"> | string
    kpi_created_at?: DateTimeNullableFilter<"kpi"> | Date | string | null
    kpi_updated_at?: DateTimeNullableFilter<"kpi"> | Date | string | null
    form_data?: JsonFilter<"kpi">
    kpi_value?: FloatNullableFilter<"kpi"> | number | null
    kpi_description?: StringNullableFilter<"kpi"> | string | null
  }

  export type kpiOrderByWithRelationInput = {
    kpi_id?: SortOrder
    kpi_name?: SortOrder
    kpi_created_at?: SortOrderInput | SortOrder
    kpi_updated_at?: SortOrderInput | SortOrder
    form_data?: SortOrder
    kpi_value?: SortOrderInput | SortOrder
    kpi_description?: SortOrderInput | SortOrder
  }

  export type kpiWhereUniqueInput = Prisma.AtLeast<{
    kpi_id?: number
    kpi_name?: string
    AND?: kpiWhereInput | kpiWhereInput[]
    OR?: kpiWhereInput[]
    NOT?: kpiWhereInput | kpiWhereInput[]
    kpi_created_at?: DateTimeNullableFilter<"kpi"> | Date | string | null
    kpi_updated_at?: DateTimeNullableFilter<"kpi"> | Date | string | null
    form_data?: JsonFilter<"kpi">
    kpi_value?: FloatNullableFilter<"kpi"> | number | null
    kpi_description?: StringNullableFilter<"kpi"> | string | null
  }, "kpi_id" | "kpi_name">

  export type kpiOrderByWithAggregationInput = {
    kpi_id?: SortOrder
    kpi_name?: SortOrder
    kpi_created_at?: SortOrderInput | SortOrder
    kpi_updated_at?: SortOrderInput | SortOrder
    form_data?: SortOrder
    kpi_value?: SortOrderInput | SortOrder
    kpi_description?: SortOrderInput | SortOrder
    _count?: kpiCountOrderByAggregateInput
    _avg?: kpiAvgOrderByAggregateInput
    _max?: kpiMaxOrderByAggregateInput
    _min?: kpiMinOrderByAggregateInput
    _sum?: kpiSumOrderByAggregateInput
  }

  export type kpiScalarWhereWithAggregatesInput = {
    AND?: kpiScalarWhereWithAggregatesInput | kpiScalarWhereWithAggregatesInput[]
    OR?: kpiScalarWhereWithAggregatesInput[]
    NOT?: kpiScalarWhereWithAggregatesInput | kpiScalarWhereWithAggregatesInput[]
    kpi_id?: IntWithAggregatesFilter<"kpi"> | number
    kpi_name?: StringWithAggregatesFilter<"kpi"> | string
    kpi_created_at?: DateTimeNullableWithAggregatesFilter<"kpi"> | Date | string | null
    kpi_updated_at?: DateTimeNullableWithAggregatesFilter<"kpi"> | Date | string | null
    form_data?: JsonWithAggregatesFilter<"kpi">
    kpi_value?: FloatNullableWithAggregatesFilter<"kpi"> | number | null
    kpi_description?: StringNullableWithAggregatesFilter<"kpi"> | string | null
  }

  export type qocWhereInput = {
    AND?: qocWhereInput | qocWhereInput[]
    OR?: qocWhereInput[]
    NOT?: qocWhereInput | qocWhereInput[]
    qoc_id?: IntFilter<"qoc"> | number
    qoc_name?: StringFilter<"qoc"> | string
    qoc_email?: StringFilter<"qoc"> | string
    qoc_password?: StringFilter<"qoc"> | string
    qoc_role?: StringFilter<"qoc"> | string
  }

  export type qocOrderByWithRelationInput = {
    qoc_id?: SortOrder
    qoc_name?: SortOrder
    qoc_email?: SortOrder
    qoc_password?: SortOrder
    qoc_role?: SortOrder
  }

  export type qocWhereUniqueInput = Prisma.AtLeast<{
    qoc_id?: number
    qoc_email?: string
    AND?: qocWhereInput | qocWhereInput[]
    OR?: qocWhereInput[]
    NOT?: qocWhereInput | qocWhereInput[]
    qoc_name?: StringFilter<"qoc"> | string
    qoc_password?: StringFilter<"qoc"> | string
    qoc_role?: StringFilter<"qoc"> | string
  }, "qoc_id" | "qoc_email">

  export type qocOrderByWithAggregationInput = {
    qoc_id?: SortOrder
    qoc_name?: SortOrder
    qoc_email?: SortOrder
    qoc_password?: SortOrder
    qoc_role?: SortOrder
    _count?: qocCountOrderByAggregateInput
    _avg?: qocAvgOrderByAggregateInput
    _max?: qocMaxOrderByAggregateInput
    _min?: qocMinOrderByAggregateInput
    _sum?: qocSumOrderByAggregateInput
  }

  export type qocScalarWhereWithAggregatesInput = {
    AND?: qocScalarWhereWithAggregatesInput | qocScalarWhereWithAggregatesInput[]
    OR?: qocScalarWhereWithAggregatesInput[]
    NOT?: qocScalarWhereWithAggregatesInput | qocScalarWhereWithAggregatesInput[]
    qoc_id?: IntWithAggregatesFilter<"qoc"> | number
    qoc_name?: StringWithAggregatesFilter<"qoc"> | string
    qoc_email?: StringWithAggregatesFilter<"qoc"> | string
    qoc_password?: StringWithAggregatesFilter<"qoc"> | string
    qoc_role?: StringWithAggregatesFilter<"qoc"> | string
  }

  export type usersCreateInput = {
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
    department?: departmentsCreateNestedOneWithoutMembersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
    dept_id?: number | null
  }

  export type usersUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    department?: departmentsUpdateOneWithoutMembersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateManyInput = {
    user_id?: number
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
    dept_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type departmentsCreateInput = {
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    pillars?: pillarsCreateNestedManyWithoutDepartmentInput
    members?: usersCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateInput = {
    dept_id?: number
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    pillars?: pillarsUncheckedCreateNestedManyWithoutDepartmentInput
    members?: usersUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUpdateInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    pillars?: pillarsUpdateManyWithoutDepartmentNestedInput
    members?: usersUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    pillars?: pillarsUncheckedUpdateManyWithoutDepartmentNestedInput
    members?: usersUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsCreateManyInput = {
    dept_id?: number
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
  }

  export type departmentsUpdateManyMutationInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentsUncheckedUpdateManyInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pillarsCreateInput = {
    pillar_name: string
    pillar_creation?: Date | string | null
    assigned_kpi?: assigned_kpiCreateNestedManyWithoutPillarInput
    department: departmentsCreateNestedOneWithoutPillarsInput
  }

  export type pillarsUncheckedCreateInput = {
    pillar_id?: number
    pillar_name: string
    pillar_creation?: Date | string | null
    department_id: number
    assigned_kpi?: assigned_kpiUncheckedCreateNestedManyWithoutPillarInput
  }

  export type pillarsUpdateInput = {
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_kpi?: assigned_kpiUpdateManyWithoutPillarNestedInput
    department?: departmentsUpdateOneRequiredWithoutPillarsNestedInput
  }

  export type pillarsUncheckedUpdateInput = {
    pillar_id?: IntFieldUpdateOperationsInput | number
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: IntFieldUpdateOperationsInput | number
    assigned_kpi?: assigned_kpiUncheckedUpdateManyWithoutPillarNestedInput
  }

  export type pillarsCreateManyInput = {
    pillar_id?: number
    pillar_name: string
    pillar_creation?: Date | string | null
    department_id: number
  }

  export type pillarsUpdateManyMutationInput = {
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pillarsUncheckedUpdateManyInput = {
    pillar_id?: IntFieldUpdateOperationsInput | number
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: IntFieldUpdateOperationsInput | number
  }

  export type assigned_kpiCreateInput = {
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
    pillar: pillarsCreateNestedOneWithoutAssigned_kpiInput
  }

  export type assigned_kpiUncheckedCreateInput = {
    assigned_kpi_id?: number
    pillar_id: number
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUpdateInput = {
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
    pillar?: pillarsUpdateOneRequiredWithoutAssigned_kpiNestedInput
  }

  export type assigned_kpiUncheckedUpdateInput = {
    assigned_kpi_id?: IntFieldUpdateOperationsInput | number
    pillar_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiCreateManyInput = {
    assigned_kpi_id?: number
    pillar_id: number
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUpdateManyMutationInput = {
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUncheckedUpdateManyInput = {
    assigned_kpi_id?: IntFieldUpdateOperationsInput | number
    pillar_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type kpiCreateInput = {
    kpi_name: string
    kpi_created_at?: Date | string | null
    kpi_updated_at?: Date | string | null
    form_data: JsonNullValueInput | InputJsonValue
    kpi_value?: number | null
    kpi_description?: string | null
  }

  export type kpiUncheckedCreateInput = {
    kpi_id?: number
    kpi_name: string
    kpi_created_at?: Date | string | null
    kpi_updated_at?: Date | string | null
    form_data: JsonNullValueInput | InputJsonValue
    kpi_value?: number | null
    kpi_description?: string | null
  }

  export type kpiUpdateInput = {
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kpi_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_data?: JsonNullValueInput | InputJsonValue
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kpiUncheckedUpdateInput = {
    kpi_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kpi_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_data?: JsonNullValueInput | InputJsonValue
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kpiCreateManyInput = {
    kpi_id?: number
    kpi_name: string
    kpi_created_at?: Date | string | null
    kpi_updated_at?: Date | string | null
    form_data: JsonNullValueInput | InputJsonValue
    kpi_value?: number | null
    kpi_description?: string | null
  }

  export type kpiUpdateManyMutationInput = {
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kpi_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_data?: JsonNullValueInput | InputJsonValue
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kpiUncheckedUpdateManyInput = {
    kpi_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kpi_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_data?: JsonNullValueInput | InputJsonValue
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type qocCreateInput = {
    qoc_name: string
    qoc_email: string
    qoc_password: string
    qoc_role: string
  }

  export type qocUncheckedCreateInput = {
    qoc_id?: number
    qoc_name: string
    qoc_email: string
    qoc_password: string
    qoc_role: string
  }

  export type qocUpdateInput = {
    qoc_name?: StringFieldUpdateOperationsInput | string
    qoc_email?: StringFieldUpdateOperationsInput | string
    qoc_password?: StringFieldUpdateOperationsInput | string
    qoc_role?: StringFieldUpdateOperationsInput | string
  }

  export type qocUncheckedUpdateInput = {
    qoc_id?: IntFieldUpdateOperationsInput | number
    qoc_name?: StringFieldUpdateOperationsInput | string
    qoc_email?: StringFieldUpdateOperationsInput | string
    qoc_password?: StringFieldUpdateOperationsInput | string
    qoc_role?: StringFieldUpdateOperationsInput | string
  }

  export type qocCreateManyInput = {
    qoc_id?: number
    qoc_name: string
    qoc_email: string
    qoc_password: string
    qoc_role: string
  }

  export type qocUpdateManyMutationInput = {
    qoc_name?: StringFieldUpdateOperationsInput | string
    qoc_email?: StringFieldUpdateOperationsInput | string
    qoc_password?: StringFieldUpdateOperationsInput | string
    qoc_role?: StringFieldUpdateOperationsInput | string
  }

  export type qocUncheckedUpdateManyInput = {
    qoc_id?: IntFieldUpdateOperationsInput | number
    qoc_name?: StringFieldUpdateOperationsInput | string
    qoc_email?: StringFieldUpdateOperationsInput | string
    qoc_password?: StringFieldUpdateOperationsInput | string
    qoc_role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentsNullableScalarRelationFilter = {
    is?: departmentsWhereInput | null
    isNot?: departmentsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_role?: SortOrder
    dept_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    dept_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_role?: SortOrder
    dept_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_role?: SortOrder
    dept_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    dept_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type PillarsListRelationFilter = {
    every?: pillarsWhereInput
    some?: pillarsWhereInput
    none?: pillarsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type pillarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentsCountOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    hod_id?: SortOrder
    dept_creation?: SortOrder
    hod_name?: SortOrder
  }

  export type departmentsAvgOrderByAggregateInput = {
    dept_id?: SortOrder
    hod_id?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    hod_id?: SortOrder
    dept_creation?: SortOrder
    hod_name?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    hod_id?: SortOrder
    dept_creation?: SortOrder
    hod_name?: SortOrder
  }

  export type departmentsSumOrderByAggregateInput = {
    dept_id?: SortOrder
    hod_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }

  export type Assigned_kpiListRelationFilter = {
    every?: assigned_kpiWhereInput
    some?: assigned_kpiWhereInput
    none?: assigned_kpiWhereInput
  }

  export type DepartmentsScalarRelationFilter = {
    is?: departmentsWhereInput
    isNot?: departmentsWhereInput
  }

  export type assigned_kpiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pillarsPillar_nameDepartment_idCompoundUniqueInput = {
    pillar_name: string
    department_id: number
  }

  export type pillarsCountOrderByAggregateInput = {
    pillar_id?: SortOrder
    pillar_name?: SortOrder
    pillar_creation?: SortOrder
    department_id?: SortOrder
  }

  export type pillarsAvgOrderByAggregateInput = {
    pillar_id?: SortOrder
    department_id?: SortOrder
  }

  export type pillarsMaxOrderByAggregateInput = {
    pillar_id?: SortOrder
    pillar_name?: SortOrder
    pillar_creation?: SortOrder
    department_id?: SortOrder
  }

  export type pillarsMinOrderByAggregateInput = {
    pillar_id?: SortOrder
    pillar_name?: SortOrder
    pillar_creation?: SortOrder
    department_id?: SortOrder
  }

  export type pillarsSumOrderByAggregateInput = {
    pillar_id?: SortOrder
    department_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PillarsScalarRelationFilter = {
    is?: pillarsWhereInput
    isNot?: pillarsWhereInput
  }

  export type assigned_kpiCountOrderByAggregateInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_name?: SortOrder
    kpi_status?: SortOrder
    form_data?: SortOrder
    added_date?: SortOrder
    resolved_date?: SortOrder
    comments?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
    form_input?: SortOrder
  }

  export type assigned_kpiAvgOrderByAggregateInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_value?: SortOrder
  }

  export type assigned_kpiMaxOrderByAggregateInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_name?: SortOrder
    kpi_status?: SortOrder
    added_date?: SortOrder
    resolved_date?: SortOrder
    comments?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
  }

  export type assigned_kpiMinOrderByAggregateInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_name?: SortOrder
    kpi_status?: SortOrder
    added_date?: SortOrder
    resolved_date?: SortOrder
    comments?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
  }

  export type assigned_kpiSumOrderByAggregateInput = {
    assigned_kpi_id?: SortOrder
    pillar_id?: SortOrder
    kpi_value?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type kpiCountOrderByAggregateInput = {
    kpi_id?: SortOrder
    kpi_name?: SortOrder
    kpi_created_at?: SortOrder
    kpi_updated_at?: SortOrder
    form_data?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
  }

  export type kpiAvgOrderByAggregateInput = {
    kpi_id?: SortOrder
    kpi_value?: SortOrder
  }

  export type kpiMaxOrderByAggregateInput = {
    kpi_id?: SortOrder
    kpi_name?: SortOrder
    kpi_created_at?: SortOrder
    kpi_updated_at?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
  }

  export type kpiMinOrderByAggregateInput = {
    kpi_id?: SortOrder
    kpi_name?: SortOrder
    kpi_created_at?: SortOrder
    kpi_updated_at?: SortOrder
    kpi_value?: SortOrder
    kpi_description?: SortOrder
  }

  export type kpiSumOrderByAggregateInput = {
    kpi_id?: SortOrder
    kpi_value?: SortOrder
  }

  export type qocCountOrderByAggregateInput = {
    qoc_id?: SortOrder
    qoc_name?: SortOrder
    qoc_email?: SortOrder
    qoc_password?: SortOrder
    qoc_role?: SortOrder
  }

  export type qocAvgOrderByAggregateInput = {
    qoc_id?: SortOrder
  }

  export type qocMaxOrderByAggregateInput = {
    qoc_id?: SortOrder
    qoc_name?: SortOrder
    qoc_email?: SortOrder
    qoc_password?: SortOrder
    qoc_role?: SortOrder
  }

  export type qocMinOrderByAggregateInput = {
    qoc_id?: SortOrder
    qoc_name?: SortOrder
    qoc_email?: SortOrder
    qoc_password?: SortOrder
    qoc_role?: SortOrder
  }

  export type qocSumOrderByAggregateInput = {
    qoc_id?: SortOrder
  }

  export type departmentsCreateNestedOneWithoutMembersInput = {
    create?: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutMembersInput
    connect?: departmentsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type departmentsUpdateOneWithoutMembersNestedInput = {
    create?: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutMembersInput
    upsert?: departmentsUpsertWithoutMembersInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutMembersInput, departmentsUpdateWithoutMembersInput>, departmentsUncheckedUpdateWithoutMembersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pillarsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput> | pillarsCreateWithoutDepartmentInput[] | pillarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: pillarsCreateOrConnectWithoutDepartmentInput | pillarsCreateOrConnectWithoutDepartmentInput[]
    createMany?: pillarsCreateManyDepartmentInputEnvelope
    connect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput> | usersCreateWithoutDepartmentInput[] | usersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentInput | usersCreateOrConnectWithoutDepartmentInput[]
    createMany?: usersCreateManyDepartmentInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type pillarsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput> | pillarsCreateWithoutDepartmentInput[] | pillarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: pillarsCreateOrConnectWithoutDepartmentInput | pillarsCreateOrConnectWithoutDepartmentInput[]
    createMany?: pillarsCreateManyDepartmentInputEnvelope
    connect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput> | usersCreateWithoutDepartmentInput[] | usersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentInput | usersCreateOrConnectWithoutDepartmentInput[]
    createMany?: usersCreateManyDepartmentInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type pillarsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput> | pillarsCreateWithoutDepartmentInput[] | pillarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: pillarsCreateOrConnectWithoutDepartmentInput | pillarsCreateOrConnectWithoutDepartmentInput[]
    upsert?: pillarsUpsertWithWhereUniqueWithoutDepartmentInput | pillarsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: pillarsCreateManyDepartmentInputEnvelope
    set?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    disconnect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    delete?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    connect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    update?: pillarsUpdateWithWhereUniqueWithoutDepartmentInput | pillarsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: pillarsUpdateManyWithWhereWithoutDepartmentInput | pillarsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: pillarsScalarWhereInput | pillarsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput> | usersCreateWithoutDepartmentInput[] | usersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentInput | usersCreateOrConnectWithoutDepartmentInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentInput | usersUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: usersCreateManyDepartmentInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentInput | usersUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentInput | usersUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type pillarsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput> | pillarsCreateWithoutDepartmentInput[] | pillarsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: pillarsCreateOrConnectWithoutDepartmentInput | pillarsCreateOrConnectWithoutDepartmentInput[]
    upsert?: pillarsUpsertWithWhereUniqueWithoutDepartmentInput | pillarsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: pillarsCreateManyDepartmentInputEnvelope
    set?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    disconnect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    delete?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    connect?: pillarsWhereUniqueInput | pillarsWhereUniqueInput[]
    update?: pillarsUpdateWithWhereUniqueWithoutDepartmentInput | pillarsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: pillarsUpdateManyWithWhereWithoutDepartmentInput | pillarsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: pillarsScalarWhereInput | pillarsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput> | usersCreateWithoutDepartmentInput[] | usersUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentInput | usersCreateOrConnectWithoutDepartmentInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentInput | usersUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: usersCreateManyDepartmentInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentInput | usersUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentInput | usersUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type assigned_kpiCreateNestedManyWithoutPillarInput = {
    create?: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput> | assigned_kpiCreateWithoutPillarInput[] | assigned_kpiUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: assigned_kpiCreateOrConnectWithoutPillarInput | assigned_kpiCreateOrConnectWithoutPillarInput[]
    createMany?: assigned_kpiCreateManyPillarInputEnvelope
    connect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
  }

  export type departmentsCreateNestedOneWithoutPillarsInput = {
    create?: XOR<departmentsCreateWithoutPillarsInput, departmentsUncheckedCreateWithoutPillarsInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutPillarsInput
    connect?: departmentsWhereUniqueInput
  }

  export type assigned_kpiUncheckedCreateNestedManyWithoutPillarInput = {
    create?: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput> | assigned_kpiCreateWithoutPillarInput[] | assigned_kpiUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: assigned_kpiCreateOrConnectWithoutPillarInput | assigned_kpiCreateOrConnectWithoutPillarInput[]
    createMany?: assigned_kpiCreateManyPillarInputEnvelope
    connect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
  }

  export type assigned_kpiUpdateManyWithoutPillarNestedInput = {
    create?: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput> | assigned_kpiCreateWithoutPillarInput[] | assigned_kpiUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: assigned_kpiCreateOrConnectWithoutPillarInput | assigned_kpiCreateOrConnectWithoutPillarInput[]
    upsert?: assigned_kpiUpsertWithWhereUniqueWithoutPillarInput | assigned_kpiUpsertWithWhereUniqueWithoutPillarInput[]
    createMany?: assigned_kpiCreateManyPillarInputEnvelope
    set?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    disconnect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    delete?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    connect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    update?: assigned_kpiUpdateWithWhereUniqueWithoutPillarInput | assigned_kpiUpdateWithWhereUniqueWithoutPillarInput[]
    updateMany?: assigned_kpiUpdateManyWithWhereWithoutPillarInput | assigned_kpiUpdateManyWithWhereWithoutPillarInput[]
    deleteMany?: assigned_kpiScalarWhereInput | assigned_kpiScalarWhereInput[]
  }

  export type departmentsUpdateOneRequiredWithoutPillarsNestedInput = {
    create?: XOR<departmentsCreateWithoutPillarsInput, departmentsUncheckedCreateWithoutPillarsInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutPillarsInput
    upsert?: departmentsUpsertWithoutPillarsInput
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutPillarsInput, departmentsUpdateWithoutPillarsInput>, departmentsUncheckedUpdateWithoutPillarsInput>
  }

  export type assigned_kpiUncheckedUpdateManyWithoutPillarNestedInput = {
    create?: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput> | assigned_kpiCreateWithoutPillarInput[] | assigned_kpiUncheckedCreateWithoutPillarInput[]
    connectOrCreate?: assigned_kpiCreateOrConnectWithoutPillarInput | assigned_kpiCreateOrConnectWithoutPillarInput[]
    upsert?: assigned_kpiUpsertWithWhereUniqueWithoutPillarInput | assigned_kpiUpsertWithWhereUniqueWithoutPillarInput[]
    createMany?: assigned_kpiCreateManyPillarInputEnvelope
    set?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    disconnect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    delete?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    connect?: assigned_kpiWhereUniqueInput | assigned_kpiWhereUniqueInput[]
    update?: assigned_kpiUpdateWithWhereUniqueWithoutPillarInput | assigned_kpiUpdateWithWhereUniqueWithoutPillarInput[]
    updateMany?: assigned_kpiUpdateManyWithWhereWithoutPillarInput | assigned_kpiUpdateManyWithWhereWithoutPillarInput[]
    deleteMany?: assigned_kpiScalarWhereInput | assigned_kpiScalarWhereInput[]
  }

  export type pillarsCreateNestedOneWithoutAssigned_kpiInput = {
    create?: XOR<pillarsCreateWithoutAssigned_kpiInput, pillarsUncheckedCreateWithoutAssigned_kpiInput>
    connectOrCreate?: pillarsCreateOrConnectWithoutAssigned_kpiInput
    connect?: pillarsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pillarsUpdateOneRequiredWithoutAssigned_kpiNestedInput = {
    create?: XOR<pillarsCreateWithoutAssigned_kpiInput, pillarsUncheckedCreateWithoutAssigned_kpiInput>
    connectOrCreate?: pillarsCreateOrConnectWithoutAssigned_kpiInput
    upsert?: pillarsUpsertWithoutAssigned_kpiInput
    connect?: pillarsWhereUniqueInput
    update?: XOR<XOR<pillarsUpdateToOneWithWhereWithoutAssigned_kpiInput, pillarsUpdateWithoutAssigned_kpiInput>, pillarsUncheckedUpdateWithoutAssigned_kpiInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type departmentsCreateWithoutMembersInput = {
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    pillars?: pillarsCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateWithoutMembersInput = {
    dept_id?: number
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    pillars?: pillarsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsCreateOrConnectWithoutMembersInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
  }

  export type departmentsUpsertWithoutMembersInput = {
    update: XOR<departmentsUpdateWithoutMembersInput, departmentsUncheckedUpdateWithoutMembersInput>
    create: XOR<departmentsCreateWithoutMembersInput, departmentsUncheckedCreateWithoutMembersInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutMembersInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutMembersInput, departmentsUncheckedUpdateWithoutMembersInput>
  }

  export type departmentsUpdateWithoutMembersInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    pillars?: pillarsUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateWithoutMembersInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    pillars?: pillarsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type pillarsCreateWithoutDepartmentInput = {
    pillar_name: string
    pillar_creation?: Date | string | null
    assigned_kpi?: assigned_kpiCreateNestedManyWithoutPillarInput
  }

  export type pillarsUncheckedCreateWithoutDepartmentInput = {
    pillar_id?: number
    pillar_name: string
    pillar_creation?: Date | string | null
    assigned_kpi?: assigned_kpiUncheckedCreateNestedManyWithoutPillarInput
  }

  export type pillarsCreateOrConnectWithoutDepartmentInput = {
    where: pillarsWhereUniqueInput
    create: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput>
  }

  export type pillarsCreateManyDepartmentInputEnvelope = {
    data: pillarsCreateManyDepartmentInput | pillarsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDepartmentInput = {
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
  }

  export type usersUncheckedCreateWithoutDepartmentInput = {
    user_id?: number
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
  }

  export type usersCreateOrConnectWithoutDepartmentInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput>
  }

  export type usersCreateManyDepartmentInputEnvelope = {
    data: usersCreateManyDepartmentInput | usersCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type pillarsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: pillarsWhereUniqueInput
    update: XOR<pillarsUpdateWithoutDepartmentInput, pillarsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<pillarsCreateWithoutDepartmentInput, pillarsUncheckedCreateWithoutDepartmentInput>
  }

  export type pillarsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: pillarsWhereUniqueInput
    data: XOR<pillarsUpdateWithoutDepartmentInput, pillarsUncheckedUpdateWithoutDepartmentInput>
  }

  export type pillarsUpdateManyWithWhereWithoutDepartmentInput = {
    where: pillarsScalarWhereInput
    data: XOR<pillarsUpdateManyMutationInput, pillarsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type pillarsScalarWhereInput = {
    AND?: pillarsScalarWhereInput | pillarsScalarWhereInput[]
    OR?: pillarsScalarWhereInput[]
    NOT?: pillarsScalarWhereInput | pillarsScalarWhereInput[]
    pillar_id?: IntFilter<"pillars"> | number
    pillar_name?: StringFilter<"pillars"> | string
    pillar_creation?: DateTimeNullableFilter<"pillars"> | Date | string | null
    department_id?: IntFilter<"pillars"> | number
  }

  export type usersUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutDepartmentInput, usersUncheckedUpdateWithoutDepartmentInput>
    create: XOR<usersCreateWithoutDepartmentInput, usersUncheckedCreateWithoutDepartmentInput>
  }

  export type usersUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutDepartmentInput, usersUncheckedUpdateWithoutDepartmentInput>
  }

  export type usersUpdateManyWithWhereWithoutDepartmentInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_name?: StringFilter<"users"> | string
    user_email?: StringFilter<"users"> | string
    user_password?: StringFilter<"users"> | string
    user_role?: StringFilter<"users"> | string
    dept_id?: IntNullableFilter<"users"> | number | null
  }

  export type assigned_kpiCreateWithoutPillarInput = {
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUncheckedCreateWithoutPillarInput = {
    assigned_kpi_id?: number
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiCreateOrConnectWithoutPillarInput = {
    where: assigned_kpiWhereUniqueInput
    create: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput>
  }

  export type assigned_kpiCreateManyPillarInputEnvelope = {
    data: assigned_kpiCreateManyPillarInput | assigned_kpiCreateManyPillarInput[]
    skipDuplicates?: boolean
  }

  export type departmentsCreateWithoutPillarsInput = {
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    members?: usersCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateWithoutPillarsInput = {
    dept_id?: number
    dept_name: string
    hod_id?: number | null
    dept_creation?: Date | string | null
    hod_name?: string | null
    members?: usersUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsCreateOrConnectWithoutPillarsInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutPillarsInput, departmentsUncheckedCreateWithoutPillarsInput>
  }

  export type assigned_kpiUpsertWithWhereUniqueWithoutPillarInput = {
    where: assigned_kpiWhereUniqueInput
    update: XOR<assigned_kpiUpdateWithoutPillarInput, assigned_kpiUncheckedUpdateWithoutPillarInput>
    create: XOR<assigned_kpiCreateWithoutPillarInput, assigned_kpiUncheckedCreateWithoutPillarInput>
  }

  export type assigned_kpiUpdateWithWhereUniqueWithoutPillarInput = {
    where: assigned_kpiWhereUniqueInput
    data: XOR<assigned_kpiUpdateWithoutPillarInput, assigned_kpiUncheckedUpdateWithoutPillarInput>
  }

  export type assigned_kpiUpdateManyWithWhereWithoutPillarInput = {
    where: assigned_kpiScalarWhereInput
    data: XOR<assigned_kpiUpdateManyMutationInput, assigned_kpiUncheckedUpdateManyWithoutPillarInput>
  }

  export type assigned_kpiScalarWhereInput = {
    AND?: assigned_kpiScalarWhereInput | assigned_kpiScalarWhereInput[]
    OR?: assigned_kpiScalarWhereInput[]
    NOT?: assigned_kpiScalarWhereInput | assigned_kpiScalarWhereInput[]
    assigned_kpi_id?: IntFilter<"assigned_kpi"> | number
    pillar_id?: IntFilter<"assigned_kpi"> | number
    kpi_name?: StringFilter<"assigned_kpi"> | string
    kpi_status?: StringFilter<"assigned_kpi"> | string
    form_data?: JsonFilter<"assigned_kpi">
    added_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    resolved_date?: DateTimeNullableFilter<"assigned_kpi"> | Date | string | null
    comments?: StringNullableFilter<"assigned_kpi"> | string | null
    kpi_value?: FloatNullableFilter<"assigned_kpi"> | number | null
    kpi_description?: StringNullableFilter<"assigned_kpi"> | string | null
    form_input?: JsonNullableFilter<"assigned_kpi">
  }

  export type departmentsUpsertWithoutPillarsInput = {
    update: XOR<departmentsUpdateWithoutPillarsInput, departmentsUncheckedUpdateWithoutPillarsInput>
    create: XOR<departmentsCreateWithoutPillarsInput, departmentsUncheckedCreateWithoutPillarsInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutPillarsInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutPillarsInput, departmentsUncheckedUpdateWithoutPillarsInput>
  }

  export type departmentsUpdateWithoutPillarsInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: usersUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateWithoutPillarsInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    hod_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hod_name?: NullableStringFieldUpdateOperationsInput | string | null
    members?: usersUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type pillarsCreateWithoutAssigned_kpiInput = {
    pillar_name: string
    pillar_creation?: Date | string | null
    department: departmentsCreateNestedOneWithoutPillarsInput
  }

  export type pillarsUncheckedCreateWithoutAssigned_kpiInput = {
    pillar_id?: number
    pillar_name: string
    pillar_creation?: Date | string | null
    department_id: number
  }

  export type pillarsCreateOrConnectWithoutAssigned_kpiInput = {
    where: pillarsWhereUniqueInput
    create: XOR<pillarsCreateWithoutAssigned_kpiInput, pillarsUncheckedCreateWithoutAssigned_kpiInput>
  }

  export type pillarsUpsertWithoutAssigned_kpiInput = {
    update: XOR<pillarsUpdateWithoutAssigned_kpiInput, pillarsUncheckedUpdateWithoutAssigned_kpiInput>
    create: XOR<pillarsCreateWithoutAssigned_kpiInput, pillarsUncheckedCreateWithoutAssigned_kpiInput>
    where?: pillarsWhereInput
  }

  export type pillarsUpdateToOneWithWhereWithoutAssigned_kpiInput = {
    where?: pillarsWhereInput
    data: XOR<pillarsUpdateWithoutAssigned_kpiInput, pillarsUncheckedUpdateWithoutAssigned_kpiInput>
  }

  export type pillarsUpdateWithoutAssigned_kpiInput = {
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: departmentsUpdateOneRequiredWithoutPillarsNestedInput
  }

  export type pillarsUncheckedUpdateWithoutAssigned_kpiInput = {
    pillar_id?: IntFieldUpdateOperationsInput | number
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department_id?: IntFieldUpdateOperationsInput | number
  }

  export type pillarsCreateManyDepartmentInput = {
    pillar_id?: number
    pillar_name: string
    pillar_creation?: Date | string | null
  }

  export type usersCreateManyDepartmentInput = {
    user_id?: number
    user_name: string
    user_email: string
    user_password: string
    user_role?: string
  }

  export type pillarsUpdateWithoutDepartmentInput = {
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_kpi?: assigned_kpiUpdateManyWithoutPillarNestedInput
  }

  export type pillarsUncheckedUpdateWithoutDepartmentInput = {
    pillar_id?: IntFieldUpdateOperationsInput | number
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_kpi?: assigned_kpiUncheckedUpdateManyWithoutPillarNestedInput
  }

  export type pillarsUncheckedUpdateManyWithoutDepartmentInput = {
    pillar_id?: IntFieldUpdateOperationsInput | number
    pillar_name?: StringFieldUpdateOperationsInput | string
    pillar_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutDepartmentInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutDepartmentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyWithoutDepartmentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_role?: StringFieldUpdateOperationsInput | string
  }

  export type assigned_kpiCreateManyPillarInput = {
    assigned_kpi_id?: number
    kpi_name: string
    kpi_status: string
    form_data: JsonNullValueInput | InputJsonValue
    added_date?: Date | string | null
    resolved_date?: Date | string | null
    comments?: string | null
    kpi_value?: number | null
    kpi_description?: string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUpdateWithoutPillarInput = {
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUncheckedUpdateWithoutPillarInput = {
    assigned_kpi_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
  }

  export type assigned_kpiUncheckedUpdateManyWithoutPillarInput = {
    assigned_kpi_id?: IntFieldUpdateOperationsInput | number
    kpi_name?: StringFieldUpdateOperationsInput | string
    kpi_status?: StringFieldUpdateOperationsInput | string
    form_data?: JsonNullValueInput | InputJsonValue
    added_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    kpi_value?: NullableFloatFieldUpdateOperationsInput | number | null
    kpi_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_input?: NullableJsonNullValueInput | InputJsonValue
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