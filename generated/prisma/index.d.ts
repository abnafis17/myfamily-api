
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
 * Model country
 * 
 */
export type country = $Result.DefaultSelection<Prisma.$countryPayload>
/**
 * Model family_members
 * 
 */
export type family_members = $Result.DefaultSelection<Prisma.$family_membersPayload>
/**
 * Model players
 * 
 */
export type players = $Result.DefaultSelection<Prisma.$playersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
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
   * `prisma.country`: Exposes CRUD operations for the **country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.countryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.family_members`: Exposes CRUD operations for the **family_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Family_members
    * const family_members = await prisma.family_members.findMany()
    * ```
    */
  get family_members(): Prisma.family_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.playersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    country: 'country',
    family_members: 'family_members',
    players: 'players'
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
      modelProps: "country" | "family_members" | "players"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      country: {
        payload: Prisma.$countryPayload<ExtArgs>
        fields: Prisma.countryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findFirst: {
            args: Prisma.countryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findMany: {
            args: Prisma.countryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          create: {
            args: Prisma.countryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          createMany: {
            args: Prisma.countryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.countryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          update: {
            args: Prisma.countryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          deleteMany: {
            args: Prisma.countryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.countryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.countryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.countryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      family_members: {
        payload: Prisma.$family_membersPayload<ExtArgs>
        fields: Prisma.family_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.family_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.family_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          findFirst: {
            args: Prisma.family_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.family_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          findMany: {
            args: Prisma.family_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>[]
          }
          create: {
            args: Prisma.family_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          createMany: {
            args: Prisma.family_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.family_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          update: {
            args: Prisma.family_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          deleteMany: {
            args: Prisma.family_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.family_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.family_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$family_membersPayload>
          }
          aggregate: {
            args: Prisma.Family_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily_members>
          }
          groupBy: {
            args: Prisma.family_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Family_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.family_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Family_membersCountAggregateOutputType> | number
          }
        }
      }
      players: {
        payload: Prisma.$playersPayload<ExtArgs>
        fields: Prisma.playersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findFirst: {
            args: Prisma.playersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findMany: {
            args: Prisma.playersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          create: {
            args: Prisma.playersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          createMany: {
            args: Prisma.playersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.playersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          update: {
            args: Prisma.playersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          deleteMany: {
            args: Prisma.playersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.playersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.playersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    country?: countryOmit
    family_members?: family_membersOmit
    players?: playersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    ID: number | null
    Champion: number | null
  }

  export type CountrySumAggregateOutputType = {
    ID: number | null
    Champion: number | null
  }

  export type CountryMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    Continent: string | null
    Sports: string | null
    Famous_Player: string | null
    Champion: number | null
  }

  export type CountryMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    Continent: string | null
    Sports: string | null
    Famous_Player: string | null
    Champion: number | null
  }

  export type CountryCountAggregateOutputType = {
    ID: number
    Name: number
    Continent: number
    Sports: number
    Famous_Player: number
    Champion: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    ID?: true
    Champion?: true
  }

  export type CountrySumAggregateInputType = {
    ID?: true
    Champion?: true
  }

  export type CountryMinAggregateInputType = {
    ID?: true
    Name?: true
    Continent?: true
    Sports?: true
    Famous_Player?: true
    Champion?: true
  }

  export type CountryMaxAggregateInputType = {
    ID?: true
    Name?: true
    Continent?: true
    Sports?: true
    Famous_Player?: true
    Champion?: true
  }

  export type CountryCountAggregateInputType = {
    ID?: true
    Name?: true
    Continent?: true
    Sports?: true
    Famous_Player?: true
    Champion?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which country to aggregate.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type countryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countryWhereInput
    orderBy?: countryOrderByWithAggregationInput | countryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    ID: number
    Name: string | null
    Continent: string | null
    Sports: string | null
    Famous_Player: string | null
    Champion: number | null
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends countryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type countrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Continent?: boolean
    Sports?: boolean
    Famous_Player?: boolean
    Champion?: boolean
  }, ExtArgs["result"]["country"]>



  export type countrySelectScalar = {
    ID?: boolean
    Name?: boolean
    Continent?: boolean
    Sports?: boolean
    Famous_Player?: boolean
    Champion?: boolean
  }

  export type countryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Name" | "Continent" | "Sports" | "Famous_Player" | "Champion", ExtArgs["result"]["country"]>

  export type $countryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "country"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Name: string | null
      Continent: string | null
      Sports: string | null
      Famous_Player: string | null
      Champion: number | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type countryGetPayload<S extends boolean | null | undefined | countryDefaultArgs> = $Result.GetResult<Prisma.$countryPayload, S>

  type countryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface countryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['country'], meta: { name: 'country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {countryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countryFindUniqueArgs>(args: SelectSubset<T, countryFindUniqueArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countryFindUniqueOrThrowArgs>(args: SelectSubset<T, countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countryFindFirstArgs>(args?: SelectSubset<T, countryFindFirstArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countryFindFirstOrThrowArgs>(args?: SelectSubset<T, countryFindFirstOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const countryWithIDOnly = await prisma.country.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends countryFindManyArgs>(args?: SelectSubset<T, countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {countryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends countryCreateArgs>(args: SelectSubset<T, countryCreateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countryCreateManyArgs>(args?: SelectSubset<T, countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {countryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends countryDeleteArgs>(args: SelectSubset<T, countryDeleteArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {countryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countryUpdateArgs>(args: SelectSubset<T, countryUpdateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countryDeleteManyArgs>(args?: SelectSubset<T, countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countryUpdateManyArgs>(args: SelectSubset<T, countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {countryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends countryUpsertArgs>(args: SelectSubset<T, countryUpsertArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countryCountArgs>(
      args?: Subset<T, countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryGroupByArgs} args - Group by arguments.
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
      T extends countryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countryGroupByArgs['orderBy'] }
        : { orderBy?: countryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the country model
   */
  readonly fields: countryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the country model
   */
  interface countryFieldRefs {
    readonly ID: FieldRef<"country", 'Int'>
    readonly Name: FieldRef<"country", 'String'>
    readonly Continent: FieldRef<"country", 'String'>
    readonly Sports: FieldRef<"country", 'String'>
    readonly Famous_Player: FieldRef<"country", 'String'>
    readonly Champion: FieldRef<"country", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * country findUnique
   */
  export type countryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findUniqueOrThrow
   */
  export type countryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findFirst
   */
  export type countryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findFirstOrThrow
   */
  export type countryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findMany
   */
  export type countryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country create
   */
  export type countryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data needed to create a country.
     */
    data?: XOR<countryCreateInput, countryUncheckedCreateInput>
  }

  /**
   * country createMany
   */
  export type countryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countryCreateManyInput | countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * country update
   */
  export type countryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data needed to update a country.
     */
    data: XOR<countryUpdateInput, countryUncheckedUpdateInput>
    /**
     * Choose, which country to update.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country updateMany
   */
  export type countryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * country upsert
   */
  export type countryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The filter to search for the country to update in case it exists.
     */
    where: countryWhereUniqueInput
    /**
     * In case the country found by the `where` argument doesn't exist, create a new country with this data.
     */
    create: XOR<countryCreateInput, countryUncheckedCreateInput>
    /**
     * In case the country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countryUpdateInput, countryUncheckedUpdateInput>
  }

  /**
   * country delete
   */
  export type countryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Filter which country to delete.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country deleteMany
   */
  export type countryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * country without action
   */
  export type countryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
  }


  /**
   * Model family_members
   */

  export type AggregateFamily_members = {
    _count: Family_membersCountAggregateOutputType | null
    _avg: Family_membersAvgAggregateOutputType | null
    _sum: Family_membersSumAggregateOutputType | null
    _min: Family_membersMinAggregateOutputType | null
    _max: Family_membersMaxAggregateOutputType | null
  }

  export type Family_membersAvgAggregateOutputType = {
    MEMBERID: number | null
    AGE: number | null
  }

  export type Family_membersSumAggregateOutputType = {
    MEMBERID: number | null
    AGE: number | null
  }

  export type Family_membersMinAggregateOutputType = {
    MEMBERID: number | null
    NAME: string | null
    AGE: number | null
    DOB: string | null
    OCCUPATION: string | null
  }

  export type Family_membersMaxAggregateOutputType = {
    MEMBERID: number | null
    NAME: string | null
    AGE: number | null
    DOB: string | null
    OCCUPATION: string | null
  }

  export type Family_membersCountAggregateOutputType = {
    MEMBERID: number
    NAME: number
    AGE: number
    DOB: number
    OCCUPATION: number
    _all: number
  }


  export type Family_membersAvgAggregateInputType = {
    MEMBERID?: true
    AGE?: true
  }

  export type Family_membersSumAggregateInputType = {
    MEMBERID?: true
    AGE?: true
  }

  export type Family_membersMinAggregateInputType = {
    MEMBERID?: true
    NAME?: true
    AGE?: true
    DOB?: true
    OCCUPATION?: true
  }

  export type Family_membersMaxAggregateInputType = {
    MEMBERID?: true
    NAME?: true
    AGE?: true
    DOB?: true
    OCCUPATION?: true
  }

  export type Family_membersCountAggregateInputType = {
    MEMBERID?: true
    NAME?: true
    AGE?: true
    DOB?: true
    OCCUPATION?: true
    _all?: true
  }

  export type Family_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which family_members to aggregate.
     */
    where?: family_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_members to fetch.
     */
    orderBy?: family_membersOrderByWithRelationInput | family_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: family_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned family_members
    **/
    _count?: true | Family_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Family_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Family_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Family_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Family_membersMaxAggregateInputType
  }

  export type GetFamily_membersAggregateType<T extends Family_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily_members[P]>
      : GetScalarType<T[P], AggregateFamily_members[P]>
  }




  export type family_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: family_membersWhereInput
    orderBy?: family_membersOrderByWithAggregationInput | family_membersOrderByWithAggregationInput[]
    by: Family_membersScalarFieldEnum[] | Family_membersScalarFieldEnum
    having?: family_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Family_membersCountAggregateInputType | true
    _avg?: Family_membersAvgAggregateInputType
    _sum?: Family_membersSumAggregateInputType
    _min?: Family_membersMinAggregateInputType
    _max?: Family_membersMaxAggregateInputType
  }

  export type Family_membersGroupByOutputType = {
    MEMBERID: number
    NAME: string | null
    AGE: number | null
    DOB: string | null
    OCCUPATION: string | null
    _count: Family_membersCountAggregateOutputType | null
    _avg: Family_membersAvgAggregateOutputType | null
    _sum: Family_membersSumAggregateOutputType | null
    _min: Family_membersMinAggregateOutputType | null
    _max: Family_membersMaxAggregateOutputType | null
  }

  type GetFamily_membersGroupByPayload<T extends family_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Family_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Family_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Family_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Family_membersGroupByOutputType[P]>
        }
      >
    >


  export type family_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MEMBERID?: boolean
    NAME?: boolean
    AGE?: boolean
    DOB?: boolean
    OCCUPATION?: boolean
  }, ExtArgs["result"]["family_members"]>



  export type family_membersSelectScalar = {
    MEMBERID?: boolean
    NAME?: boolean
    AGE?: boolean
    DOB?: boolean
    OCCUPATION?: boolean
  }

  export type family_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MEMBERID" | "NAME" | "AGE" | "DOB" | "OCCUPATION", ExtArgs["result"]["family_members"]>

  export type $family_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "family_members"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MEMBERID: number
      NAME: string | null
      AGE: number | null
      DOB: string | null
      OCCUPATION: string | null
    }, ExtArgs["result"]["family_members"]>
    composites: {}
  }

  type family_membersGetPayload<S extends boolean | null | undefined | family_membersDefaultArgs> = $Result.GetResult<Prisma.$family_membersPayload, S>

  type family_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<family_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Family_membersCountAggregateInputType | true
    }

  export interface family_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['family_members'], meta: { name: 'family_members' } }
    /**
     * Find zero or one Family_members that matches the filter.
     * @param {family_membersFindUniqueArgs} args - Arguments to find a Family_members
     * @example
     * // Get one Family_members
     * const family_members = await prisma.family_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends family_membersFindUniqueArgs>(args: SelectSubset<T, family_membersFindUniqueArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {family_membersFindUniqueOrThrowArgs} args - Arguments to find a Family_members
     * @example
     * // Get one Family_members
     * const family_members = await prisma.family_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends family_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, family_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersFindFirstArgs} args - Arguments to find a Family_members
     * @example
     * // Get one Family_members
     * const family_members = await prisma.family_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends family_membersFindFirstArgs>(args?: SelectSubset<T, family_membersFindFirstArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersFindFirstOrThrowArgs} args - Arguments to find a Family_members
     * @example
     * // Get one Family_members
     * const family_members = await prisma.family_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends family_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, family_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Family_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Family_members
     * const family_members = await prisma.family_members.findMany()
     * 
     * // Get first 10 Family_members
     * const family_members = await prisma.family_members.findMany({ take: 10 })
     * 
     * // Only select the `MEMBERID`
     * const family_membersWithMEMBERIDOnly = await prisma.family_members.findMany({ select: { MEMBERID: true } })
     * 
     */
    findMany<T extends family_membersFindManyArgs>(args?: SelectSubset<T, family_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family_members.
     * @param {family_membersCreateArgs} args - Arguments to create a Family_members.
     * @example
     * // Create one Family_members
     * const Family_members = await prisma.family_members.create({
     *   data: {
     *     // ... data to create a Family_members
     *   }
     * })
     * 
     */
    create<T extends family_membersCreateArgs>(args: SelectSubset<T, family_membersCreateArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Family_members.
     * @param {family_membersCreateManyArgs} args - Arguments to create many Family_members.
     * @example
     * // Create many Family_members
     * const family_members = await prisma.family_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends family_membersCreateManyArgs>(args?: SelectSubset<T, family_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family_members.
     * @param {family_membersDeleteArgs} args - Arguments to delete one Family_members.
     * @example
     * // Delete one Family_members
     * const Family_members = await prisma.family_members.delete({
     *   where: {
     *     // ... filter to delete one Family_members
     *   }
     * })
     * 
     */
    delete<T extends family_membersDeleteArgs>(args: SelectSubset<T, family_membersDeleteArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family_members.
     * @param {family_membersUpdateArgs} args - Arguments to update one Family_members.
     * @example
     * // Update one Family_members
     * const family_members = await prisma.family_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends family_membersUpdateArgs>(args: SelectSubset<T, family_membersUpdateArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Family_members.
     * @param {family_membersDeleteManyArgs} args - Arguments to filter Family_members to delete.
     * @example
     * // Delete a few Family_members
     * const { count } = await prisma.family_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends family_membersDeleteManyArgs>(args?: SelectSubset<T, family_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Family_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Family_members
     * const family_members = await prisma.family_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends family_membersUpdateManyArgs>(args: SelectSubset<T, family_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family_members.
     * @param {family_membersUpsertArgs} args - Arguments to update or create a Family_members.
     * @example
     * // Update or create a Family_members
     * const family_members = await prisma.family_members.upsert({
     *   create: {
     *     // ... data to create a Family_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family_members we want to update
     *   }
     * })
     */
    upsert<T extends family_membersUpsertArgs>(args: SelectSubset<T, family_membersUpsertArgs<ExtArgs>>): Prisma__family_membersClient<$Result.GetResult<Prisma.$family_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Family_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersCountArgs} args - Arguments to filter Family_members to count.
     * @example
     * // Count the number of Family_members
     * const count = await prisma.family_members.count({
     *   where: {
     *     // ... the filter for the Family_members we want to count
     *   }
     * })
    **/
    count<T extends family_membersCountArgs>(
      args?: Subset<T, family_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Family_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Family_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Family_membersAggregateArgs>(args: Subset<T, Family_membersAggregateArgs>): Prisma.PrismaPromise<GetFamily_membersAggregateType<T>>

    /**
     * Group by Family_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {family_membersGroupByArgs} args - Group by arguments.
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
      T extends family_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: family_membersGroupByArgs['orderBy'] }
        : { orderBy?: family_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, family_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamily_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the family_members model
   */
  readonly fields: family_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for family_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__family_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the family_members model
   */
  interface family_membersFieldRefs {
    readonly MEMBERID: FieldRef<"family_members", 'Int'>
    readonly NAME: FieldRef<"family_members", 'String'>
    readonly AGE: FieldRef<"family_members", 'Int'>
    readonly DOB: FieldRef<"family_members", 'String'>
    readonly OCCUPATION: FieldRef<"family_members", 'String'>
  }
    

  // Custom InputTypes
  /**
   * family_members findUnique
   */
  export type family_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter, which family_members to fetch.
     */
    where: family_membersWhereUniqueInput
  }

  /**
   * family_members findUniqueOrThrow
   */
  export type family_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter, which family_members to fetch.
     */
    where: family_membersWhereUniqueInput
  }

  /**
   * family_members findFirst
   */
  export type family_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter, which family_members to fetch.
     */
    where?: family_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_members to fetch.
     */
    orderBy?: family_membersOrderByWithRelationInput | family_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for family_members.
     */
    cursor?: family_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of family_members.
     */
    distinct?: Family_membersScalarFieldEnum | Family_membersScalarFieldEnum[]
  }

  /**
   * family_members findFirstOrThrow
   */
  export type family_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter, which family_members to fetch.
     */
    where?: family_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_members to fetch.
     */
    orderBy?: family_membersOrderByWithRelationInput | family_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for family_members.
     */
    cursor?: family_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of family_members.
     */
    distinct?: Family_membersScalarFieldEnum | Family_membersScalarFieldEnum[]
  }

  /**
   * family_members findMany
   */
  export type family_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter, which family_members to fetch.
     */
    where?: family_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of family_members to fetch.
     */
    orderBy?: family_membersOrderByWithRelationInput | family_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing family_members.
     */
    cursor?: family_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` family_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` family_members.
     */
    skip?: number
    distinct?: Family_membersScalarFieldEnum | Family_membersScalarFieldEnum[]
  }

  /**
   * family_members create
   */
  export type family_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * The data needed to create a family_members.
     */
    data?: XOR<family_membersCreateInput, family_membersUncheckedCreateInput>
  }

  /**
   * family_members createMany
   */
  export type family_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many family_members.
     */
    data: family_membersCreateManyInput | family_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * family_members update
   */
  export type family_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * The data needed to update a family_members.
     */
    data: XOR<family_membersUpdateInput, family_membersUncheckedUpdateInput>
    /**
     * Choose, which family_members to update.
     */
    where: family_membersWhereUniqueInput
  }

  /**
   * family_members updateMany
   */
  export type family_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update family_members.
     */
    data: XOR<family_membersUpdateManyMutationInput, family_membersUncheckedUpdateManyInput>
    /**
     * Filter which family_members to update
     */
    where?: family_membersWhereInput
    /**
     * Limit how many family_members to update.
     */
    limit?: number
  }

  /**
   * family_members upsert
   */
  export type family_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * The filter to search for the family_members to update in case it exists.
     */
    where: family_membersWhereUniqueInput
    /**
     * In case the family_members found by the `where` argument doesn't exist, create a new family_members with this data.
     */
    create: XOR<family_membersCreateInput, family_membersUncheckedCreateInput>
    /**
     * In case the family_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<family_membersUpdateInput, family_membersUncheckedUpdateInput>
  }

  /**
   * family_members delete
   */
  export type family_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
    /**
     * Filter which family_members to delete.
     */
    where: family_membersWhereUniqueInput
  }

  /**
   * family_members deleteMany
   */
  export type family_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which family_members to delete
     */
    where?: family_membersWhereInput
    /**
     * Limit how many family_members to delete.
     */
    limit?: number
  }

  /**
   * family_members without action
   */
  export type family_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the family_members
     */
    select?: family_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the family_members
     */
    omit?: family_membersOmit<ExtArgs> | null
  }


  /**
   * Model players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    ID: number | null
    Age: number | null
  }

  export type PlayersSumAggregateOutputType = {
    ID: number | null
    Age: number | null
  }

  export type PlayersMinAggregateOutputType = {
    ID: number | null
    Name: string | null
    Country: string | null
    Role: string | null
    Age: number | null
    Club: string | null
  }

  export type PlayersMaxAggregateOutputType = {
    ID: number | null
    Name: string | null
    Country: string | null
    Role: string | null
    Age: number | null
    Club: string | null
  }

  export type PlayersCountAggregateOutputType = {
    ID: number
    Name: number
    Country: number
    Role: number
    Age: number
    Club: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    ID?: true
    Age?: true
  }

  export type PlayersSumAggregateInputType = {
    ID?: true
    Age?: true
  }

  export type PlayersMinAggregateInputType = {
    ID?: true
    Name?: true
    Country?: true
    Role?: true
    Age?: true
    Club?: true
  }

  export type PlayersMaxAggregateInputType = {
    ID?: true
    Name?: true
    Country?: true
    Role?: true
    Age?: true
    Club?: true
  }

  export type PlayersCountAggregateInputType = {
    ID?: true
    Name?: true
    Country?: true
    Role?: true
    Age?: true
    Club?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to aggregate.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type playersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playersWhereInput
    orderBy?: playersOrderByWithAggregationInput | playersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    ID: number
    Name: string | null
    Country: string | null
    Role: string | null
    Age: number | null
    Club: string | null
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type playersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Country?: boolean
    Role?: boolean
    Age?: boolean
    Club?: boolean
  }, ExtArgs["result"]["players"]>



  export type playersSelectScalar = {
    ID?: boolean
    Name?: boolean
    Country?: boolean
    Role?: boolean
    Age?: boolean
    Club?: boolean
  }

  export type playersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Name" | "Country" | "Role" | "Age" | "Club", ExtArgs["result"]["players"]>

  export type $playersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "players"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Name: string | null
      Country: string | null
      Role: string | null
      Age: number | null
      Club: string | null
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type playersGetPayload<S extends boolean | null | undefined | playersDefaultArgs> = $Result.GetResult<Prisma.$playersPayload, S>

  type playersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface playersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['players'], meta: { name: 'players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {playersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playersFindUniqueArgs>(args: SelectSubset<T, playersFindUniqueArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playersFindUniqueOrThrowArgs>(args: SelectSubset<T, playersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playersFindFirstArgs>(args?: SelectSubset<T, playersFindFirstArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playersFindFirstOrThrowArgs>(args?: SelectSubset<T, playersFindFirstOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const playersWithIDOnly = await prisma.players.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends playersFindManyArgs>(args?: SelectSubset<T, playersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {playersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends playersCreateArgs>(args: SelectSubset<T, playersCreateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {playersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playersCreateManyArgs>(args?: SelectSubset<T, playersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Players.
     * @param {playersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends playersDeleteArgs>(args: SelectSubset<T, playersDeleteArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {playersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playersUpdateArgs>(args: SelectSubset<T, playersUpdateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {playersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playersDeleteManyArgs>(args?: SelectSubset<T, playersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playersUpdateManyArgs>(args: SelectSubset<T, playersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Players.
     * @param {playersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends playersUpsertArgs>(args: SelectSubset<T, playersUpsertArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playersCountArgs>(
      args?: Subset<T, playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersGroupByArgs} args - Group by arguments.
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
      T extends playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playersGroupByArgs['orderBy'] }
        : { orderBy?: playersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the players model
   */
  readonly fields: playersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the players model
   */
  interface playersFieldRefs {
    readonly ID: FieldRef<"players", 'Int'>
    readonly Name: FieldRef<"players", 'String'>
    readonly Country: FieldRef<"players", 'String'>
    readonly Role: FieldRef<"players", 'String'>
    readonly Age: FieldRef<"players", 'Int'>
    readonly Club: FieldRef<"players", 'String'>
  }
    

  // Custom InputTypes
  /**
   * players findUnique
   */
  export type playersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findUniqueOrThrow
   */
  export type playersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findFirst
   */
  export type playersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findFirstOrThrow
   */
  export type playersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findMany
   */
  export type playersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players create
   */
  export type playersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data needed to create a players.
     */
    data?: XOR<playersCreateInput, playersUncheckedCreateInput>
  }

  /**
   * players createMany
   */
  export type playersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playersCreateManyInput | playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * players update
   */
  export type playersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data needed to update a players.
     */
    data: XOR<playersUpdateInput, playersUncheckedUpdateInput>
    /**
     * Choose, which players to update.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players updateMany
   */
  export type playersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playersWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * players upsert
   */
  export type playersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The filter to search for the players to update in case it exists.
     */
    where: playersWhereUniqueInput
    /**
     * In case the players found by the `where` argument doesn't exist, create a new players with this data.
     */
    create: XOR<playersCreateInput, playersUncheckedCreateInput>
    /**
     * In case the players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playersUpdateInput, playersUncheckedUpdateInput>
  }

  /**
   * players delete
   */
  export type playersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Filter which players to delete.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players deleteMany
   */
  export type playersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playersWhereInput
    /**
     * Limit how many players to delete.
     */
    limit?: number
  }

  /**
   * players without action
   */
  export type playersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
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


  export const CountryScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Continent: 'Continent',
    Sports: 'Sports',
    Famous_Player: 'Famous_Player',
    Champion: 'Champion'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const Family_membersScalarFieldEnum: {
    MEMBERID: 'MEMBERID',
    NAME: 'NAME',
    AGE: 'AGE',
    DOB: 'DOB',
    OCCUPATION: 'OCCUPATION'
  };

  export type Family_membersScalarFieldEnum = (typeof Family_membersScalarFieldEnum)[keyof typeof Family_membersScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Country: 'Country',
    Role: 'Role',
    Age: 'Age',
    Club: 'Club'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const countryOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Continent: 'Continent',
    Sports: 'Sports',
    Famous_Player: 'Famous_Player'
  };

  export type countryOrderByRelevanceFieldEnum = (typeof countryOrderByRelevanceFieldEnum)[keyof typeof countryOrderByRelevanceFieldEnum]


  export const family_membersOrderByRelevanceFieldEnum: {
    NAME: 'NAME',
    DOB: 'DOB',
    OCCUPATION: 'OCCUPATION'
  };

  export type family_membersOrderByRelevanceFieldEnum = (typeof family_membersOrderByRelevanceFieldEnum)[keyof typeof family_membersOrderByRelevanceFieldEnum]


  export const playersOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Country: 'Country',
    Role: 'Role',
    Club: 'Club'
  };

  export type playersOrderByRelevanceFieldEnum = (typeof playersOrderByRelevanceFieldEnum)[keyof typeof playersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type countryWhereInput = {
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    ID?: IntFilter<"country"> | number
    Name?: StringNullableFilter<"country"> | string | null
    Continent?: StringNullableFilter<"country"> | string | null
    Sports?: StringNullableFilter<"country"> | string | null
    Famous_Player?: StringNullableFilter<"country"> | string | null
    Champion?: IntNullableFilter<"country"> | number | null
  }

  export type countryOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Continent?: SortOrderInput | SortOrder
    Sports?: SortOrderInput | SortOrder
    Famous_Player?: SortOrderInput | SortOrder
    Champion?: SortOrderInput | SortOrder
    _relevance?: countryOrderByRelevanceInput
  }

  export type countryWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    Name?: StringNullableFilter<"country"> | string | null
    Continent?: StringNullableFilter<"country"> | string | null
    Sports?: StringNullableFilter<"country"> | string | null
    Famous_Player?: StringNullableFilter<"country"> | string | null
    Champion?: IntNullableFilter<"country"> | number | null
  }, "ID">

  export type countryOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Continent?: SortOrderInput | SortOrder
    Sports?: SortOrderInput | SortOrder
    Famous_Player?: SortOrderInput | SortOrder
    Champion?: SortOrderInput | SortOrder
    _count?: countryCountOrderByAggregateInput
    _avg?: countryAvgOrderByAggregateInput
    _max?: countryMaxOrderByAggregateInput
    _min?: countryMinOrderByAggregateInput
    _sum?: countrySumOrderByAggregateInput
  }

  export type countryScalarWhereWithAggregatesInput = {
    AND?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    OR?: countryScalarWhereWithAggregatesInput[]
    NOT?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"country"> | number
    Name?: StringNullableWithAggregatesFilter<"country"> | string | null
    Continent?: StringNullableWithAggregatesFilter<"country"> | string | null
    Sports?: StringNullableWithAggregatesFilter<"country"> | string | null
    Famous_Player?: StringNullableWithAggregatesFilter<"country"> | string | null
    Champion?: IntNullableWithAggregatesFilter<"country"> | number | null
  }

  export type family_membersWhereInput = {
    AND?: family_membersWhereInput | family_membersWhereInput[]
    OR?: family_membersWhereInput[]
    NOT?: family_membersWhereInput | family_membersWhereInput[]
    MEMBERID?: IntFilter<"family_members"> | number
    NAME?: StringNullableFilter<"family_members"> | string | null
    AGE?: IntNullableFilter<"family_members"> | number | null
    DOB?: StringNullableFilter<"family_members"> | string | null
    OCCUPATION?: StringNullableFilter<"family_members"> | string | null
  }

  export type family_membersOrderByWithRelationInput = {
    MEMBERID?: SortOrder
    NAME?: SortOrderInput | SortOrder
    AGE?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    OCCUPATION?: SortOrderInput | SortOrder
    _relevance?: family_membersOrderByRelevanceInput
  }

  export type family_membersWhereUniqueInput = Prisma.AtLeast<{
    MEMBERID?: number
    AND?: family_membersWhereInput | family_membersWhereInput[]
    OR?: family_membersWhereInput[]
    NOT?: family_membersWhereInput | family_membersWhereInput[]
    NAME?: StringNullableFilter<"family_members"> | string | null
    AGE?: IntNullableFilter<"family_members"> | number | null
    DOB?: StringNullableFilter<"family_members"> | string | null
    OCCUPATION?: StringNullableFilter<"family_members"> | string | null
  }, "MEMBERID">

  export type family_membersOrderByWithAggregationInput = {
    MEMBERID?: SortOrder
    NAME?: SortOrderInput | SortOrder
    AGE?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    OCCUPATION?: SortOrderInput | SortOrder
    _count?: family_membersCountOrderByAggregateInput
    _avg?: family_membersAvgOrderByAggregateInput
    _max?: family_membersMaxOrderByAggregateInput
    _min?: family_membersMinOrderByAggregateInput
    _sum?: family_membersSumOrderByAggregateInput
  }

  export type family_membersScalarWhereWithAggregatesInput = {
    AND?: family_membersScalarWhereWithAggregatesInput | family_membersScalarWhereWithAggregatesInput[]
    OR?: family_membersScalarWhereWithAggregatesInput[]
    NOT?: family_membersScalarWhereWithAggregatesInput | family_membersScalarWhereWithAggregatesInput[]
    MEMBERID?: IntWithAggregatesFilter<"family_members"> | number
    NAME?: StringNullableWithAggregatesFilter<"family_members"> | string | null
    AGE?: IntNullableWithAggregatesFilter<"family_members"> | number | null
    DOB?: StringNullableWithAggregatesFilter<"family_members"> | string | null
    OCCUPATION?: StringNullableWithAggregatesFilter<"family_members"> | string | null
  }

  export type playersWhereInput = {
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    ID?: IntFilter<"players"> | number
    Name?: StringNullableFilter<"players"> | string | null
    Country?: StringNullableFilter<"players"> | string | null
    Role?: StringNullableFilter<"players"> | string | null
    Age?: IntNullableFilter<"players"> | number | null
    Club?: StringNullableFilter<"players"> | string | null
  }

  export type playersOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Age?: SortOrderInput | SortOrder
    Club?: SortOrderInput | SortOrder
    _relevance?: playersOrderByRelevanceInput
  }

  export type playersWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    Name?: StringNullableFilter<"players"> | string | null
    Country?: StringNullableFilter<"players"> | string | null
    Role?: StringNullableFilter<"players"> | string | null
    Age?: IntNullableFilter<"players"> | number | null
    Club?: StringNullableFilter<"players"> | string | null
  }, "ID">

  export type playersOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    Age?: SortOrderInput | SortOrder
    Club?: SortOrderInput | SortOrder
    _count?: playersCountOrderByAggregateInput
    _avg?: playersAvgOrderByAggregateInput
    _max?: playersMaxOrderByAggregateInput
    _min?: playersMinOrderByAggregateInput
    _sum?: playersSumOrderByAggregateInput
  }

  export type playersScalarWhereWithAggregatesInput = {
    AND?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    OR?: playersScalarWhereWithAggregatesInput[]
    NOT?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"players"> | number
    Name?: StringNullableWithAggregatesFilter<"players"> | string | null
    Country?: StringNullableWithAggregatesFilter<"players"> | string | null
    Role?: StringNullableWithAggregatesFilter<"players"> | string | null
    Age?: IntNullableWithAggregatesFilter<"players"> | number | null
    Club?: StringNullableWithAggregatesFilter<"players"> | string | null
  }

  export type countryCreateInput = {
    Name?: string | null
    Continent?: string | null
    Sports?: string | null
    Famous_Player?: string | null
    Champion?: number | null
  }

  export type countryUncheckedCreateInput = {
    ID?: number
    Name?: string | null
    Continent?: string | null
    Sports?: string | null
    Famous_Player?: string | null
    Champion?: number | null
  }

  export type countryUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Continent?: NullableStringFieldUpdateOperationsInput | string | null
    Sports?: NullableStringFieldUpdateOperationsInput | string | null
    Famous_Player?: NullableStringFieldUpdateOperationsInput | string | null
    Champion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type countryUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Continent?: NullableStringFieldUpdateOperationsInput | string | null
    Sports?: NullableStringFieldUpdateOperationsInput | string | null
    Famous_Player?: NullableStringFieldUpdateOperationsInput | string | null
    Champion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type countryCreateManyInput = {
    ID?: number
    Name?: string | null
    Continent?: string | null
    Sports?: string | null
    Famous_Player?: string | null
    Champion?: number | null
  }

  export type countryUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Continent?: NullableStringFieldUpdateOperationsInput | string | null
    Sports?: NullableStringFieldUpdateOperationsInput | string | null
    Famous_Player?: NullableStringFieldUpdateOperationsInput | string | null
    Champion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type countryUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Continent?: NullableStringFieldUpdateOperationsInput | string | null
    Sports?: NullableStringFieldUpdateOperationsInput | string | null
    Famous_Player?: NullableStringFieldUpdateOperationsInput | string | null
    Champion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type family_membersCreateInput = {
    NAME?: string | null
    AGE?: number | null
    DOB?: string | null
    OCCUPATION?: string | null
  }

  export type family_membersUncheckedCreateInput = {
    MEMBERID?: number
    NAME?: string | null
    AGE?: number | null
    DOB?: string | null
    OCCUPATION?: string | null
  }

  export type family_membersUpdateInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    OCCUPATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type family_membersUncheckedUpdateInput = {
    MEMBERID?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    OCCUPATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type family_membersCreateManyInput = {
    MEMBERID?: number
    NAME?: string | null
    AGE?: number | null
    DOB?: string | null
    OCCUPATION?: string | null
  }

  export type family_membersUpdateManyMutationInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    OCCUPATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type family_membersUncheckedUpdateManyInput = {
    MEMBERID?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    OCCUPATION?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersCreateInput = {
    Name?: string | null
    Country?: string | null
    Role?: string | null
    Age?: number | null
    Club?: string | null
  }

  export type playersUncheckedCreateInput = {
    ID?: number
    Name?: string | null
    Country?: string | null
    Role?: string | null
    Age?: number | null
    Club?: string | null
  }

  export type playersUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    Club?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    Club?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersCreateManyInput = {
    ID?: number
    Name?: string | null
    Country?: string | null
    Role?: string | null
    Age?: number | null
    Club?: string | null
  }

  export type playersUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    Club?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playersUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    Club?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type countryOrderByRelevanceInput = {
    fields: countryOrderByRelevanceFieldEnum | countryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type countryCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Continent?: SortOrder
    Sports?: SortOrder
    Famous_Player?: SortOrder
    Champion?: SortOrder
  }

  export type countryAvgOrderByAggregateInput = {
    ID?: SortOrder
    Champion?: SortOrder
  }

  export type countryMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Continent?: SortOrder
    Sports?: SortOrder
    Famous_Player?: SortOrder
    Champion?: SortOrder
  }

  export type countryMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Continent?: SortOrder
    Sports?: SortOrder
    Famous_Player?: SortOrder
    Champion?: SortOrder
  }

  export type countrySumOrderByAggregateInput = {
    ID?: SortOrder
    Champion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type family_membersOrderByRelevanceInput = {
    fields: family_membersOrderByRelevanceFieldEnum | family_membersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type family_membersCountOrderByAggregateInput = {
    MEMBERID?: SortOrder
    NAME?: SortOrder
    AGE?: SortOrder
    DOB?: SortOrder
    OCCUPATION?: SortOrder
  }

  export type family_membersAvgOrderByAggregateInput = {
    MEMBERID?: SortOrder
    AGE?: SortOrder
  }

  export type family_membersMaxOrderByAggregateInput = {
    MEMBERID?: SortOrder
    NAME?: SortOrder
    AGE?: SortOrder
    DOB?: SortOrder
    OCCUPATION?: SortOrder
  }

  export type family_membersMinOrderByAggregateInput = {
    MEMBERID?: SortOrder
    NAME?: SortOrder
    AGE?: SortOrder
    DOB?: SortOrder
    OCCUPATION?: SortOrder
  }

  export type family_membersSumOrderByAggregateInput = {
    MEMBERID?: SortOrder
    AGE?: SortOrder
  }

  export type playersOrderByRelevanceInput = {
    fields: playersOrderByRelevanceFieldEnum | playersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type playersCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Country?: SortOrder
    Role?: SortOrder
    Age?: SortOrder
    Club?: SortOrder
  }

  export type playersAvgOrderByAggregateInput = {
    ID?: SortOrder
    Age?: SortOrder
  }

  export type playersMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Country?: SortOrder
    Role?: SortOrder
    Age?: SortOrder
    Club?: SortOrder
  }

  export type playersMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Country?: SortOrder
    Role?: SortOrder
    Age?: SortOrder
    Club?: SortOrder
  }

  export type playersSumOrderByAggregateInput = {
    ID?: SortOrder
    Age?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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