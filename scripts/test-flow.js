const { io } = require('socket.io-client');

const URL = 'http://localhost:3456';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const host = io(URL);
  const p1 = io(URL);
  const p2 = io(URL);

  const log = (who) => (ev) => (...args) => console.log(`[${who}]`, ev, JSON.stringify(args).slice(0, 200));
  for (const s of [host, p1, p2]) {
    const name = s === host ? 'host' : s === p1 ? 'p1' : 'p2';
    s.onAny((ev, ...args) => console.log(`[${name}]`, ev, JSON.stringify(args).slice(0, 180)));
  }

  await wait(150);
  let code;
  host.on('joined', (d) => { code = d.code; });

  host.emit('create-room', { playerName: 'Host' });
  await wait(200);
  p1.emit('join-room', { code, playerName: 'P1' });
  p2.emit('join-room', { code, playerName: 'P2' });
  await wait(300);

  host.emit('start-game');
  await wait(200);
  host.emit('next-round'); // → round 1
  await wait(100);
  host.emit('next-round'); // → round 2
  await wait(100);
  host.emit('next-round'); // → round 3
  await wait(100);
  host.emit('next-round'); // → voting
  await wait(200);

  // Check who the imposter is (we'll infer from your-role events later)
  // For test: have everyone vote for the host (who is imposter in my earlier run)
  host.emit('submit-vote', { votedId: p1.id });
  p1.emit('submit-vote', { votedId: host.id });
  p2.emit('submit-vote', { votedId: host.id });
  await wait(300);

  host.emit('reveal-imposter');
  await wait(300);

  // If imposter_guess, guess wrong
  host.emit('imposter-guess', { guess: 'nope' });
  p1.emit('imposter-guess', { guess: 'nope' });
  p2.emit('imposter-guess', { guess: 'nope' });
  await wait(300);

  console.log('--- sending play-again ---');
  host.emit('play-again');
  await wait(500);

  host.disconnect();
  p1.disconnect();
  p2.disconnect();
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
