import { ContentfulClientApi, Entry } from "contentful";
import contentfulClient from "./contentful";
import { ICmsAPI } from "./types";

class CmsAPI implements ICmsAPI {
  client: ContentfulClientApi;
  constructor(client: ContentfulClientApi) {
    this.client = client;
  }

  fetchEntries(query: any) {
    return this.client.getEntries(query);
  }

  getUserDetails() {
    return this.fetchEntries({
      content_type: "personalDetails",
    });
  }

  getBlogPosts(handler: (items: Entry<unknown>[]) => void) {
    this.fetchEntries({
      content_type: "blogPost",
    }).then((response) => {
      handler(response.items);
    });
  }

  getSinglePost(slug: string) {
    this.fetchEntries({
      "fields.slug": slug,
      content_type: "blogPost",
    }).then((response) => response.items);
  }
}

export default new CmsAPI(contentfulClient);
