import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Statički sajt: metadata ide blokirajuće u <head> za sve klijente,
  // bez čitanja User-Agent hedera (uslov za instant validaciju).
  htmlLimitedBots: /.*/,
};

export default nextConfig;
