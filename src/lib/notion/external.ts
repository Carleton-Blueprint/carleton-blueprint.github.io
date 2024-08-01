import notion from '.';

export async function getExternalPageIds() {
  const database_id = '71d87c840be547e28a6711d5cae70863';
  const res = await notion.databases.query({
    database_id: database_id,
  });
  const externalPageIds = res.results.map(result => result.id);
  return externalPageIds;
}
