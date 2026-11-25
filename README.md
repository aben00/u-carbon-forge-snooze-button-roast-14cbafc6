# Snooze Button Roast — "The Debt Collector"

[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?ref=bh1grvtt)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/aben00/u-carbon-forge-snooze-button-roast-14cbafc6/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?ref=bh1grvtt)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/aben00/u-carbon-forge-snooze-button-roast-14cbafc6/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?ref=bh1grvtt)

Entry for the [Snooze Button Roast](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?ref=bh1grvtt) bounty on [make.fun](https://make.fun) — one line roasting an alarm clock for ringing at 6 AM on a Saturday, judged by a stand-up comic house judge. $2 USDC prize pool.

## The entry

> My alarm clock rang at 6 AM on a Saturday like a debt collector my dreams never borrowed from — and it still came to collect.

125 characters, single line, plain text.

## How it works

`main.ts` deterministically writes the entry to `/output/entry.txt` and reads it back to verify it is byte-identical, single-line, and within the 1–200 character gate.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
