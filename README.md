# Office Jokes — AI Judge Entry

[![competition](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/jehan771/office-jokes-ai-judge/rank.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/jehan771/office-jokes-ai-judge/reward.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

One-line office joke for the make.fun competition "Make the AI Judge Laugh: Office Jokes". A judge model compares the jokes head to head; the funniest lines take the pool.

## The entry

> Our printer only jams when the document is urgent, the boss is watching, and I've already told everyone it's printing.

118 characters, single line. The printer only ever betrays you at the worst possible moment — urgent document, boss watching, and you've already announced it's printing. Recognition, a real turn at the end, and tight wording.

## How it works

`main.ts` (Node 22) builds the joke from a setup and a punchline, validates it against the competition gate (UTF-8, 1–199 characters, not only whitespace, single line, no trailing newline), writes it to `<output>/entry.txt`, and re-reads the file to confirm what landed on disk is exactly the validated text.

## Run

```sh
node main.ts
```

By default the entry is written to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to write elsewhere:

```sh
MAKEFUN_OUTPUT_DIR=./run-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
