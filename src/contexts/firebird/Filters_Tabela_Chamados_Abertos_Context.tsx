'use client';

import { createContext, useContext, useState } from 'react';

// Define a interface para o estado dos filtros de chamados abertos
export interface FiltersProps {
  ano: number;
  mes: number;
  cliente: string;
  recurso: string;
  status: string;
  codChamado?: string;
}

// Define a interface para o contexto dos filtros de chamados abertos
interface FiltersContextProps {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
  clearFilters: () => void;
}

// Cria o contexto dos filtros de chamados abertos, inicialmente indefinido
const FiltersTabelaChamadosAbertosContext = createContext<
  FiltersContextProps | undefined
>(undefined);

// Função auxiliar para obter o estado inicial dos filtros (ano e mês atuais)
const getInitialFilters = (): FiltersProps => {
  const hoje = new Date();
  return {
    ano: hoje.getFullYear(),
    mes: hoje.getMonth() + 1,
    cliente: '',
    recurso: '',
    status: '',
    codChamado: '',
  };
};

// Componente provedor do contexto dos filtros de chamados abertos
export function FiltersTabelaChamadosAbertosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado dos filtros e função para atualizá-lo
  const [filters, setFilters] = useState<FiltersProps>(getInitialFilters());

  // Função para limpar os filtros (voltar ao estado inicial)
  const clearFilters = () => setFilters(getInitialFilters());

  // Retorna o provedor do contexto, disponibilizando os valores e funções
  return (
    <FiltersTabelaChamadosAbertosContext.Provider
      value={{ filters, setFilters, clearFilters }}
    >
      {children}
    </FiltersTabelaChamadosAbertosContext.Provider>
  );
}

// Hook customizado para acessar o contexto dos filtros de chamados abertos
export function useFiltersTabelaChamadosAbertos() {
  const context = useContext(FiltersTabelaChamadosAbertosContext);
  if (context === undefined) {
    throw new Error(
      'useFiltersTabelaChamadosAbertos deve ser chamado dentro de um FiltersTabelaChamadosAbertosProvider'
    );
  }
  return context;
}
