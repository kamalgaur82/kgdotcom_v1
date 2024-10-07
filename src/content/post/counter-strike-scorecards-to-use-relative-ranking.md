---
publishDate: 2013-01-18T02:11:10Z
author: Kamal Gaur
title: “Counter Strike scorecards to use ‘relative ranking'” 
excerpt: Most first-person-shooter (FPS) games have a simple scoring mechanism. The number of enemies you kill is counted as your Kill score, and the number of… 
category: General
---

Most first-person-shooter (FPS) games have a simple scoring mechanism. The number of enemies you kill is counted as your **Kill score**, and the number of times you die is counted as your **Death score**. Team A’s **total Kill** **score** will typically be the Team B’s **total Death score**. Similarly, Team B’s **total Kill score** will likely be Team A’s **total Death score**. Teams that end up killing the opposing team completely in a given round end up winning that round. And then, the team that racks up the most winning rounds ends up winning the match.

[![](https://kamalgaur.com/wp-content/uploads/2013/01/cs_arabstreets0001.jpeg)](https://kamalgaur.com/wp-content/uploads/2013/01/cs%5Farabstreets0001.jpeg)

Building on this, one could calculate Kill/Death ratios, with a score above 1.0 typically showing that the player is better than the average player.

That said, this still doesn’t get into the level of nuance that these scoring mechanisms ideally ought to – which is to **differentiate the Kill scores and Death scores for every player**. The reason to do this is _because not every Kill nor every Death is equal._

* If you **_killed a good player_**, you should **_get more credit_** than if you had killed a weak player.
* Similarly, if you were **_killed by a weak player_**, then your **_score should be impacted more negatively_** than what it would have been if you’d been killed by a strong player.

This also means that **the order in which these Kills and Deaths happen play a key role**, because whenever a Kill/Death even happens, the **scores of all the players form a unique ‘fingerprint score’ for the game at that point in time**, which is always changing as players keep racking up more Kills/Deaths.

 It’d be interesting to build a simulation to see how this plays out over a sample gameplay, and how those final set of scores will stack up against a typical Kills / Deaths scorecard the way you see above.
