/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: '6.8.2',
  engine: '2060c79ba17c6bb9f5823312b6f6b7f4a845738e',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
});

exports.Prisma.ChamadosScalarFieldEnum = {
  cod_chamado: 'cod_chamado',
  data_chamado: 'data_chamado',
  hora_chamado: 'hora_chamado',
  data_hora_chamado: 'data_hora_chamado',
  conclusao_chamado: 'conclusao_chamado',
  status_chamado: 'status_chamado',
  dtenvio_chamado: 'dtenvio_chamado',
  cod_recurso: 'cod_recurso',
  nome_recurso: 'nome_recurso',
  cod_cliente: 'cod_cliente',
  nome_cliente: 'nome_cliente',
  razao_cliente: 'razao_cliente',
  assunto_chamado: 'assunto_chamado',
  email_chamado: 'email_chamado',
  prior_chamado: 'prior_chamado',
  cod_classificacao: 'cod_classificacao',
  qtd_limmes_tarefa: 'qtd_limmes_tarefa',
  dat_load: 'dat_load',
};

exports.Prisma.Chamados_apontamentosScalarFieldEnum = {
  chamado_os: 'chamado_os',
  cod_os: 'cod_os',
  dtini_os: 'dtini_os',
  hrini_os: 'hrini_os',
  hrfim_os: 'hrfim_os',
  dthrini_apont: 'dthrini_apont',
  dthrfim_apont: 'dthrfim_apont',
  respcli_os: 'respcli_os',
  obs: 'obs',
  codrec_os: 'codrec_os',
  cod_cliente: 'cod_cliente',
  limmes_tarefa: 'limmes_tarefa',
  dat_load: 'dat_load',
};

exports.Prisma.ApontamentosScalarFieldEnum = {
  id: 'id',
  chamado_os: 'chamado_os',
  cod_os: 'cod_os',
  dtini_os: 'dtini_os',
  hrini_os: 'hrini_os',
  hrfim_os: 'hrfim_os',
  dthrini_apont: 'dthrini_apont',
  dthrfim_apont: 'dthrfim_apont',
  respcli_os: 'respcli_os',
  obs: 'obs',
  codrec_os: 'codrec_os',
  cod_cliente: 'cod_cliente',
  limmes_tarefa: 'limmes_tarefa',
  dat_load: 'dat_load',
  status_chamado: 'status_chamado',
  nome_cliente: 'nome_cliente',
  nome_recurso: 'nome_recurso',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
};

exports.Prisma.ModelName = {
  chamados: 'chamados',
  chamados_apontamentos: 'chamados_apontamentos',
  Apontamentos: 'Apontamentos',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'solutiiClient',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        'C:\\Users\\Rogerio\\gerproj-dashboard-cliente\\generated\\solutii',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    sourceFilePath:
      'C:\\Users\\Rogerio\\gerproj-dashboard-cliente\\prisma\\solutii\\schema.prisma',
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../.env',
    schemaEnvPath: '../../.env',
  },
  relativePath: '../../prisma/solutii',
  clientVersion: '6.8.2',
  engineVersion: '2060c79ba17c6bb9f5823312b6f6b7f4a845738e',
  datasourceNames: ['solutiiDb'],
  activeProvider: 'postgresql',
  postinstall: false,
  inlineDatasources: {
    solutiiDb: {
      url: {
        fromEnvVar: 'DATABASE_URL_SOLUTII',
        value: null,
      },
    },
  },
  inlineSchema:
    'generator solutiiClient {\n  provider = "prisma-client-js"\n  output   = "../../generated/solutii"\n}\n\ndatasource solutiiDb {\n  provider = "postgresql"\n  url      = env("DATABASE_URL_SOLUTII")\n}\n\nmodel chamados {\n  cod_chamado       String    @id @solutiiDb.VarChar\n  data_chamado      String?   @solutiiDb.VarChar\n  hora_chamado      String?   @solutiiDb.VarChar\n  data_hora_chamado DateTime? @solutiiDb.Timestamp(6)\n  conclusao_chamado String?   @solutiiDb.VarChar\n  status_chamado    String?   @solutiiDb.VarChar\n  dtenvio_chamado   DateTime? @solutiiDb.Timestamp(6)\n  cod_recurso       String?   @solutiiDb.VarChar\n  nome_recurso      String?   @solutiiDb.VarChar\n  cod_cliente       String?   @solutiiDb.VarChar\n  nome_cliente      String?   @solutiiDb.VarChar\n  razao_cliente     String?   @solutiiDb.VarChar\n  assunto_chamado   String?   @solutiiDb.VarChar\n  email_chamado     String?   @solutiiDb.VarChar\n  prior_chamado     String?   @solutiiDb.VarChar\n  cod_classificacao String?   @solutiiDb.VarChar\n  qtd_limmes_tarefa Float?    @solutiiDb.Real\n  dat_load          DateTime? @solutiiDb.Timestamp(6)\n\n  apontamentos chamados_apontamentos[] @relation("ChamadoApontamentos")\n}\n\nmodel chamados_apontamentos {\n  chamado_os    String?   @solutiiDb.VarChar\n  cod_os        String    @id @solutiiDb.VarChar\n  dtini_os      String?   @solutiiDb.VarChar\n  hrini_os      String?   @solutiiDb.VarChar\n  hrfim_os      String?   @solutiiDb.VarChar\n  dthrini_apont DateTime? @solutiiDb.Timestamp(6)\n  dthrfim_apont DateTime? @solutiiDb.Timestamp(6)\n  respcli_os    String?   @solutiiDb.VarChar\n  obs           String?   @solutiiDb.VarChar\n  codrec_os     String?   @solutiiDb.VarChar\n  cod_cliente   String?   @solutiiDb.VarChar\n  limmes_tarefa Float?    @solutiiDb.Real\n  dat_load      DateTime? @solutiiDb.Timestamp(6)\n\n  chamado chamados? @relation("ChamadoApontamentos", fields: [chamado_os], references: [cod_chamado])\n}\n\nmodel Apontamentos {\n  id             String    @id @solutiiDb.Uuid\n  chamado_os     String?   @solutiiDb.VarChar\n  cod_os         String?   @solutiiDb.VarChar\n  dtini_os       String?   @solutiiDb.VarChar\n  hrini_os       String?   @solutiiDb.VarChar\n  hrfim_os       String?   @solutiiDb.VarChar\n  dthrini_apont  DateTime? @solutiiDb.Timestamp(6)\n  dthrfim_apont  DateTime? @solutiiDb.Timestamp(6)\n  respcli_os     String?   @solutiiDb.VarChar\n  obs            String?   @solutiiDb.VarChar\n  codrec_os      String?   @solutiiDb.VarChar\n  cod_cliente    String?   @solutiiDb.VarChar\n  limmes_tarefa  Float?    @solutiiDb.Real\n  dat_load       DateTime? @solutiiDb.Timestamp(6)\n  status_chamado String?   @solutiiDb.VarChar\n  nome_cliente   String?   @solutiiDb.VarChar\n  nome_recurso   String?   @solutiiDb.VarChar\n\n  @@map("Apontamentos")\n}\n',
  inlineSchemaHash:
    '96ffd9661b5e9d34053eab1bdc2fb68540b6cc492e862bcfb08d24cd42f0fb33',
  copyEngine: true,
};
config.dirname = '/';

config.runtimeDataModel = JSON.parse(
  '{"models":{"chamados":{"dbName":null,"schema":null,"fields":[{"name":"cod_chamado","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"data_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hora_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"data_hora_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"conclusao_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"status_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dtenvio_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_recurso","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"nome_recurso","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"nome_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"razao_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"assunto_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"email_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"prior_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_classificacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"qtd_limmes_tarefa","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":["Real",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dat_load","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"apontamentos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"chamados_apontamentos","nativeType":null,"relationName":"ChamadoApontamentos","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"chamados_apontamentos":{"dbName":null,"schema":null,"fields":[{"name":"chamado_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_os","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dtini_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hrini_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hrfim_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dthrini_apont","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"dthrfim_apont","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"respcli_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"obs","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"codrec_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"limmes_tarefa","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":["Real",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dat_load","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"chamado","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"chamados","nativeType":null,"relationName":"ChamadoApontamentos","relationFromFields":["chamado_os"],"relationToFields":["cod_chamado"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Apontamentos":{"dbName":"Apontamentos","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"chamado_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dtini_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hrini_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hrfim_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dthrini_apont","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"dthrfim_apont","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"respcli_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"obs","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"codrec_os","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"cod_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"limmes_tarefa","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":["Real",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"dat_load","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"status_chamado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"nome_cliente","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"nome_recurso","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;
config.compilerWasm = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_SOLUTII:
      (typeof globalThis !== 'undefined' &&
        globalThis['DATABASE_URL_SOLUTII']) ||
      (typeof process !== 'undefined' &&
        process.env &&
        process.env.DATABASE_URL_SOLUTII) ||
      undefined,
  },
});

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
