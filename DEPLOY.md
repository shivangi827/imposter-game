# Deploying the Imposter Game

## Local dev

```bash
npm install
npm run dev   # tsx watch + esbuild for client
```

Open http://localhost:3000.

## Production build (local test)

```bash
npm run build
npm start
```

## Fly.io deploy

**One-time setup:**

1. Install flyctl: `brew install flyctl`
2. `fly auth signup` (or `fly auth login`). The signup includes a free trial — no card required for the trial window.
3. In the project dir: `fly launch --no-deploy --copy-config` — reads the existing `fly.toml`.
4. Deploy: `fly deploy`

The app URL is printed by `fly deploy` (something like `https://<app-name>.fly.dev`).

## Cost controls

Fly does **not** offer a hard "stop at $X" spending cap — they offer **billing alerts** (email notifications) but those are warnings, not a brake. Real cost protection comes from these layers, in order of importance:

1. **App-level limits (baked into the code).** These stop a runaway bill before it starts:
   - HTTP rate limit: 120 req/min per IP (`express-rate-limit`).
   - Socket.IO: 8 concurrent connections per IP, 15 events/sec per socket, 4 KB max payload.
   - Cap of 500 rooms and 8 players per room.
2. **Machine config.** `auto_stop_machines = "stop"` + `min_machines_running = 0` — VM sleeps when idle, $0 while sleeping. Single region, single `shared-cpu-1x` 256 MB, no autoscale.
3. **Cloudflare in front** (free plan, optional but recommended). Absorbs DDoS bandwidth before it hits Fly's meter. This is where you save the most money during an attack.
4. **Billing alerts.** Set alerts at $1 / $3 / $5 in the Fly dashboard (Billing → Spend Management) so you get an email if anything is off.
5. **Manual kill switch** (see below). The actual "stop at $0" button is `fly scale count 0`, run by you.

## Kill switch

If something goes wrong:

```bash
fly scale count 0     # stops all machines; $0 until you bring it back
fly scale count 1     # resume
```

## Cloudflare (recommended, optional)

Put Cloudflare's free plan in front of the `.fly.dev` hostname (or a custom domain) so attack traffic never reaches Fly's bandwidth meter. Enable Bot Fight Mode and add a rate-limit rule.

## Environment variables

None required currently. `PORT` is set by Fly automatically.
