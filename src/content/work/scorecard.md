---
title: Scorecard
lede: In collaboration with Lickability, I created a fun and intuitive way to keep score while playing games with friends & family.
---
### The Challenge
After working on Shelf in the second half of 2017, Lickability contacted me again in Late 2018 to work on Scorecard. The app’s goals are to make the act of keeping score while playing boardgames fun again.

### My Approach
Working together with Lickability is always a streamlined process. Since there was a version in place designed by another designer, it was quite easy for me to iterate on that. Most of the structure of the app was already in place, it just needed a visual refresh.

Using Figma, I started laying out all the components currently present in the app and created a pattern library from there. Everything from user interface chrome, buttons, icons, and colors is defined as a ‘component’ in this document so it’s easily accessible to myself as well as the developers at Lickability. Since this document acts as a ‘source of truth’, it really simplified the development process of the developers.

{% include screens with artwork: artwork.scorecard.embed__patternlibrary %}

From there, I worked on improving the design and scalability of those components before landing on a final vision of the app.

#### Designing a logical and reachable UI
With displays getting larger by the year, it was really important to me that most key actions are easily reachable without adjusting your grip. From the start, I designing with this approach in mind. The whole app is kept as logical and easy to reach as possible.

{% include screens with artwork: artwork.scorecard.embed__playerdetails %}

One part of the app that I prototyped extensively, is the ‘Player Details’ flow. After adding players to a game, the user can select a specific player to edit their name, avatar, and color. The easy way of structuring this would be to put these options in a new view, making the user stretch their fingers in order to reach the actions on screen. Instead, we opted for a modal window that’s aligned to the bottom of the display. This allows for a much more comfortable UI while, at the same, feel faster as well.

#### Making the move to iPad
As soon as we had a minimum viable version of the iPhone UI, I started working on the iPad version. To me, converting an iPhone UI to iPad isn’t just a matter of making everything wider and calling it a day. The larger display of the device allows for a much more efficient experience.

With many of the core flows of the app already designed for iPhone, I laid them all together and looked for ways how to make them more logical and performant on iPad. For example, on iPhone, we have a ‘Your Games’ view and a ‘Game Sessions’ view. We could easily have this same flow but I opted to combine these two views into one by using a list based design with a sidebar on the left of the UI. This saves the user a tap by not having to go back to ‘Your Games’ to select a different game.

{% include screens with artwork: artwork.scorecard.embed__iphonetoipad %}

Another example is the ‘Add a Game’ flow. On iPhone, we present options like game name, game color, and players in a scrolling list. We could do the same on iPad, but I opted to utilize a two-column layout to have everything on screen without the need for scrolling. This simple change makes adding and editing players faster and easier.

### Result
Scorecard was a fun project to work on. Not only did it provide a challenge in terms of making a UI reachable, but it also required a flexible design system with components that could scale to a display as large as that of iPad. After careful consideration of where UI elements went and countless iterations, we designed an efficient UI that makes keeping score fun and fast again.