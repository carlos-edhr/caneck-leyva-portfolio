const config = {
  appName: "Caneck Leyva - Portafolio",
  appDescription:
    "Professional photography website for the artwork of Caneck Leyva.",
  domainName:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_APP_URL
      : "http://localhost:3000",
};

export default config;
