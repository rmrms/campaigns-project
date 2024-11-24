export default async function getCampaigns() {
  const response = await fetch("/assets/json/campaigns.json");
  const data = response.json;
  return data;
}
