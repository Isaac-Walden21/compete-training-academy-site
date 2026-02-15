interface RateRecord {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 8;

const leadRateMap = new Map<string, RateRecord>();

function cleanupExpired(now: number) {
  for (const [key, record] of leadRateMap) {
    if (record.resetAt <= now) {
      leadRateMap.delete(key);
    }
  }
}

export function checkLeadRateLimit(ip: string) {
  const now = Date.now();
  cleanupExpired(now);

  const existing = leadRateMap.get(ip);

  if (!existing) {
    leadRateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (existing.resetAt <= now) {
    leadRateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (existing.count >= MAX_REQUESTS) {
    return false;
  }

  existing.count += 1;
  leadRateMap.set(ip, existing);
  return true;
}

export function resetLeadRateLimit() {
  leadRateMap.clear();
}
