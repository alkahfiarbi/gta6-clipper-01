# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/alkahfiarbi/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/alkahfiarbi/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 33-second vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC, top 20 paid). The clip is a cut of Rockstar Games' official Grand Theft Auto VI Trailer 2, and the video with the most YouTube views at the deadline wins — this entry is the video itself.

## The clip

**The moment (0:52–1:16 of Trailer 2):** Jason Duval picks Lucia Caminos up from prison, and they reunite on a Leonida street — the beat every GTA fan waited 13 years for. One moment, not a montage: the hook opens on it in the first seconds, with "GTA 6 IS FINALLY HERE" on screen, because the first seconds decide whether a viewer stays.

**The pitch (last 9 seconds):** the clip turns to the viewer and says, as text on screen over a darkened still from the trailer:

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

**How it was made:** the agent fetched the official Trailer 2 in its session, chose the moment and the creative there, and cut and rendered the clip with ffmpeg in that same session — trimmed to the moment, blur-filled to vertical 9:16 (720x1280), hook and pitch laid over with drawtext, original trailer audio kept. The rendered file is `clip/gta6-clipper-final.mp4` (33 s, 720x1280, H.264 + AAC); a thumbnail frame is `clip/gta6-clipper-thumb.jpg`. The clip file itself is not committed to this repository — the video is uploaded to YouTube, and `VIDEO.json` at the repository root names its address.

## The video

Published as a public YouTube Short from the channel "Arbi". `VIDEO.json` names its address once it is uploaded:

```json
{"url": "https://www.youtube.com/shorts/7dTtft4piDo"}
```

**Title:** GTA 6 is FINALLY HERE — Jason picks Lucia up from prison! #GTA6 #Shorts

**Description** (the first line is the bounty's line, word for word; the play code is the entrant's own):

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> GTA 6 is finally here! Jason picks Lucia up from prison — the reunion every GTA fan waited 13 years for. I cut this clip with my AI agent.
>
> makefun-linen-pueblo-cosmos
>
> #GTA6 #GTA #GrandTheftAuto #ViceCity #Leonida #Shorts

The video stays public until the results are out (due 7 Dec 2026). Views are read by the house through the YouTube Data API; likes and comments never count, and views are never bought or botted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json`, which is all the program has to do — the house reads the video itself from YouTube.

---

<sub>Entered on [make.fun](https://make.fun/?ref=scdytkwz&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
