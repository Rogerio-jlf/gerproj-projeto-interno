/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, '__esModule', { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require('./runtime/index-browser.js');

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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

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

exports.Prisma.Acesso_sistemaScalarFieldEnum = {
  cod_usuario: 'cod_usuario',
  cod_modulo: 'cod_modulo',
  cod_tela: 'cod_tela',
  incluir: 'incluir',
  modificar: 'modificar',
  eliminar: 'eliminar',
};

exports.Prisma.AgenrecScalarFieldEnum = {
  cod_agenrec: 'cod_agenrec',
  cod_recurso: 'cod_recurso',
  data_agenrec: 'data_agenrec',
  hrini_agenrec: 'hrini_agenrec',
  hrfim_agenrec: 'hrfim_agenrec',
  status_agenrec: 'status_agenrec',
  obs_agenrec: 'obs_agenrec',
  custo_agenrec: 'custo_agenrec',
  receita_agenrec: 'receita_agenrec',
  tpcusto_agenrec: 'tpcusto_agenrec',
};

exports.Prisma.AreaScalarFieldEnum = {
  cod_area: 'cod_area',
  nome_area: 'nome_area',
};

exports.Prisma.AvaliacaoScalarFieldEnum = {
  cod_avaliacao: 'cod_avaliacao',
  anomes_avaliacao: 'anomes_avaliacao',
  data_avaliacao: 'data_avaliacao',
  codrec_avaliacao: 'codrec_avaliacao',
  status_avaliacao: 'status_avaliacao',
  codpro_avaliacao: 'codpro_avaliacao',
};

exports.Prisma.AvaliadoScalarFieldEnum = {
  codaval_avaliado: 'codaval_avaliado',
  codrec_avaliado: 'codrec_avaliado',
  status_avaliado: 'status_avaliado',
  data_avaliado: 'data_avaliado',
  hora_avaliado: 'hora_avaliado',
  usuario_avaliado: 'usuario_avaliado',
};

exports.Prisma.ChamadoScalarFieldEnum = {
  cod_chamado: 'cod_chamado',
  data_chamado: 'data_chamado',
  hora_chamado: 'hora_chamado',
  solicitacao_chamado: 'solicitacao_chamado',
  conclusao_chamado: 'conclusao_chamado',
  status_chamado: 'status_chamado',
  dtenvio_chamado: 'dtenvio_chamado',
  cod_recurso: 'cod_recurso',
  cliente_chamado: 'cliente_chamado',
  codtrf_chamado: 'codtrf_chamado',
  cod_cliente: 'cod_cliente',
  solicitacao2_chamado: 'solicitacao2_chamado',
  assunto_chamado: 'assunto_chamado',
  email_chamado: 'email_chamado',
  prior_chamado: 'prior_chamado',
  cod_classificacao: 'cod_classificacao',
};

exports.Prisma.CidadeScalarFieldEnum = {
  cod_cidade: 'cod_cidade',
  nome_cidade: 'nome_cidade',
  codibge_cidade: 'codibge_cidade',
  uf_cidade: 'uf_cidade',
};

exports.Prisma.ClassificacaoScalarFieldEnum = {
  cod_classificacao: 'cod_classificacao',
  nome_classificacao: 'nome_classificacao',
  ativo_classificacao: 'ativo_classificacao',
};

exports.Prisma.ClienteScalarFieldEnum = {
  cod_cliente: 'cod_cliente',
  nome_cliente: 'nome_cliente',
  razao_cliente: 'razao_cliente',
  end_cliente: 'end_cliente',
  bairro_cliente: 'bairro_cliente',
  cep_cliente: 'cep_cliente',
  fone_cliente: 'fone_cliente',
  cnpj_cliente: 'cnpj_cliente',
  ie_cliente: 'ie_cliente',
  uf_cliente: 'uf_cliente',
  fax_cliente: 'fax_cliente',
  contato_cliente: 'contato_cliente',
  funccontato_cliente: 'funccontato_cliente',
  endcob_cliente: 'endcob_cliente',
  bairrocob_cliente: 'bairrocob_cliente',
  cepcob_cliente: 'cepcob_cliente',
  cidadecob_cliente: 'cidadecob_cliente',
  ufcob_cliente: 'ufcob_cliente',
  ativo_cliente: 'ativo_cliente',
  obs_cliente: 'obs_cliente',
  im_cliente: 'im_cliente',
  cod_cidade: 'cod_cidade',
  numend_cliente: 'numend_cliente',
  comend_cliente: 'comend_cliente',
  email_cliente: 'email_cliente',
  codbanco_cliente: 'codbanco_cliente',
  sla_cliente: 'sla_cliente',
};

exports.Prisma.ComposicaoScalarFieldEnum = {
  cod_composicao: 'cod_composicao',
  cod_fatura: 'cod_fatura',
  cod_cliente: 'cod_cliente',
  cod_projeto: 'cod_projeto',
  cod_tarefa: 'cod_tarefa',
  cod_recurso: 'cod_recurso',
  hrfat_composicao: 'hrfat_composicao',
  hrnfat_composicao: 'hrnfat_composicao',
  vrhr_composicao: 'vrhr_composicao',
  vrfat_composicao: 'vrfat_composicao',
};

exports.Prisma.ContatoScalarFieldEnum = {
  cod_contato: 'cod_contato',
  data_contato: 'data_contato',
  hora_contato: 'hora_contato',
  nomeusuario_contato: 'nomeusuario_contato',
  desc_contato: 'desc_contato',
  cod_lista: 'cod_lista',
};

exports.Prisma.CtissScalarFieldEnum = {
  cod_ctiss: 'cod_ctiss',
  num_ctiss: 'num_ctiss',
  subitem_ctiss: 'subitem_ctiss',
  descr_ctiss: 'descr_ctiss',
  csll_ctiss: 'csll_ctiss',
  pis_ctiss: 'pis_ctiss',
  cofins_ctiss: 'cofins_ctiss',
  irrf_ctiss: 'irrf_ctiss',
  aliq_ctiss: 'aliq_ctiss',
  aliqret_ctiss: 'aliqret_ctiss',
};

exports.Prisma.DespesaScalarFieldEnum = {
  cod_despesa: 'cod_despesa',
  cod_recurso: 'cod_recurso',
  cod_tpdesp: 'cod_tpdesp',
  valor_despesa: 'valor_despesa',
  mesano_despesa: 'mesano_despesa',
};

exports.Prisma.DesprecScalarFieldEnum = {
  cod_desprec: 'cod_desprec',
  cod_recurso: 'cod_recurso',
  cod_tpdesp: 'cod_tpdesp',
  valor_desprec: 'valor_desprec',
};

exports.Prisma.EmpresaScalarFieldEnum = {
  cod_empresa: 'cod_empresa',
  nome_empresa: 'nome_empresa',
  razao_empresa: 'razao_empresa',
  end_empresa: 'end_empresa',
  bairro_empresa: 'bairro_empresa',
  cep_empresa: 'cep_empresa',
  ddd_empresa: 'ddd_empresa',
  fone_empresa: 'fone_empresa',
  cnpj_empresa: 'cnpj_empresa',
  ie_empresa: 'ie_empresa',
  im_empresa: 'im_empresa',
  cod_cidade: 'cod_cidade',
  certificado_empresa: 'certificado_empresa',
  email_empresa: 'email_empresa',
};

exports.Prisma.FaseScalarFieldEnum = {
  cod_fase: 'cod_fase',
  nome_fase: 'nome_fase',
};

exports.Prisma.FatdesScalarFieldEnum = {
  cod_fatdes: 'cod_fatdes',
  mesano_fatdes: 'mesano_fatdes',
  desc_fatdes: 'desc_fatdes',
  vrdesp_fatdes: 'vrdesp_fatdes',
  dtpag_fatdes: 'dtpag_fatdes',
  obs_fatdes: 'obs_fatdes',
  dtven_fatdes: 'dtven_fatdes',
};

exports.Prisma.FatfunScalarFieldEnum = {
  cod_fatfun: 'cod_fatfun',
  mesano_fatfun: 'mesano_fatfun',
  nome_fatfun: 'nome_fatfun',
  vrdesl_fatfun: 'vrdesl_fatfun',
  vralm_fatfun: 'vralm_fatfun',
  vrsal_fatfun: 'vrsal_fatfun',
  dtpag_fatfun: 'dtpag_fatfun',
  obs_fatfun: 'obs_fatfun',
  dtpag1_fatfun: 'dtpag1_fatfun',
  dtpag2_fatfun: 'dtpag2_fatfun',
  cod_recurso: 'cod_recurso',
};

exports.Prisma.FatrecScalarFieldEnum = {
  cod_fatrec: 'cod_fatrec',
  cod_cliente: 'cod_cliente',
  desc_fatrec: 'desc_fatrec',
  qtdhora_fatrec: 'qtdhora_fatrec',
  vrhora_fatrec: 'vrhora_fatrec',
  vrtot_fatrec: 'vrtot_fatrec',
  dtvenc_fatrec: 'dtvenc_fatrec',
  dtnf_fatrec: 'dtnf_fatrec',
  dtcob_fatrec: 'dtcob_fatrec',
  dtpag_fatrec: 'dtpag_fatrec',
  vrpag_fatrec: 'vrpag_fatrec',
  imp_fatrec: 'imp_fatrec',
  mesano_fatrec: 'mesano_fatrec',
  obs_fatrec: 'obs_fatrec',
  cod_recurso: 'cod_recurso',
  perccom_fatrec: 'perccom_fatrec',
  dtpgcom_fatrec: 'dtpgcom_fatrec',
  cod_empresa: 'cod_empresa',
  nf_fatrec: 'nf_fatrec',
};

exports.Prisma.FaturaScalarFieldEnum = {
  cod_fatura: 'cod_fatura',
  mesano_fatura: 'mesano_fatura',
  desp_fatura: 'desp_fatura',
  imp_fatura: 'imp_fatura',
  lucro_fatura: 'lucro_fatura',
};

exports.Prisma.FaturamentoScalarFieldEnum = {
  cod_faturamento: 'cod_faturamento',
  data_faturamento: 'data_faturamento',
  hora_faturamento: 'hora_faturamento',
  usu_faturamento: 'usu_faturamento',
  ini_faturamento: 'ini_faturamento',
  fim_faturamento: 'fim_faturamento',
  status_faturamento: 'status_faturamento',
  mesano_faturamento: 'mesano_faturamento',
};

exports.Prisma.GrupoScalarFieldEnum = {
  cod_grupo: 'cod_grupo',
  desc_grupo: 'desc_grupo',
};

exports.Prisma.HistchamadoScalarFieldEnum = {
  cod_histchamado: 'cod_histchamado',
  cod_chamado: 'cod_chamado',
  data_histchamado: 'data_histchamado',
  hora_histchamado: 'hora_histchamado',
  desc_histchamado: 'desc_histchamado',
};

exports.Prisma.ItavaliadoScalarFieldEnum = {
  codaval_itavaliado: 'codaval_itavaliado',
  codrec_itavaliado: 'codrec_itavaliado',
  codmat_itavaliado: 'codmat_itavaliado',
  coditmat_itavaliado: 'coditmat_itavaliado',
  ptoger_itavaliado: 'ptoger_itavaliado',
  ptorec_itavaliado: 'ptorec_itavaliado',
  obs_itavaliado: 'obs_itavaliado',
  nota1_itavaliado: 'nota1_itavaliado',
  nota2_itavaliado: 'nota2_itavaliado',
  nota3_itavaliado: 'nota3_itavaliado',
};

exports.Prisma.ItmatrizScalarFieldEnum = {
  codmat_itmatriz: 'codmat_itmatriz',
  cod_itmatriz: 'cod_itmatriz',
  nota1_itmatriz: 'nota1_itmatriz',
  nota2_itmatriz: 'nota2_itmatriz',
  nota3_itmatriz: 'nota3_itmatriz',
  questao_itmatriz: 'questao_itmatriz',
};

exports.Prisma.LayoutScalarFieldEnum = {
  cod_layout: 'cod_layout',
  tabela_layout: 'tabela_layout',
  campo_layout: 'campo_layout',
  posicao_layout: 'posicao_layout',
};

exports.Prisma.ListaScalarFieldEnum = {
  cod_lista: 'cod_lista',
  cod_grupo: 'cod_grupo',
  cod_status: 'cod_status',
  cgccpf_lista: 'cgccpf_lista',
  id_lista: 'id_lista',
  nome_lista: 'nome_lista',
  end_lista: 'end_lista',
  num_lista: 'num_lista',
  comp_lista: 'comp_lista',
  cep_lista: 'cep_lista',
  bairro_lista: 'bairro_lista',
  cidade_lista: 'cidade_lista',
  uf_lista: 'uf_lista',
  email_lista: 'email_lista',
  dtcontactar_lista: 'dtcontactar_lista',
  dtcad_lista: 'dtcad_lista',
  obs_lista: 'obs_lista',
};

exports.Prisma.MatrizScalarFieldEnum = {
  cod_matriz: 'cod_matriz',
  desc_matriz: 'desc_matriz',
  status_matriz: 'status_matriz',
};

exports.Prisma.MensagemScalarFieldEnum = {
  cod_mensagem: 'cod_mensagem',
  desc_mensagem: 'desc_mensagem',
};

exports.Prisma.MetaScalarFieldEnum = {
  codproj_meta: 'codproj_meta',
  codarea_meta: 'codarea_meta',
  codfase_meta: 'codfase_meta',
  tempo_meta: 'tempo_meta',
  altesc_meta: 'altesc_meta',
};

exports.Prisma.Modulo_sistemaScalarFieldEnum = {
  cod_modulo: 'cod_modulo',
  desc_modulo: 'desc_modulo',
};

exports.Prisma.NfseScalarFieldEnum = {
  cod_nfse: 'cod_nfse',
  num_nfse: 'num_nfse',
  dtemissao_nfse: 'dtemissao_nfse',
  hremissao_nfse: 'hremissao_nfse',
  cod_empresa: 'cod_empresa',
  cod_cliente: 'cod_cliente',
  discr_nfse: 'discr_nfse',
  cod_ctiss: 'cod_ctiss',
  natoper_nfse: 'natoper_nfse',
  regtrib_nfse: 'regtrib_nfse',
  vrtot_nfse: 'vrtot_nfse',
  vrded_nfse: 'vrded_nfse',
  vrdesc1_nfse: 'vrdesc1_nfse',
  vrdesc2_nfse: 'vrdesc2_nfse',
  vrir_nfse: 'vrir_nfse',
  vrpis_nfse: 'vrpis_nfse',
  vrcofins_nfse: 'vrcofins_nfse',
  vrcsll_nfse: 'vrcsll_nfse',
  vrout_nfse: 'vrout_nfse',
  issret_nfse: 'issret_nfse',
  aliqiss_nfse: 'aliqiss_nfse',
  vrinss_nfse: 'vrinss_nfse',
  doc_nfse: 'doc_nfse',
  aliqissret_nfse: 'aliqissret_nfse',
  xml_nfse: 'xml_nfse',
  codver_nfse: 'codver_nfse',
  logtrans_nfse: 'logtrans_nfse',
  logcan_nfse: 'logcan_nfse',
  xmlformat_nfse: 'xmlformat_nfse',
  prot_nfse: 'prot_nfse',
  chvcan_nfse: 'chvcan_nfse',
  dtcanc_nfse: 'dtcanc_nfse',
  tipoper_nfse: 'tipoper_nfse',
  opsimnac_nfse: 'opsimnac_nfse',
  csll_nfse: 'csll_nfse',
  pis_nfse: 'pis_nfse',
  cofins_nfse: 'cofins_nfse',
  irrf_nfse: 'irrf_nfse',
};

exports.Prisma.NivelScalarFieldEnum = {
  cod_nivel: 'cod_nivel',
  nome_nivel: 'nome_nivel',
  perc_nivel: 'perc_nivel',
};

exports.Prisma.OsScalarFieldEnum = {
  cod_os: 'cod_os',
  codtrf_os: 'codtrf_os',
  dtini_os: 'dtini_os',
  hrini_os: 'hrini_os',
  hrfim_os: 'hrfim_os',
  obs_os: 'obs_os',
  status_os: 'status_os',
  produtivo_os: 'produtivo_os',
  codrec_os: 'codrec_os',
  produtivo2_os: 'produtivo2_os',
  respcli_os: 'respcli_os',
  remdes_os: 'remdes_os',
  abono_os: 'abono_os',
  desloc_os: 'desloc_os',
  obs: 'obs',
  dtinc_os: 'dtinc_os',
  faturado_os: 'faturado_os',
  perc_os: 'perc_os',
  cod_faturamento: 'cod_faturamento',
  comp_os: 'comp_os',
  valid_os: 'valid_os',
  vrhr_os: 'vrhr_os',
  num_os: 'num_os',
  chamado_os: 'chamado_os',
};

exports.Prisma.ParametrosScalarFieldEnum = {
  cod_parametro: 'cod_parametro',
  descr_parametro: 'descr_parametro',
  valor_parametro: 'valor_parametro',
};

exports.Prisma.ParcelaScalarFieldEnum = {
  cod_parcela: 'cod_parcela',
  cod_lista: 'cod_lista',
  data_parcela: 'data_parcela',
  venc_parcela: 'venc_parcela',
  pag_parcela: 'pag_parcela',
  valor_parcela: 'valor_parcela',
  juros_parcela: 'juros_parcela',
  multa_parcela: 'multa_parcela',
  desconto_parcela: 'desconto_parcela',
  status_parcela: 'status_parcela',
  id_parcela: 'id_parcela',
};

exports.Prisma.PautaScalarFieldEnum = {
  cod_pauta: 'cod_pauta',
  cod_recurso: 'cod_recurso',
  data_pauta: 'data_pauta',
  prazo_pauta: 'prazo_pauta',
  concl_pauta: 'concl_pauta',
  desc_pauta: 'desc_pauta',
  obs_pauta: 'obs_pauta',
};

exports.Prisma.PontoScalarFieldEnum = {
  cod_ponto: 'cod_ponto',
  entrada_ponto: 'entrada_ponto',
  saida_ponto: 'saida_ponto',
  cod_recurso: 'cod_recurso',
};

exports.Prisma.ProjetoScalarFieldEnum = {
  cod_projeto: 'cod_projeto',
  nome_projeto: 'nome_projeto',
  codcli_projeto: 'codcli_projeto',
  respcli_projeto: 'respcli_projeto',
  proposta_projeto: 'proposta_projeto',
  codrec_projeto: 'codrec_projeto',
  perc_projeto: 'perc_projeto',
  loginc_projeto: 'loginc_projeto',
  logalt_projeto: 'logalt_projeto',
  qtdhoras_projeto: 'qtdhoras_projeto',
  status_projeto: 'status_projeto',
};

exports.Prisma.RecursoScalarFieldEnum = {
  cod_recurso: 'cod_recurso',
  nome_recurso: 'nome_recurso',
  fone_recurso: 'fone_recurso',
  ativo_recurso: 'ativo_recurso',
  codusr_recurso: 'codusr_recurso',
  cod_nivel: 'cod_nivel',
  hrdia_recurso: 'hrdia_recurso',
  percprod_recurso: 'percprod_recurso',
  email_recurso: 'email_recurso',
  dtlimite_recurso: 'dtlimite_recurso',
  permapo_recurso: 'permapo_recurso',
  matr_recurso: 'matr_recurso',
  obs_recurso: 'obs_recurso',
  custo_recurso: 'custo_recurso',
  receita_recurso: 'receita_recurso',
  tpcusto_recurso: 'tpcusto_recurso',
};

exports.Prisma.ResconScalarFieldEnum = {
  cod_rescon: 'cod_rescon',
  cod_fatura: 'cod_fatura',
  cod_recurso: 'cod_recurso',
  hrfat_rescon: 'hrfat_rescon',
  hrnfat_rescon: 'hrnfat_rescon',
  vrfat_rescon: 'vrfat_rescon',
  vrnfat_rescon: 'vrnfat_rescon',
  realizado_rescon: 'realizado_rescon',
  disponivel_rescon: 'disponivel_rescon',
  perc1_rescon: 'perc1_rescon',
  perc2_rescon: 'perc2_rescon',
  perc3_rescon: 'perc3_rescon',
  custo_rescon: 'custo_rescon',
  contrib_rescon: 'contrib_rescon',
  perccontrib_rescon: 'perccontrib_rescon',
  hrbase_rescon: 'hrbase_rescon',
  mo_rescon: 'mo_rescon',
  desp_rescon: 'desp_rescon',
};

exports.Prisma.StatusScalarFieldEnum = {
  cod_status: 'cod_status',
  desc_status: 'desc_status',
};

exports.Prisma.TarefaScalarFieldEnum = {
  cod_tarefa: 'cod_tarefa',
  nome_tarefa: 'nome_tarefa',
  codpro_tarefa: 'codpro_tarefa',
  codrec_tarefa: 'codrec_tarefa',
  dtsol_tarefa: 'dtsol_tarefa',
  dtaprov_tarefa: 'dtaprov_tarefa',
  dtprevent_tarefa: 'dtprevent_tarefa',
  hrest_tarefa: 'hrest_tarefa',
  hratesc_tarefa: 'hratesc_tarefa',
  margem_tarefa: 'margem_tarefa',
  status_tarefa: 'status_tarefa',
  ordem_tarefa: 'ordem_tarefa',
  cod_area: 'cod_area',
  estimado_tarefa: 'estimado_tarefa',
  cod_tipotrf: 'cod_tipotrf',
  codrecresp_tarefa: 'codrecresp_tarefa',
  hrreal_tarefa: 'hrreal_tarefa',
  fatest_tarefa: 'fatest_tarefa',
  cod_fase: 'cod_fase',
  valini_tarefa: 'valini_tarefa',
  valfim_tarefa: 'valfim_tarefa',
  perimp_tarefa: 'perimp_tarefa',
  dtinc_tarefa: 'dtinc_tarefa',
  perc_tarefa: 'perc_tarefa',
  fatura_tarefa: 'fatura_tarefa',
  valida_tarefa: 'valida_tarefa',
  vrhr_tarefa: 'vrhr_tarefa',
  obs_tarefa: 'obs_tarefa',
  limmes_tarefa: 'limmes_tarefa',
  exibecham_tarefa: 'exibecham_tarefa',
};

exports.Prisma.Tela_sistemaScalarFieldEnum = {
  cod_tela: 'cod_tela',
  cod_modulo: 'cod_modulo',
  desc_tela: 'desc_tela',
};

exports.Prisma.TelefoneScalarFieldEnum = {
  cod_telefone: 'cod_telefone',
  cod_lista: 'cod_lista',
  ddd_telefone: 'ddd_telefone',
  numero_telefone: 'numero_telefone',
  desc_telefone: 'desc_telefone',
};

exports.Prisma.TipotrfScalarFieldEnum = {
  cod_tipotrf: 'cod_tipotrf',
  nome_tipotrf: 'nome_tipotrf',
};

exports.Prisma.TpdespScalarFieldEnum = {
  cod_tpdesp: 'cod_tpdesp',
  nome_tpdesp: 'nome_tpdesp',
};

exports.Prisma.UsuarioScalarFieldEnum = {
  cod_usuario: 'cod_usuario',
  nome_usuario: 'nome_usuario',
  id_usuario: 'id_usuario',
  senha: 'senha',
  tipo_usuario: 'tipo_usuario',
  permtar_usuario: 'permtar_usuario',
  altsen_usuario: 'altsen_usuario',
  perproj1_usuario: 'perproj1_usuario',
  perproj2_usuario: 'perproj2_usuario',
  tela1_usuario: 'tela1_usuario',
  tela2_usuario: 'tela2_usuario',
  tela3_usuario: 'tela3_usuario',
  tela4_usuario: 'tela4_usuario',
};

exports.Prisma.ValorScalarFieldEnum = {
  codproj_valor: 'codproj_valor',
  codtipo_valor: 'codtipo_valor',
  preco_valor: 'preco_valor',
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
  acesso_sistema: 'acesso_sistema',
  agenrec: 'agenrec',
  area: 'area',
  avaliacao: 'avaliacao',
  avaliado: 'avaliado',
  chamado: 'chamado',
  cidade: 'cidade',
  classificacao: 'classificacao',
  cliente: 'cliente',
  composicao: 'composicao',
  contato: 'contato',
  ctiss: 'ctiss',
  despesa: 'despesa',
  desprec: 'desprec',
  empresa: 'empresa',
  fase: 'fase',
  fatdes: 'fatdes',
  fatfun: 'fatfun',
  fatrec: 'fatrec',
  fatura: 'fatura',
  faturamento: 'faturamento',
  grupo: 'grupo',
  histchamado: 'histchamado',
  itavaliado: 'itavaliado',
  itmatriz: 'itmatriz',
  layout: 'layout',
  lista: 'lista',
  matriz: 'matriz',
  mensagem: 'mensagem',
  meta: 'meta',
  modulo_sistema: 'modulo_sistema',
  nfse: 'nfse',
  nivel: 'nivel',
  os: 'os',
  parametros: 'parametros',
  parcela: 'parcela',
  pauta: 'pauta',
  ponto: 'ponto',
  projeto: 'projeto',
  recurso: 'recurso',
  rescon: 'rescon',
  status: 'status',
  tarefa: 'tarefa',
  tela_sistema: 'tela_sistema',
  telefone: 'telefone',
  tipotrf: 'tipotrf',
  tpdesp: 'tpdesp',
  usuario: 'usuario',
  valor: 'valor',
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
            runtime.prettyName +
            '`).';
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      },
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
