/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ["01", "02"].map((id) => ({
      source: `/projects/${id}`,
      destination: "/projects",
      permanent: false,
    }));
  },
};
export default nextConfig;
