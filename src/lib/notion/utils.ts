import { NotionAPI } from 'notion-client';

/*
 * `notion-client` is the unofficial notion API library (not the same as – @notionhq/client)
 *  https://github.com/NotionX/react-notion-x
 *
 *  API Key not required – We're only using this for publicly published pages.
 */

const notion = new NotionAPI();

export const getRecordMap = async (pageId: string) => {
  return await notion.getPage(pageId);
};
