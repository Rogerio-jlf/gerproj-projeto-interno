'use client';

import { useAuth } from '@/contexts/Auth_Context';
import { useFiltersDashboard } from '@/contexts/postgre/Filters_Dashboard_Context';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

// Importando os componentes individuais
import SelectAno from '@/components/filtros/Select_Ano';
import SelectCliente from '@/components/filtros/Select_Clientes';
import SelectMes from '@/components/filtros/Select_Mes';
import SelectRecurso from '@/components/filtros/Select_Recursos';
import SelectStatus from '@/components/filtros/Select_Status';

interface FiltersProps {
  onFiltersChange: (filters: {
    ano: number;
    mes: number;
    cliente: string;
    recurso: string;
    status: string;
  }) => void;
}

// FETCH CLIENTES
const fetchClientes = async ({ ano, mes, isAdmin, codCliente }: any) => {
  const params = new URLSearchParams({
    ano: ano.toString(),
    mes: mes.toString(),
    isAdmin: isAdmin.toString(),
  });
  if (!isAdmin && codCliente) params.append('codCliente', codCliente);
  const { data } = await axios.get(
    `/api/postgre-SQL/apontamentos-view/filtros/clientes?${params}`
  );
  if (!Array.isArray(data)) throw new Error('Resposta inesperada');
  return data;
};

// FETCH RECURSOS
const fetchRecursos = async ({
  ano,
  mes,
  isAdmin,
  codCliente,
  clienteSelecionado,
}: any) => {
  const params = new URLSearchParams({
    ano: ano.toString(),
    mes: mes.toString(),
    isAdmin: isAdmin.toString(),
  });
  if (!isAdmin && codCliente) params.append('codCliente', codCliente);
  if (isAdmin && clienteSelecionado)
    params.append('cliente', clienteSelecionado);
  const { data } = await axios.get(
    `/api/postgre-SQL/apontamentos-view/filtros/recursos?${params}`
  );
  if (!Array.isArray(data)) throw new Error('Resposta inesperada');
  return data;
};

// FETCH STATUS
const fetchStatus = async ({
  ano,
  mes,
  isAdmin,
  codCliente,
  clienteSelecionado,
  recursoSelecionado,
}: any) => {
  const params = new URLSearchParams({
    ano: ano.toString(),
    mes: mes.toString(),
    isAdmin: isAdmin.toString(),
  });
  if (!isAdmin && codCliente) params.append('codCliente', codCliente);
  if (isAdmin && clienteSelecionado)
    params.append('cliente', clienteSelecionado);
  if (recursoSelecionado) params.append('recurso', recursoSelecionado);
  const { data } = await axios.get(
    `/api/postgre-SQL/apontamentos-view/filtros/status?${params}`
  );
  if (!Array.isArray(data)) throw new Error('Resposta inesperada');
  return data;
};

export default function Filtros({}: FiltersProps) {
  const hoje = new Date();
  const { filters, setFilters } = useFiltersDashboard();
  const { isAdmin, codCliente } = useAuth();

  const [ano, setAno] = useState(filters.ano || hoje.getFullYear());
  const [mes, setMes] = useState(filters.mes || hoje.getMonth() + 1);
  const [clienteSelecionado, setClienteSelecionado] = useState(
    filters.cliente || ''
  );
  const [recursoSelecionado, setRecursoSelecionado] = useState(
    filters.recurso || ''
  );
  const [statusSelecionado, setStatusSelecionado] = useState(
    filters.status || ''
  );

  const [debouncedAno] = useDebounce(ano, 300);
  const [debouncedMes] = useDebounce(mes, 300);
  const [debouncedClienteSelecionado] = useDebounce(clienteSelecionado, 300);
  const [debouncedRecursoSelecionado] = useDebounce(recursoSelecionado, 300);
  const [debouncedStatusSelecionado] = useDebounce(statusSelecionado, 300);

  // CLIENTES
  const { data: clientes = [], isLoading: loadingClientes } = useQuery({
    queryKey: ['clientes', ano, mes, isAdmin, codCliente],
    queryFn: () => fetchClientes({ ano, mes, isAdmin, codCliente }),
    enabled: !!ano && !!mes,
  });

  useEffect(() => {
    setClienteSelecionado('');
    setRecursoSelecionado('');
    setStatusSelecionado('');
  }, [clientes]);

  // RECURSOS
  const { data: recursos = [], isLoading: loadingRecursos } = useQuery({
    queryKey: ['recursos', ano, mes, isAdmin, codCliente, clienteSelecionado],
    queryFn: () =>
      fetchRecursos({ ano, mes, isAdmin, codCliente, clienteSelecionado }),
    enabled: !!ano && !!mes && (!!isAdmin || !!codCliente),
  });

  useEffect(() => {
    setRecursoSelecionado('');
    setStatusSelecionado('');
  }, [recursos]);

  // STATUS
  const { data: statusList = [], isLoading: loadingStatus } = useQuery({
    queryKey: [
      'status',
      ano,
      mes,
      isAdmin,
      codCliente,
      clienteSelecionado,
      recursoSelecionado,
    ],
    queryFn: () =>
      fetchStatus({
        ano,
        mes,
        isAdmin,
        codCliente,
        clienteSelecionado,
        recursoSelecionado,
      }),
    enabled: !!ano && !!mes && (!!isAdmin || !!codCliente),
  });

  useEffect(() => {
    setStatusSelecionado('');
  }, [statusList]);

  useEffect(() => {
    setFilters({
      ano: debouncedAno,
      mes: debouncedMes,
      cliente: debouncedClienteSelecionado,
      recurso: debouncedRecursoSelecionado,
      status: debouncedStatusSelecionado,
    });
  }, [
    debouncedAno,
    debouncedMes,
    debouncedClienteSelecionado,
    debouncedRecursoSelecionado,
    debouncedStatusSelecionado,
    setFilters,
  ]);

  return (
    <div className="">
      <div className="hidden lg:block">
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <SelectAno value={ano} onChange={setAno} />

            <SelectMes value={mes} onChange={setMes} />

            <SelectCliente
              value={clienteSelecionado}
              onChange={setClienteSelecionado}
              clientes={clientes}
              disabled={!!codCliente}
            />

            <SelectRecurso
              value={recursoSelecionado}
              onChange={setRecursoSelecionado}
              recursos={recursos}
            />

            <SelectStatus
              value={statusSelecionado}
              onChange={setStatusSelecionado}
              statusList={statusList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
