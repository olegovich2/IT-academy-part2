export const handleRequestResolve = () => (response) => {
	if (response.ok) return response.json();
	else throw new Error('response not found');
};
export const handleRequestReject = () => (error) => {
	console.log(error);
};
