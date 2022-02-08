import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          //escopos: quais informações eu quero ter acesso do usuario
          scope: "read:user",
        },
      },
    }),
  ],
});
