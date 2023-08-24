/* eslint-disable react-hooks/rules-of-hooks */
import { usePathname } from "next/navigation";

export const currPath = (): string => {return usePathname().slice(1)} 