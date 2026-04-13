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
2. `fly auth signup` (or `fly auth login`)
3. **Set a spend cap before first deploy.** Go to https://fly.io/dashboard → your org → Billing → Spend Management. Set a hard limit (recommend **$5/month**). Fly will stop machines rather than bill past this — it's the kill switch against surprise bills.
4. In the project dir: `fly launch --no-deploy --copy-config --name imposter-game`
   - This reads the existing `fly.toml` instead of generating a new one.
5. Deploy: `fly deploy`

Your app lives at https://imposter-game.fly.dev.

## Cost controls baked in

- `auto_stop_machines = "stop"` + `min_machines_running = 0` — VM sleeps when idle, $0 while sleeping.
- Single region, single `shared-cpu-1x` 256 MB machine — no autoscaling, no multi-region multiplier.
- HTTP rate limit: 120 req/min per IP (`express-rate-limit`).
- Socket.IO: 8 concurrent connections per IP max, 15 events/sec per socket, 4KB max payload.
- Cap of 500 rooms and 8 players per room.
- **Fly spend cap** (set via dashboard) is the absolute ceiling.

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
