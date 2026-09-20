// Simulates the *shape* of a JWT (header.payload.signature) for learning purposes.
// It is NOT cryptographically signed — never use this pattern for real authentication.

const FAKE_HEADER = btoa(JSON.stringify({ alg: 'none', typ: 'JWT-SIM' }))

export function createToken(data, expiresInMs = 1000 * 60 * 60 * 24) {
  const payload = {
    ...data,
    iat: Date.now(),
    exp: Date.now() + expiresInMs,
  }
  const encodedPayload = btoa(JSON.stringify(payload))
  return `${FAKE_HEADER}.${encodedPayload}.simulated-signature`
}

export function parseToken(token) {
  try {
    const [, payloadPart] = token.split('.')
    return JSON.parse(atob(payloadPart))
  } catch {
    return null
  }
}

export function isTokenExpired(payload) {
  return !payload?.exp || Date.now() > payload.exp
}
