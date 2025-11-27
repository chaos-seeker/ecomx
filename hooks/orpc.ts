import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { orpc } from "@/app/providers";
import type { AppRouter } from "@/server/router";
import type { RouterClient } from "@orpc/server";

type ProcedureName = keyof RouterClient<AppRouter>;
type ProcedureReturnType<T extends ProcedureName> = Awaited<
  ReturnType<(typeof orpc)[T]>
>;

export function useOrpc<T extends ProcedureName>(
  procedureName: T
): UseQueryResult<ProcedureReturnType<T>> {
  return useQuery({
    queryKey: [procedureName],
    queryFn: async () => {
      const procedure = orpc[procedureName];
      if (typeof procedure !== "function") {
        throw new Error(`Procedure ${String(procedureName)} is not callable`);
      }
      return procedure(undefined);
    },
  }) as UseQueryResult<ProcedureReturnType<T>>;
}

