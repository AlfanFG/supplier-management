import { useQuery } from "@tanstack/react-query";

import API from "../../../api/api";

export interface Contact {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string | null;
	supplierId: number;
	name: string;
	jobPosition: string;
	email: string;
	phone: string;
	mobile: string;
	isMain: boolean;
}

export interface ISupplier {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string | null;
	name: string;
	code: string;
	number: string;
	shortName: string;
	address: string;
	contact: string;
	status: string;
	contacts: Contact[];
}

export interface ISupplierFetch {
	offset: number;
	limit: number;
}

const fetchSuppliers = async (params: Partial<ISupplierFetch>) => {
	const response = await API.get("/suppliers", { params });
	// assume API returns { data: Supplier[] } or paginated { data: Supplier[], meta: ... }
	const raw = response.data?.data || [];
	const mapped = (Array.isArray(raw) ? raw : []).map((s: ISupplier) => ({
		key: String(s.ID),
		id: s.ID,
		name: s.name,
		code: s.code,
		number: s.number,
		shortName: s.shortName,
		address: s.address,
		contact: s.contacts && s.contacts.length ? s.contacts[0].name : s.contact || "",
		status: s.status || "",
	}));
	return mapped;
};

export const useFetchSupplier = ({
	limit,
	offset,
}: Partial<ISupplierFetch> = {}) => {
	return useQuery({
		queryKey: ["supplier", offset, limit],
		queryFn: () => fetchSuppliers({ limit, offset }),
		refetchOnWindowFocus: false,
		retry: 1,
		retryDelay: 1000,
	});
};
