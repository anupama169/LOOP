
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model workspace
 * 
 */
export type workspace = $Result.DefaultSelection<Prisma.$workspacePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model workspaceuser
 * 
 */
export type workspaceuser = $Result.DefaultSelection<Prisma.$workspaceuserPayload>
/**
 * Model feedback
 * 
 */
export type feedback = $Result.DefaultSelection<Prisma.$feedbackPayload>
/**
 * Model workspacefeedback
 * 
 */
export type workspacefeedback = $Result.DefaultSelection<Prisma.$workspacefeedbackPayload>
/**
 * Model theme
 * 
 */
export type theme = $Result.DefaultSelection<Prisma.$themePayload>
/**
 * Model workspacetheme
 * 
 */
export type workspacetheme = $Result.DefaultSelection<Prisma.$workspacethemePayload>
/**
 * Model feedbacktheme
 * 
 */
export type feedbacktheme = $Result.DefaultSelection<Prisma.$feedbackthemePayload>
/**
 * Model embedding
 * 
 */
export type embedding = $Result.DefaultSelection<Prisma.$embeddingPayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>
/**
 * Model workspacereport
 * 
 */
export type workspacereport = $Result.DefaultSelection<Prisma.$workspacereportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  analyst: 'analyst',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Sentiment: {
  positive: 'positive',
  neutral: 'neutral',
  negative: 'negative'
};

export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment]


export const Status: {
  new: 'new',
  reviewed: 'reviewed',
  actioned: 'actioned'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Sentiment = $Enums.Sentiment

export const Sentiment: typeof $Enums.Sentiment

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.workspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceuser`: Exposes CRUD operations for the **workspaceuser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaceusers
    * const workspaceusers = await prisma.workspaceuser.findMany()
    * ```
    */
  get workspaceuser(): Prisma.workspaceuserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspacefeedback`: Exposes CRUD operations for the **workspacefeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspacefeedbacks
    * const workspacefeedbacks = await prisma.workspacefeedback.findMany()
    * ```
    */
  get workspacefeedback(): Prisma.workspacefeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.themeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspacetheme`: Exposes CRUD operations for the **workspacetheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspacethemes
    * const workspacethemes = await prisma.workspacetheme.findMany()
    * ```
    */
  get workspacetheme(): Prisma.workspacethemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbacktheme`: Exposes CRUD operations for the **feedbacktheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbackthemes
    * const feedbackthemes = await prisma.feedbacktheme.findMany()
    * ```
    */
  get feedbacktheme(): Prisma.feedbackthemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embedding`: Exposes CRUD operations for the **embedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Embeddings
    * const embeddings = await prisma.embedding.findMany()
    * ```
    */
  get embedding(): Prisma.embeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspacereport`: Exposes CRUD operations for the **workspacereport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspacereports
    * const workspacereports = await prisma.workspacereport.findMany()
    * ```
    */
  get workspacereport(): Prisma.workspacereportDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    workspace: 'workspace',
    user: 'user',
    workspaceuser: 'workspaceuser',
    feedback: 'feedback',
    workspacefeedback: 'workspacefeedback',
    theme: 'theme',
    workspacetheme: 'workspacetheme',
    feedbacktheme: 'feedbacktheme',
    embedding: 'embedding',
    report: 'report',
    workspacereport: 'workspacereport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workspace" | "user" | "workspaceuser" | "feedback" | "workspacefeedback" | "theme" | "workspacetheme" | "feedbacktheme" | "embedding" | "report" | "workspacereport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      workspace: {
        payload: Prisma.$workspacePayload<ExtArgs>
        fields: Prisma.workspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          findFirst: {
            args: Prisma.workspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          findMany: {
            args: Prisma.workspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>[]
          }
          create: {
            args: Prisma.workspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          createMany: {
            args: Prisma.workspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>[]
          }
          delete: {
            args: Prisma.workspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          update: {
            args: Prisma.workspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          deleteMany: {
            args: Prisma.workspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>[]
          }
          upsert: {
            args: Prisma.workspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.workspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      workspaceuser: {
        payload: Prisma.$workspaceuserPayload<ExtArgs>
        fields: Prisma.workspaceuserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspaceuserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspaceuserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          findFirst: {
            args: Prisma.workspaceuserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspaceuserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          findMany: {
            args: Prisma.workspaceuserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>[]
          }
          create: {
            args: Prisma.workspaceuserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          createMany: {
            args: Prisma.workspaceuserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspaceuserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>[]
          }
          delete: {
            args: Prisma.workspaceuserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          update: {
            args: Prisma.workspaceuserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          deleteMany: {
            args: Prisma.workspaceuserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspaceuserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspaceuserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>[]
          }
          upsert: {
            args: Prisma.workspaceuserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspaceuserPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceuserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceuser>
          }
          groupBy: {
            args: Prisma.workspaceuserGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceuserGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspaceuserCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceuserCountAggregateOutputType> | number
          }
        }
      }
      feedback: {
        payload: Prisma.$feedbackPayload<ExtArgs>
        fields: Prisma.feedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findFirst: {
            args: Prisma.feedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findMany: {
            args: Prisma.feedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          create: {
            args: Prisma.feedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          createMany: {
            args: Prisma.feedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          delete: {
            args: Prisma.feedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          update: {
            args: Prisma.feedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          deleteMany: {
            args: Prisma.feedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          upsert: {
            args: Prisma.feedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.feedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      workspacefeedback: {
        payload: Prisma.$workspacefeedbackPayload<ExtArgs>
        fields: Prisma.workspacefeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacefeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacefeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          findFirst: {
            args: Prisma.workspacefeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacefeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          findMany: {
            args: Prisma.workspacefeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>[]
          }
          create: {
            args: Prisma.workspacefeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          createMany: {
            args: Prisma.workspacefeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacefeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>[]
          }
          delete: {
            args: Prisma.workspacefeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          update: {
            args: Prisma.workspacefeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          deleteMany: {
            args: Prisma.workspacefeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacefeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacefeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>[]
          }
          upsert: {
            args: Prisma.workspacefeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacefeedbackPayload>
          }
          aggregate: {
            args: Prisma.WorkspacefeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspacefeedback>
          }
          groupBy: {
            args: Prisma.workspacefeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacefeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacefeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacefeedbackCountAggregateOutputType> | number
          }
        }
      }
      theme: {
        payload: Prisma.$themePayload<ExtArgs>
        fields: Prisma.themeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.themeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.themeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          findFirst: {
            args: Prisma.themeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.themeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          findMany: {
            args: Prisma.themeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          create: {
            args: Prisma.themeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          createMany: {
            args: Prisma.themeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.themeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          delete: {
            args: Prisma.themeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          update: {
            args: Prisma.themeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          deleteMany: {
            args: Prisma.themeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.themeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.themeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          upsert: {
            args: Prisma.themeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.themeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.themeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      workspacetheme: {
        payload: Prisma.$workspacethemePayload<ExtArgs>
        fields: Prisma.workspacethemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacethemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacethemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          findFirst: {
            args: Prisma.workspacethemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacethemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          findMany: {
            args: Prisma.workspacethemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>[]
          }
          create: {
            args: Prisma.workspacethemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          createMany: {
            args: Prisma.workspacethemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacethemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>[]
          }
          delete: {
            args: Prisma.workspacethemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          update: {
            args: Prisma.workspacethemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          deleteMany: {
            args: Prisma.workspacethemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacethemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacethemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>[]
          }
          upsert: {
            args: Prisma.workspacethemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacethemePayload>
          }
          aggregate: {
            args: Prisma.WorkspacethemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspacetheme>
          }
          groupBy: {
            args: Prisma.workspacethemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacethemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacethemeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacethemeCountAggregateOutputType> | number
          }
        }
      }
      feedbacktheme: {
        payload: Prisma.$feedbackthemePayload<ExtArgs>
        fields: Prisma.feedbackthemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackthemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackthemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          findFirst: {
            args: Prisma.feedbackthemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackthemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          findMany: {
            args: Prisma.feedbackthemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>[]
          }
          create: {
            args: Prisma.feedbackthemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          createMany: {
            args: Prisma.feedbackthemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feedbackthemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>[]
          }
          delete: {
            args: Prisma.feedbackthemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          update: {
            args: Prisma.feedbackthemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          deleteMany: {
            args: Prisma.feedbackthemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackthemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feedbackthemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>[]
          }
          upsert: {
            args: Prisma.feedbackthemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackthemePayload>
          }
          aggregate: {
            args: Prisma.FeedbackthemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbacktheme>
          }
          groupBy: {
            args: Prisma.feedbackthemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackthemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackthemeCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackthemeCountAggregateOutputType> | number
          }
        }
      }
      embedding: {
        payload: Prisma.$embeddingPayload<ExtArgs>
        fields: Prisma.embeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.embeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.embeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          findFirst: {
            args: Prisma.embeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.embeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          findMany: {
            args: Prisma.embeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>[]
          }
          create: {
            args: Prisma.embeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          createMany: {
            args: Prisma.embeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.embeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>[]
          }
          delete: {
            args: Prisma.embeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          update: {
            args: Prisma.embeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          deleteMany: {
            args: Prisma.embeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.embeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.embeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>[]
          }
          upsert: {
            args: Prisma.embeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$embeddingPayload>
          }
          aggregate: {
            args: Prisma.EmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbedding>
          }
          groupBy: {
            args: Prisma.embeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.embeddingCountArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      workspacereport: {
        payload: Prisma.$workspacereportPayload<ExtArgs>
        fields: Prisma.workspacereportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacereportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacereportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          findFirst: {
            args: Prisma.workspacereportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacereportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          findMany: {
            args: Prisma.workspacereportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>[]
          }
          create: {
            args: Prisma.workspacereportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          createMany: {
            args: Prisma.workspacereportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacereportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>[]
          }
          delete: {
            args: Prisma.workspacereportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          update: {
            args: Prisma.workspacereportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          deleteMany: {
            args: Prisma.workspacereportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacereportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacereportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>[]
          }
          upsert: {
            args: Prisma.workspacereportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacereportPayload>
          }
          aggregate: {
            args: Prisma.WorkspacereportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspacereport>
          }
          groupBy: {
            args: Prisma.workspacereportGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacereportGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacereportCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacereportCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    workspace?: workspaceOmit
    user?: userOmit
    workspaceuser?: workspaceuserOmit
    feedback?: feedbackOmit
    workspacefeedback?: workspacefeedbackOmit
    theme?: themeOmit
    workspacetheme?: workspacethemeOmit
    feedbacktheme?: feedbackthemeOmit
    embedding?: embeddingOmit
    report?: reportOmit
    workspacereport?: workspacereportOmit
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
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    feedback: number
    report: number
    theme: number
    user: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | WorkspaceCountOutputTypeCountFeedbackArgs
    report?: boolean | WorkspaceCountOutputTypeCountReportArgs
    theme?: boolean | WorkspaceCountOutputTypeCountThemeArgs
    user?: boolean | WorkspaceCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacefeedbackWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacereportWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountThemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacethemeWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceuserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user: number
    workspace: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserCountOutputTypeCountUserArgs
    workspace?: boolean | UserCountOutputTypeCountWorkspaceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceuserWhereInput
  }


  /**
   * Count Type FeedbackCountOutputType
   */

  export type FeedbackCountOutputType = {
    feedback: number
    theme: number
    workspace: number
  }

  export type FeedbackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackCountOutputTypeCountFeedbackArgs
    theme?: boolean | FeedbackCountOutputTypeCountThemeArgs
    workspace?: boolean | FeedbackCountOutputTypeCountWorkspaceArgs
  }

  // Custom InputTypes
  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCountOutputType
     */
    select?: FeedbackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: embeddingWhereInput
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountThemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackthemeWhereInput
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacefeedbackWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    feedback: number
    workspace: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | ThemeCountOutputTypeCountFeedbackArgs
    workspace?: boolean | ThemeCountOutputTypeCountWorkspaceArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackthemeWhereInput
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacethemeWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    workspace: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | ReportCountOutputTypeCountWorkspaceArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacereportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    id?: true
  }

  export type WorkspaceSumAggregateInputType = {
    id?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace to aggregate.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type workspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceWhereInput
    orderBy?: workspaceOrderByWithAggregationInput | workspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: workspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends workspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type workspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    feedback?: boolean | workspace$feedbackArgs<ExtArgs>
    report?: boolean | workspace$reportArgs<ExtArgs>
    theme?: boolean | workspace$themeArgs<ExtArgs>
    user?: boolean | workspace$userArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type workspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type workspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type workspaceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type workspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["workspace"]>
  export type workspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | workspace$feedbackArgs<ExtArgs>
    report?: boolean | workspace$reportArgs<ExtArgs>
    theme?: boolean | workspace$themeArgs<ExtArgs>
    user?: boolean | workspace$userArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type workspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspace"
    objects: {
      feedback: Prisma.$workspacefeedbackPayload<ExtArgs>[]
      report: Prisma.$workspacereportPayload<ExtArgs>[]
      theme: Prisma.$workspacethemePayload<ExtArgs>[]
      user: Prisma.$workspaceuserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type workspaceGetPayload<S extends boolean | null | undefined | workspaceDefaultArgs> = $Result.GetResult<Prisma.$workspacePayload, S>

  type workspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface workspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspace'], meta: { name: 'workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {workspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspaceFindUniqueArgs>(args: SelectSubset<T, workspaceFindUniqueArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, workspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspaceFindFirstArgs>(args?: SelectSubset<T, workspaceFindFirstArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, workspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspaceFindManyArgs>(args?: SelectSubset<T, workspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {workspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends workspaceCreateArgs>(args: SelectSubset<T, workspaceCreateArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {workspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspaceCreateManyArgs>(args?: SelectSubset<T, workspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {workspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, workspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {workspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends workspaceDeleteArgs>(args: SelectSubset<T, workspaceDeleteArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {workspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspaceUpdateArgs>(args: SelectSubset<T, workspaceUpdateArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {workspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspaceDeleteManyArgs>(args?: SelectSubset<T, workspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspaceUpdateManyArgs>(args: SelectSubset<T, workspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {workspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends workspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, workspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {workspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends workspaceUpsertArgs>(args: SelectSubset<T, workspaceUpsertArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspaceCountArgs>(
      args?: Subset<T, workspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceGroupByArgs} args - Group by arguments.
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
      T extends workspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspaceGroupByArgs['orderBy'] }
        : { orderBy?: workspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspace model
   */
  readonly fields: workspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends workspace$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, workspace$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends workspace$reportArgs<ExtArgs> = {}>(args?: Subset<T, workspace$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    theme<T extends workspace$themeArgs<ExtArgs> = {}>(args?: Subset<T, workspace$themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends workspace$userArgs<ExtArgs> = {}>(args?: Subset<T, workspace$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the workspace model
   */
  interface workspaceFieldRefs {
    readonly id: FieldRef<"workspace", 'Int'>
    readonly name: FieldRef<"workspace", 'String'>
    readonly createdAt: FieldRef<"workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workspace findUnique
   */
  export type workspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where: workspaceWhereUniqueInput
  }

  /**
   * workspace findUniqueOrThrow
   */
  export type workspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where: workspaceWhereUniqueInput
  }

  /**
   * workspace findFirst
   */
  export type workspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * workspace findFirstOrThrow
   */
  export type workspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * workspace findMany
   */
  export type workspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * workspace create
   */
  export type workspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a workspace.
     */
    data: XOR<workspaceCreateInput, workspaceUncheckedCreateInput>
  }

  /**
   * workspace createMany
   */
  export type workspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspaceCreateManyInput | workspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspace createManyAndReturn
   */
  export type workspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * The data used to create many workspaces.
     */
    data: workspaceCreateManyInput | workspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspace update
   */
  export type workspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a workspace.
     */
    data: XOR<workspaceUpdateInput, workspaceUncheckedUpdateInput>
    /**
     * Choose, which workspace to update.
     */
    where: workspaceWhereUniqueInput
  }

  /**
   * workspace updateMany
   */
  export type workspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspaceUpdateManyMutationInput, workspaceUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspaceWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspace updateManyAndReturn
   */
  export type workspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspaceUpdateManyMutationInput, workspaceUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspaceWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspace upsert
   */
  export type workspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the workspace to update in case it exists.
     */
    where: workspaceWhereUniqueInput
    /**
     * In case the workspace found by the `where` argument doesn't exist, create a new workspace with this data.
     */
    create: XOR<workspaceCreateInput, workspaceUncheckedCreateInput>
    /**
     * In case the workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspaceUpdateInput, workspaceUncheckedUpdateInput>
  }

  /**
   * workspace delete
   */
  export type workspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter which workspace to delete.
     */
    where: workspaceWhereUniqueInput
  }

  /**
   * workspace deleteMany
   */
  export type workspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspaceWhereInput
    /**
     * Limit how many workspaces to delete.
     */
    limit?: number
  }

  /**
   * workspace.feedback
   */
  export type workspace$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    where?: workspacefeedbackWhereInput
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    cursor?: workspacefeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacefeedbackScalarFieldEnum | WorkspacefeedbackScalarFieldEnum[]
  }

  /**
   * workspace.report
   */
  export type workspace$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    where?: workspacereportWhereInput
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    cursor?: workspacereportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacereportScalarFieldEnum | WorkspacereportScalarFieldEnum[]
  }

  /**
   * workspace.theme
   */
  export type workspace$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    where?: workspacethemeWhereInput
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    cursor?: workspacethemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacethemeScalarFieldEnum | WorkspacethemeScalarFieldEnum[]
  }

  /**
   * workspace.user
   */
  export type workspace$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    where?: workspaceuserWhereInput
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    cursor?: workspaceuserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceuserScalarFieldEnum | WorkspaceuserScalarFieldEnum[]
  }

  /**
   * workspace without action
   */
  export type workspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace
     */
    omit?: workspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    user?: boolean | user$userArgs<ExtArgs>
    workspace?: boolean | user$workspaceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user$userArgs<ExtArgs>
    workspace?: boolean | user$workspaceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      user: Prisma.$reportPayload<ExtArgs>[]
      workspace: Prisma.$workspaceuserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user$userArgs<ExtArgs> = {}>(args?: Subset<T, user$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends user$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, user$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly passwordHash: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.user
   */
  export type user$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * user.workspace
   */
  export type user$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    where?: workspaceuserWhereInput
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    cursor?: workspaceuserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceuserScalarFieldEnum | WorkspaceuserScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model workspaceuser
   */

  export type AggregateWorkspaceuser = {
    _count: WorkspaceuserCountAggregateOutputType | null
    _avg: WorkspaceuserAvgAggregateOutputType | null
    _sum: WorkspaceuserSumAggregateOutputType | null
    _min: WorkspaceuserMinAggregateOutputType | null
    _max: WorkspaceuserMaxAggregateOutputType | null
  }

  export type WorkspaceuserAvgAggregateOutputType = {
    workspaceid: number | null
    userid: number | null
  }

  export type WorkspaceuserSumAggregateOutputType = {
    workspaceid: number | null
    userid: number | null
  }

  export type WorkspaceuserMinAggregateOutputType = {
    workspaceid: number | null
    userid: number | null
  }

  export type WorkspaceuserMaxAggregateOutputType = {
    workspaceid: number | null
    userid: number | null
  }

  export type WorkspaceuserCountAggregateOutputType = {
    workspaceid: number
    userid: number
    _all: number
  }


  export type WorkspaceuserAvgAggregateInputType = {
    workspaceid?: true
    userid?: true
  }

  export type WorkspaceuserSumAggregateInputType = {
    workspaceid?: true
    userid?: true
  }

  export type WorkspaceuserMinAggregateInputType = {
    workspaceid?: true
    userid?: true
  }

  export type WorkspaceuserMaxAggregateInputType = {
    workspaceid?: true
    userid?: true
  }

  export type WorkspaceuserCountAggregateInputType = {
    workspaceid?: true
    userid?: true
    _all?: true
  }

  export type WorkspaceuserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaceuser to aggregate.
     */
    where?: workspaceuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaceusers to fetch.
     */
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspaceuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaceusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaceusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaceusers
    **/
    _count?: true | WorkspaceuserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceuserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceuserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceuserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceuserMaxAggregateInputType
  }

  export type GetWorkspaceuserAggregateType<T extends WorkspaceuserAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceuser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceuser[P]>
      : GetScalarType<T[P], AggregateWorkspaceuser[P]>
  }




  export type workspaceuserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceuserWhereInput
    orderBy?: workspaceuserOrderByWithAggregationInput | workspaceuserOrderByWithAggregationInput[]
    by: WorkspaceuserScalarFieldEnum[] | WorkspaceuserScalarFieldEnum
    having?: workspaceuserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceuserCountAggregateInputType | true
    _avg?: WorkspaceuserAvgAggregateInputType
    _sum?: WorkspaceuserSumAggregateInputType
    _min?: WorkspaceuserMinAggregateInputType
    _max?: WorkspaceuserMaxAggregateInputType
  }

  export type WorkspaceuserGroupByOutputType = {
    workspaceid: number
    userid: number
    _count: WorkspaceuserCountAggregateOutputType | null
    _avg: WorkspaceuserAvgAggregateOutputType | null
    _sum: WorkspaceuserSumAggregateOutputType | null
    _min: WorkspaceuserMinAggregateOutputType | null
    _max: WorkspaceuserMaxAggregateOutputType | null
  }

  type GetWorkspaceuserGroupByPayload<T extends workspaceuserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceuserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceuserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceuserGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceuserGroupByOutputType[P]>
        }
      >
    >


  export type workspaceuserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceuser"]>

  export type workspaceuserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceuser"]>

  export type workspaceuserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceuser"]>

  export type workspaceuserSelectScalar = {
    workspaceid?: boolean
    userid?: boolean
  }

  export type workspaceuserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspaceid" | "userid", ExtArgs["result"]["workspaceuser"]>
  export type workspaceuserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspaceuserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspaceuserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }

  export type $workspaceuserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspaceuser"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      workspace: Prisma.$workspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspaceid: number
      userid: number
    }, ExtArgs["result"]["workspaceuser"]>
    composites: {}
  }

  type workspaceuserGetPayload<S extends boolean | null | undefined | workspaceuserDefaultArgs> = $Result.GetResult<Prisma.$workspaceuserPayload, S>

  type workspaceuserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspaceuserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceuserCountAggregateInputType | true
    }

  export interface workspaceuserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspaceuser'], meta: { name: 'workspaceuser' } }
    /**
     * Find zero or one Workspaceuser that matches the filter.
     * @param {workspaceuserFindUniqueArgs} args - Arguments to find a Workspaceuser
     * @example
     * // Get one Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspaceuserFindUniqueArgs>(args: SelectSubset<T, workspaceuserFindUniqueArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspaceuser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspaceuserFindUniqueOrThrowArgs} args - Arguments to find a Workspaceuser
     * @example
     * // Get one Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspaceuserFindUniqueOrThrowArgs>(args: SelectSubset<T, workspaceuserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaceuser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserFindFirstArgs} args - Arguments to find a Workspaceuser
     * @example
     * // Get one Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspaceuserFindFirstArgs>(args?: SelectSubset<T, workspaceuserFindFirstArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaceuser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserFindFirstOrThrowArgs} args - Arguments to find a Workspaceuser
     * @example
     * // Get one Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspaceuserFindFirstOrThrowArgs>(args?: SelectSubset<T, workspaceuserFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaceusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaceusers
     * const workspaceusers = await prisma.workspaceuser.findMany()
     * 
     * // Get first 10 Workspaceusers
     * const workspaceusers = await prisma.workspaceuser.findMany({ take: 10 })
     * 
     * // Only select the `workspaceid`
     * const workspaceuserWithWorkspaceidOnly = await prisma.workspaceuser.findMany({ select: { workspaceid: true } })
     * 
     */
    findMany<T extends workspaceuserFindManyArgs>(args?: SelectSubset<T, workspaceuserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspaceuser.
     * @param {workspaceuserCreateArgs} args - Arguments to create a Workspaceuser.
     * @example
     * // Create one Workspaceuser
     * const Workspaceuser = await prisma.workspaceuser.create({
     *   data: {
     *     // ... data to create a Workspaceuser
     *   }
     * })
     * 
     */
    create<T extends workspaceuserCreateArgs>(args: SelectSubset<T, workspaceuserCreateArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaceusers.
     * @param {workspaceuserCreateManyArgs} args - Arguments to create many Workspaceusers.
     * @example
     * // Create many Workspaceusers
     * const workspaceuser = await prisma.workspaceuser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspaceuserCreateManyArgs>(args?: SelectSubset<T, workspaceuserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaceusers and returns the data saved in the database.
     * @param {workspaceuserCreateManyAndReturnArgs} args - Arguments to create many Workspaceusers.
     * @example
     * // Create many Workspaceusers
     * const workspaceuser = await prisma.workspaceuser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaceusers and only return the `workspaceid`
     * const workspaceuserWithWorkspaceidOnly = await prisma.workspaceuser.createManyAndReturn({
     *   select: { workspaceid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspaceuserCreateManyAndReturnArgs>(args?: SelectSubset<T, workspaceuserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspaceuser.
     * @param {workspaceuserDeleteArgs} args - Arguments to delete one Workspaceuser.
     * @example
     * // Delete one Workspaceuser
     * const Workspaceuser = await prisma.workspaceuser.delete({
     *   where: {
     *     // ... filter to delete one Workspaceuser
     *   }
     * })
     * 
     */
    delete<T extends workspaceuserDeleteArgs>(args: SelectSubset<T, workspaceuserDeleteArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspaceuser.
     * @param {workspaceuserUpdateArgs} args - Arguments to update one Workspaceuser.
     * @example
     * // Update one Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspaceuserUpdateArgs>(args: SelectSubset<T, workspaceuserUpdateArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaceusers.
     * @param {workspaceuserDeleteManyArgs} args - Arguments to filter Workspaceusers to delete.
     * @example
     * // Delete a few Workspaceusers
     * const { count } = await prisma.workspaceuser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspaceuserDeleteManyArgs>(args?: SelectSubset<T, workspaceuserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaceusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaceusers
     * const workspaceuser = await prisma.workspaceuser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspaceuserUpdateManyArgs>(args: SelectSubset<T, workspaceuserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaceusers and returns the data updated in the database.
     * @param {workspaceuserUpdateManyAndReturnArgs} args - Arguments to update many Workspaceusers.
     * @example
     * // Update many Workspaceusers
     * const workspaceuser = await prisma.workspaceuser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaceusers and only return the `workspaceid`
     * const workspaceuserWithWorkspaceidOnly = await prisma.workspaceuser.updateManyAndReturn({
     *   select: { workspaceid: true },
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
    updateManyAndReturn<T extends workspaceuserUpdateManyAndReturnArgs>(args: SelectSubset<T, workspaceuserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspaceuser.
     * @param {workspaceuserUpsertArgs} args - Arguments to update or create a Workspaceuser.
     * @example
     * // Update or create a Workspaceuser
     * const workspaceuser = await prisma.workspaceuser.upsert({
     *   create: {
     *     // ... data to create a Workspaceuser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspaceuser we want to update
     *   }
     * })
     */
    upsert<T extends workspaceuserUpsertArgs>(args: SelectSubset<T, workspaceuserUpsertArgs<ExtArgs>>): Prisma__workspaceuserClient<$Result.GetResult<Prisma.$workspaceuserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaceusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserCountArgs} args - Arguments to filter Workspaceusers to count.
     * @example
     * // Count the number of Workspaceusers
     * const count = await prisma.workspaceuser.count({
     *   where: {
     *     // ... the filter for the Workspaceusers we want to count
     *   }
     * })
    **/
    count<T extends workspaceuserCountArgs>(
      args?: Subset<T, workspaceuserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceuserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspaceuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceuserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceuserAggregateArgs>(args: Subset<T, WorkspaceuserAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceuserAggregateType<T>>

    /**
     * Group by Workspaceuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceuserGroupByArgs} args - Group by arguments.
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
      T extends workspaceuserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspaceuserGroupByArgs['orderBy'] }
        : { orderBy?: workspaceuserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspaceuserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceuserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspaceuser model
   */
  readonly fields: workspaceuserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspaceuser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspaceuserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends workspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspaceDefaultArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspaceuser model
   */
  interface workspaceuserFieldRefs {
    readonly workspaceid: FieldRef<"workspaceuser", 'Int'>
    readonly userid: FieldRef<"workspaceuser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workspaceuser findUnique
   */
  export type workspaceuserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter, which workspaceuser to fetch.
     */
    where: workspaceuserWhereUniqueInput
  }

  /**
   * workspaceuser findUniqueOrThrow
   */
  export type workspaceuserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter, which workspaceuser to fetch.
     */
    where: workspaceuserWhereUniqueInput
  }

  /**
   * workspaceuser findFirst
   */
  export type workspaceuserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter, which workspaceuser to fetch.
     */
    where?: workspaceuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaceusers to fetch.
     */
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaceusers.
     */
    cursor?: workspaceuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaceusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaceusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaceusers.
     */
    distinct?: WorkspaceuserScalarFieldEnum | WorkspaceuserScalarFieldEnum[]
  }

  /**
   * workspaceuser findFirstOrThrow
   */
  export type workspaceuserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter, which workspaceuser to fetch.
     */
    where?: workspaceuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaceusers to fetch.
     */
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaceusers.
     */
    cursor?: workspaceuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaceusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaceusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaceusers.
     */
    distinct?: WorkspaceuserScalarFieldEnum | WorkspaceuserScalarFieldEnum[]
  }

  /**
   * workspaceuser findMany
   */
  export type workspaceuserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter, which workspaceusers to fetch.
     */
    where?: workspaceuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaceusers to fetch.
     */
    orderBy?: workspaceuserOrderByWithRelationInput | workspaceuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaceusers.
     */
    cursor?: workspaceuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaceusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaceusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaceusers.
     */
    distinct?: WorkspaceuserScalarFieldEnum | WorkspaceuserScalarFieldEnum[]
  }

  /**
   * workspaceuser create
   */
  export type workspaceuserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * The data needed to create a workspaceuser.
     */
    data: XOR<workspaceuserCreateInput, workspaceuserUncheckedCreateInput>
  }

  /**
   * workspaceuser createMany
   */
  export type workspaceuserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaceusers.
     */
    data: workspaceuserCreateManyInput | workspaceuserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaceuser createManyAndReturn
   */
  export type workspaceuserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * The data used to create many workspaceusers.
     */
    data: workspaceuserCreateManyInput | workspaceuserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaceuser update
   */
  export type workspaceuserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * The data needed to update a workspaceuser.
     */
    data: XOR<workspaceuserUpdateInput, workspaceuserUncheckedUpdateInput>
    /**
     * Choose, which workspaceuser to update.
     */
    where: workspaceuserWhereUniqueInput
  }

  /**
   * workspaceuser updateMany
   */
  export type workspaceuserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaceusers.
     */
    data: XOR<workspaceuserUpdateManyMutationInput, workspaceuserUncheckedUpdateManyInput>
    /**
     * Filter which workspaceusers to update
     */
    where?: workspaceuserWhereInput
    /**
     * Limit how many workspaceusers to update.
     */
    limit?: number
  }

  /**
   * workspaceuser updateManyAndReturn
   */
  export type workspaceuserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * The data used to update workspaceusers.
     */
    data: XOR<workspaceuserUpdateManyMutationInput, workspaceuserUncheckedUpdateManyInput>
    /**
     * Filter which workspaceusers to update
     */
    where?: workspaceuserWhereInput
    /**
     * Limit how many workspaceusers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaceuser upsert
   */
  export type workspaceuserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * The filter to search for the workspaceuser to update in case it exists.
     */
    where: workspaceuserWhereUniqueInput
    /**
     * In case the workspaceuser found by the `where` argument doesn't exist, create a new workspaceuser with this data.
     */
    create: XOR<workspaceuserCreateInput, workspaceuserUncheckedCreateInput>
    /**
     * In case the workspaceuser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspaceuserUpdateInput, workspaceuserUncheckedUpdateInput>
  }

  /**
   * workspaceuser delete
   */
  export type workspaceuserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
    /**
     * Filter which workspaceuser to delete.
     */
    where: workspaceuserWhereUniqueInput
  }

  /**
   * workspaceuser deleteMany
   */
  export type workspaceuserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaceusers to delete
     */
    where?: workspaceuserWhereInput
    /**
     * Limit how many workspaceusers to delete.
     */
    limit?: number
  }

  /**
   * workspaceuser without action
   */
  export type workspaceuserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaceuser
     */
    select?: workspaceuserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaceuser
     */
    omit?: workspaceuserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspaceuserInclude<ExtArgs> | null
  }


  /**
   * Model feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    content: string | null
    channel: string | null
    sentiment: $Enums.Sentiment | null
    status: $Enums.Status | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    content: string | null
    channel: string | null
    sentiment: $Enums.Sentiment | null
    status: $Enums.Status | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    content: number
    channel: number
    sentiment: number
    status: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    content?: true
    channel?: true
    sentiment?: true
    status?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    content?: true
    channel?: true
    sentiment?: true
    status?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    content?: true
    channel?: true
    sentiment?: true
    status?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type feedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithAggregationInput | feedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends feedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type feedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    channel?: boolean
    sentiment?: boolean
    status?: boolean
    feedback?: boolean | feedback$feedbackArgs<ExtArgs>
    theme?: boolean | feedback$themeArgs<ExtArgs>
    workspace?: boolean | feedback$workspaceArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    channel?: boolean
    sentiment?: boolean
    status?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    channel?: boolean
    sentiment?: boolean
    status?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectScalar = {
    id?: boolean
    content?: boolean
    channel?: boolean
    sentiment?: boolean
    status?: boolean
  }

  export type feedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "channel" | "sentiment" | "status", ExtArgs["result"]["feedback"]>
  export type feedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedback$feedbackArgs<ExtArgs>
    theme?: boolean | feedback$themeArgs<ExtArgs>
    workspace?: boolean | feedback$workspaceArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type feedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type feedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $feedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedback"
    objects: {
      feedback: Prisma.$embeddingPayload<ExtArgs>[]
      theme: Prisma.$feedbackthemePayload<ExtArgs>[]
      workspace: Prisma.$workspacefeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      channel: string
      sentiment: $Enums.Sentiment
      status: $Enums.Status
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type feedbackGetPayload<S extends boolean | null | undefined | feedbackDefaultArgs> = $Result.GetResult<Prisma.$feedbackPayload, S>

  type feedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedback'], meta: { name: 'feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackFindUniqueArgs>(args: SelectSubset<T, feedbackFindUniqueArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackFindFirstArgs>(args?: SelectSubset<T, feedbackFindFirstArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbackFindManyArgs>(args?: SelectSubset<T, feedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends feedbackCreateArgs>(args: SelectSubset<T, feedbackCreateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackCreateManyArgs>(args?: SelectSubset<T, feedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {feedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, feedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends feedbackDeleteArgs>(args: SelectSubset<T, feedbackDeleteArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackUpdateArgs>(args: SelectSubset<T, feedbackUpdateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackDeleteManyArgs>(args?: SelectSubset<T, feedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackUpdateManyArgs>(args: SelectSubset<T, feedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {feedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends feedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, feedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends feedbackUpsertArgs>(args: SelectSubset<T, feedbackUpsertArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackGroupByArgs} args - Group by arguments.
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
      T extends feedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackGroupByArgs['orderBy'] }
        : { orderBy?: feedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedback model
   */
  readonly fields: feedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends feedback$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, feedback$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    theme<T extends feedback$themeArgs<ExtArgs> = {}>(args?: Subset<T, feedback$themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends feedback$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, feedback$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the feedback model
   */
  interface feedbackFieldRefs {
    readonly id: FieldRef<"feedback", 'Int'>
    readonly content: FieldRef<"feedback", 'String'>
    readonly channel: FieldRef<"feedback", 'String'>
    readonly sentiment: FieldRef<"feedback", 'Sentiment'>
    readonly status: FieldRef<"feedback", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * feedback findUnique
   */
  export type feedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findFirst
   */
  export type feedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback create
   */
  export type feedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a feedback.
     */
    data: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }

  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback createManyAndReturn
   */
  export type feedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback update
   */
  export type feedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback updateManyAndReturn
   */
  export type feedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }

  /**
   * feedback delete
   */
  export type feedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedback.feedback
   */
  export type feedback$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    where?: embeddingWhereInput
    orderBy?: embeddingOrderByWithRelationInput | embeddingOrderByWithRelationInput[]
    cursor?: embeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * feedback.theme
   */
  export type feedback$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    where?: feedbackthemeWhereInput
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    cursor?: feedbackthemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackthemeScalarFieldEnum | FeedbackthemeScalarFieldEnum[]
  }

  /**
   * feedback.workspace
   */
  export type feedback$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    where?: workspacefeedbackWhereInput
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    cursor?: workspacefeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacefeedbackScalarFieldEnum | WorkspacefeedbackScalarFieldEnum[]
  }

  /**
   * feedback without action
   */
  export type feedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
  }


  /**
   * Model workspacefeedback
   */

  export type AggregateWorkspacefeedback = {
    _count: WorkspacefeedbackCountAggregateOutputType | null
    _avg: WorkspacefeedbackAvgAggregateOutputType | null
    _sum: WorkspacefeedbackSumAggregateOutputType | null
    _min: WorkspacefeedbackMinAggregateOutputType | null
    _max: WorkspacefeedbackMaxAggregateOutputType | null
  }

  export type WorkspacefeedbackAvgAggregateOutputType = {
    workspaceid: number | null
    feedbackid: number | null
  }

  export type WorkspacefeedbackSumAggregateOutputType = {
    workspaceid: number | null
    feedbackid: number | null
  }

  export type WorkspacefeedbackMinAggregateOutputType = {
    workspaceid: number | null
    feedbackid: number | null
  }

  export type WorkspacefeedbackMaxAggregateOutputType = {
    workspaceid: number | null
    feedbackid: number | null
  }

  export type WorkspacefeedbackCountAggregateOutputType = {
    workspaceid: number
    feedbackid: number
    _all: number
  }


  export type WorkspacefeedbackAvgAggregateInputType = {
    workspaceid?: true
    feedbackid?: true
  }

  export type WorkspacefeedbackSumAggregateInputType = {
    workspaceid?: true
    feedbackid?: true
  }

  export type WorkspacefeedbackMinAggregateInputType = {
    workspaceid?: true
    feedbackid?: true
  }

  export type WorkspacefeedbackMaxAggregateInputType = {
    workspaceid?: true
    feedbackid?: true
  }

  export type WorkspacefeedbackCountAggregateInputType = {
    workspaceid?: true
    feedbackid?: true
    _all?: true
  }

  export type WorkspacefeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacefeedback to aggregate.
     */
    where?: workspacefeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacefeedbacks to fetch.
     */
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacefeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacefeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacefeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspacefeedbacks
    **/
    _count?: true | WorkspacefeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspacefeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspacefeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacefeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacefeedbackMaxAggregateInputType
  }

  export type GetWorkspacefeedbackAggregateType<T extends WorkspacefeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspacefeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspacefeedback[P]>
      : GetScalarType<T[P], AggregateWorkspacefeedback[P]>
  }




  export type workspacefeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacefeedbackWhereInput
    orderBy?: workspacefeedbackOrderByWithAggregationInput | workspacefeedbackOrderByWithAggregationInput[]
    by: WorkspacefeedbackScalarFieldEnum[] | WorkspacefeedbackScalarFieldEnum
    having?: workspacefeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacefeedbackCountAggregateInputType | true
    _avg?: WorkspacefeedbackAvgAggregateInputType
    _sum?: WorkspacefeedbackSumAggregateInputType
    _min?: WorkspacefeedbackMinAggregateInputType
    _max?: WorkspacefeedbackMaxAggregateInputType
  }

  export type WorkspacefeedbackGroupByOutputType = {
    workspaceid: number
    feedbackid: number
    _count: WorkspacefeedbackCountAggregateOutputType | null
    _avg: WorkspacefeedbackAvgAggregateOutputType | null
    _sum: WorkspacefeedbackSumAggregateOutputType | null
    _min: WorkspacefeedbackMinAggregateOutputType | null
    _max: WorkspacefeedbackMaxAggregateOutputType | null
  }

  type GetWorkspacefeedbackGroupByPayload<T extends workspacefeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacefeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacefeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacefeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacefeedbackGroupByOutputType[P]>
        }
      >
    >


  export type workspacefeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacefeedback"]>

  export type workspacefeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacefeedback"]>

  export type workspacefeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacefeedback"]>

  export type workspacefeedbackSelectScalar = {
    workspaceid?: boolean
    feedbackid?: boolean
  }

  export type workspacefeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspaceid" | "feedbackid", ExtArgs["result"]["workspacefeedback"]>
  export type workspacefeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacefeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacefeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }

  export type $workspacefeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspacefeedback"
    objects: {
      feedback: Prisma.$feedbackPayload<ExtArgs>
      workspace: Prisma.$workspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspaceid: number
      feedbackid: number
    }, ExtArgs["result"]["workspacefeedback"]>
    composites: {}
  }

  type workspacefeedbackGetPayload<S extends boolean | null | undefined | workspacefeedbackDefaultArgs> = $Result.GetResult<Prisma.$workspacefeedbackPayload, S>

  type workspacefeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacefeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacefeedbackCountAggregateInputType | true
    }

  export interface workspacefeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspacefeedback'], meta: { name: 'workspacefeedback' } }
    /**
     * Find zero or one Workspacefeedback that matches the filter.
     * @param {workspacefeedbackFindUniqueArgs} args - Arguments to find a Workspacefeedback
     * @example
     * // Get one Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacefeedbackFindUniqueArgs>(args: SelectSubset<T, workspacefeedbackFindUniqueArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspacefeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacefeedbackFindUniqueOrThrowArgs} args - Arguments to find a Workspacefeedback
     * @example
     * // Get one Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacefeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacefeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacefeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackFindFirstArgs} args - Arguments to find a Workspacefeedback
     * @example
     * // Get one Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacefeedbackFindFirstArgs>(args?: SelectSubset<T, workspacefeedbackFindFirstArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacefeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackFindFirstOrThrowArgs} args - Arguments to find a Workspacefeedback
     * @example
     * // Get one Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacefeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacefeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspacefeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspacefeedbacks
     * const workspacefeedbacks = await prisma.workspacefeedback.findMany()
     * 
     * // Get first 10 Workspacefeedbacks
     * const workspacefeedbacks = await prisma.workspacefeedback.findMany({ take: 10 })
     * 
     * // Only select the `workspaceid`
     * const workspacefeedbackWithWorkspaceidOnly = await prisma.workspacefeedback.findMany({ select: { workspaceid: true } })
     * 
     */
    findMany<T extends workspacefeedbackFindManyArgs>(args?: SelectSubset<T, workspacefeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspacefeedback.
     * @param {workspacefeedbackCreateArgs} args - Arguments to create a Workspacefeedback.
     * @example
     * // Create one Workspacefeedback
     * const Workspacefeedback = await prisma.workspacefeedback.create({
     *   data: {
     *     // ... data to create a Workspacefeedback
     *   }
     * })
     * 
     */
    create<T extends workspacefeedbackCreateArgs>(args: SelectSubset<T, workspacefeedbackCreateArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspacefeedbacks.
     * @param {workspacefeedbackCreateManyArgs} args - Arguments to create many Workspacefeedbacks.
     * @example
     * // Create many Workspacefeedbacks
     * const workspacefeedback = await prisma.workspacefeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacefeedbackCreateManyArgs>(args?: SelectSubset<T, workspacefeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspacefeedbacks and returns the data saved in the database.
     * @param {workspacefeedbackCreateManyAndReturnArgs} args - Arguments to create many Workspacefeedbacks.
     * @example
     * // Create many Workspacefeedbacks
     * const workspacefeedback = await prisma.workspacefeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspacefeedbacks and only return the `workspaceid`
     * const workspacefeedbackWithWorkspaceidOnly = await prisma.workspacefeedback.createManyAndReturn({
     *   select: { workspaceid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacefeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacefeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspacefeedback.
     * @param {workspacefeedbackDeleteArgs} args - Arguments to delete one Workspacefeedback.
     * @example
     * // Delete one Workspacefeedback
     * const Workspacefeedback = await prisma.workspacefeedback.delete({
     *   where: {
     *     // ... filter to delete one Workspacefeedback
     *   }
     * })
     * 
     */
    delete<T extends workspacefeedbackDeleteArgs>(args: SelectSubset<T, workspacefeedbackDeleteArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspacefeedback.
     * @param {workspacefeedbackUpdateArgs} args - Arguments to update one Workspacefeedback.
     * @example
     * // Update one Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacefeedbackUpdateArgs>(args: SelectSubset<T, workspacefeedbackUpdateArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspacefeedbacks.
     * @param {workspacefeedbackDeleteManyArgs} args - Arguments to filter Workspacefeedbacks to delete.
     * @example
     * // Delete a few Workspacefeedbacks
     * const { count } = await prisma.workspacefeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacefeedbackDeleteManyArgs>(args?: SelectSubset<T, workspacefeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacefeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspacefeedbacks
     * const workspacefeedback = await prisma.workspacefeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacefeedbackUpdateManyArgs>(args: SelectSubset<T, workspacefeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacefeedbacks and returns the data updated in the database.
     * @param {workspacefeedbackUpdateManyAndReturnArgs} args - Arguments to update many Workspacefeedbacks.
     * @example
     * // Update many Workspacefeedbacks
     * const workspacefeedback = await prisma.workspacefeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspacefeedbacks and only return the `workspaceid`
     * const workspacefeedbackWithWorkspaceidOnly = await prisma.workspacefeedback.updateManyAndReturn({
     *   select: { workspaceid: true },
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
    updateManyAndReturn<T extends workspacefeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacefeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspacefeedback.
     * @param {workspacefeedbackUpsertArgs} args - Arguments to update or create a Workspacefeedback.
     * @example
     * // Update or create a Workspacefeedback
     * const workspacefeedback = await prisma.workspacefeedback.upsert({
     *   create: {
     *     // ... data to create a Workspacefeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspacefeedback we want to update
     *   }
     * })
     */
    upsert<T extends workspacefeedbackUpsertArgs>(args: SelectSubset<T, workspacefeedbackUpsertArgs<ExtArgs>>): Prisma__workspacefeedbackClient<$Result.GetResult<Prisma.$workspacefeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspacefeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackCountArgs} args - Arguments to filter Workspacefeedbacks to count.
     * @example
     * // Count the number of Workspacefeedbacks
     * const count = await prisma.workspacefeedback.count({
     *   where: {
     *     // ... the filter for the Workspacefeedbacks we want to count
     *   }
     * })
    **/
    count<T extends workspacefeedbackCountArgs>(
      args?: Subset<T, workspacefeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacefeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspacefeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacefeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspacefeedbackAggregateArgs>(args: Subset<T, WorkspacefeedbackAggregateArgs>): Prisma.PrismaPromise<GetWorkspacefeedbackAggregateType<T>>

    /**
     * Group by Workspacefeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacefeedbackGroupByArgs} args - Group by arguments.
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
      T extends workspacefeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacefeedbackGroupByArgs['orderBy'] }
        : { orderBy?: workspacefeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspacefeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacefeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspacefeedback model
   */
  readonly fields: workspacefeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspacefeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacefeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends feedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, feedbackDefaultArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends workspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspaceDefaultArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspacefeedback model
   */
  interface workspacefeedbackFieldRefs {
    readonly workspaceid: FieldRef<"workspacefeedback", 'Int'>
    readonly feedbackid: FieldRef<"workspacefeedback", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workspacefeedback findUnique
   */
  export type workspacefeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter, which workspacefeedback to fetch.
     */
    where: workspacefeedbackWhereUniqueInput
  }

  /**
   * workspacefeedback findUniqueOrThrow
   */
  export type workspacefeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter, which workspacefeedback to fetch.
     */
    where: workspacefeedbackWhereUniqueInput
  }

  /**
   * workspacefeedback findFirst
   */
  export type workspacefeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter, which workspacefeedback to fetch.
     */
    where?: workspacefeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacefeedbacks to fetch.
     */
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacefeedbacks.
     */
    cursor?: workspacefeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacefeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacefeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacefeedbacks.
     */
    distinct?: WorkspacefeedbackScalarFieldEnum | WorkspacefeedbackScalarFieldEnum[]
  }

  /**
   * workspacefeedback findFirstOrThrow
   */
  export type workspacefeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter, which workspacefeedback to fetch.
     */
    where?: workspacefeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacefeedbacks to fetch.
     */
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacefeedbacks.
     */
    cursor?: workspacefeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacefeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacefeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacefeedbacks.
     */
    distinct?: WorkspacefeedbackScalarFieldEnum | WorkspacefeedbackScalarFieldEnum[]
  }

  /**
   * workspacefeedback findMany
   */
  export type workspacefeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter, which workspacefeedbacks to fetch.
     */
    where?: workspacefeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacefeedbacks to fetch.
     */
    orderBy?: workspacefeedbackOrderByWithRelationInput | workspacefeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspacefeedbacks.
     */
    cursor?: workspacefeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacefeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacefeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacefeedbacks.
     */
    distinct?: WorkspacefeedbackScalarFieldEnum | WorkspacefeedbackScalarFieldEnum[]
  }

  /**
   * workspacefeedback create
   */
  export type workspacefeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a workspacefeedback.
     */
    data: XOR<workspacefeedbackCreateInput, workspacefeedbackUncheckedCreateInput>
  }

  /**
   * workspacefeedback createMany
   */
  export type workspacefeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspacefeedbacks.
     */
    data: workspacefeedbackCreateManyInput | workspacefeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspacefeedback createManyAndReturn
   */
  export type workspacefeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many workspacefeedbacks.
     */
    data: workspacefeedbackCreateManyInput | workspacefeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacefeedback update
   */
  export type workspacefeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a workspacefeedback.
     */
    data: XOR<workspacefeedbackUpdateInput, workspacefeedbackUncheckedUpdateInput>
    /**
     * Choose, which workspacefeedback to update.
     */
    where: workspacefeedbackWhereUniqueInput
  }

  /**
   * workspacefeedback updateMany
   */
  export type workspacefeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspacefeedbacks.
     */
    data: XOR<workspacefeedbackUpdateManyMutationInput, workspacefeedbackUncheckedUpdateManyInput>
    /**
     * Filter which workspacefeedbacks to update
     */
    where?: workspacefeedbackWhereInput
    /**
     * Limit how many workspacefeedbacks to update.
     */
    limit?: number
  }

  /**
   * workspacefeedback updateManyAndReturn
   */
  export type workspacefeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * The data used to update workspacefeedbacks.
     */
    data: XOR<workspacefeedbackUpdateManyMutationInput, workspacefeedbackUncheckedUpdateManyInput>
    /**
     * Filter which workspacefeedbacks to update
     */
    where?: workspacefeedbackWhereInput
    /**
     * Limit how many workspacefeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacefeedback upsert
   */
  export type workspacefeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the workspacefeedback to update in case it exists.
     */
    where: workspacefeedbackWhereUniqueInput
    /**
     * In case the workspacefeedback found by the `where` argument doesn't exist, create a new workspacefeedback with this data.
     */
    create: XOR<workspacefeedbackCreateInput, workspacefeedbackUncheckedCreateInput>
    /**
     * In case the workspacefeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacefeedbackUpdateInput, workspacefeedbackUncheckedUpdateInput>
  }

  /**
   * workspacefeedback delete
   */
  export type workspacefeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
    /**
     * Filter which workspacefeedback to delete.
     */
    where: workspacefeedbackWhereUniqueInput
  }

  /**
   * workspacefeedback deleteMany
   */
  export type workspacefeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacefeedbacks to delete
     */
    where?: workspacefeedbackWhereInput
    /**
     * Limit how many workspacefeedbacks to delete.
     */
    limit?: number
  }

  /**
   * workspacefeedback without action
   */
  export type workspacefeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacefeedback
     */
    select?: workspacefeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacefeedback
     */
    omit?: workspacefeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacefeedbackInclude<ExtArgs> | null
  }


  /**
   * Model theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    color: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    color: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theme to aggregate.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type themeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: themeWhereInput
    orderBy?: themeOrderByWithAggregationInput | themeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: themeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    name: string
    description: string
    color: string
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends themeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type themeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    feedback?: boolean | theme$feedbackArgs<ExtArgs>
    workspace?: boolean | theme$workspaceArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type themeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
  }, ExtArgs["result"]["theme"]>

  export type themeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
  }, ExtArgs["result"]["theme"]>

  export type themeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
  }

  export type themeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color", ExtArgs["result"]["theme"]>
  export type themeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | theme$feedbackArgs<ExtArgs>
    workspace?: boolean | theme$workspaceArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type themeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type themeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $themePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "theme"
    objects: {
      feedback: Prisma.$feedbackthemePayload<ExtArgs>[]
      workspace: Prisma.$workspacethemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      color: string
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type themeGetPayload<S extends boolean | null | undefined | themeDefaultArgs> = $Result.GetResult<Prisma.$themePayload, S>

  type themeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<themeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface themeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['theme'], meta: { name: 'theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {themeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends themeFindUniqueArgs>(args: SelectSubset<T, themeFindUniqueArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {themeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends themeFindUniqueOrThrowArgs>(args: SelectSubset<T, themeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends themeFindFirstArgs>(args?: SelectSubset<T, themeFindFirstArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends themeFindFirstOrThrowArgs>(args?: SelectSubset<T, themeFindFirstOrThrowArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends themeFindManyArgs>(args?: SelectSubset<T, themeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {themeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends themeCreateArgs>(args: SelectSubset<T, themeCreateArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {themeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends themeCreateManyArgs>(args?: SelectSubset<T, themeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {themeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends themeCreateManyAndReturnArgs>(args?: SelectSubset<T, themeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {themeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends themeDeleteArgs>(args: SelectSubset<T, themeDeleteArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {themeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends themeUpdateArgs>(args: SelectSubset<T, themeUpdateArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {themeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends themeDeleteManyArgs>(args?: SelectSubset<T, themeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends themeUpdateManyArgs>(args: SelectSubset<T, themeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {themeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends themeUpdateManyAndReturnArgs>(args: SelectSubset<T, themeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {themeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends themeUpsertArgs>(args: SelectSubset<T, themeUpsertArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends themeCountArgs>(
      args?: Subset<T, themeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeGroupByArgs} args - Group by arguments.
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
      T extends themeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: themeGroupByArgs['orderBy'] }
        : { orderBy?: themeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, themeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the theme model
   */
  readonly fields: themeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__themeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends theme$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, theme$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends theme$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, theme$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the theme model
   */
  interface themeFieldRefs {
    readonly id: FieldRef<"theme", 'Int'>
    readonly name: FieldRef<"theme", 'String'>
    readonly description: FieldRef<"theme", 'String'>
    readonly color: FieldRef<"theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * theme findUnique
   */
  export type themeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme findUniqueOrThrow
   */
  export type themeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme findFirst
   */
  export type themeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme findFirstOrThrow
   */
  export type themeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme findMany
   */
  export type themeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme create
   */
  export type themeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The data needed to create a theme.
     */
    data: XOR<themeCreateInput, themeUncheckedCreateInput>
  }

  /**
   * theme createMany
   */
  export type themeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many themes.
     */
    data: themeCreateManyInput | themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theme createManyAndReturn
   */
  export type themeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * The data used to create many themes.
     */
    data: themeCreateManyInput | themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theme update
   */
  export type themeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The data needed to update a theme.
     */
    data: XOR<themeUpdateInput, themeUncheckedUpdateInput>
    /**
     * Choose, which theme to update.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme updateMany
   */
  export type themeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update themes.
     */
    data: XOR<themeUpdateManyMutationInput, themeUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * theme updateManyAndReturn
   */
  export type themeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * The data used to update themes.
     */
    data: XOR<themeUpdateManyMutationInput, themeUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * theme upsert
   */
  export type themeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The filter to search for the theme to update in case it exists.
     */
    where: themeWhereUniqueInput
    /**
     * In case the theme found by the `where` argument doesn't exist, create a new theme with this data.
     */
    create: XOR<themeCreateInput, themeUncheckedCreateInput>
    /**
     * In case the theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<themeUpdateInput, themeUncheckedUpdateInput>
  }

  /**
   * theme delete
   */
  export type themeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter which theme to delete.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme deleteMany
   */
  export type themeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which themes to delete
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to delete.
     */
    limit?: number
  }

  /**
   * theme.feedback
   */
  export type theme$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    where?: feedbackthemeWhereInput
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    cursor?: feedbackthemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackthemeScalarFieldEnum | FeedbackthemeScalarFieldEnum[]
  }

  /**
   * theme.workspace
   */
  export type theme$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    where?: workspacethemeWhereInput
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    cursor?: workspacethemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacethemeScalarFieldEnum | WorkspacethemeScalarFieldEnum[]
  }

  /**
   * theme without action
   */
  export type themeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
  }


  /**
   * Model workspacetheme
   */

  export type AggregateWorkspacetheme = {
    _count: WorkspacethemeCountAggregateOutputType | null
    _avg: WorkspacethemeAvgAggregateOutputType | null
    _sum: WorkspacethemeSumAggregateOutputType | null
    _min: WorkspacethemeMinAggregateOutputType | null
    _max: WorkspacethemeMaxAggregateOutputType | null
  }

  export type WorkspacethemeAvgAggregateOutputType = {
    workspaceid: number | null
    themeid: number | null
  }

  export type WorkspacethemeSumAggregateOutputType = {
    workspaceid: number | null
    themeid: number | null
  }

  export type WorkspacethemeMinAggregateOutputType = {
    workspaceid: number | null
    themeid: number | null
  }

  export type WorkspacethemeMaxAggregateOutputType = {
    workspaceid: number | null
    themeid: number | null
  }

  export type WorkspacethemeCountAggregateOutputType = {
    workspaceid: number
    themeid: number
    _all: number
  }


  export type WorkspacethemeAvgAggregateInputType = {
    workspaceid?: true
    themeid?: true
  }

  export type WorkspacethemeSumAggregateInputType = {
    workspaceid?: true
    themeid?: true
  }

  export type WorkspacethemeMinAggregateInputType = {
    workspaceid?: true
    themeid?: true
  }

  export type WorkspacethemeMaxAggregateInputType = {
    workspaceid?: true
    themeid?: true
  }

  export type WorkspacethemeCountAggregateInputType = {
    workspaceid?: true
    themeid?: true
    _all?: true
  }

  export type WorkspacethemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacetheme to aggregate.
     */
    where?: workspacethemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacethemes to fetch.
     */
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacethemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacethemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacethemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspacethemes
    **/
    _count?: true | WorkspacethemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspacethemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspacethemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacethemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacethemeMaxAggregateInputType
  }

  export type GetWorkspacethemeAggregateType<T extends WorkspacethemeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspacetheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspacetheme[P]>
      : GetScalarType<T[P], AggregateWorkspacetheme[P]>
  }




  export type workspacethemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacethemeWhereInput
    orderBy?: workspacethemeOrderByWithAggregationInput | workspacethemeOrderByWithAggregationInput[]
    by: WorkspacethemeScalarFieldEnum[] | WorkspacethemeScalarFieldEnum
    having?: workspacethemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacethemeCountAggregateInputType | true
    _avg?: WorkspacethemeAvgAggregateInputType
    _sum?: WorkspacethemeSumAggregateInputType
    _min?: WorkspacethemeMinAggregateInputType
    _max?: WorkspacethemeMaxAggregateInputType
  }

  export type WorkspacethemeGroupByOutputType = {
    workspaceid: number
    themeid: number
    _count: WorkspacethemeCountAggregateOutputType | null
    _avg: WorkspacethemeAvgAggregateOutputType | null
    _sum: WorkspacethemeSumAggregateOutputType | null
    _min: WorkspacethemeMinAggregateOutputType | null
    _max: WorkspacethemeMaxAggregateOutputType | null
  }

  type GetWorkspacethemeGroupByPayload<T extends workspacethemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacethemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacethemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacethemeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacethemeGroupByOutputType[P]>
        }
      >
    >


  export type workspacethemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    themeid?: boolean
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacetheme"]>

  export type workspacethemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    themeid?: boolean
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacetheme"]>

  export type workspacethemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    themeid?: boolean
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacetheme"]>

  export type workspacethemeSelectScalar = {
    workspaceid?: boolean
    themeid?: boolean
  }

  export type workspacethemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspaceid" | "themeid", ExtArgs["result"]["workspacetheme"]>
  export type workspacethemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacethemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacethemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | themeDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }

  export type $workspacethemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspacetheme"
    objects: {
      theme: Prisma.$themePayload<ExtArgs>
      workspace: Prisma.$workspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspaceid: number
      themeid: number
    }, ExtArgs["result"]["workspacetheme"]>
    composites: {}
  }

  type workspacethemeGetPayload<S extends boolean | null | undefined | workspacethemeDefaultArgs> = $Result.GetResult<Prisma.$workspacethemePayload, S>

  type workspacethemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacethemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacethemeCountAggregateInputType | true
    }

  export interface workspacethemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspacetheme'], meta: { name: 'workspacetheme' } }
    /**
     * Find zero or one Workspacetheme that matches the filter.
     * @param {workspacethemeFindUniqueArgs} args - Arguments to find a Workspacetheme
     * @example
     * // Get one Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacethemeFindUniqueArgs>(args: SelectSubset<T, workspacethemeFindUniqueArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspacetheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacethemeFindUniqueOrThrowArgs} args - Arguments to find a Workspacetheme
     * @example
     * // Get one Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacethemeFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacethemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacetheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeFindFirstArgs} args - Arguments to find a Workspacetheme
     * @example
     * // Get one Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacethemeFindFirstArgs>(args?: SelectSubset<T, workspacethemeFindFirstArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacetheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeFindFirstOrThrowArgs} args - Arguments to find a Workspacetheme
     * @example
     * // Get one Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacethemeFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacethemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspacethemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspacethemes
     * const workspacethemes = await prisma.workspacetheme.findMany()
     * 
     * // Get first 10 Workspacethemes
     * const workspacethemes = await prisma.workspacetheme.findMany({ take: 10 })
     * 
     * // Only select the `workspaceid`
     * const workspacethemeWithWorkspaceidOnly = await prisma.workspacetheme.findMany({ select: { workspaceid: true } })
     * 
     */
    findMany<T extends workspacethemeFindManyArgs>(args?: SelectSubset<T, workspacethemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspacetheme.
     * @param {workspacethemeCreateArgs} args - Arguments to create a Workspacetheme.
     * @example
     * // Create one Workspacetheme
     * const Workspacetheme = await prisma.workspacetheme.create({
     *   data: {
     *     // ... data to create a Workspacetheme
     *   }
     * })
     * 
     */
    create<T extends workspacethemeCreateArgs>(args: SelectSubset<T, workspacethemeCreateArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspacethemes.
     * @param {workspacethemeCreateManyArgs} args - Arguments to create many Workspacethemes.
     * @example
     * // Create many Workspacethemes
     * const workspacetheme = await prisma.workspacetheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacethemeCreateManyArgs>(args?: SelectSubset<T, workspacethemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspacethemes and returns the data saved in the database.
     * @param {workspacethemeCreateManyAndReturnArgs} args - Arguments to create many Workspacethemes.
     * @example
     * // Create many Workspacethemes
     * const workspacetheme = await prisma.workspacetheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspacethemes and only return the `workspaceid`
     * const workspacethemeWithWorkspaceidOnly = await prisma.workspacetheme.createManyAndReturn({
     *   select: { workspaceid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacethemeCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacethemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspacetheme.
     * @param {workspacethemeDeleteArgs} args - Arguments to delete one Workspacetheme.
     * @example
     * // Delete one Workspacetheme
     * const Workspacetheme = await prisma.workspacetheme.delete({
     *   where: {
     *     // ... filter to delete one Workspacetheme
     *   }
     * })
     * 
     */
    delete<T extends workspacethemeDeleteArgs>(args: SelectSubset<T, workspacethemeDeleteArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspacetheme.
     * @param {workspacethemeUpdateArgs} args - Arguments to update one Workspacetheme.
     * @example
     * // Update one Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacethemeUpdateArgs>(args: SelectSubset<T, workspacethemeUpdateArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspacethemes.
     * @param {workspacethemeDeleteManyArgs} args - Arguments to filter Workspacethemes to delete.
     * @example
     * // Delete a few Workspacethemes
     * const { count } = await prisma.workspacetheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacethemeDeleteManyArgs>(args?: SelectSubset<T, workspacethemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacethemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspacethemes
     * const workspacetheme = await prisma.workspacetheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacethemeUpdateManyArgs>(args: SelectSubset<T, workspacethemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacethemes and returns the data updated in the database.
     * @param {workspacethemeUpdateManyAndReturnArgs} args - Arguments to update many Workspacethemes.
     * @example
     * // Update many Workspacethemes
     * const workspacetheme = await prisma.workspacetheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspacethemes and only return the `workspaceid`
     * const workspacethemeWithWorkspaceidOnly = await prisma.workspacetheme.updateManyAndReturn({
     *   select: { workspaceid: true },
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
    updateManyAndReturn<T extends workspacethemeUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacethemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspacetheme.
     * @param {workspacethemeUpsertArgs} args - Arguments to update or create a Workspacetheme.
     * @example
     * // Update or create a Workspacetheme
     * const workspacetheme = await prisma.workspacetheme.upsert({
     *   create: {
     *     // ... data to create a Workspacetheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspacetheme we want to update
     *   }
     * })
     */
    upsert<T extends workspacethemeUpsertArgs>(args: SelectSubset<T, workspacethemeUpsertArgs<ExtArgs>>): Prisma__workspacethemeClient<$Result.GetResult<Prisma.$workspacethemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspacethemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeCountArgs} args - Arguments to filter Workspacethemes to count.
     * @example
     * // Count the number of Workspacethemes
     * const count = await prisma.workspacetheme.count({
     *   where: {
     *     // ... the filter for the Workspacethemes we want to count
     *   }
     * })
    **/
    count<T extends workspacethemeCountArgs>(
      args?: Subset<T, workspacethemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacethemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspacetheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacethemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspacethemeAggregateArgs>(args: Subset<T, WorkspacethemeAggregateArgs>): Prisma.PrismaPromise<GetWorkspacethemeAggregateType<T>>

    /**
     * Group by Workspacetheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacethemeGroupByArgs} args - Group by arguments.
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
      T extends workspacethemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacethemeGroupByArgs['orderBy'] }
        : { orderBy?: workspacethemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspacethemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacethemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspacetheme model
   */
  readonly fields: workspacethemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspacetheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacethemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theme<T extends themeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, themeDefaultArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends workspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspaceDefaultArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspacetheme model
   */
  interface workspacethemeFieldRefs {
    readonly workspaceid: FieldRef<"workspacetheme", 'Int'>
    readonly themeid: FieldRef<"workspacetheme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workspacetheme findUnique
   */
  export type workspacethemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter, which workspacetheme to fetch.
     */
    where: workspacethemeWhereUniqueInput
  }

  /**
   * workspacetheme findUniqueOrThrow
   */
  export type workspacethemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter, which workspacetheme to fetch.
     */
    where: workspacethemeWhereUniqueInput
  }

  /**
   * workspacetheme findFirst
   */
  export type workspacethemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter, which workspacetheme to fetch.
     */
    where?: workspacethemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacethemes to fetch.
     */
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacethemes.
     */
    cursor?: workspacethemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacethemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacethemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacethemes.
     */
    distinct?: WorkspacethemeScalarFieldEnum | WorkspacethemeScalarFieldEnum[]
  }

  /**
   * workspacetheme findFirstOrThrow
   */
  export type workspacethemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter, which workspacetheme to fetch.
     */
    where?: workspacethemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacethemes to fetch.
     */
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacethemes.
     */
    cursor?: workspacethemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacethemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacethemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacethemes.
     */
    distinct?: WorkspacethemeScalarFieldEnum | WorkspacethemeScalarFieldEnum[]
  }

  /**
   * workspacetheme findMany
   */
  export type workspacethemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter, which workspacethemes to fetch.
     */
    where?: workspacethemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacethemes to fetch.
     */
    orderBy?: workspacethemeOrderByWithRelationInput | workspacethemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspacethemes.
     */
    cursor?: workspacethemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacethemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacethemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacethemes.
     */
    distinct?: WorkspacethemeScalarFieldEnum | WorkspacethemeScalarFieldEnum[]
  }

  /**
   * workspacetheme create
   */
  export type workspacethemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * The data needed to create a workspacetheme.
     */
    data: XOR<workspacethemeCreateInput, workspacethemeUncheckedCreateInput>
  }

  /**
   * workspacetheme createMany
   */
  export type workspacethemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspacethemes.
     */
    data: workspacethemeCreateManyInput | workspacethemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspacetheme createManyAndReturn
   */
  export type workspacethemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * The data used to create many workspacethemes.
     */
    data: workspacethemeCreateManyInput | workspacethemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacetheme update
   */
  export type workspacethemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * The data needed to update a workspacetheme.
     */
    data: XOR<workspacethemeUpdateInput, workspacethemeUncheckedUpdateInput>
    /**
     * Choose, which workspacetheme to update.
     */
    where: workspacethemeWhereUniqueInput
  }

  /**
   * workspacetheme updateMany
   */
  export type workspacethemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspacethemes.
     */
    data: XOR<workspacethemeUpdateManyMutationInput, workspacethemeUncheckedUpdateManyInput>
    /**
     * Filter which workspacethemes to update
     */
    where?: workspacethemeWhereInput
    /**
     * Limit how many workspacethemes to update.
     */
    limit?: number
  }

  /**
   * workspacetheme updateManyAndReturn
   */
  export type workspacethemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * The data used to update workspacethemes.
     */
    data: XOR<workspacethemeUpdateManyMutationInput, workspacethemeUncheckedUpdateManyInput>
    /**
     * Filter which workspacethemes to update
     */
    where?: workspacethemeWhereInput
    /**
     * Limit how many workspacethemes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacetheme upsert
   */
  export type workspacethemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * The filter to search for the workspacetheme to update in case it exists.
     */
    where: workspacethemeWhereUniqueInput
    /**
     * In case the workspacetheme found by the `where` argument doesn't exist, create a new workspacetheme with this data.
     */
    create: XOR<workspacethemeCreateInput, workspacethemeUncheckedCreateInput>
    /**
     * In case the workspacetheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacethemeUpdateInput, workspacethemeUncheckedUpdateInput>
  }

  /**
   * workspacetheme delete
   */
  export type workspacethemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
    /**
     * Filter which workspacetheme to delete.
     */
    where: workspacethemeWhereUniqueInput
  }

  /**
   * workspacetheme deleteMany
   */
  export type workspacethemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacethemes to delete
     */
    where?: workspacethemeWhereInput
    /**
     * Limit how many workspacethemes to delete.
     */
    limit?: number
  }

  /**
   * workspacetheme without action
   */
  export type workspacethemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacetheme
     */
    select?: workspacethemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacetheme
     */
    omit?: workspacethemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacethemeInclude<ExtArgs> | null
  }


  /**
   * Model feedbacktheme
   */

  export type AggregateFeedbacktheme = {
    _count: FeedbackthemeCountAggregateOutputType | null
    _avg: FeedbackthemeAvgAggregateOutputType | null
    _sum: FeedbackthemeSumAggregateOutputType | null
    _min: FeedbackthemeMinAggregateOutputType | null
    _max: FeedbackthemeMaxAggregateOutputType | null
  }

  export type FeedbackthemeAvgAggregateOutputType = {
    feedbackid: number | null
    themeid: number | null
  }

  export type FeedbackthemeSumAggregateOutputType = {
    feedbackid: number | null
    themeid: number | null
  }

  export type FeedbackthemeMinAggregateOutputType = {
    feedbackid: number | null
    themeid: number | null
  }

  export type FeedbackthemeMaxAggregateOutputType = {
    feedbackid: number | null
    themeid: number | null
  }

  export type FeedbackthemeCountAggregateOutputType = {
    feedbackid: number
    themeid: number
    _all: number
  }


  export type FeedbackthemeAvgAggregateInputType = {
    feedbackid?: true
    themeid?: true
  }

  export type FeedbackthemeSumAggregateInputType = {
    feedbackid?: true
    themeid?: true
  }

  export type FeedbackthemeMinAggregateInputType = {
    feedbackid?: true
    themeid?: true
  }

  export type FeedbackthemeMaxAggregateInputType = {
    feedbackid?: true
    themeid?: true
  }

  export type FeedbackthemeCountAggregateInputType = {
    feedbackid?: true
    themeid?: true
    _all?: true
  }

  export type FeedbackthemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacktheme to aggregate.
     */
    where?: feedbackthemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbackthemes to fetch.
     */
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackthemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbackthemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbackthemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbackthemes
    **/
    _count?: true | FeedbackthemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackthemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackthemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackthemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackthemeMaxAggregateInputType
  }

  export type GetFeedbackthemeAggregateType<T extends FeedbackthemeAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbacktheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbacktheme[P]>
      : GetScalarType<T[P], AggregateFeedbacktheme[P]>
  }




  export type feedbackthemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackthemeWhereInput
    orderBy?: feedbackthemeOrderByWithAggregationInput | feedbackthemeOrderByWithAggregationInput[]
    by: FeedbackthemeScalarFieldEnum[] | FeedbackthemeScalarFieldEnum
    having?: feedbackthemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackthemeCountAggregateInputType | true
    _avg?: FeedbackthemeAvgAggregateInputType
    _sum?: FeedbackthemeSumAggregateInputType
    _min?: FeedbackthemeMinAggregateInputType
    _max?: FeedbackthemeMaxAggregateInputType
  }

  export type FeedbackthemeGroupByOutputType = {
    feedbackid: number
    themeid: number
    _count: FeedbackthemeCountAggregateOutputType | null
    _avg: FeedbackthemeAvgAggregateOutputType | null
    _sum: FeedbackthemeSumAggregateOutputType | null
    _min: FeedbackthemeMinAggregateOutputType | null
    _max: FeedbackthemeMaxAggregateOutputType | null
  }

  type GetFeedbackthemeGroupByPayload<T extends feedbackthemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackthemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackthemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackthemeGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackthemeGroupByOutputType[P]>
        }
      >
    >


  export type feedbackthemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackid?: boolean
    themeid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbacktheme"]>

  export type feedbackthemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackid?: boolean
    themeid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbacktheme"]>

  export type feedbackthemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackid?: boolean
    themeid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbacktheme"]>

  export type feedbackthemeSelectScalar = {
    feedbackid?: boolean
    themeid?: boolean
  }

  export type feedbackthemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feedbackid" | "themeid", ExtArgs["result"]["feedbacktheme"]>
  export type feedbackthemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type feedbackthemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type feedbackthemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }

  export type $feedbackthemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedbacktheme"
    objects: {
      feedback: Prisma.$feedbackPayload<ExtArgs>
      theme: Prisma.$themePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      feedbackid: number
      themeid: number
    }, ExtArgs["result"]["feedbacktheme"]>
    composites: {}
  }

  type feedbackthemeGetPayload<S extends boolean | null | undefined | feedbackthemeDefaultArgs> = $Result.GetResult<Prisma.$feedbackthemePayload, S>

  type feedbackthemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackthemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackthemeCountAggregateInputType | true
    }

  export interface feedbackthemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedbacktheme'], meta: { name: 'feedbacktheme' } }
    /**
     * Find zero or one Feedbacktheme that matches the filter.
     * @param {feedbackthemeFindUniqueArgs} args - Arguments to find a Feedbacktheme
     * @example
     * // Get one Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackthemeFindUniqueArgs>(args: SelectSubset<T, feedbackthemeFindUniqueArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedbacktheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackthemeFindUniqueOrThrowArgs} args - Arguments to find a Feedbacktheme
     * @example
     * // Get one Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackthemeFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackthemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacktheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeFindFirstArgs} args - Arguments to find a Feedbacktheme
     * @example
     * // Get one Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackthemeFindFirstArgs>(args?: SelectSubset<T, feedbackthemeFindFirstArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacktheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeFindFirstOrThrowArgs} args - Arguments to find a Feedbacktheme
     * @example
     * // Get one Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackthemeFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackthemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbackthemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbackthemes
     * const feedbackthemes = await prisma.feedbacktheme.findMany()
     * 
     * // Get first 10 Feedbackthemes
     * const feedbackthemes = await prisma.feedbacktheme.findMany({ take: 10 })
     * 
     * // Only select the `feedbackid`
     * const feedbackthemeWithFeedbackidOnly = await prisma.feedbacktheme.findMany({ select: { feedbackid: true } })
     * 
     */
    findMany<T extends feedbackthemeFindManyArgs>(args?: SelectSubset<T, feedbackthemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedbacktheme.
     * @param {feedbackthemeCreateArgs} args - Arguments to create a Feedbacktheme.
     * @example
     * // Create one Feedbacktheme
     * const Feedbacktheme = await prisma.feedbacktheme.create({
     *   data: {
     *     // ... data to create a Feedbacktheme
     *   }
     * })
     * 
     */
    create<T extends feedbackthemeCreateArgs>(args: SelectSubset<T, feedbackthemeCreateArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbackthemes.
     * @param {feedbackthemeCreateManyArgs} args - Arguments to create many Feedbackthemes.
     * @example
     * // Create many Feedbackthemes
     * const feedbacktheme = await prisma.feedbacktheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackthemeCreateManyArgs>(args?: SelectSubset<T, feedbackthemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbackthemes and returns the data saved in the database.
     * @param {feedbackthemeCreateManyAndReturnArgs} args - Arguments to create many Feedbackthemes.
     * @example
     * // Create many Feedbackthemes
     * const feedbacktheme = await prisma.feedbacktheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbackthemes and only return the `feedbackid`
     * const feedbackthemeWithFeedbackidOnly = await prisma.feedbacktheme.createManyAndReturn({
     *   select: { feedbackid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feedbackthemeCreateManyAndReturnArgs>(args?: SelectSubset<T, feedbackthemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedbacktheme.
     * @param {feedbackthemeDeleteArgs} args - Arguments to delete one Feedbacktheme.
     * @example
     * // Delete one Feedbacktheme
     * const Feedbacktheme = await prisma.feedbacktheme.delete({
     *   where: {
     *     // ... filter to delete one Feedbacktheme
     *   }
     * })
     * 
     */
    delete<T extends feedbackthemeDeleteArgs>(args: SelectSubset<T, feedbackthemeDeleteArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedbacktheme.
     * @param {feedbackthemeUpdateArgs} args - Arguments to update one Feedbacktheme.
     * @example
     * // Update one Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackthemeUpdateArgs>(args: SelectSubset<T, feedbackthemeUpdateArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbackthemes.
     * @param {feedbackthemeDeleteManyArgs} args - Arguments to filter Feedbackthemes to delete.
     * @example
     * // Delete a few Feedbackthemes
     * const { count } = await prisma.feedbacktheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackthemeDeleteManyArgs>(args?: SelectSubset<T, feedbackthemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbackthemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbackthemes
     * const feedbacktheme = await prisma.feedbacktheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackthemeUpdateManyArgs>(args: SelectSubset<T, feedbackthemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbackthemes and returns the data updated in the database.
     * @param {feedbackthemeUpdateManyAndReturnArgs} args - Arguments to update many Feedbackthemes.
     * @example
     * // Update many Feedbackthemes
     * const feedbacktheme = await prisma.feedbacktheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbackthemes and only return the `feedbackid`
     * const feedbackthemeWithFeedbackidOnly = await prisma.feedbacktheme.updateManyAndReturn({
     *   select: { feedbackid: true },
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
    updateManyAndReturn<T extends feedbackthemeUpdateManyAndReturnArgs>(args: SelectSubset<T, feedbackthemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedbacktheme.
     * @param {feedbackthemeUpsertArgs} args - Arguments to update or create a Feedbacktheme.
     * @example
     * // Update or create a Feedbacktheme
     * const feedbacktheme = await prisma.feedbacktheme.upsert({
     *   create: {
     *     // ... data to create a Feedbacktheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedbacktheme we want to update
     *   }
     * })
     */
    upsert<T extends feedbackthemeUpsertArgs>(args: SelectSubset<T, feedbackthemeUpsertArgs<ExtArgs>>): Prisma__feedbackthemeClient<$Result.GetResult<Prisma.$feedbackthemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbackthemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeCountArgs} args - Arguments to filter Feedbackthemes to count.
     * @example
     * // Count the number of Feedbackthemes
     * const count = await prisma.feedbacktheme.count({
     *   where: {
     *     // ... the filter for the Feedbackthemes we want to count
     *   }
     * })
    **/
    count<T extends feedbackthemeCountArgs>(
      args?: Subset<T, feedbackthemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackthemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedbacktheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackthemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackthemeAggregateArgs>(args: Subset<T, FeedbackthemeAggregateArgs>): Prisma.PrismaPromise<GetFeedbackthemeAggregateType<T>>

    /**
     * Group by Feedbacktheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackthemeGroupByArgs} args - Group by arguments.
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
      T extends feedbackthemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackthemeGroupByArgs['orderBy'] }
        : { orderBy?: feedbackthemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbackthemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackthemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedbacktheme model
   */
  readonly fields: feedbackthemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedbacktheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackthemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends feedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, feedbackDefaultArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends themeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, themeDefaultArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the feedbacktheme model
   */
  interface feedbackthemeFieldRefs {
    readonly feedbackid: FieldRef<"feedbacktheme", 'Int'>
    readonly themeid: FieldRef<"feedbacktheme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * feedbacktheme findUnique
   */
  export type feedbackthemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter, which feedbacktheme to fetch.
     */
    where: feedbackthemeWhereUniqueInput
  }

  /**
   * feedbacktheme findUniqueOrThrow
   */
  export type feedbackthemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter, which feedbacktheme to fetch.
     */
    where: feedbackthemeWhereUniqueInput
  }

  /**
   * feedbacktheme findFirst
   */
  export type feedbackthemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter, which feedbacktheme to fetch.
     */
    where?: feedbackthemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbackthemes to fetch.
     */
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbackthemes.
     */
    cursor?: feedbackthemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbackthemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbackthemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbackthemes.
     */
    distinct?: FeedbackthemeScalarFieldEnum | FeedbackthemeScalarFieldEnum[]
  }

  /**
   * feedbacktheme findFirstOrThrow
   */
  export type feedbackthemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter, which feedbacktheme to fetch.
     */
    where?: feedbackthemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbackthemes to fetch.
     */
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbackthemes.
     */
    cursor?: feedbackthemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbackthemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbackthemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbackthemes.
     */
    distinct?: FeedbackthemeScalarFieldEnum | FeedbackthemeScalarFieldEnum[]
  }

  /**
   * feedbacktheme findMany
   */
  export type feedbackthemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter, which feedbackthemes to fetch.
     */
    where?: feedbackthemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbackthemes to fetch.
     */
    orderBy?: feedbackthemeOrderByWithRelationInput | feedbackthemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbackthemes.
     */
    cursor?: feedbackthemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbackthemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbackthemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbackthemes.
     */
    distinct?: FeedbackthemeScalarFieldEnum | FeedbackthemeScalarFieldEnum[]
  }

  /**
   * feedbacktheme create
   */
  export type feedbackthemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * The data needed to create a feedbacktheme.
     */
    data: XOR<feedbackthemeCreateInput, feedbackthemeUncheckedCreateInput>
  }

  /**
   * feedbacktheme createMany
   */
  export type feedbackthemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbackthemes.
     */
    data: feedbackthemeCreateManyInput | feedbackthemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedbacktheme createManyAndReturn
   */
  export type feedbackthemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * The data used to create many feedbackthemes.
     */
    data: feedbackthemeCreateManyInput | feedbackthemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * feedbacktheme update
   */
  export type feedbackthemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * The data needed to update a feedbacktheme.
     */
    data: XOR<feedbackthemeUpdateInput, feedbackthemeUncheckedUpdateInput>
    /**
     * Choose, which feedbacktheme to update.
     */
    where: feedbackthemeWhereUniqueInput
  }

  /**
   * feedbacktheme updateMany
   */
  export type feedbackthemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbackthemes.
     */
    data: XOR<feedbackthemeUpdateManyMutationInput, feedbackthemeUncheckedUpdateManyInput>
    /**
     * Filter which feedbackthemes to update
     */
    where?: feedbackthemeWhereInput
    /**
     * Limit how many feedbackthemes to update.
     */
    limit?: number
  }

  /**
   * feedbacktheme updateManyAndReturn
   */
  export type feedbackthemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * The data used to update feedbackthemes.
     */
    data: XOR<feedbackthemeUpdateManyMutationInput, feedbackthemeUncheckedUpdateManyInput>
    /**
     * Filter which feedbackthemes to update
     */
    where?: feedbackthemeWhereInput
    /**
     * Limit how many feedbackthemes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * feedbacktheme upsert
   */
  export type feedbackthemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * The filter to search for the feedbacktheme to update in case it exists.
     */
    where: feedbackthemeWhereUniqueInput
    /**
     * In case the feedbacktheme found by the `where` argument doesn't exist, create a new feedbacktheme with this data.
     */
    create: XOR<feedbackthemeCreateInput, feedbackthemeUncheckedCreateInput>
    /**
     * In case the feedbacktheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackthemeUpdateInput, feedbackthemeUncheckedUpdateInput>
  }

  /**
   * feedbacktheme delete
   */
  export type feedbackthemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
    /**
     * Filter which feedbacktheme to delete.
     */
    where: feedbackthemeWhereUniqueInput
  }

  /**
   * feedbacktheme deleteMany
   */
  export type feedbackthemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbackthemes to delete
     */
    where?: feedbackthemeWhereInput
    /**
     * Limit how many feedbackthemes to delete.
     */
    limit?: number
  }

  /**
   * feedbacktheme without action
   */
  export type feedbackthemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacktheme
     */
    select?: feedbackthemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacktheme
     */
    omit?: feedbackthemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackthemeInclude<ExtArgs> | null
  }


  /**
   * Model embedding
   */

  export type AggregateEmbedding = {
    _count: EmbeddingCountAggregateOutputType | null
    _avg: EmbeddingAvgAggregateOutputType | null
    _sum: EmbeddingSumAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  export type EmbeddingAvgAggregateOutputType = {
    id: number | null
    feedbackid: number | null
  }

  export type EmbeddingSumAggregateOutputType = {
    id: number | null
    feedbackid: number | null
  }

  export type EmbeddingMinAggregateOutputType = {
    id: number | null
    vector: string | null
    feedbackid: number | null
  }

  export type EmbeddingMaxAggregateOutputType = {
    id: number | null
    vector: string | null
    feedbackid: number | null
  }

  export type EmbeddingCountAggregateOutputType = {
    id: number
    vector: number
    feedbackid: number
    _all: number
  }


  export type EmbeddingAvgAggregateInputType = {
    id?: true
    feedbackid?: true
  }

  export type EmbeddingSumAggregateInputType = {
    id?: true
    feedbackid?: true
  }

  export type EmbeddingMinAggregateInputType = {
    id?: true
    vector?: true
    feedbackid?: true
  }

  export type EmbeddingMaxAggregateInputType = {
    id?: true
    vector?: true
    feedbackid?: true
  }

  export type EmbeddingCountAggregateInputType = {
    id?: true
    vector?: true
    feedbackid?: true
    _all?: true
  }

  export type EmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which embedding to aggregate.
     */
    where?: embeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings to fetch.
     */
    orderBy?: embeddingOrderByWithRelationInput | embeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: embeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned embeddings
    **/
    _count?: true | EmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmbeddingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmbeddingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbeddingMaxAggregateInputType
  }

  export type GetEmbeddingAggregateType<T extends EmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbedding[P]>
      : GetScalarType<T[P], AggregateEmbedding[P]>
  }




  export type embeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: embeddingWhereInput
    orderBy?: embeddingOrderByWithAggregationInput | embeddingOrderByWithAggregationInput[]
    by: EmbeddingScalarFieldEnum[] | EmbeddingScalarFieldEnum
    having?: embeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbeddingCountAggregateInputType | true
    _avg?: EmbeddingAvgAggregateInputType
    _sum?: EmbeddingSumAggregateInputType
    _min?: EmbeddingMinAggregateInputType
    _max?: EmbeddingMaxAggregateInputType
  }

  export type EmbeddingGroupByOutputType = {
    id: number
    vector: string
    feedbackid: number
    _count: EmbeddingCountAggregateOutputType | null
    _avg: EmbeddingAvgAggregateOutputType | null
    _sum: EmbeddingSumAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  type GetEmbeddingGroupByPayload<T extends embeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type embeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vector?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type embeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vector?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type embeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vector?: boolean
    feedbackid?: boolean
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type embeddingSelectScalar = {
    id?: boolean
    vector?: boolean
    feedbackid?: boolean
  }

  export type embeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vector" | "feedbackid", ExtArgs["result"]["embedding"]>
  export type embeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }
  export type embeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }
  export type embeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | feedbackDefaultArgs<ExtArgs>
  }

  export type $embeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "embedding"
    objects: {
      feedback: Prisma.$feedbackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vector: string
      feedbackid: number
    }, ExtArgs["result"]["embedding"]>
    composites: {}
  }

  type embeddingGetPayload<S extends boolean | null | undefined | embeddingDefaultArgs> = $Result.GetResult<Prisma.$embeddingPayload, S>

  type embeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<embeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbeddingCountAggregateInputType | true
    }

  export interface embeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['embedding'], meta: { name: 'embedding' } }
    /**
     * Find zero or one Embedding that matches the filter.
     * @param {embeddingFindUniqueArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends embeddingFindUniqueArgs>(args: SelectSubset<T, embeddingFindUniqueArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Embedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {embeddingFindUniqueOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends embeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, embeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingFindFirstArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends embeddingFindFirstArgs>(args?: SelectSubset<T, embeddingFindFirstArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingFindFirstOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends embeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, embeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Embeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Embeddings
     * const embeddings = await prisma.embedding.findMany()
     * 
     * // Get first 10 Embeddings
     * const embeddings = await prisma.embedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embeddingWithIdOnly = await prisma.embedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends embeddingFindManyArgs>(args?: SelectSubset<T, embeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Embedding.
     * @param {embeddingCreateArgs} args - Arguments to create a Embedding.
     * @example
     * // Create one Embedding
     * const Embedding = await prisma.embedding.create({
     *   data: {
     *     // ... data to create a Embedding
     *   }
     * })
     * 
     */
    create<T extends embeddingCreateArgs>(args: SelectSubset<T, embeddingCreateArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Embeddings.
     * @param {embeddingCreateManyArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends embeddingCreateManyArgs>(args?: SelectSubset<T, embeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Embeddings and returns the data saved in the database.
     * @param {embeddingCreateManyAndReturnArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Embeddings and only return the `id`
     * const embeddingWithIdOnly = await prisma.embedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends embeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, embeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Embedding.
     * @param {embeddingDeleteArgs} args - Arguments to delete one Embedding.
     * @example
     * // Delete one Embedding
     * const Embedding = await prisma.embedding.delete({
     *   where: {
     *     // ... filter to delete one Embedding
     *   }
     * })
     * 
     */
    delete<T extends embeddingDeleteArgs>(args: SelectSubset<T, embeddingDeleteArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Embedding.
     * @param {embeddingUpdateArgs} args - Arguments to update one Embedding.
     * @example
     * // Update one Embedding
     * const embedding = await prisma.embedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends embeddingUpdateArgs>(args: SelectSubset<T, embeddingUpdateArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Embeddings.
     * @param {embeddingDeleteManyArgs} args - Arguments to filter Embeddings to delete.
     * @example
     * // Delete a few Embeddings
     * const { count } = await prisma.embedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends embeddingDeleteManyArgs>(args?: SelectSubset<T, embeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Embeddings
     * const embedding = await prisma.embedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends embeddingUpdateManyArgs>(args: SelectSubset<T, embeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings and returns the data updated in the database.
     * @param {embeddingUpdateManyAndReturnArgs} args - Arguments to update many Embeddings.
     * @example
     * // Update many Embeddings
     * const embedding = await prisma.embedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Embeddings and only return the `id`
     * const embeddingWithIdOnly = await prisma.embedding.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends embeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, embeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Embedding.
     * @param {embeddingUpsertArgs} args - Arguments to update or create a Embedding.
     * @example
     * // Update or create a Embedding
     * const embedding = await prisma.embedding.upsert({
     *   create: {
     *     // ... data to create a Embedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Embedding we want to update
     *   }
     * })
     */
    upsert<T extends embeddingUpsertArgs>(args: SelectSubset<T, embeddingUpsertArgs<ExtArgs>>): Prisma__embeddingClient<$Result.GetResult<Prisma.$embeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingCountArgs} args - Arguments to filter Embeddings to count.
     * @example
     * // Count the number of Embeddings
     * const count = await prisma.embedding.count({
     *   where: {
     *     // ... the filter for the Embeddings we want to count
     *   }
     * })
    **/
    count<T extends embeddingCountArgs>(
      args?: Subset<T, embeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmbeddingAggregateArgs>(args: Subset<T, EmbeddingAggregateArgs>): Prisma.PrismaPromise<GetEmbeddingAggregateType<T>>

    /**
     * Group by Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {embeddingGroupByArgs} args - Group by arguments.
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
      T extends embeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: embeddingGroupByArgs['orderBy'] }
        : { orderBy?: embeddingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, embeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the embedding model
   */
  readonly fields: embeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for embedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__embeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends feedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, feedbackDefaultArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the embedding model
   */
  interface embeddingFieldRefs {
    readonly id: FieldRef<"embedding", 'Int'>
    readonly vector: FieldRef<"embedding", 'String'>
    readonly feedbackid: FieldRef<"embedding", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * embedding findUnique
   */
  export type embeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter, which embedding to fetch.
     */
    where: embeddingWhereUniqueInput
  }

  /**
   * embedding findUniqueOrThrow
   */
  export type embeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter, which embedding to fetch.
     */
    where: embeddingWhereUniqueInput
  }

  /**
   * embedding findFirst
   */
  export type embeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter, which embedding to fetch.
     */
    where?: embeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings to fetch.
     */
    orderBy?: embeddingOrderByWithRelationInput | embeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for embeddings.
     */
    cursor?: embeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * embedding findFirstOrThrow
   */
  export type embeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter, which embedding to fetch.
     */
    where?: embeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings to fetch.
     */
    orderBy?: embeddingOrderByWithRelationInput | embeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for embeddings.
     */
    cursor?: embeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * embedding findMany
   */
  export type embeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter, which embeddings to fetch.
     */
    where?: embeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of embeddings to fetch.
     */
    orderBy?: embeddingOrderByWithRelationInput | embeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing embeddings.
     */
    cursor?: embeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * embedding create
   */
  export type embeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a embedding.
     */
    data: XOR<embeddingCreateInput, embeddingUncheckedCreateInput>
  }

  /**
   * embedding createMany
   */
  export type embeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many embeddings.
     */
    data: embeddingCreateManyInput | embeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * embedding createManyAndReturn
   */
  export type embeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * The data used to create many embeddings.
     */
    data: embeddingCreateManyInput | embeddingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * embedding update
   */
  export type embeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a embedding.
     */
    data: XOR<embeddingUpdateInput, embeddingUncheckedUpdateInput>
    /**
     * Choose, which embedding to update.
     */
    where: embeddingWhereUniqueInput
  }

  /**
   * embedding updateMany
   */
  export type embeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update embeddings.
     */
    data: XOR<embeddingUpdateManyMutationInput, embeddingUncheckedUpdateManyInput>
    /**
     * Filter which embeddings to update
     */
    where?: embeddingWhereInput
    /**
     * Limit how many embeddings to update.
     */
    limit?: number
  }

  /**
   * embedding updateManyAndReturn
   */
  export type embeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * The data used to update embeddings.
     */
    data: XOR<embeddingUpdateManyMutationInput, embeddingUncheckedUpdateManyInput>
    /**
     * Filter which embeddings to update
     */
    where?: embeddingWhereInput
    /**
     * Limit how many embeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * embedding upsert
   */
  export type embeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the embedding to update in case it exists.
     */
    where: embeddingWhereUniqueInput
    /**
     * In case the embedding found by the `where` argument doesn't exist, create a new embedding with this data.
     */
    create: XOR<embeddingCreateInput, embeddingUncheckedCreateInput>
    /**
     * In case the embedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<embeddingUpdateInput, embeddingUncheckedUpdateInput>
  }

  /**
   * embedding delete
   */
  export type embeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
    /**
     * Filter which embedding to delete.
     */
    where: embeddingWhereUniqueInput
  }

  /**
   * embedding deleteMany
   */
  export type embeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which embeddings to delete
     */
    where?: embeddingWhereInput
    /**
     * Limit how many embeddings to delete.
     */
    limit?: number
  }

  /**
   * embedding without action
   */
  export type embeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the embedding
     */
    select?: embeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the embedding
     */
    omit?: embeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: embeddingInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    title: string | null
    periodstart: Date | null
    periodend: Date | null
    contentJson: string | null
    userid: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    title: string | null
    periodstart: Date | null
    periodend: Date | null
    contentJson: string | null
    userid: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    title: number
    periodstart: number
    periodend: number
    contentJson: number
    userid: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    title?: true
    periodstart?: true
    periodend?: true
    contentJson?: true
    userid?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    title?: true
    periodstart?: true
    periodend?: true
    contentJson?: true
    userid?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    title?: true
    periodstart?: true
    periodend?: true
    contentJson?: true
    userid?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    title: string
    periodstart: Date
    periodend: Date
    contentJson: string
    userid: number
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    periodstart?: boolean
    periodend?: boolean
    contentJson?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | report$workspaceArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    periodstart?: boolean
    periodend?: boolean
    contentJson?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    periodstart?: boolean
    periodend?: boolean
    contentJson?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectScalar = {
    id?: boolean
    title?: boolean
    periodstart?: boolean
    periodend?: boolean
    contentJson?: boolean
    userid?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "periodstart" | "periodend" | "contentJson" | "userid", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    workspace?: boolean | report$workspaceArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      workspace: Prisma.$workspacereportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      periodstart: Date
      periodend: Date
      contentJson: string
      userid: number
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportCreateManyAndReturnArgs>(args?: SelectSubset<T, reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends reportUpdateManyAndReturnArgs>(args: SelectSubset<T, reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
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
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends report$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, report$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly id: FieldRef<"report", 'Int'>
    readonly title: FieldRef<"report", 'String'>
    readonly periodstart: FieldRef<"report", 'DateTime'>
    readonly periodend: FieldRef<"report", 'DateTime'>
    readonly contentJson: FieldRef<"report", 'String'>
    readonly userid: FieldRef<"report", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report createManyAndReturn
   */
  export type reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report updateManyAndReturn
   */
  export type reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report.workspace
   */
  export type report$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    where?: workspacereportWhereInput
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    cursor?: workspacereportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacereportScalarFieldEnum | WorkspacereportScalarFieldEnum[]
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
  }


  /**
   * Model workspacereport
   */

  export type AggregateWorkspacereport = {
    _count: WorkspacereportCountAggregateOutputType | null
    _avg: WorkspacereportAvgAggregateOutputType | null
    _sum: WorkspacereportSumAggregateOutputType | null
    _min: WorkspacereportMinAggregateOutputType | null
    _max: WorkspacereportMaxAggregateOutputType | null
  }

  export type WorkspacereportAvgAggregateOutputType = {
    workspaceid: number | null
    reportid: number | null
  }

  export type WorkspacereportSumAggregateOutputType = {
    workspaceid: number | null
    reportid: number | null
  }

  export type WorkspacereportMinAggregateOutputType = {
    workspaceid: number | null
    reportid: number | null
  }

  export type WorkspacereportMaxAggregateOutputType = {
    workspaceid: number | null
    reportid: number | null
  }

  export type WorkspacereportCountAggregateOutputType = {
    workspaceid: number
    reportid: number
    _all: number
  }


  export type WorkspacereportAvgAggregateInputType = {
    workspaceid?: true
    reportid?: true
  }

  export type WorkspacereportSumAggregateInputType = {
    workspaceid?: true
    reportid?: true
  }

  export type WorkspacereportMinAggregateInputType = {
    workspaceid?: true
    reportid?: true
  }

  export type WorkspacereportMaxAggregateInputType = {
    workspaceid?: true
    reportid?: true
  }

  export type WorkspacereportCountAggregateInputType = {
    workspaceid?: true
    reportid?: true
    _all?: true
  }

  export type WorkspacereportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacereport to aggregate.
     */
    where?: workspacereportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacereports to fetch.
     */
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacereportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacereports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacereports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspacereports
    **/
    _count?: true | WorkspacereportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspacereportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspacereportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacereportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacereportMaxAggregateInputType
  }

  export type GetWorkspacereportAggregateType<T extends WorkspacereportAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspacereport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspacereport[P]>
      : GetScalarType<T[P], AggregateWorkspacereport[P]>
  }




  export type workspacereportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacereportWhereInput
    orderBy?: workspacereportOrderByWithAggregationInput | workspacereportOrderByWithAggregationInput[]
    by: WorkspacereportScalarFieldEnum[] | WorkspacereportScalarFieldEnum
    having?: workspacereportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacereportCountAggregateInputType | true
    _avg?: WorkspacereportAvgAggregateInputType
    _sum?: WorkspacereportSumAggregateInputType
    _min?: WorkspacereportMinAggregateInputType
    _max?: WorkspacereportMaxAggregateInputType
  }

  export type WorkspacereportGroupByOutputType = {
    workspaceid: number
    reportid: number
    _count: WorkspacereportCountAggregateOutputType | null
    _avg: WorkspacereportAvgAggregateOutputType | null
    _sum: WorkspacereportSumAggregateOutputType | null
    _min: WorkspacereportMinAggregateOutputType | null
    _max: WorkspacereportMaxAggregateOutputType | null
  }

  type GetWorkspacereportGroupByPayload<T extends workspacereportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacereportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacereportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacereportGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacereportGroupByOutputType[P]>
        }
      >
    >


  export type workspacereportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    reportid?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacereport"]>

  export type workspacereportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    reportid?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacereport"]>

  export type workspacereportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspaceid?: boolean
    reportid?: boolean
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacereport"]>

  export type workspacereportSelectScalar = {
    workspaceid?: boolean
    reportid?: boolean
  }

  export type workspacereportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspaceid" | "reportid", ExtArgs["result"]["workspacereport"]>
  export type workspacereportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacereportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }
  export type workspacereportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | reportDefaultArgs<ExtArgs>
    workspace?: boolean | workspaceDefaultArgs<ExtArgs>
  }

  export type $workspacereportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspacereport"
    objects: {
      report: Prisma.$reportPayload<ExtArgs>
      workspace: Prisma.$workspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspaceid: number
      reportid: number
    }, ExtArgs["result"]["workspacereport"]>
    composites: {}
  }

  type workspacereportGetPayload<S extends boolean | null | undefined | workspacereportDefaultArgs> = $Result.GetResult<Prisma.$workspacereportPayload, S>

  type workspacereportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacereportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacereportCountAggregateInputType | true
    }

  export interface workspacereportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspacereport'], meta: { name: 'workspacereport' } }
    /**
     * Find zero or one Workspacereport that matches the filter.
     * @param {workspacereportFindUniqueArgs} args - Arguments to find a Workspacereport
     * @example
     * // Get one Workspacereport
     * const workspacereport = await prisma.workspacereport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacereportFindUniqueArgs>(args: SelectSubset<T, workspacereportFindUniqueArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspacereport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacereportFindUniqueOrThrowArgs} args - Arguments to find a Workspacereport
     * @example
     * // Get one Workspacereport
     * const workspacereport = await prisma.workspacereport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacereportFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacereportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacereport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportFindFirstArgs} args - Arguments to find a Workspacereport
     * @example
     * // Get one Workspacereport
     * const workspacereport = await prisma.workspacereport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacereportFindFirstArgs>(args?: SelectSubset<T, workspacereportFindFirstArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspacereport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportFindFirstOrThrowArgs} args - Arguments to find a Workspacereport
     * @example
     * // Get one Workspacereport
     * const workspacereport = await prisma.workspacereport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacereportFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacereportFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspacereports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspacereports
     * const workspacereports = await prisma.workspacereport.findMany()
     * 
     * // Get first 10 Workspacereports
     * const workspacereports = await prisma.workspacereport.findMany({ take: 10 })
     * 
     * // Only select the `workspaceid`
     * const workspacereportWithWorkspaceidOnly = await prisma.workspacereport.findMany({ select: { workspaceid: true } })
     * 
     */
    findMany<T extends workspacereportFindManyArgs>(args?: SelectSubset<T, workspacereportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspacereport.
     * @param {workspacereportCreateArgs} args - Arguments to create a Workspacereport.
     * @example
     * // Create one Workspacereport
     * const Workspacereport = await prisma.workspacereport.create({
     *   data: {
     *     // ... data to create a Workspacereport
     *   }
     * })
     * 
     */
    create<T extends workspacereportCreateArgs>(args: SelectSubset<T, workspacereportCreateArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspacereports.
     * @param {workspacereportCreateManyArgs} args - Arguments to create many Workspacereports.
     * @example
     * // Create many Workspacereports
     * const workspacereport = await prisma.workspacereport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacereportCreateManyArgs>(args?: SelectSubset<T, workspacereportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspacereports and returns the data saved in the database.
     * @param {workspacereportCreateManyAndReturnArgs} args - Arguments to create many Workspacereports.
     * @example
     * // Create many Workspacereports
     * const workspacereport = await prisma.workspacereport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspacereports and only return the `workspaceid`
     * const workspacereportWithWorkspaceidOnly = await prisma.workspacereport.createManyAndReturn({
     *   select: { workspaceid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacereportCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacereportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspacereport.
     * @param {workspacereportDeleteArgs} args - Arguments to delete one Workspacereport.
     * @example
     * // Delete one Workspacereport
     * const Workspacereport = await prisma.workspacereport.delete({
     *   where: {
     *     // ... filter to delete one Workspacereport
     *   }
     * })
     * 
     */
    delete<T extends workspacereportDeleteArgs>(args: SelectSubset<T, workspacereportDeleteArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspacereport.
     * @param {workspacereportUpdateArgs} args - Arguments to update one Workspacereport.
     * @example
     * // Update one Workspacereport
     * const workspacereport = await prisma.workspacereport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacereportUpdateArgs>(args: SelectSubset<T, workspacereportUpdateArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspacereports.
     * @param {workspacereportDeleteManyArgs} args - Arguments to filter Workspacereports to delete.
     * @example
     * // Delete a few Workspacereports
     * const { count } = await prisma.workspacereport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacereportDeleteManyArgs>(args?: SelectSubset<T, workspacereportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacereports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspacereports
     * const workspacereport = await prisma.workspacereport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacereportUpdateManyArgs>(args: SelectSubset<T, workspacereportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacereports and returns the data updated in the database.
     * @param {workspacereportUpdateManyAndReturnArgs} args - Arguments to update many Workspacereports.
     * @example
     * // Update many Workspacereports
     * const workspacereport = await prisma.workspacereport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspacereports and only return the `workspaceid`
     * const workspacereportWithWorkspaceidOnly = await prisma.workspacereport.updateManyAndReturn({
     *   select: { workspaceid: true },
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
    updateManyAndReturn<T extends workspacereportUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacereportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspacereport.
     * @param {workspacereportUpsertArgs} args - Arguments to update or create a Workspacereport.
     * @example
     * // Update or create a Workspacereport
     * const workspacereport = await prisma.workspacereport.upsert({
     *   create: {
     *     // ... data to create a Workspacereport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspacereport we want to update
     *   }
     * })
     */
    upsert<T extends workspacereportUpsertArgs>(args: SelectSubset<T, workspacereportUpsertArgs<ExtArgs>>): Prisma__workspacereportClient<$Result.GetResult<Prisma.$workspacereportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspacereports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportCountArgs} args - Arguments to filter Workspacereports to count.
     * @example
     * // Count the number of Workspacereports
     * const count = await prisma.workspacereport.count({
     *   where: {
     *     // ... the filter for the Workspacereports we want to count
     *   }
     * })
    **/
    count<T extends workspacereportCountArgs>(
      args?: Subset<T, workspacereportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacereportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspacereport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacereportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspacereportAggregateArgs>(args: Subset<T, WorkspacereportAggregateArgs>): Prisma.PrismaPromise<GetWorkspacereportAggregateType<T>>

    /**
     * Group by Workspacereport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacereportGroupByArgs} args - Group by arguments.
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
      T extends workspacereportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacereportGroupByArgs['orderBy'] }
        : { orderBy?: workspacereportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspacereportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacereportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspacereport model
   */
  readonly fields: workspacereportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspacereport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacereportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends reportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reportDefaultArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends workspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspaceDefaultArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspacereport model
   */
  interface workspacereportFieldRefs {
    readonly workspaceid: FieldRef<"workspacereport", 'Int'>
    readonly reportid: FieldRef<"workspacereport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workspacereport findUnique
   */
  export type workspacereportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter, which workspacereport to fetch.
     */
    where: workspacereportWhereUniqueInput
  }

  /**
   * workspacereport findUniqueOrThrow
   */
  export type workspacereportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter, which workspacereport to fetch.
     */
    where: workspacereportWhereUniqueInput
  }

  /**
   * workspacereport findFirst
   */
  export type workspacereportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter, which workspacereport to fetch.
     */
    where?: workspacereportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacereports to fetch.
     */
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacereports.
     */
    cursor?: workspacereportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacereports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacereports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacereports.
     */
    distinct?: WorkspacereportScalarFieldEnum | WorkspacereportScalarFieldEnum[]
  }

  /**
   * workspacereport findFirstOrThrow
   */
  export type workspacereportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter, which workspacereport to fetch.
     */
    where?: workspacereportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacereports to fetch.
     */
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacereports.
     */
    cursor?: workspacereportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacereports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacereports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacereports.
     */
    distinct?: WorkspacereportScalarFieldEnum | WorkspacereportScalarFieldEnum[]
  }

  /**
   * workspacereport findMany
   */
  export type workspacereportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter, which workspacereports to fetch.
     */
    where?: workspacereportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacereports to fetch.
     */
    orderBy?: workspacereportOrderByWithRelationInput | workspacereportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspacereports.
     */
    cursor?: workspacereportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacereports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacereports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacereports.
     */
    distinct?: WorkspacereportScalarFieldEnum | WorkspacereportScalarFieldEnum[]
  }

  /**
   * workspacereport create
   */
  export type workspacereportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * The data needed to create a workspacereport.
     */
    data: XOR<workspacereportCreateInput, workspacereportUncheckedCreateInput>
  }

  /**
   * workspacereport createMany
   */
  export type workspacereportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspacereports.
     */
    data: workspacereportCreateManyInput | workspacereportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspacereport createManyAndReturn
   */
  export type workspacereportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * The data used to create many workspacereports.
     */
    data: workspacereportCreateManyInput | workspacereportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacereport update
   */
  export type workspacereportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * The data needed to update a workspacereport.
     */
    data: XOR<workspacereportUpdateInput, workspacereportUncheckedUpdateInput>
    /**
     * Choose, which workspacereport to update.
     */
    where: workspacereportWhereUniqueInput
  }

  /**
   * workspacereport updateMany
   */
  export type workspacereportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspacereports.
     */
    data: XOR<workspacereportUpdateManyMutationInput, workspacereportUncheckedUpdateManyInput>
    /**
     * Filter which workspacereports to update
     */
    where?: workspacereportWhereInput
    /**
     * Limit how many workspacereports to update.
     */
    limit?: number
  }

  /**
   * workspacereport updateManyAndReturn
   */
  export type workspacereportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * The data used to update workspacereports.
     */
    data: XOR<workspacereportUpdateManyMutationInput, workspacereportUncheckedUpdateManyInput>
    /**
     * Filter which workspacereports to update
     */
    where?: workspacereportWhereInput
    /**
     * Limit how many workspacereports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspacereport upsert
   */
  export type workspacereportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * The filter to search for the workspacereport to update in case it exists.
     */
    where: workspacereportWhereUniqueInput
    /**
     * In case the workspacereport found by the `where` argument doesn't exist, create a new workspacereport with this data.
     */
    create: XOR<workspacereportCreateInput, workspacereportUncheckedCreateInput>
    /**
     * In case the workspacereport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacereportUpdateInput, workspacereportUncheckedUpdateInput>
  }

  /**
   * workspacereport delete
   */
  export type workspacereportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
    /**
     * Filter which workspacereport to delete.
     */
    where: workspacereportWhereUniqueInput
  }

  /**
   * workspacereport deleteMany
   */
  export type workspacereportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacereports to delete
     */
    where?: workspacereportWhereInput
    /**
     * Limit how many workspacereports to delete.
     */
    limit?: number
  }

  /**
   * workspacereport without action
   */
  export type workspacereportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacereport
     */
    select?: workspacereportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspacereport
     */
    omit?: workspacereportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacereportInclude<ExtArgs> | null
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


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceuserScalarFieldEnum: {
    workspaceid: 'workspaceid',
    userid: 'userid'
  };

  export type WorkspaceuserScalarFieldEnum = (typeof WorkspaceuserScalarFieldEnum)[keyof typeof WorkspaceuserScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    content: 'content',
    channel: 'channel',
    sentiment: 'sentiment',
    status: 'status'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const WorkspacefeedbackScalarFieldEnum: {
    workspaceid: 'workspaceid',
    feedbackid: 'feedbackid'
  };

  export type WorkspacefeedbackScalarFieldEnum = (typeof WorkspacefeedbackScalarFieldEnum)[keyof typeof WorkspacefeedbackScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const WorkspacethemeScalarFieldEnum: {
    workspaceid: 'workspaceid',
    themeid: 'themeid'
  };

  export type WorkspacethemeScalarFieldEnum = (typeof WorkspacethemeScalarFieldEnum)[keyof typeof WorkspacethemeScalarFieldEnum]


  export const FeedbackthemeScalarFieldEnum: {
    feedbackid: 'feedbackid',
    themeid: 'themeid'
  };

  export type FeedbackthemeScalarFieldEnum = (typeof FeedbackthemeScalarFieldEnum)[keyof typeof FeedbackthemeScalarFieldEnum]


  export const EmbeddingScalarFieldEnum: {
    id: 'id',
    vector: 'vector',
    feedbackid: 'feedbackid'
  };

  export type EmbeddingScalarFieldEnum = (typeof EmbeddingScalarFieldEnum)[keyof typeof EmbeddingScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    periodstart: 'periodstart',
    periodend: 'periodend',
    contentJson: 'contentJson',
    userid: 'userid'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const WorkspacereportScalarFieldEnum: {
    workspaceid: 'workspaceid',
    reportid: 'reportid'
  };

  export type WorkspacereportScalarFieldEnum = (typeof WorkspacereportScalarFieldEnum)[keyof typeof WorkspacereportScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Sentiment'
   */
  export type EnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment'>
    


  /**
   * Reference to a field of type 'Sentiment[]'
   */
  export type ListEnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


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


  export type workspaceWhereInput = {
    AND?: workspaceWhereInput | workspaceWhereInput[]
    OR?: workspaceWhereInput[]
    NOT?: workspaceWhereInput | workspaceWhereInput[]
    id?: IntFilter<"workspace"> | number
    name?: StringFilter<"workspace"> | string
    createdAt?: DateTimeFilter<"workspace"> | Date | string
    feedback?: WorkspacefeedbackListRelationFilter
    report?: WorkspacereportListRelationFilter
    theme?: WorkspacethemeListRelationFilter
    user?: WorkspaceuserListRelationFilter
  }

  export type workspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    feedback?: workspacefeedbackOrderByRelationAggregateInput
    report?: workspacereportOrderByRelationAggregateInput
    theme?: workspacethemeOrderByRelationAggregateInput
    user?: workspaceuserOrderByRelationAggregateInput
  }

  export type workspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workspaceWhereInput | workspaceWhereInput[]
    OR?: workspaceWhereInput[]
    NOT?: workspaceWhereInput | workspaceWhereInput[]
    name?: StringFilter<"workspace"> | string
    createdAt?: DateTimeFilter<"workspace"> | Date | string
    feedback?: WorkspacefeedbackListRelationFilter
    report?: WorkspacereportListRelationFilter
    theme?: WorkspacethemeListRelationFilter
    user?: WorkspaceuserListRelationFilter
  }, "id">

  export type workspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: workspaceCountOrderByAggregateInput
    _avg?: workspaceAvgOrderByAggregateInput
    _max?: workspaceMaxOrderByAggregateInput
    _min?: workspaceMinOrderByAggregateInput
    _sum?: workspaceSumOrderByAggregateInput
  }

  export type workspaceScalarWhereWithAggregatesInput = {
    AND?: workspaceScalarWhereWithAggregatesInput | workspaceScalarWhereWithAggregatesInput[]
    OR?: workspaceScalarWhereWithAggregatesInput[]
    NOT?: workspaceScalarWhereWithAggregatesInput | workspaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workspace"> | number
    name?: StringWithAggregatesFilter<"workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"workspace"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    user?: ReportListRelationFilter
    workspace?: WorkspaceuserListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    user?: reportOrderByRelationAggregateInput
    workspace?: workspaceuserOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    user?: ReportListRelationFilter
    workspace?: WorkspaceuserListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    passwordHash?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
  }

  export type workspaceuserWhereInput = {
    AND?: workspaceuserWhereInput | workspaceuserWhereInput[]
    OR?: workspaceuserWhereInput[]
    NOT?: workspaceuserWhereInput | workspaceuserWhereInput[]
    workspaceid?: IntFilter<"workspaceuser"> | number
    userid?: IntFilter<"workspaceuser"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }

  export type workspaceuserOrderByWithRelationInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
    user?: userOrderByWithRelationInput
    workspace?: workspaceOrderByWithRelationInput
  }

  export type workspaceuserWhereUniqueInput = Prisma.AtLeast<{
    workspaceid_userid?: workspaceuserWorkspaceidUseridCompoundUniqueInput
    AND?: workspaceuserWhereInput | workspaceuserWhereInput[]
    OR?: workspaceuserWhereInput[]
    NOT?: workspaceuserWhereInput | workspaceuserWhereInput[]
    workspaceid?: IntFilter<"workspaceuser"> | number
    userid?: IntFilter<"workspaceuser"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }, "workspaceid_userid">

  export type workspaceuserOrderByWithAggregationInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
    _count?: workspaceuserCountOrderByAggregateInput
    _avg?: workspaceuserAvgOrderByAggregateInput
    _max?: workspaceuserMaxOrderByAggregateInput
    _min?: workspaceuserMinOrderByAggregateInput
    _sum?: workspaceuserSumOrderByAggregateInput
  }

  export type workspaceuserScalarWhereWithAggregatesInput = {
    AND?: workspaceuserScalarWhereWithAggregatesInput | workspaceuserScalarWhereWithAggregatesInput[]
    OR?: workspaceuserScalarWhereWithAggregatesInput[]
    NOT?: workspaceuserScalarWhereWithAggregatesInput | workspaceuserScalarWhereWithAggregatesInput[]
    workspaceid?: IntWithAggregatesFilter<"workspaceuser"> | number
    userid?: IntWithAggregatesFilter<"workspaceuser"> | number
  }

  export type feedbackWhereInput = {
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    id?: IntFilter<"feedback"> | number
    content?: StringFilter<"feedback"> | string
    channel?: StringFilter<"feedback"> | string
    sentiment?: EnumSentimentFilter<"feedback"> | $Enums.Sentiment
    status?: EnumStatusFilter<"feedback"> | $Enums.Status
    feedback?: EmbeddingListRelationFilter
    theme?: FeedbackthemeListRelationFilter
    workspace?: WorkspacefeedbackListRelationFilter
  }

  export type feedbackOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    channel?: SortOrder
    sentiment?: SortOrder
    status?: SortOrder
    feedback?: embeddingOrderByRelationAggregateInput
    theme?: feedbackthemeOrderByRelationAggregateInput
    workspace?: workspacefeedbackOrderByRelationAggregateInput
  }

  export type feedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    content?: StringFilter<"feedback"> | string
    channel?: StringFilter<"feedback"> | string
    sentiment?: EnumSentimentFilter<"feedback"> | $Enums.Sentiment
    status?: EnumStatusFilter<"feedback"> | $Enums.Status
    feedback?: EmbeddingListRelationFilter
    theme?: FeedbackthemeListRelationFilter
    workspace?: WorkspacefeedbackListRelationFilter
  }, "id">

  export type feedbackOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    channel?: SortOrder
    sentiment?: SortOrder
    status?: SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    OR?: feedbackScalarWhereWithAggregatesInput[]
    NOT?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedback"> | number
    content?: StringWithAggregatesFilter<"feedback"> | string
    channel?: StringWithAggregatesFilter<"feedback"> | string
    sentiment?: EnumSentimentWithAggregatesFilter<"feedback"> | $Enums.Sentiment
    status?: EnumStatusWithAggregatesFilter<"feedback"> | $Enums.Status
  }

  export type workspacefeedbackWhereInput = {
    AND?: workspacefeedbackWhereInput | workspacefeedbackWhereInput[]
    OR?: workspacefeedbackWhereInput[]
    NOT?: workspacefeedbackWhereInput | workspacefeedbackWhereInput[]
    workspaceid?: IntFilter<"workspacefeedback"> | number
    feedbackid?: IntFilter<"workspacefeedback"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }

  export type workspacefeedbackOrderByWithRelationInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
    feedback?: feedbackOrderByWithRelationInput
    workspace?: workspaceOrderByWithRelationInput
  }

  export type workspacefeedbackWhereUniqueInput = Prisma.AtLeast<{
    workspaceid_feedbackid?: workspacefeedbackWorkspaceidFeedbackidCompoundUniqueInput
    AND?: workspacefeedbackWhereInput | workspacefeedbackWhereInput[]
    OR?: workspacefeedbackWhereInput[]
    NOT?: workspacefeedbackWhereInput | workspacefeedbackWhereInput[]
    workspaceid?: IntFilter<"workspacefeedback"> | number
    feedbackid?: IntFilter<"workspacefeedback"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }, "workspaceid_feedbackid">

  export type workspacefeedbackOrderByWithAggregationInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
    _count?: workspacefeedbackCountOrderByAggregateInput
    _avg?: workspacefeedbackAvgOrderByAggregateInput
    _max?: workspacefeedbackMaxOrderByAggregateInput
    _min?: workspacefeedbackMinOrderByAggregateInput
    _sum?: workspacefeedbackSumOrderByAggregateInput
  }

  export type workspacefeedbackScalarWhereWithAggregatesInput = {
    AND?: workspacefeedbackScalarWhereWithAggregatesInput | workspacefeedbackScalarWhereWithAggregatesInput[]
    OR?: workspacefeedbackScalarWhereWithAggregatesInput[]
    NOT?: workspacefeedbackScalarWhereWithAggregatesInput | workspacefeedbackScalarWhereWithAggregatesInput[]
    workspaceid?: IntWithAggregatesFilter<"workspacefeedback"> | number
    feedbackid?: IntWithAggregatesFilter<"workspacefeedback"> | number
  }

  export type themeWhereInput = {
    AND?: themeWhereInput | themeWhereInput[]
    OR?: themeWhereInput[]
    NOT?: themeWhereInput | themeWhereInput[]
    id?: IntFilter<"theme"> | number
    name?: StringFilter<"theme"> | string
    description?: StringFilter<"theme"> | string
    color?: StringFilter<"theme"> | string
    feedback?: FeedbackthemeListRelationFilter
    workspace?: WorkspacethemeListRelationFilter
  }

  export type themeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    feedback?: feedbackthemeOrderByRelationAggregateInput
    workspace?: workspacethemeOrderByRelationAggregateInput
  }

  export type themeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: themeWhereInput | themeWhereInput[]
    OR?: themeWhereInput[]
    NOT?: themeWhereInput | themeWhereInput[]
    name?: StringFilter<"theme"> | string
    description?: StringFilter<"theme"> | string
    color?: StringFilter<"theme"> | string
    feedback?: FeedbackthemeListRelationFilter
    workspace?: WorkspacethemeListRelationFilter
  }, "id">

  export type themeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    _count?: themeCountOrderByAggregateInput
    _avg?: themeAvgOrderByAggregateInput
    _max?: themeMaxOrderByAggregateInput
    _min?: themeMinOrderByAggregateInput
    _sum?: themeSumOrderByAggregateInput
  }

  export type themeScalarWhereWithAggregatesInput = {
    AND?: themeScalarWhereWithAggregatesInput | themeScalarWhereWithAggregatesInput[]
    OR?: themeScalarWhereWithAggregatesInput[]
    NOT?: themeScalarWhereWithAggregatesInput | themeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"theme"> | number
    name?: StringWithAggregatesFilter<"theme"> | string
    description?: StringWithAggregatesFilter<"theme"> | string
    color?: StringWithAggregatesFilter<"theme"> | string
  }

  export type workspacethemeWhereInput = {
    AND?: workspacethemeWhereInput | workspacethemeWhereInput[]
    OR?: workspacethemeWhereInput[]
    NOT?: workspacethemeWhereInput | workspacethemeWhereInput[]
    workspaceid?: IntFilter<"workspacetheme"> | number
    themeid?: IntFilter<"workspacetheme"> | number
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }

  export type workspacethemeOrderByWithRelationInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
    theme?: themeOrderByWithRelationInput
    workspace?: workspaceOrderByWithRelationInput
  }

  export type workspacethemeWhereUniqueInput = Prisma.AtLeast<{
    workspaceid_themeid?: workspacethemeWorkspaceidThemeidCompoundUniqueInput
    AND?: workspacethemeWhereInput | workspacethemeWhereInput[]
    OR?: workspacethemeWhereInput[]
    NOT?: workspacethemeWhereInput | workspacethemeWhereInput[]
    workspaceid?: IntFilter<"workspacetheme"> | number
    themeid?: IntFilter<"workspacetheme"> | number
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }, "workspaceid_themeid">

  export type workspacethemeOrderByWithAggregationInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
    _count?: workspacethemeCountOrderByAggregateInput
    _avg?: workspacethemeAvgOrderByAggregateInput
    _max?: workspacethemeMaxOrderByAggregateInput
    _min?: workspacethemeMinOrderByAggregateInput
    _sum?: workspacethemeSumOrderByAggregateInput
  }

  export type workspacethemeScalarWhereWithAggregatesInput = {
    AND?: workspacethemeScalarWhereWithAggregatesInput | workspacethemeScalarWhereWithAggregatesInput[]
    OR?: workspacethemeScalarWhereWithAggregatesInput[]
    NOT?: workspacethemeScalarWhereWithAggregatesInput | workspacethemeScalarWhereWithAggregatesInput[]
    workspaceid?: IntWithAggregatesFilter<"workspacetheme"> | number
    themeid?: IntWithAggregatesFilter<"workspacetheme"> | number
  }

  export type feedbackthemeWhereInput = {
    AND?: feedbackthemeWhereInput | feedbackthemeWhereInput[]
    OR?: feedbackthemeWhereInput[]
    NOT?: feedbackthemeWhereInput | feedbackthemeWhereInput[]
    feedbackid?: IntFilter<"feedbacktheme"> | number
    themeid?: IntFilter<"feedbacktheme"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }

  export type feedbackthemeOrderByWithRelationInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
    feedback?: feedbackOrderByWithRelationInput
    theme?: themeOrderByWithRelationInput
  }

  export type feedbackthemeWhereUniqueInput = Prisma.AtLeast<{
    feedbackid_themeid?: feedbackthemeFeedbackidThemeidCompoundUniqueInput
    AND?: feedbackthemeWhereInput | feedbackthemeWhereInput[]
    OR?: feedbackthemeWhereInput[]
    NOT?: feedbackthemeWhereInput | feedbackthemeWhereInput[]
    feedbackid?: IntFilter<"feedbacktheme"> | number
    themeid?: IntFilter<"feedbacktheme"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }, "feedbackid_themeid">

  export type feedbackthemeOrderByWithAggregationInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
    _count?: feedbackthemeCountOrderByAggregateInput
    _avg?: feedbackthemeAvgOrderByAggregateInput
    _max?: feedbackthemeMaxOrderByAggregateInput
    _min?: feedbackthemeMinOrderByAggregateInput
    _sum?: feedbackthemeSumOrderByAggregateInput
  }

  export type feedbackthemeScalarWhereWithAggregatesInput = {
    AND?: feedbackthemeScalarWhereWithAggregatesInput | feedbackthemeScalarWhereWithAggregatesInput[]
    OR?: feedbackthemeScalarWhereWithAggregatesInput[]
    NOT?: feedbackthemeScalarWhereWithAggregatesInput | feedbackthemeScalarWhereWithAggregatesInput[]
    feedbackid?: IntWithAggregatesFilter<"feedbacktheme"> | number
    themeid?: IntWithAggregatesFilter<"feedbacktheme"> | number
  }

  export type embeddingWhereInput = {
    AND?: embeddingWhereInput | embeddingWhereInput[]
    OR?: embeddingWhereInput[]
    NOT?: embeddingWhereInput | embeddingWhereInput[]
    id?: IntFilter<"embedding"> | number
    vector?: StringFilter<"embedding"> | string
    feedbackid?: IntFilter<"embedding"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
  }

  export type embeddingOrderByWithRelationInput = {
    id?: SortOrder
    vector?: SortOrder
    feedbackid?: SortOrder
    feedback?: feedbackOrderByWithRelationInput
  }

  export type embeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: embeddingWhereInput | embeddingWhereInput[]
    OR?: embeddingWhereInput[]
    NOT?: embeddingWhereInput | embeddingWhereInput[]
    vector?: StringFilter<"embedding"> | string
    feedbackid?: IntFilter<"embedding"> | number
    feedback?: XOR<FeedbackScalarRelationFilter, feedbackWhereInput>
  }, "id">

  export type embeddingOrderByWithAggregationInput = {
    id?: SortOrder
    vector?: SortOrder
    feedbackid?: SortOrder
    _count?: embeddingCountOrderByAggregateInput
    _avg?: embeddingAvgOrderByAggregateInput
    _max?: embeddingMaxOrderByAggregateInput
    _min?: embeddingMinOrderByAggregateInput
    _sum?: embeddingSumOrderByAggregateInput
  }

  export type embeddingScalarWhereWithAggregatesInput = {
    AND?: embeddingScalarWhereWithAggregatesInput | embeddingScalarWhereWithAggregatesInput[]
    OR?: embeddingScalarWhereWithAggregatesInput[]
    NOT?: embeddingScalarWhereWithAggregatesInput | embeddingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"embedding"> | number
    vector?: StringWithAggregatesFilter<"embedding"> | string
    feedbackid?: IntWithAggregatesFilter<"embedding"> | number
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    id?: IntFilter<"report"> | number
    title?: StringFilter<"report"> | string
    periodstart?: DateTimeFilter<"report"> | Date | string
    periodend?: DateTimeFilter<"report"> | Date | string
    contentJson?: StringFilter<"report"> | string
    userid?: IntFilter<"report"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workspace?: WorkspacereportListRelationFilter
  }

  export type reportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    periodstart?: SortOrder
    periodend?: SortOrder
    contentJson?: SortOrder
    userid?: SortOrder
    user?: userOrderByWithRelationInput
    workspace?: workspacereportOrderByRelationAggregateInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    title?: StringFilter<"report"> | string
    periodstart?: DateTimeFilter<"report"> | Date | string
    periodend?: DateTimeFilter<"report"> | Date | string
    contentJson?: StringFilter<"report"> | string
    userid?: IntFilter<"report"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workspace?: WorkspacereportListRelationFilter
  }, "id">

  export type reportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    periodstart?: SortOrder
    periodend?: SortOrder
    contentJson?: SortOrder
    userid?: SortOrder
    _count?: reportCountOrderByAggregateInput
    _avg?: reportAvgOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
    _sum?: reportSumOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"report"> | number
    title?: StringWithAggregatesFilter<"report"> | string
    periodstart?: DateTimeWithAggregatesFilter<"report"> | Date | string
    periodend?: DateTimeWithAggregatesFilter<"report"> | Date | string
    contentJson?: StringWithAggregatesFilter<"report"> | string
    userid?: IntWithAggregatesFilter<"report"> | number
  }

  export type workspacereportWhereInput = {
    AND?: workspacereportWhereInput | workspacereportWhereInput[]
    OR?: workspacereportWhereInput[]
    NOT?: workspacereportWhereInput | workspacereportWhereInput[]
    workspaceid?: IntFilter<"workspacereport"> | number
    reportid?: IntFilter<"workspacereport"> | number
    report?: XOR<ReportScalarRelationFilter, reportWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }

  export type workspacereportOrderByWithRelationInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
    report?: reportOrderByWithRelationInput
    workspace?: workspaceOrderByWithRelationInput
  }

  export type workspacereportWhereUniqueInput = Prisma.AtLeast<{
    workspaceid_reportid?: workspacereportWorkspaceidReportidCompoundUniqueInput
    AND?: workspacereportWhereInput | workspacereportWhereInput[]
    OR?: workspacereportWhereInput[]
    NOT?: workspacereportWhereInput | workspacereportWhereInput[]
    workspaceid?: IntFilter<"workspacereport"> | number
    reportid?: IntFilter<"workspacereport"> | number
    report?: XOR<ReportScalarRelationFilter, reportWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, workspaceWhereInput>
  }, "workspaceid_reportid">

  export type workspacereportOrderByWithAggregationInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
    _count?: workspacereportCountOrderByAggregateInput
    _avg?: workspacereportAvgOrderByAggregateInput
    _max?: workspacereportMaxOrderByAggregateInput
    _min?: workspacereportMinOrderByAggregateInput
    _sum?: workspacereportSumOrderByAggregateInput
  }

  export type workspacereportScalarWhereWithAggregatesInput = {
    AND?: workspacereportScalarWhereWithAggregatesInput | workspacereportScalarWhereWithAggregatesInput[]
    OR?: workspacereportScalarWhereWithAggregatesInput[]
    NOT?: workspacereportScalarWhereWithAggregatesInput | workspacereportScalarWhereWithAggregatesInput[]
    workspaceid?: IntWithAggregatesFilter<"workspacereport"> | number
    reportid?: IntWithAggregatesFilter<"workspacereport"> | number
  }

  export type workspaceCreateInput = {
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackUncheckedCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportUncheckedCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeUncheckedCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUncheckedUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUncheckedUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUncheckedUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type workspaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    user?: reportCreateNestedManyWithoutUserInput
    workspace?: workspaceuserCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    user?: reportUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceuserUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: reportUpdateManyWithoutUserNestedInput
    workspace?: workspaceuserUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: reportUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceuserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type workspaceuserCreateInput = {
    user: userCreateNestedOneWithoutWorkspaceInput
    workspace: workspaceCreateNestedOneWithoutUserInput
  }

  export type workspaceuserUncheckedCreateInput = {
    workspaceid: number
    userid: number
  }

  export type workspaceuserUpdateInput = {
    user?: userUpdateOneRequiredWithoutWorkspaceNestedInput
    workspace?: workspaceUpdateOneRequiredWithoutUserNestedInput
  }

  export type workspaceuserUncheckedUpdateInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type workspaceuserCreateManyInput = {
    workspaceid: number
    userid: number
  }

  export type workspaceuserUpdateManyMutationInput = {

  }

  export type workspaceuserUncheckedUpdateManyInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackCreateInput = {
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingCreateNestedManyWithoutFeedbackInput
    theme?: feedbackthemeCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateInput = {
    id?: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingUncheckedCreateNestedManyWithoutFeedbackInput
    theme?: feedbackthemeUncheckedCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUpdateManyWithoutFeedbackNestedInput
    theme?: feedbackthemeUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUpdateManyWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUncheckedUpdateManyWithoutFeedbackNestedInput
    theme?: feedbackthemeUncheckedUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type feedbackCreateManyInput = {
    id?: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
  }

  export type feedbackUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type feedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type workspacefeedbackCreateInput = {
    feedback: feedbackCreateNestedOneWithoutWorkspaceInput
    workspace: workspaceCreateNestedOneWithoutFeedbackInput
  }

  export type workspacefeedbackUncheckedCreateInput = {
    workspaceid: number
    feedbackid: number
  }

  export type workspacefeedbackUpdateInput = {
    feedback?: feedbackUpdateOneRequiredWithoutWorkspaceNestedInput
    workspace?: workspaceUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type workspacefeedbackUncheckedUpdateInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacefeedbackCreateManyInput = {
    workspaceid: number
    feedbackid: number
  }

  export type workspacefeedbackUpdateManyMutationInput = {

  }

  export type workspacefeedbackUncheckedUpdateManyInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type themeCreateInput = {
    name: string
    description: string
    color: string
    feedback?: feedbackthemeCreateNestedManyWithoutThemeInput
    workspace?: workspacethemeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    color: string
    feedback?: feedbackthemeUncheckedCreateNestedManyWithoutThemeInput
    workspace?: workspacethemeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    feedback?: feedbackthemeUpdateManyWithoutThemeNestedInput
    workspace?: workspacethemeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    feedback?: feedbackthemeUncheckedUpdateManyWithoutThemeNestedInput
    workspace?: workspacethemeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type themeCreateManyInput = {
    id?: number
    name: string
    description: string
    color: string
  }

  export type themeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type themeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type workspacethemeCreateInput = {
    theme: themeCreateNestedOneWithoutWorkspaceInput
    workspace: workspaceCreateNestedOneWithoutThemeInput
  }

  export type workspacethemeUncheckedCreateInput = {
    workspaceid: number
    themeid: number
  }

  export type workspacethemeUpdateInput = {
    theme?: themeUpdateOneRequiredWithoutWorkspaceNestedInput
    workspace?: workspaceUpdateOneRequiredWithoutThemeNestedInput
  }

  export type workspacethemeUncheckedUpdateInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacethemeCreateManyInput = {
    workspaceid: number
    themeid: number
  }

  export type workspacethemeUpdateManyMutationInput = {

  }

  export type workspacethemeUncheckedUpdateManyInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackthemeCreateInput = {
    feedback: feedbackCreateNestedOneWithoutThemeInput
    theme: themeCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackthemeUncheckedCreateInput = {
    feedbackid: number
    themeid: number
  }

  export type feedbackthemeUpdateInput = {
    feedback?: feedbackUpdateOneRequiredWithoutThemeNestedInput
    theme?: themeUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackthemeUncheckedUpdateInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackthemeCreateManyInput = {
    feedbackid: number
    themeid: number
  }

  export type feedbackthemeUpdateManyMutationInput = {

  }

  export type feedbackthemeUncheckedUpdateManyInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type embeddingCreateInput = {
    vector: string
    feedback: feedbackCreateNestedOneWithoutFeedbackInput
  }

  export type embeddingUncheckedCreateInput = {
    id?: number
    vector: string
    feedbackid: number
  }

  export type embeddingUpdateInput = {
    vector?: StringFieldUpdateOperationsInput | string
    feedback?: feedbackUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type embeddingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vector?: StringFieldUpdateOperationsInput | string
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type embeddingCreateManyInput = {
    id?: number
    vector: string
    feedbackid: number
  }

  export type embeddingUpdateManyMutationInput = {
    vector?: StringFieldUpdateOperationsInput | string
  }

  export type embeddingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vector?: StringFieldUpdateOperationsInput | string
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type reportCreateInput = {
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    user: userCreateNestedOneWithoutUserInput
    workspace?: workspacereportCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    id?: number
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    userid: number
    workspace?: workspacereportUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutUserNestedInput
    workspace?: workspacereportUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
    workspace?: workspacereportUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportCreateManyInput = {
    id?: number
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    userid: number
  }

  export type reportUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
  }

  export type reportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportCreateInput = {
    report: reportCreateNestedOneWithoutWorkspaceInput
    workspace: workspaceCreateNestedOneWithoutReportInput
  }

  export type workspacereportUncheckedCreateInput = {
    workspaceid: number
    reportid: number
  }

  export type workspacereportUpdateInput = {
    report?: reportUpdateOneRequiredWithoutWorkspaceNestedInput
    workspace?: workspaceUpdateOneRequiredWithoutReportNestedInput
  }

  export type workspacereportUncheckedUpdateInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    reportid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportCreateManyInput = {
    workspaceid: number
    reportid: number
  }

  export type workspacereportUpdateManyMutationInput = {

  }

  export type workspacereportUncheckedUpdateManyInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
    reportid?: IntFieldUpdateOperationsInput | number
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

  export type WorkspacefeedbackListRelationFilter = {
    every?: workspacefeedbackWhereInput
    some?: workspacefeedbackWhereInput
    none?: workspacefeedbackWhereInput
  }

  export type WorkspacereportListRelationFilter = {
    every?: workspacereportWhereInput
    some?: workspacereportWhereInput
    none?: workspacereportWhereInput
  }

  export type WorkspacethemeListRelationFilter = {
    every?: workspacethemeWhereInput
    some?: workspacethemeWhereInput
    none?: workspacethemeWhereInput
  }

  export type WorkspaceuserListRelationFilter = {
    every?: workspaceuserWhereInput
    some?: workspaceuserWhereInput
    none?: workspaceuserWhereInput
  }

  export type workspacefeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacereportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacethemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspaceuserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type workspaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type workspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type workspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type workspaceSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ReportListRelationFilter = {
    every?: reportWhereInput
    some?: reportWhereInput
    none?: reportWhereInput
  }

  export type reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type WorkspaceScalarRelationFilter = {
    is?: workspaceWhereInput
    isNot?: workspaceWhereInput
  }

  export type workspaceuserWorkspaceidUseridCompoundUniqueInput = {
    workspaceid: number
    userid: number
  }

  export type workspaceuserCountOrderByAggregateInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
  }

  export type workspaceuserAvgOrderByAggregateInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
  }

  export type workspaceuserMaxOrderByAggregateInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
  }

  export type workspaceuserMinOrderByAggregateInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
  }

  export type workspaceuserSumOrderByAggregateInput = {
    workspaceid?: SortOrder
    userid?: SortOrder
  }

  export type EnumSentimentFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentFilter<$PrismaModel> | $Enums.Sentiment
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EmbeddingListRelationFilter = {
    every?: embeddingWhereInput
    some?: embeddingWhereInput
    none?: embeddingWhereInput
  }

  export type FeedbackthemeListRelationFilter = {
    every?: feedbackthemeWhereInput
    some?: feedbackthemeWhereInput
    none?: feedbackthemeWhereInput
  }

  export type embeddingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feedbackthemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feedbackCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    channel?: SortOrder
    sentiment?: SortOrder
    status?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    channel?: SortOrder
    sentiment?: SortOrder
    status?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    channel?: SortOrder
    sentiment?: SortOrder
    status?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSentimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentFilter<$PrismaModel>
    _max?: NestedEnumSentimentFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FeedbackScalarRelationFilter = {
    is?: feedbackWhereInput
    isNot?: feedbackWhereInput
  }

  export type workspacefeedbackWorkspaceidFeedbackidCompoundUniqueInput = {
    workspaceid: number
    feedbackid: number
  }

  export type workspacefeedbackCountOrderByAggregateInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
  }

  export type workspacefeedbackAvgOrderByAggregateInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
  }

  export type workspacefeedbackMaxOrderByAggregateInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
  }

  export type workspacefeedbackMinOrderByAggregateInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
  }

  export type workspacefeedbackSumOrderByAggregateInput = {
    workspaceid?: SortOrder
    feedbackid?: SortOrder
  }

  export type themeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
  }

  export type themeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type themeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
  }

  export type themeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
  }

  export type themeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeScalarRelationFilter = {
    is?: themeWhereInput
    isNot?: themeWhereInput
  }

  export type workspacethemeWorkspaceidThemeidCompoundUniqueInput = {
    workspaceid: number
    themeid: number
  }

  export type workspacethemeCountOrderByAggregateInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
  }

  export type workspacethemeAvgOrderByAggregateInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
  }

  export type workspacethemeMaxOrderByAggregateInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
  }

  export type workspacethemeMinOrderByAggregateInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
  }

  export type workspacethemeSumOrderByAggregateInput = {
    workspaceid?: SortOrder
    themeid?: SortOrder
  }

  export type feedbackthemeFeedbackidThemeidCompoundUniqueInput = {
    feedbackid: number
    themeid: number
  }

  export type feedbackthemeCountOrderByAggregateInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
  }

  export type feedbackthemeAvgOrderByAggregateInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
  }

  export type feedbackthemeMaxOrderByAggregateInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
  }

  export type feedbackthemeMinOrderByAggregateInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
  }

  export type feedbackthemeSumOrderByAggregateInput = {
    feedbackid?: SortOrder
    themeid?: SortOrder
  }

  export type embeddingCountOrderByAggregateInput = {
    id?: SortOrder
    vector?: SortOrder
    feedbackid?: SortOrder
  }

  export type embeddingAvgOrderByAggregateInput = {
    id?: SortOrder
    feedbackid?: SortOrder
  }

  export type embeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    vector?: SortOrder
    feedbackid?: SortOrder
  }

  export type embeddingMinOrderByAggregateInput = {
    id?: SortOrder
    vector?: SortOrder
    feedbackid?: SortOrder
  }

  export type embeddingSumOrderByAggregateInput = {
    id?: SortOrder
    feedbackid?: SortOrder
  }

  export type reportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    periodstart?: SortOrder
    periodend?: SortOrder
    contentJson?: SortOrder
    userid?: SortOrder
  }

  export type reportAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    periodstart?: SortOrder
    periodend?: SortOrder
    contentJson?: SortOrder
    userid?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    periodstart?: SortOrder
    periodend?: SortOrder
    contentJson?: SortOrder
    userid?: SortOrder
  }

  export type reportSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type ReportScalarRelationFilter = {
    is?: reportWhereInput
    isNot?: reportWhereInput
  }

  export type workspacereportWorkspaceidReportidCompoundUniqueInput = {
    workspaceid: number
    reportid: number
  }

  export type workspacereportCountOrderByAggregateInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
  }

  export type workspacereportAvgOrderByAggregateInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
  }

  export type workspacereportMaxOrderByAggregateInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
  }

  export type workspacereportMinOrderByAggregateInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
  }

  export type workspacereportSumOrderByAggregateInput = {
    workspaceid?: SortOrder
    reportid?: SortOrder
  }

  export type workspacefeedbackCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput> | workspacefeedbackCreateWithoutWorkspaceInput[] | workspacefeedbackUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutWorkspaceInput | workspacefeedbackCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacefeedbackCreateManyWorkspaceInputEnvelope
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
  }

  export type workspacereportCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput> | workspacereportCreateWithoutWorkspaceInput[] | workspacereportUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutWorkspaceInput | workspacereportCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacereportCreateManyWorkspaceInputEnvelope
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
  }

  export type workspacethemeCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput> | workspacethemeCreateWithoutWorkspaceInput[] | workspacethemeUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutWorkspaceInput | workspacethemeCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacethemeCreateManyWorkspaceInputEnvelope
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
  }

  export type workspaceuserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput> | workspaceuserCreateWithoutWorkspaceInput[] | workspaceuserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutWorkspaceInput | workspaceuserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspaceuserCreateManyWorkspaceInputEnvelope
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
  }

  export type workspacefeedbackUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput> | workspacefeedbackCreateWithoutWorkspaceInput[] | workspacefeedbackUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutWorkspaceInput | workspacefeedbackCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacefeedbackCreateManyWorkspaceInputEnvelope
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
  }

  export type workspacereportUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput> | workspacereportCreateWithoutWorkspaceInput[] | workspacereportUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutWorkspaceInput | workspacereportCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacereportCreateManyWorkspaceInputEnvelope
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
  }

  export type workspacethemeUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput> | workspacethemeCreateWithoutWorkspaceInput[] | workspacethemeUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutWorkspaceInput | workspacethemeCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspacethemeCreateManyWorkspaceInputEnvelope
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
  }

  export type workspaceuserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput> | workspaceuserCreateWithoutWorkspaceInput[] | workspaceuserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutWorkspaceInput | workspaceuserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspaceuserCreateManyWorkspaceInputEnvelope
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type workspacefeedbackUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput> | workspacefeedbackCreateWithoutWorkspaceInput[] | workspacefeedbackUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutWorkspaceInput | workspacefeedbackCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacefeedbackUpsertWithWhereUniqueWithoutWorkspaceInput | workspacefeedbackUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacefeedbackCreateManyWorkspaceInputEnvelope
    set?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    disconnect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    delete?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    update?: workspacefeedbackUpdateWithWhereUniqueWithoutWorkspaceInput | workspacefeedbackUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacefeedbackUpdateManyWithWhereWithoutWorkspaceInput | workspacefeedbackUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
  }

  export type workspacereportUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput> | workspacereportCreateWithoutWorkspaceInput[] | workspacereportUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutWorkspaceInput | workspacereportCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacereportUpsertWithWhereUniqueWithoutWorkspaceInput | workspacereportUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacereportCreateManyWorkspaceInputEnvelope
    set?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    disconnect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    delete?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    update?: workspacereportUpdateWithWhereUniqueWithoutWorkspaceInput | workspacereportUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacereportUpdateManyWithWhereWithoutWorkspaceInput | workspacereportUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
  }

  export type workspacethemeUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput> | workspacethemeCreateWithoutWorkspaceInput[] | workspacethemeUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutWorkspaceInput | workspacethemeCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacethemeUpsertWithWhereUniqueWithoutWorkspaceInput | workspacethemeUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacethemeCreateManyWorkspaceInputEnvelope
    set?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    disconnect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    delete?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    update?: workspacethemeUpdateWithWhereUniqueWithoutWorkspaceInput | workspacethemeUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacethemeUpdateManyWithWhereWithoutWorkspaceInput | workspacethemeUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
  }

  export type workspaceuserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput> | workspaceuserCreateWithoutWorkspaceInput[] | workspaceuserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutWorkspaceInput | workspaceuserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspaceuserUpsertWithWhereUniqueWithoutWorkspaceInput | workspaceuserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspaceuserCreateManyWorkspaceInputEnvelope
    set?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    disconnect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    delete?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    update?: workspaceuserUpdateWithWhereUniqueWithoutWorkspaceInput | workspaceuserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspaceuserUpdateManyWithWhereWithoutWorkspaceInput | workspaceuserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type workspacefeedbackUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput> | workspacefeedbackCreateWithoutWorkspaceInput[] | workspacefeedbackUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutWorkspaceInput | workspacefeedbackCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacefeedbackUpsertWithWhereUniqueWithoutWorkspaceInput | workspacefeedbackUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacefeedbackCreateManyWorkspaceInputEnvelope
    set?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    disconnect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    delete?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    update?: workspacefeedbackUpdateWithWhereUniqueWithoutWorkspaceInput | workspacefeedbackUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacefeedbackUpdateManyWithWhereWithoutWorkspaceInput | workspacefeedbackUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
  }

  export type workspacereportUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput> | workspacereportCreateWithoutWorkspaceInput[] | workspacereportUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutWorkspaceInput | workspacereportCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacereportUpsertWithWhereUniqueWithoutWorkspaceInput | workspacereportUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacereportCreateManyWorkspaceInputEnvelope
    set?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    disconnect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    delete?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    update?: workspacereportUpdateWithWhereUniqueWithoutWorkspaceInput | workspacereportUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacereportUpdateManyWithWhereWithoutWorkspaceInput | workspacereportUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
  }

  export type workspacethemeUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput> | workspacethemeCreateWithoutWorkspaceInput[] | workspacethemeUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutWorkspaceInput | workspacethemeCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspacethemeUpsertWithWhereUniqueWithoutWorkspaceInput | workspacethemeUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspacethemeCreateManyWorkspaceInputEnvelope
    set?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    disconnect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    delete?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    update?: workspacethemeUpdateWithWhereUniqueWithoutWorkspaceInput | workspacethemeUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspacethemeUpdateManyWithWhereWithoutWorkspaceInput | workspacethemeUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
  }

  export type workspaceuserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput> | workspaceuserCreateWithoutWorkspaceInput[] | workspaceuserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutWorkspaceInput | workspaceuserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspaceuserUpsertWithWhereUniqueWithoutWorkspaceInput | workspaceuserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspaceuserCreateManyWorkspaceInputEnvelope
    set?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    disconnect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    delete?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    update?: workspaceuserUpdateWithWhereUniqueWithoutWorkspaceInput | workspaceuserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspaceuserUpdateManyWithWhereWithoutWorkspaceInput | workspaceuserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
  }

  export type reportCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type workspaceuserCreateNestedManyWithoutUserInput = {
    create?: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput> | workspaceuserCreateWithoutUserInput[] | workspaceuserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutUserInput | workspaceuserCreateOrConnectWithoutUserInput[]
    createMany?: workspaceuserCreateManyUserInputEnvelope
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type workspaceuserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput> | workspaceuserCreateWithoutUserInput[] | workspaceuserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutUserInput | workspaceuserCreateOrConnectWithoutUserInput[]
    createMany?: workspaceuserCreateManyUserInputEnvelope
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type reportUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type workspaceuserUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput> | workspaceuserCreateWithoutUserInput[] | workspaceuserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutUserInput | workspaceuserCreateOrConnectWithoutUserInput[]
    upsert?: workspaceuserUpsertWithWhereUniqueWithoutUserInput | workspaceuserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspaceuserCreateManyUserInputEnvelope
    set?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    disconnect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    delete?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    update?: workspaceuserUpdateWithWhereUniqueWithoutUserInput | workspaceuserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspaceuserUpdateManyWithWhereWithoutUserInput | workspaceuserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput> | reportCreateWithoutUserInput[] | reportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportCreateOrConnectWithoutUserInput | reportCreateOrConnectWithoutUserInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutUserInput | reportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportCreateManyUserInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutUserInput | reportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportUpdateManyWithWhereWithoutUserInput | reportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type workspaceuserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput> | workspaceuserCreateWithoutUserInput[] | workspaceuserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceuserCreateOrConnectWithoutUserInput | workspaceuserCreateOrConnectWithoutUserInput[]
    upsert?: workspaceuserUpsertWithWhereUniqueWithoutUserInput | workspaceuserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspaceuserCreateManyUserInputEnvelope
    set?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    disconnect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    delete?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    connect?: workspaceuserWhereUniqueInput | workspaceuserWhereUniqueInput[]
    update?: workspaceuserUpdateWithWhereUniqueWithoutUserInput | workspaceuserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspaceuserUpdateManyWithWhereWithoutUserInput | workspaceuserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<userCreateWithoutWorkspaceInput, userUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: userCreateOrConnectWithoutWorkspaceInput
    connect?: userWhereUniqueInput
  }

  export type workspaceCreateNestedOneWithoutUserInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput
    connect?: workspaceWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutWorkspaceNestedInput = {
    create?: XOR<userCreateWithoutWorkspaceInput, userUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: userCreateOrConnectWithoutWorkspaceInput
    upsert?: userUpsertWithoutWorkspaceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWorkspaceInput, userUpdateWithoutWorkspaceInput>, userUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspaceUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput
    upsert?: workspaceUpsertWithoutUserInput
    connect?: workspaceWhereUniqueInput
    update?: XOR<XOR<workspaceUpdateToOneWithWhereWithoutUserInput, workspaceUpdateWithoutUserInput>, workspaceUncheckedUpdateWithoutUserInput>
  }

  export type embeddingCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput> | embeddingCreateWithoutFeedbackInput[] | embeddingUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: embeddingCreateOrConnectWithoutFeedbackInput | embeddingCreateOrConnectWithoutFeedbackInput[]
    createMany?: embeddingCreateManyFeedbackInputEnvelope
    connect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
  }

  export type feedbackthemeCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput> | feedbackthemeCreateWithoutFeedbackInput[] | feedbackthemeUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutFeedbackInput | feedbackthemeCreateOrConnectWithoutFeedbackInput[]
    createMany?: feedbackthemeCreateManyFeedbackInputEnvelope
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
  }

  export type workspacefeedbackCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput> | workspacefeedbackCreateWithoutFeedbackInput[] | workspacefeedbackUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutFeedbackInput | workspacefeedbackCreateOrConnectWithoutFeedbackInput[]
    createMany?: workspacefeedbackCreateManyFeedbackInputEnvelope
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
  }

  export type embeddingUncheckedCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput> | embeddingCreateWithoutFeedbackInput[] | embeddingUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: embeddingCreateOrConnectWithoutFeedbackInput | embeddingCreateOrConnectWithoutFeedbackInput[]
    createMany?: embeddingCreateManyFeedbackInputEnvelope
    connect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
  }

  export type feedbackthemeUncheckedCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput> | feedbackthemeCreateWithoutFeedbackInput[] | feedbackthemeUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutFeedbackInput | feedbackthemeCreateOrConnectWithoutFeedbackInput[]
    createMany?: feedbackthemeCreateManyFeedbackInputEnvelope
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
  }

  export type workspacefeedbackUncheckedCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput> | workspacefeedbackCreateWithoutFeedbackInput[] | workspacefeedbackUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutFeedbackInput | workspacefeedbackCreateOrConnectWithoutFeedbackInput[]
    createMany?: workspacefeedbackCreateManyFeedbackInputEnvelope
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
  }

  export type EnumSentimentFieldUpdateOperationsInput = {
    set?: $Enums.Sentiment
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type embeddingUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput> | embeddingCreateWithoutFeedbackInput[] | embeddingUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: embeddingCreateOrConnectWithoutFeedbackInput | embeddingCreateOrConnectWithoutFeedbackInput[]
    upsert?: embeddingUpsertWithWhereUniqueWithoutFeedbackInput | embeddingUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: embeddingCreateManyFeedbackInputEnvelope
    set?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    disconnect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    delete?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    connect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    update?: embeddingUpdateWithWhereUniqueWithoutFeedbackInput | embeddingUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: embeddingUpdateManyWithWhereWithoutFeedbackInput | embeddingUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: embeddingScalarWhereInput | embeddingScalarWhereInput[]
  }

  export type feedbackthemeUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput> | feedbackthemeCreateWithoutFeedbackInput[] | feedbackthemeUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutFeedbackInput | feedbackthemeCreateOrConnectWithoutFeedbackInput[]
    upsert?: feedbackthemeUpsertWithWhereUniqueWithoutFeedbackInput | feedbackthemeUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: feedbackthemeCreateManyFeedbackInputEnvelope
    set?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    disconnect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    delete?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    update?: feedbackthemeUpdateWithWhereUniqueWithoutFeedbackInput | feedbackthemeUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: feedbackthemeUpdateManyWithWhereWithoutFeedbackInput | feedbackthemeUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
  }

  export type workspacefeedbackUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput> | workspacefeedbackCreateWithoutFeedbackInput[] | workspacefeedbackUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutFeedbackInput | workspacefeedbackCreateOrConnectWithoutFeedbackInput[]
    upsert?: workspacefeedbackUpsertWithWhereUniqueWithoutFeedbackInput | workspacefeedbackUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: workspacefeedbackCreateManyFeedbackInputEnvelope
    set?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    disconnect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    delete?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    update?: workspacefeedbackUpdateWithWhereUniqueWithoutFeedbackInput | workspacefeedbackUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: workspacefeedbackUpdateManyWithWhereWithoutFeedbackInput | workspacefeedbackUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
  }

  export type embeddingUncheckedUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput> | embeddingCreateWithoutFeedbackInput[] | embeddingUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: embeddingCreateOrConnectWithoutFeedbackInput | embeddingCreateOrConnectWithoutFeedbackInput[]
    upsert?: embeddingUpsertWithWhereUniqueWithoutFeedbackInput | embeddingUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: embeddingCreateManyFeedbackInputEnvelope
    set?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    disconnect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    delete?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    connect?: embeddingWhereUniqueInput | embeddingWhereUniqueInput[]
    update?: embeddingUpdateWithWhereUniqueWithoutFeedbackInput | embeddingUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: embeddingUpdateManyWithWhereWithoutFeedbackInput | embeddingUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: embeddingScalarWhereInput | embeddingScalarWhereInput[]
  }

  export type feedbackthemeUncheckedUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput> | feedbackthemeCreateWithoutFeedbackInput[] | feedbackthemeUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutFeedbackInput | feedbackthemeCreateOrConnectWithoutFeedbackInput[]
    upsert?: feedbackthemeUpsertWithWhereUniqueWithoutFeedbackInput | feedbackthemeUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: feedbackthemeCreateManyFeedbackInputEnvelope
    set?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    disconnect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    delete?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    update?: feedbackthemeUpdateWithWhereUniqueWithoutFeedbackInput | feedbackthemeUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: feedbackthemeUpdateManyWithWhereWithoutFeedbackInput | feedbackthemeUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
  }

  export type workspacefeedbackUncheckedUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput> | workspacefeedbackCreateWithoutFeedbackInput[] | workspacefeedbackUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: workspacefeedbackCreateOrConnectWithoutFeedbackInput | workspacefeedbackCreateOrConnectWithoutFeedbackInput[]
    upsert?: workspacefeedbackUpsertWithWhereUniqueWithoutFeedbackInput | workspacefeedbackUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: workspacefeedbackCreateManyFeedbackInputEnvelope
    set?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    disconnect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    delete?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    connect?: workspacefeedbackWhereUniqueInput | workspacefeedbackWhereUniqueInput[]
    update?: workspacefeedbackUpdateWithWhereUniqueWithoutFeedbackInput | workspacefeedbackUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: workspacefeedbackUpdateManyWithWhereWithoutFeedbackInput | workspacefeedbackUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
  }

  export type feedbackCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<feedbackCreateWithoutWorkspaceInput, feedbackUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutWorkspaceInput
    connect?: feedbackWhereUniqueInput
  }

  export type workspaceCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<workspaceCreateWithoutFeedbackInput, workspaceUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutFeedbackInput
    connect?: workspaceWhereUniqueInput
  }

  export type feedbackUpdateOneRequiredWithoutWorkspaceNestedInput = {
    create?: XOR<feedbackCreateWithoutWorkspaceInput, feedbackUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutWorkspaceInput
    upsert?: feedbackUpsertWithoutWorkspaceInput
    connect?: feedbackWhereUniqueInput
    update?: XOR<XOR<feedbackUpdateToOneWithWhereWithoutWorkspaceInput, feedbackUpdateWithoutWorkspaceInput>, feedbackUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspaceUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<workspaceCreateWithoutFeedbackInput, workspaceUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutFeedbackInput
    upsert?: workspaceUpsertWithoutFeedbackInput
    connect?: workspaceWhereUniqueInput
    update?: XOR<XOR<workspaceUpdateToOneWithWhereWithoutFeedbackInput, workspaceUpdateWithoutFeedbackInput>, workspaceUncheckedUpdateWithoutFeedbackInput>
  }

  export type feedbackthemeCreateNestedManyWithoutThemeInput = {
    create?: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput> | feedbackthemeCreateWithoutThemeInput[] | feedbackthemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutThemeInput | feedbackthemeCreateOrConnectWithoutThemeInput[]
    createMany?: feedbackthemeCreateManyThemeInputEnvelope
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
  }

  export type workspacethemeCreateNestedManyWithoutThemeInput = {
    create?: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput> | workspacethemeCreateWithoutThemeInput[] | workspacethemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutThemeInput | workspacethemeCreateOrConnectWithoutThemeInput[]
    createMany?: workspacethemeCreateManyThemeInputEnvelope
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
  }

  export type feedbackthemeUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput> | feedbackthemeCreateWithoutThemeInput[] | feedbackthemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutThemeInput | feedbackthemeCreateOrConnectWithoutThemeInput[]
    createMany?: feedbackthemeCreateManyThemeInputEnvelope
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
  }

  export type workspacethemeUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput> | workspacethemeCreateWithoutThemeInput[] | workspacethemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutThemeInput | workspacethemeCreateOrConnectWithoutThemeInput[]
    createMany?: workspacethemeCreateManyThemeInputEnvelope
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
  }

  export type feedbackthemeUpdateManyWithoutThemeNestedInput = {
    create?: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput> | feedbackthemeCreateWithoutThemeInput[] | feedbackthemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutThemeInput | feedbackthemeCreateOrConnectWithoutThemeInput[]
    upsert?: feedbackthemeUpsertWithWhereUniqueWithoutThemeInput | feedbackthemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: feedbackthemeCreateManyThemeInputEnvelope
    set?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    disconnect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    delete?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    update?: feedbackthemeUpdateWithWhereUniqueWithoutThemeInput | feedbackthemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: feedbackthemeUpdateManyWithWhereWithoutThemeInput | feedbackthemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
  }

  export type workspacethemeUpdateManyWithoutThemeNestedInput = {
    create?: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput> | workspacethemeCreateWithoutThemeInput[] | workspacethemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutThemeInput | workspacethemeCreateOrConnectWithoutThemeInput[]
    upsert?: workspacethemeUpsertWithWhereUniqueWithoutThemeInput | workspacethemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: workspacethemeCreateManyThemeInputEnvelope
    set?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    disconnect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    delete?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    update?: workspacethemeUpdateWithWhereUniqueWithoutThemeInput | workspacethemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: workspacethemeUpdateManyWithWhereWithoutThemeInput | workspacethemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
  }

  export type feedbackthemeUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput> | feedbackthemeCreateWithoutThemeInput[] | feedbackthemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: feedbackthemeCreateOrConnectWithoutThemeInput | feedbackthemeCreateOrConnectWithoutThemeInput[]
    upsert?: feedbackthemeUpsertWithWhereUniqueWithoutThemeInput | feedbackthemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: feedbackthemeCreateManyThemeInputEnvelope
    set?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    disconnect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    delete?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    connect?: feedbackthemeWhereUniqueInput | feedbackthemeWhereUniqueInput[]
    update?: feedbackthemeUpdateWithWhereUniqueWithoutThemeInput | feedbackthemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: feedbackthemeUpdateManyWithWhereWithoutThemeInput | feedbackthemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
  }

  export type workspacethemeUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput> | workspacethemeCreateWithoutThemeInput[] | workspacethemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: workspacethemeCreateOrConnectWithoutThemeInput | workspacethemeCreateOrConnectWithoutThemeInput[]
    upsert?: workspacethemeUpsertWithWhereUniqueWithoutThemeInput | workspacethemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: workspacethemeCreateManyThemeInputEnvelope
    set?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    disconnect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    delete?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    connect?: workspacethemeWhereUniqueInput | workspacethemeWhereUniqueInput[]
    update?: workspacethemeUpdateWithWhereUniqueWithoutThemeInput | workspacethemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: workspacethemeUpdateManyWithWhereWithoutThemeInput | workspacethemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
  }

  export type themeCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<themeCreateWithoutWorkspaceInput, themeUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: themeCreateOrConnectWithoutWorkspaceInput
    connect?: themeWhereUniqueInput
  }

  export type workspaceCreateNestedOneWithoutThemeInput = {
    create?: XOR<workspaceCreateWithoutThemeInput, workspaceUncheckedCreateWithoutThemeInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutThemeInput
    connect?: workspaceWhereUniqueInput
  }

  export type themeUpdateOneRequiredWithoutWorkspaceNestedInput = {
    create?: XOR<themeCreateWithoutWorkspaceInput, themeUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: themeCreateOrConnectWithoutWorkspaceInput
    upsert?: themeUpsertWithoutWorkspaceInput
    connect?: themeWhereUniqueInput
    update?: XOR<XOR<themeUpdateToOneWithWhereWithoutWorkspaceInput, themeUpdateWithoutWorkspaceInput>, themeUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspaceUpdateOneRequiredWithoutThemeNestedInput = {
    create?: XOR<workspaceCreateWithoutThemeInput, workspaceUncheckedCreateWithoutThemeInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutThemeInput
    upsert?: workspaceUpsertWithoutThemeInput
    connect?: workspaceWhereUniqueInput
    update?: XOR<XOR<workspaceUpdateToOneWithWhereWithoutThemeInput, workspaceUpdateWithoutThemeInput>, workspaceUncheckedUpdateWithoutThemeInput>
  }

  export type feedbackCreateNestedOneWithoutThemeInput = {
    create?: XOR<feedbackCreateWithoutThemeInput, feedbackUncheckedCreateWithoutThemeInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutThemeInput
    connect?: feedbackWhereUniqueInput
  }

  export type themeCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<themeCreateWithoutFeedbackInput, themeUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: themeCreateOrConnectWithoutFeedbackInput
    connect?: themeWhereUniqueInput
  }

  export type feedbackUpdateOneRequiredWithoutThemeNestedInput = {
    create?: XOR<feedbackCreateWithoutThemeInput, feedbackUncheckedCreateWithoutThemeInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutThemeInput
    upsert?: feedbackUpsertWithoutThemeInput
    connect?: feedbackWhereUniqueInput
    update?: XOR<XOR<feedbackUpdateToOneWithWhereWithoutThemeInput, feedbackUpdateWithoutThemeInput>, feedbackUncheckedUpdateWithoutThemeInput>
  }

  export type themeUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<themeCreateWithoutFeedbackInput, themeUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: themeCreateOrConnectWithoutFeedbackInput
    upsert?: themeUpsertWithoutFeedbackInput
    connect?: themeWhereUniqueInput
    update?: XOR<XOR<themeUpdateToOneWithWhereWithoutFeedbackInput, themeUpdateWithoutFeedbackInput>, themeUncheckedUpdateWithoutFeedbackInput>
  }

  export type feedbackCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<feedbackCreateWithoutFeedbackInput, feedbackUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutFeedbackInput
    connect?: feedbackWhereUniqueInput
  }

  export type feedbackUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<feedbackCreateWithoutFeedbackInput, feedbackUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutFeedbackInput
    upsert?: feedbackUpsertWithoutFeedbackInput
    connect?: feedbackWhereUniqueInput
    update?: XOR<XOR<feedbackUpdateToOneWithWhereWithoutFeedbackInput, feedbackUpdateWithoutFeedbackInput>, feedbackUncheckedUpdateWithoutFeedbackInput>
  }

  export type userCreateNestedOneWithoutUserInput = {
    create?: XOR<userCreateWithoutUserInput, userUncheckedCreateWithoutUserInput>
    connectOrCreate?: userCreateOrConnectWithoutUserInput
    connect?: userWhereUniqueInput
  }

  export type workspacereportCreateNestedManyWithoutReportInput = {
    create?: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput> | workspacereportCreateWithoutReportInput[] | workspacereportUncheckedCreateWithoutReportInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutReportInput | workspacereportCreateOrConnectWithoutReportInput[]
    createMany?: workspacereportCreateManyReportInputEnvelope
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
  }

  export type workspacereportUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput> | workspacereportCreateWithoutReportInput[] | workspacereportUncheckedCreateWithoutReportInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutReportInput | workspacereportCreateOrConnectWithoutReportInput[]
    createMany?: workspacereportCreateManyReportInputEnvelope
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<userCreateWithoutUserInput, userUncheckedCreateWithoutUserInput>
    connectOrCreate?: userCreateOrConnectWithoutUserInput
    upsert?: userUpsertWithoutUserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserInput, userUpdateWithoutUserInput>, userUncheckedUpdateWithoutUserInput>
  }

  export type workspacereportUpdateManyWithoutReportNestedInput = {
    create?: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput> | workspacereportCreateWithoutReportInput[] | workspacereportUncheckedCreateWithoutReportInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutReportInput | workspacereportCreateOrConnectWithoutReportInput[]
    upsert?: workspacereportUpsertWithWhereUniqueWithoutReportInput | workspacereportUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: workspacereportCreateManyReportInputEnvelope
    set?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    disconnect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    delete?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    update?: workspacereportUpdateWithWhereUniqueWithoutReportInput | workspacereportUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: workspacereportUpdateManyWithWhereWithoutReportInput | workspacereportUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
  }

  export type workspacereportUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput> | workspacereportCreateWithoutReportInput[] | workspacereportUncheckedCreateWithoutReportInput[]
    connectOrCreate?: workspacereportCreateOrConnectWithoutReportInput | workspacereportCreateOrConnectWithoutReportInput[]
    upsert?: workspacereportUpsertWithWhereUniqueWithoutReportInput | workspacereportUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: workspacereportCreateManyReportInputEnvelope
    set?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    disconnect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    delete?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    connect?: workspacereportWhereUniqueInput | workspacereportWhereUniqueInput[]
    update?: workspacereportUpdateWithWhereUniqueWithoutReportInput | workspacereportUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: workspacereportUpdateManyWithWhereWithoutReportInput | workspacereportUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
  }

  export type reportCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<reportCreateWithoutWorkspaceInput, reportUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: reportCreateOrConnectWithoutWorkspaceInput
    connect?: reportWhereUniqueInput
  }

  export type workspaceCreateNestedOneWithoutReportInput = {
    create?: XOR<workspaceCreateWithoutReportInput, workspaceUncheckedCreateWithoutReportInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutReportInput
    connect?: workspaceWhereUniqueInput
  }

  export type reportUpdateOneRequiredWithoutWorkspaceNestedInput = {
    create?: XOR<reportCreateWithoutWorkspaceInput, reportUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: reportCreateOrConnectWithoutWorkspaceInput
    upsert?: reportUpsertWithoutWorkspaceInput
    connect?: reportWhereUniqueInput
    update?: XOR<XOR<reportUpdateToOneWithWhereWithoutWorkspaceInput, reportUpdateWithoutWorkspaceInput>, reportUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspaceUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<workspaceCreateWithoutReportInput, workspaceUncheckedCreateWithoutReportInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutReportInput
    upsert?: workspaceUpsertWithoutReportInput
    connect?: workspaceWhereUniqueInput
    update?: XOR<XOR<workspaceUpdateToOneWithWhereWithoutReportInput, workspaceUpdateWithoutReportInput>, workspaceUncheckedUpdateWithoutReportInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSentimentFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentFilter<$PrismaModel> | $Enums.Sentiment
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumSentimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentFilter<$PrismaModel>
    _max?: NestedEnumSentimentFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type workspacefeedbackCreateWithoutWorkspaceInput = {
    feedback: feedbackCreateNestedOneWithoutWorkspaceInput
  }

  export type workspacefeedbackUncheckedCreateWithoutWorkspaceInput = {
    feedbackid: number
  }

  export type workspacefeedbackCreateOrConnectWithoutWorkspaceInput = {
    where: workspacefeedbackWhereUniqueInput
    create: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacefeedbackCreateManyWorkspaceInputEnvelope = {
    data: workspacefeedbackCreateManyWorkspaceInput | workspacefeedbackCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type workspacereportCreateWithoutWorkspaceInput = {
    report: reportCreateNestedOneWithoutWorkspaceInput
  }

  export type workspacereportUncheckedCreateWithoutWorkspaceInput = {
    reportid: number
  }

  export type workspacereportCreateOrConnectWithoutWorkspaceInput = {
    where: workspacereportWhereUniqueInput
    create: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacereportCreateManyWorkspaceInputEnvelope = {
    data: workspacereportCreateManyWorkspaceInput | workspacereportCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type workspacethemeCreateWithoutWorkspaceInput = {
    theme: themeCreateNestedOneWithoutWorkspaceInput
  }

  export type workspacethemeUncheckedCreateWithoutWorkspaceInput = {
    themeid: number
  }

  export type workspacethemeCreateOrConnectWithoutWorkspaceInput = {
    where: workspacethemeWhereUniqueInput
    create: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacethemeCreateManyWorkspaceInputEnvelope = {
    data: workspacethemeCreateManyWorkspaceInput | workspacethemeCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type workspaceuserCreateWithoutWorkspaceInput = {
    user: userCreateNestedOneWithoutWorkspaceInput
  }

  export type workspaceuserUncheckedCreateWithoutWorkspaceInput = {
    userid: number
  }

  export type workspaceuserCreateOrConnectWithoutWorkspaceInput = {
    where: workspaceuserWhereUniqueInput
    create: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceuserCreateManyWorkspaceInputEnvelope = {
    data: workspaceuserCreateManyWorkspaceInput | workspaceuserCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type workspacefeedbackUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacefeedbackWhereUniqueInput
    update: XOR<workspacefeedbackUpdateWithoutWorkspaceInput, workspacefeedbackUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<workspacefeedbackCreateWithoutWorkspaceInput, workspacefeedbackUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacefeedbackUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacefeedbackWhereUniqueInput
    data: XOR<workspacefeedbackUpdateWithoutWorkspaceInput, workspacefeedbackUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspacefeedbackUpdateManyWithWhereWithoutWorkspaceInput = {
    where: workspacefeedbackScalarWhereInput
    data: XOR<workspacefeedbackUpdateManyMutationInput, workspacefeedbackUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type workspacefeedbackScalarWhereInput = {
    AND?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
    OR?: workspacefeedbackScalarWhereInput[]
    NOT?: workspacefeedbackScalarWhereInput | workspacefeedbackScalarWhereInput[]
    workspaceid?: IntFilter<"workspacefeedback"> | number
    feedbackid?: IntFilter<"workspacefeedback"> | number
  }

  export type workspacereportUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacereportWhereUniqueInput
    update: XOR<workspacereportUpdateWithoutWorkspaceInput, workspacereportUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<workspacereportCreateWithoutWorkspaceInput, workspacereportUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacereportUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacereportWhereUniqueInput
    data: XOR<workspacereportUpdateWithoutWorkspaceInput, workspacereportUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspacereportUpdateManyWithWhereWithoutWorkspaceInput = {
    where: workspacereportScalarWhereInput
    data: XOR<workspacereportUpdateManyMutationInput, workspacereportUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type workspacereportScalarWhereInput = {
    AND?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
    OR?: workspacereportScalarWhereInput[]
    NOT?: workspacereportScalarWhereInput | workspacereportScalarWhereInput[]
    workspaceid?: IntFilter<"workspacereport"> | number
    reportid?: IntFilter<"workspacereport"> | number
  }

  export type workspacethemeUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacethemeWhereUniqueInput
    update: XOR<workspacethemeUpdateWithoutWorkspaceInput, workspacethemeUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<workspacethemeCreateWithoutWorkspaceInput, workspacethemeUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspacethemeUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: workspacethemeWhereUniqueInput
    data: XOR<workspacethemeUpdateWithoutWorkspaceInput, workspacethemeUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspacethemeUpdateManyWithWhereWithoutWorkspaceInput = {
    where: workspacethemeScalarWhereInput
    data: XOR<workspacethemeUpdateManyMutationInput, workspacethemeUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type workspacethemeScalarWhereInput = {
    AND?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
    OR?: workspacethemeScalarWhereInput[]
    NOT?: workspacethemeScalarWhereInput | workspacethemeScalarWhereInput[]
    workspaceid?: IntFilter<"workspacetheme"> | number
    themeid?: IntFilter<"workspacetheme"> | number
  }

  export type workspaceuserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: workspaceuserWhereUniqueInput
    update: XOR<workspaceuserUpdateWithoutWorkspaceInput, workspaceuserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<workspaceuserCreateWithoutWorkspaceInput, workspaceuserUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceuserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: workspaceuserWhereUniqueInput
    data: XOR<workspaceuserUpdateWithoutWorkspaceInput, workspaceuserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspaceuserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: workspaceuserScalarWhereInput
    data: XOR<workspaceuserUpdateManyMutationInput, workspaceuserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type workspaceuserScalarWhereInput = {
    AND?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
    OR?: workspaceuserScalarWhereInput[]
    NOT?: workspaceuserScalarWhereInput | workspaceuserScalarWhereInput[]
    workspaceid?: IntFilter<"workspaceuser"> | number
    userid?: IntFilter<"workspaceuser"> | number
  }

  export type reportCreateWithoutUserInput = {
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    workspace?: workspacereportCreateNestedManyWithoutReportInput
  }

  export type reportUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    workspace?: workspacereportUncheckedCreateNestedManyWithoutReportInput
  }

  export type reportCreateOrConnectWithoutUserInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportCreateManyUserInputEnvelope = {
    data: reportCreateManyUserInput | reportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type workspaceuserCreateWithoutUserInput = {
    workspace: workspaceCreateNestedOneWithoutUserInput
  }

  export type workspaceuserUncheckedCreateWithoutUserInput = {
    workspaceid: number
  }

  export type workspaceuserCreateOrConnectWithoutUserInput = {
    where: workspaceuserWhereUniqueInput
    create: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput>
  }

  export type workspaceuserCreateManyUserInputEnvelope = {
    data: workspaceuserCreateManyUserInput | workspaceuserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reportUpsertWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
    create: XOR<reportCreateWithoutUserInput, reportUncheckedCreateWithoutUserInput>
  }

  export type reportUpdateWithWhereUniqueWithoutUserInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutUserInput, reportUncheckedUpdateWithoutUserInput>
  }

  export type reportUpdateManyWithWhereWithoutUserInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutUserInput>
  }

  export type reportScalarWhereInput = {
    AND?: reportScalarWhereInput | reportScalarWhereInput[]
    OR?: reportScalarWhereInput[]
    NOT?: reportScalarWhereInput | reportScalarWhereInput[]
    id?: IntFilter<"report"> | number
    title?: StringFilter<"report"> | string
    periodstart?: DateTimeFilter<"report"> | Date | string
    periodend?: DateTimeFilter<"report"> | Date | string
    contentJson?: StringFilter<"report"> | string
    userid?: IntFilter<"report"> | number
  }

  export type workspaceuserUpsertWithWhereUniqueWithoutUserInput = {
    where: workspaceuserWhereUniqueInput
    update: XOR<workspaceuserUpdateWithoutUserInput, workspaceuserUncheckedUpdateWithoutUserInput>
    create: XOR<workspaceuserCreateWithoutUserInput, workspaceuserUncheckedCreateWithoutUserInput>
  }

  export type workspaceuserUpdateWithWhereUniqueWithoutUserInput = {
    where: workspaceuserWhereUniqueInput
    data: XOR<workspaceuserUpdateWithoutUserInput, workspaceuserUncheckedUpdateWithoutUserInput>
  }

  export type workspaceuserUpdateManyWithWhereWithoutUserInput = {
    where: workspaceuserScalarWhereInput
    data: XOR<workspaceuserUpdateManyMutationInput, workspaceuserUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutWorkspaceInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    user?: reportCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    user?: reportUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutWorkspaceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWorkspaceInput, userUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackUncheckedCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportUncheckedCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceCreateOrConnectWithoutUserInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
  }

  export type userUpsertWithoutWorkspaceInput = {
    update: XOR<userUpdateWithoutWorkspaceInput, userUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<userCreateWithoutWorkspaceInput, userUncheckedCreateWithoutWorkspaceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWorkspaceInput, userUncheckedUpdateWithoutWorkspaceInput>
  }

  export type userUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: reportUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: reportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type workspaceUpsertWithoutUserInput = {
    update: XOR<workspaceUpdateWithoutUserInput, workspaceUncheckedUpdateWithoutUserInput>
    create: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
    where?: workspaceWhereInput
  }

  export type workspaceUpdateToOneWithWhereWithoutUserInput = {
    where?: workspaceWhereInput
    data: XOR<workspaceUpdateWithoutUserInput, workspaceUncheckedUpdateWithoutUserInput>
  }

  export type workspaceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUncheckedUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUncheckedUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type embeddingCreateWithoutFeedbackInput = {
    vector: string
  }

  export type embeddingUncheckedCreateWithoutFeedbackInput = {
    id?: number
    vector: string
  }

  export type embeddingCreateOrConnectWithoutFeedbackInput = {
    where: embeddingWhereUniqueInput
    create: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput>
  }

  export type embeddingCreateManyFeedbackInputEnvelope = {
    data: embeddingCreateManyFeedbackInput | embeddingCreateManyFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type feedbackthemeCreateWithoutFeedbackInput = {
    theme: themeCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackthemeUncheckedCreateWithoutFeedbackInput = {
    themeid: number
  }

  export type feedbackthemeCreateOrConnectWithoutFeedbackInput = {
    where: feedbackthemeWhereUniqueInput
    create: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput>
  }

  export type feedbackthemeCreateManyFeedbackInputEnvelope = {
    data: feedbackthemeCreateManyFeedbackInput | feedbackthemeCreateManyFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type workspacefeedbackCreateWithoutFeedbackInput = {
    workspace: workspaceCreateNestedOneWithoutFeedbackInput
  }

  export type workspacefeedbackUncheckedCreateWithoutFeedbackInput = {
    workspaceid: number
  }

  export type workspacefeedbackCreateOrConnectWithoutFeedbackInput = {
    where: workspacefeedbackWhereUniqueInput
    create: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput>
  }

  export type workspacefeedbackCreateManyFeedbackInputEnvelope = {
    data: workspacefeedbackCreateManyFeedbackInput | workspacefeedbackCreateManyFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type embeddingUpsertWithWhereUniqueWithoutFeedbackInput = {
    where: embeddingWhereUniqueInput
    update: XOR<embeddingUpdateWithoutFeedbackInput, embeddingUncheckedUpdateWithoutFeedbackInput>
    create: XOR<embeddingCreateWithoutFeedbackInput, embeddingUncheckedCreateWithoutFeedbackInput>
  }

  export type embeddingUpdateWithWhereUniqueWithoutFeedbackInput = {
    where: embeddingWhereUniqueInput
    data: XOR<embeddingUpdateWithoutFeedbackInput, embeddingUncheckedUpdateWithoutFeedbackInput>
  }

  export type embeddingUpdateManyWithWhereWithoutFeedbackInput = {
    where: embeddingScalarWhereInput
    data: XOR<embeddingUpdateManyMutationInput, embeddingUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type embeddingScalarWhereInput = {
    AND?: embeddingScalarWhereInput | embeddingScalarWhereInput[]
    OR?: embeddingScalarWhereInput[]
    NOT?: embeddingScalarWhereInput | embeddingScalarWhereInput[]
    id?: IntFilter<"embedding"> | number
    vector?: StringFilter<"embedding"> | string
    feedbackid?: IntFilter<"embedding"> | number
  }

  export type feedbackthemeUpsertWithWhereUniqueWithoutFeedbackInput = {
    where: feedbackthemeWhereUniqueInput
    update: XOR<feedbackthemeUpdateWithoutFeedbackInput, feedbackthemeUncheckedUpdateWithoutFeedbackInput>
    create: XOR<feedbackthemeCreateWithoutFeedbackInput, feedbackthemeUncheckedCreateWithoutFeedbackInput>
  }

  export type feedbackthemeUpdateWithWhereUniqueWithoutFeedbackInput = {
    where: feedbackthemeWhereUniqueInput
    data: XOR<feedbackthemeUpdateWithoutFeedbackInput, feedbackthemeUncheckedUpdateWithoutFeedbackInput>
  }

  export type feedbackthemeUpdateManyWithWhereWithoutFeedbackInput = {
    where: feedbackthemeScalarWhereInput
    data: XOR<feedbackthemeUpdateManyMutationInput, feedbackthemeUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type feedbackthemeScalarWhereInput = {
    AND?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
    OR?: feedbackthemeScalarWhereInput[]
    NOT?: feedbackthemeScalarWhereInput | feedbackthemeScalarWhereInput[]
    feedbackid?: IntFilter<"feedbacktheme"> | number
    themeid?: IntFilter<"feedbacktheme"> | number
  }

  export type workspacefeedbackUpsertWithWhereUniqueWithoutFeedbackInput = {
    where: workspacefeedbackWhereUniqueInput
    update: XOR<workspacefeedbackUpdateWithoutFeedbackInput, workspacefeedbackUncheckedUpdateWithoutFeedbackInput>
    create: XOR<workspacefeedbackCreateWithoutFeedbackInput, workspacefeedbackUncheckedCreateWithoutFeedbackInput>
  }

  export type workspacefeedbackUpdateWithWhereUniqueWithoutFeedbackInput = {
    where: workspacefeedbackWhereUniqueInput
    data: XOR<workspacefeedbackUpdateWithoutFeedbackInput, workspacefeedbackUncheckedUpdateWithoutFeedbackInput>
  }

  export type workspacefeedbackUpdateManyWithWhereWithoutFeedbackInput = {
    where: workspacefeedbackScalarWhereInput
    data: XOR<workspacefeedbackUpdateManyMutationInput, workspacefeedbackUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type feedbackCreateWithoutWorkspaceInput = {
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingCreateNestedManyWithoutFeedbackInput
    theme?: feedbackthemeCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingUncheckedCreateNestedManyWithoutFeedbackInput
    theme?: feedbackthemeUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackCreateOrConnectWithoutWorkspaceInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutWorkspaceInput, feedbackUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceCreateWithoutFeedbackInput = {
    name: string
    createdAt?: Date | string
    report?: workspacereportCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutFeedbackInput = {
    id?: number
    name: string
    createdAt?: Date | string
    report?: workspacereportUncheckedCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeUncheckedCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceCreateOrConnectWithoutFeedbackInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutFeedbackInput, workspaceUncheckedCreateWithoutFeedbackInput>
  }

  export type feedbackUpsertWithoutWorkspaceInput = {
    update: XOR<feedbackUpdateWithoutWorkspaceInput, feedbackUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<feedbackCreateWithoutWorkspaceInput, feedbackUncheckedCreateWithoutWorkspaceInput>
    where?: feedbackWhereInput
  }

  export type feedbackUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: feedbackWhereInput
    data: XOR<feedbackUpdateWithoutWorkspaceInput, feedbackUncheckedUpdateWithoutWorkspaceInput>
  }

  export type feedbackUpdateWithoutWorkspaceInput = {
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUpdateManyWithoutFeedbackNestedInput
    theme?: feedbackthemeUpdateManyWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUncheckedUpdateManyWithoutFeedbackNestedInput
    theme?: feedbackthemeUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type workspaceUpsertWithoutFeedbackInput = {
    update: XOR<workspaceUpdateWithoutFeedbackInput, workspaceUncheckedUpdateWithoutFeedbackInput>
    create: XOR<workspaceCreateWithoutFeedbackInput, workspaceUncheckedCreateWithoutFeedbackInput>
    where?: workspaceWhereInput
  }

  export type workspaceUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: workspaceWhereInput
    data: XOR<workspaceUpdateWithoutFeedbackInput, workspaceUncheckedUpdateWithoutFeedbackInput>
  }

  export type workspaceUpdateWithoutFeedbackInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: workspacereportUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: workspacereportUncheckedUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUncheckedUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type feedbackthemeCreateWithoutThemeInput = {
    feedback: feedbackCreateNestedOneWithoutThemeInput
  }

  export type feedbackthemeUncheckedCreateWithoutThemeInput = {
    feedbackid: number
  }

  export type feedbackthemeCreateOrConnectWithoutThemeInput = {
    where: feedbackthemeWhereUniqueInput
    create: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput>
  }

  export type feedbackthemeCreateManyThemeInputEnvelope = {
    data: feedbackthemeCreateManyThemeInput | feedbackthemeCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type workspacethemeCreateWithoutThemeInput = {
    workspace: workspaceCreateNestedOneWithoutThemeInput
  }

  export type workspacethemeUncheckedCreateWithoutThemeInput = {
    workspaceid: number
  }

  export type workspacethemeCreateOrConnectWithoutThemeInput = {
    where: workspacethemeWhereUniqueInput
    create: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput>
  }

  export type workspacethemeCreateManyThemeInputEnvelope = {
    data: workspacethemeCreateManyThemeInput | workspacethemeCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type feedbackthemeUpsertWithWhereUniqueWithoutThemeInput = {
    where: feedbackthemeWhereUniqueInput
    update: XOR<feedbackthemeUpdateWithoutThemeInput, feedbackthemeUncheckedUpdateWithoutThemeInput>
    create: XOR<feedbackthemeCreateWithoutThemeInput, feedbackthemeUncheckedCreateWithoutThemeInput>
  }

  export type feedbackthemeUpdateWithWhereUniqueWithoutThemeInput = {
    where: feedbackthemeWhereUniqueInput
    data: XOR<feedbackthemeUpdateWithoutThemeInput, feedbackthemeUncheckedUpdateWithoutThemeInput>
  }

  export type feedbackthemeUpdateManyWithWhereWithoutThemeInput = {
    where: feedbackthemeScalarWhereInput
    data: XOR<feedbackthemeUpdateManyMutationInput, feedbackthemeUncheckedUpdateManyWithoutThemeInput>
  }

  export type workspacethemeUpsertWithWhereUniqueWithoutThemeInput = {
    where: workspacethemeWhereUniqueInput
    update: XOR<workspacethemeUpdateWithoutThemeInput, workspacethemeUncheckedUpdateWithoutThemeInput>
    create: XOR<workspacethemeCreateWithoutThemeInput, workspacethemeUncheckedCreateWithoutThemeInput>
  }

  export type workspacethemeUpdateWithWhereUniqueWithoutThemeInput = {
    where: workspacethemeWhereUniqueInput
    data: XOR<workspacethemeUpdateWithoutThemeInput, workspacethemeUncheckedUpdateWithoutThemeInput>
  }

  export type workspacethemeUpdateManyWithWhereWithoutThemeInput = {
    where: workspacethemeScalarWhereInput
    data: XOR<workspacethemeUpdateManyMutationInput, workspacethemeUncheckedUpdateManyWithoutThemeInput>
  }

  export type themeCreateWithoutWorkspaceInput = {
    name: string
    description: string
    color: string
    feedback?: feedbackthemeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    description: string
    color: string
    feedback?: feedbackthemeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeCreateOrConnectWithoutWorkspaceInput = {
    where: themeWhereUniqueInput
    create: XOR<themeCreateWithoutWorkspaceInput, themeUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceCreateWithoutThemeInput = {
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutThemeInput = {
    id?: number
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackUncheckedCreateNestedManyWithoutWorkspaceInput
    report?: workspacereportUncheckedCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceCreateOrConnectWithoutThemeInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutThemeInput, workspaceUncheckedCreateWithoutThemeInput>
  }

  export type themeUpsertWithoutWorkspaceInput = {
    update: XOR<themeUpdateWithoutWorkspaceInput, themeUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<themeCreateWithoutWorkspaceInput, themeUncheckedCreateWithoutWorkspaceInput>
    where?: themeWhereInput
  }

  export type themeUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: themeWhereInput
    data: XOR<themeUpdateWithoutWorkspaceInput, themeUncheckedUpdateWithoutWorkspaceInput>
  }

  export type themeUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    feedback?: feedbackthemeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    feedback?: feedbackthemeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type workspaceUpsertWithoutThemeInput = {
    update: XOR<workspaceUpdateWithoutThemeInput, workspaceUncheckedUpdateWithoutThemeInput>
    create: XOR<workspaceCreateWithoutThemeInput, workspaceUncheckedCreateWithoutThemeInput>
    where?: workspaceWhereInput
  }

  export type workspaceUpdateToOneWithWhereWithoutThemeInput = {
    where?: workspaceWhereInput
    data: XOR<workspaceUpdateWithoutThemeInput, workspaceUncheckedUpdateWithoutThemeInput>
  }

  export type workspaceUpdateWithoutThemeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUncheckedUpdateManyWithoutWorkspaceNestedInput
    report?: workspacereportUncheckedUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type feedbackCreateWithoutThemeInput = {
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutThemeInput = {
    id?: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    feedback?: embeddingUncheckedCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackCreateOrConnectWithoutThemeInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutThemeInput, feedbackUncheckedCreateWithoutThemeInput>
  }

  export type themeCreateWithoutFeedbackInput = {
    name: string
    description: string
    color: string
    workspace?: workspacethemeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateWithoutFeedbackInput = {
    id?: number
    name: string
    description: string
    color: string
    workspace?: workspacethemeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeCreateOrConnectWithoutFeedbackInput = {
    where: themeWhereUniqueInput
    create: XOR<themeCreateWithoutFeedbackInput, themeUncheckedCreateWithoutFeedbackInput>
  }

  export type feedbackUpsertWithoutThemeInput = {
    update: XOR<feedbackUpdateWithoutThemeInput, feedbackUncheckedUpdateWithoutThemeInput>
    create: XOR<feedbackCreateWithoutThemeInput, feedbackUncheckedCreateWithoutThemeInput>
    where?: feedbackWhereInput
  }

  export type feedbackUpdateToOneWithWhereWithoutThemeInput = {
    where?: feedbackWhereInput
    data: XOR<feedbackUpdateWithoutThemeInput, feedbackUncheckedUpdateWithoutThemeInput>
  }

  export type feedbackUpdateWithoutThemeInput = {
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUpdateManyWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    feedback?: embeddingUncheckedUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type themeUpsertWithoutFeedbackInput = {
    update: XOR<themeUpdateWithoutFeedbackInput, themeUncheckedUpdateWithoutFeedbackInput>
    create: XOR<themeCreateWithoutFeedbackInput, themeUncheckedCreateWithoutFeedbackInput>
    where?: themeWhereInput
  }

  export type themeUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: themeWhereInput
    data: XOR<themeUpdateWithoutFeedbackInput, themeUncheckedUpdateWithoutFeedbackInput>
  }

  export type themeUpdateWithoutFeedbackInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    workspace?: workspacethemeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    workspace?: workspacethemeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type feedbackCreateWithoutFeedbackInput = {
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    theme?: feedbackthemeCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutFeedbackInput = {
    id?: number
    content: string
    channel: string
    sentiment: $Enums.Sentiment
    status: $Enums.Status
    theme?: feedbackthemeUncheckedCreateNestedManyWithoutFeedbackInput
    workspace?: workspacefeedbackUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type feedbackCreateOrConnectWithoutFeedbackInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutFeedbackInput, feedbackUncheckedCreateWithoutFeedbackInput>
  }

  export type feedbackUpsertWithoutFeedbackInput = {
    update: XOR<feedbackUpdateWithoutFeedbackInput, feedbackUncheckedUpdateWithoutFeedbackInput>
    create: XOR<feedbackCreateWithoutFeedbackInput, feedbackUncheckedCreateWithoutFeedbackInput>
    where?: feedbackWhereInput
  }

  export type feedbackUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: feedbackWhereInput
    data: XOR<feedbackUpdateWithoutFeedbackInput, feedbackUncheckedUpdateWithoutFeedbackInput>
  }

  export type feedbackUpdateWithoutFeedbackInput = {
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    theme?: feedbackthemeUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUpdateManyWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    theme?: feedbackthemeUncheckedUpdateManyWithoutFeedbackNestedInput
    workspace?: workspacefeedbackUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type userCreateWithoutUserInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    workspace?: workspaceuserCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    workspace?: workspaceuserUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserInput, userUncheckedCreateWithoutUserInput>
  }

  export type workspacereportCreateWithoutReportInput = {
    workspace: workspaceCreateNestedOneWithoutReportInput
  }

  export type workspacereportUncheckedCreateWithoutReportInput = {
    workspaceid: number
  }

  export type workspacereportCreateOrConnectWithoutReportInput = {
    where: workspacereportWhereUniqueInput
    create: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput>
  }

  export type workspacereportCreateManyReportInputEnvelope = {
    data: workspacereportCreateManyReportInput | workspacereportCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutUserInput = {
    update: XOR<userUpdateWithoutUserInput, userUncheckedUpdateWithoutUserInput>
    create: XOR<userCreateWithoutUserInput, userUncheckedCreateWithoutUserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserInput, userUncheckedUpdateWithoutUserInput>
  }

  export type userUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    workspace?: workspaceuserUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    workspace?: workspaceuserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type workspacereportUpsertWithWhereUniqueWithoutReportInput = {
    where: workspacereportWhereUniqueInput
    update: XOR<workspacereportUpdateWithoutReportInput, workspacereportUncheckedUpdateWithoutReportInput>
    create: XOR<workspacereportCreateWithoutReportInput, workspacereportUncheckedCreateWithoutReportInput>
  }

  export type workspacereportUpdateWithWhereUniqueWithoutReportInput = {
    where: workspacereportWhereUniqueInput
    data: XOR<workspacereportUpdateWithoutReportInput, workspacereportUncheckedUpdateWithoutReportInput>
  }

  export type workspacereportUpdateManyWithWhereWithoutReportInput = {
    where: workspacereportScalarWhereInput
    data: XOR<workspacereportUpdateManyMutationInput, workspacereportUncheckedUpdateManyWithoutReportInput>
  }

  export type reportCreateWithoutWorkspaceInput = {
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    user: userCreateNestedOneWithoutUserInput
  }

  export type reportUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
    userid: number
  }

  export type reportCreateOrConnectWithoutWorkspaceInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutWorkspaceInput, reportUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspaceCreateWithoutReportInput = {
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutReportInput = {
    id?: number
    name: string
    createdAt?: Date | string
    feedback?: workspacefeedbackUncheckedCreateNestedManyWithoutWorkspaceInput
    theme?: workspacethemeUncheckedCreateNestedManyWithoutWorkspaceInput
    user?: workspaceuserUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceCreateOrConnectWithoutReportInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutReportInput, workspaceUncheckedCreateWithoutReportInput>
  }

  export type reportUpsertWithoutWorkspaceInput = {
    update: XOR<reportUpdateWithoutWorkspaceInput, reportUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<reportCreateWithoutWorkspaceInput, reportUncheckedCreateWithoutWorkspaceInput>
    where?: reportWhereInput
  }

  export type reportUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: reportWhereInput
    data: XOR<reportUpdateWithoutWorkspaceInput, reportUncheckedUpdateWithoutWorkspaceInput>
  }

  export type reportUpdateWithoutWorkspaceInput = {
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutUserNestedInput
  }

  export type reportUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type workspaceUpsertWithoutReportInput = {
    update: XOR<workspaceUpdateWithoutReportInput, workspaceUncheckedUpdateWithoutReportInput>
    create: XOR<workspaceCreateWithoutReportInput, workspaceUncheckedCreateWithoutReportInput>
    where?: workspaceWhereInput
  }

  export type workspaceUpdateToOneWithWhereWithoutReportInput = {
    where?: workspaceWhereInput
    data: XOR<workspaceUpdateWithoutReportInput, workspaceUncheckedUpdateWithoutReportInput>
  }

  export type workspaceUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: workspacefeedbackUncheckedUpdateManyWithoutWorkspaceNestedInput
    theme?: workspacethemeUncheckedUpdateManyWithoutWorkspaceNestedInput
    user?: workspaceuserUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacefeedbackCreateManyWorkspaceInput = {
    feedbackid: number
  }

  export type workspacereportCreateManyWorkspaceInput = {
    reportid: number
  }

  export type workspacethemeCreateManyWorkspaceInput = {
    themeid: number
  }

  export type workspaceuserCreateManyWorkspaceInput = {
    userid: number
  }

  export type workspacefeedbackUpdateWithoutWorkspaceInput = {
    feedback?: feedbackUpdateOneRequiredWithoutWorkspaceNestedInput
  }

  export type workspacefeedbackUncheckedUpdateWithoutWorkspaceInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacefeedbackUncheckedUpdateManyWithoutWorkspaceInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportUpdateWithoutWorkspaceInput = {
    report?: reportUpdateOneRequiredWithoutWorkspaceNestedInput
  }

  export type workspacereportUncheckedUpdateWithoutWorkspaceInput = {
    reportid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportUncheckedUpdateManyWithoutWorkspaceInput = {
    reportid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacethemeUpdateWithoutWorkspaceInput = {
    theme?: themeUpdateOneRequiredWithoutWorkspaceNestedInput
  }

  export type workspacethemeUncheckedUpdateWithoutWorkspaceInput = {
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacethemeUncheckedUpdateManyWithoutWorkspaceInput = {
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type workspaceuserUpdateWithoutWorkspaceInput = {
    user?: userUpdateOneRequiredWithoutWorkspaceNestedInput
  }

  export type workspaceuserUncheckedUpdateWithoutWorkspaceInput = {
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type workspaceuserUncheckedUpdateManyWithoutWorkspaceInput = {
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type reportCreateManyUserInput = {
    id?: number
    title: string
    periodstart?: Date | string
    periodend: Date | string
    contentJson: string
  }

  export type workspaceuserCreateManyUserInput = {
    workspaceid: number
  }

  export type reportUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    workspace?: workspacereportUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
    workspace?: workspacereportUncheckedUpdateManyWithoutReportNestedInput
  }

  export type reportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    periodstart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodend?: DateTimeFieldUpdateOperationsInput | Date | string
    contentJson?: StringFieldUpdateOperationsInput | string
  }

  export type workspaceuserUpdateWithoutUserInput = {
    workspace?: workspaceUpdateOneRequiredWithoutUserNestedInput
  }

  export type workspaceuserUncheckedUpdateWithoutUserInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type workspaceuserUncheckedUpdateManyWithoutUserInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type embeddingCreateManyFeedbackInput = {
    id?: number
    vector: string
  }

  export type feedbackthemeCreateManyFeedbackInput = {
    themeid: number
  }

  export type workspacefeedbackCreateManyFeedbackInput = {
    workspaceid: number
  }

  export type embeddingUpdateWithoutFeedbackInput = {
    vector?: StringFieldUpdateOperationsInput | string
  }

  export type embeddingUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    vector?: StringFieldUpdateOperationsInput | string
  }

  export type embeddingUncheckedUpdateManyWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    vector?: StringFieldUpdateOperationsInput | string
  }

  export type feedbackthemeUpdateWithoutFeedbackInput = {
    theme?: themeUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackthemeUncheckedUpdateWithoutFeedbackInput = {
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackthemeUncheckedUpdateManyWithoutFeedbackInput = {
    themeid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacefeedbackUpdateWithoutFeedbackInput = {
    workspace?: workspaceUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type workspacefeedbackUncheckedUpdateWithoutFeedbackInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacefeedbackUncheckedUpdateManyWithoutFeedbackInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackthemeCreateManyThemeInput = {
    feedbackid: number
  }

  export type workspacethemeCreateManyThemeInput = {
    workspaceid: number
  }

  export type feedbackthemeUpdateWithoutThemeInput = {
    feedback?: feedbackUpdateOneRequiredWithoutThemeNestedInput
  }

  export type feedbackthemeUncheckedUpdateWithoutThemeInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackthemeUncheckedUpdateManyWithoutThemeInput = {
    feedbackid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacethemeUpdateWithoutThemeInput = {
    workspace?: workspaceUpdateOneRequiredWithoutThemeNestedInput
  }

  export type workspacethemeUncheckedUpdateWithoutThemeInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacethemeUncheckedUpdateManyWithoutThemeInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportCreateManyReportInput = {
    workspaceid: number
  }

  export type workspacereportUpdateWithoutReportInput = {
    workspace?: workspaceUpdateOneRequiredWithoutReportNestedInput
  }

  export type workspacereportUncheckedUpdateWithoutReportInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
  }

  export type workspacereportUncheckedUpdateManyWithoutReportInput = {
    workspaceid?: IntFieldUpdateOperationsInput | number
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