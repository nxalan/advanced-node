export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '560181972319994',
    clientSecret: process.env.FB_CLIENT_SECRET ?? 'b03d0d125ffa3ed22e08a450e0147bc0'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '2j3j2382jd'
}
