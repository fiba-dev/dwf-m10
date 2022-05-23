import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";
export function refreshPage() {
	window.location.reload();
}
function useMe() {
	const { data, error } = useSWR("/me", fetchApi);
	return data;
}
async function editMe({ nombre, direccion, telefono }: any) {
	return await fetchApi("/me", {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: { nombre, direccion, telefono },
	});
}
function useProducts(productId: any) {
	const { data, error } = useSWRImmutable(
		() => (productId ? "/products/" + productId : null),
		fetchApi
	);
	return data;
}
function useSearchProducts(q: any, offset: any = 0, limit: any = 5) {
	const url = q
		? +"/search?q=" + q + "&offset=" + offset + "&limit=" + limit
		: null;
	const { data, error } = useSWRImmutable(
		() =>
			q ? "/search?q=" + q + "&offset=" + offset + "&limit=" + limit : null,
		fetchApi
	);
	return data;
}
async function createOrder(productId: any, quantity: number) {
	return productId
		? await fetchApi("/order?productId=" + productId, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { quantity },
		  })
		: false;
}
async function getOrder(externalReference: any) {
	return externalReference
		? await fetchApi("/order/" + externalReference, {
				headers: { "Content-Type": "application/json" },
		  })
		: false;
}
export { useProducts, useMe, useSearchProducts, editMe, createOrder, getOrder };
