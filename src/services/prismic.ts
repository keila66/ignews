import * as prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const endpoint = prismic.getRepositoryEndpoint(process.env.PRISMIC_REPO);
  const clientPrismic = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return clientPrismic;
}
