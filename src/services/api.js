const apiUrl = CONFIG.apiUrl

export async function teste() {
  const response = await fetch(`${apiUrl}/hello`);
  if (!response.ok) {
    throw new Error("Erro na API: " + response.status);
  }
  return response.json();
}