import notion from '.';

export const getAllPageIds = async () => {
  const res = await notion.search({
    filter: {
      value: 'page',
      property: 'object',
    },
  });

  const pageIds: string[] = res.results.map((result: any) => result.id);
  return pageIds;
};
