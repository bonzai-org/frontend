## Overview

Bonsai Book is a platform for users to upload their bonsai, to view others’ bonsai, and to search bonsai by categories (e.g. species, geographical location, etc.). Bonsai Book is free, and anybody can view the bonsai posted there. Registered users can upload their own bonsai, and have commenting and voting privileges. 

There are several popular bonsai forums where users post their bonsai, but none that offer the  easy access, standardization, and long-term portrayal of living things that Bonsai Book is built for.

## Why?

Because there is no centralized, standardized place to look up an answer to a simple question: “Can I make a bonsai of this? If so, can I see some examples?”. Current options include subreddits like r/Bonsai, and forums like Bonsai Nut. 

r/Bonsai is a great resource, as is Bonsai Nut. However, both have significant weaknesses. r/Bonsai is, of course, a subreddit—although there are some rules, it’s still a glorified bulletin board with little in the way of standardization. Flexibility and versatility are its strengths; it is not tailored to bonsai, or to the bonsai community. Reddit is, of course, a massive company; it has no reason to create a specialized bonsai platform.

Bonsai Nut is a traditional forum. Initially built in (or before) 2010, it shows its age, and has the same primary shortcoming as r/Bonsai: bonsai are not standardized. That makes them difficult to search, digest, and compare. On top of that, an account is required to view the site’s images in anything other than what is essentially a thumbnail. 

Bonsai Nut could, theoretically, create a new feature that provides the services of Bonsai Book. However, it would likely face some significant friction in and such attempt. Namely, it’s been around for 14+ years; it’s entrenched, as are its users when it comes to how they think of the platform. Finally, simply adding a Bonsai Book-esque feature to the site would suffer from clutter, as well as the legacy issues of the site (e.g. log in required for image viewing). In sum, it would make more sense to start from scratch.

In contrast, Bonsai Book is built, directly and simply, as an answer to this specific question. It is a searchable, interactive database that presents data in a chapter-based format (inspired by Martin Treasure’s Bonsai Life Histories) that is designed to convey the journey of a tree through time. It leverages a modern tech stack—React, Typescript, Node, MongoDB. It’s a specialized, standardized, intuitive, and brand-new solution to a distinct, unanswered problem.

## Who is it for?

This platform is primarily geared toward new practitioners, and people who are curious about bonsai. However, "people who are curious about bonsai" means not only those who are considering adopting the hobby, but anyone who is still seeking to learn, to admire, to find inspiration. In short, all except perhaps a select few wizened old masters.

## Use Cases

- **Feasability**:

Say a user in Los Angeles takes a trip up to Seattle, where they stop at the Pacific Bonsai Museum, see the Domoto maple, and are inspired. They want to know, “Could I grow this at home?”  The best answer is often an example. They go to Bonsai Book, and search for trident maples in Los Angeles (or, more specifically, in their USDA hardiness zone). Each result this search returns is an authentic answer to their question.

- **Styling tips**:

Up the coast, in San Francisco, a user just went to their first meeting of the San Francisco Bonsai Club, and came home with a coastal live oak pre-bonsai. They’re excited, but they have no idea what to do, what to expect. They search coastal live oak on Bonsai Book, and scroll through a few results to get an idea of how the trees grow, and the techniques that can be used to shape that growth.

- **Show and tell**:

From that same club, a relatively new practitioner finally has a mature piece that they’re really proud of, and they want to show off. They upload their piece to Bonsai Book, and watch as upvotes and comments slowly accumulate, and their bonsai eventually gains a place on their home page (a measurement of a bonsai’s popularity).

- **Discussing work**:

A new user sees this popular bonsai on their own home page. Curious, they post a comment asking how they achieved their remarkable ‘grown on a rock’ effect. The bonsai’s poster replies, and a discussion ensues.

## Impetus/Origin Story

Bonsai Book sprang forth, as so many ideas do, from a walk. Strolling along, I noticed a tree, and wondered to myself, “Could that be a bonsai?”. 

This question had come to me many times before. As such, I knew my options if I wanted an answer: I could Google the question; I could search bonsai forums; I could search Reddit. I could likely find an answer somewhere along the way. Perhaps there would even be some pictures to support it. But I would have to search, to comb through results, to work for it—and for what? A single, likely quite dated, picture of a tree, probably with little to no information about how it was grown, and how it turned out.

Walking along, I thought how nice it would be to have a centralized, standardized platform for all the bonsai data scattered across the internet. There are a great many bonsai practitioners who would like to share their work with others, to connect and feel appreciated; there are even more people who would like to see their work, to appreciate its beauty, to learn from it, to find inspiration. That thought was the genesis of Bonsai Book, a website where you can search bonsai by species, geolocation, hardiness zone, style, etc., and find real trees whose progression is clearly documented and displayed, along with relevant categorical information.


## How It Works

Bonsai Book offers a user-friendly interface for viewing, uploading, and interacting with bonsai data through a structured, chapter-based format.

Information on Bonsai Book (actual bonsai data, that is) is public by default; it’s intended as a resource for anybody to use. No account is necessary to view this.

However, if one wishes to post bonsai, comment on bonsai, or vote on bonsai (think reddit up and down votes), a user must be registered and authenticated.

Bonsai are presented in a chapter-based format. Each instance has general, categorical data associated with it (see bonsai data fields below). This general information is complemented by chapters.  Chapters consist of a series of photos representing the state of the bonsai at a certain time, supplemented by a caption to provide context, and a date representing the approximate time period of the chapter. 

To fully understand a bonsai’s categorical data, some very minor knowledge of bonsai and horticultural terminology is required. See the bonsai data fields section for details.

To understand the progression of a bonsai, users can scroll through the chapters. In the process, they can get an idea of how it grew, the decisions the owner made, and how the bonsai responded to those choices.

## Viewing Bonsai

Bonsai Book’s home page is a dynamic representation of the most liked bonsai at the current moment. This is calculated simply: sort bonsai by net votes (up minus down) in descending order, limited by a period of time which can be selected by the user.

Clicking on any individual bonsai card from the home page will take you to that bonsai’s page, which includes all categorical information (height, width, etc.) and allows the user to navigate through chapters as well as the images that make up each chapter. Authenticated users also have the ability to vote and comment. This can serve as a forum for the bonsai owner to discuss their work by answering questions and further explaining the rationale behind their decisions.

Users can also find bonsai based on their categorical information by utilizing the search feature. For instance, if a user in San Francisco wanted to see local examples of pomegranate bonsai, they could search by the following category values: `species=pomegranate` and `geolocation=San Francisco, CA`. They would then see all trees that met the criteria, ordered by likes (descending). After scrolling through some results, perhaps the user decides they’re most interested in larger bonsai of the upright informal style. They could then filter their results by selecting `height>15cm` and `style=upright formal`.

## Authentication

Prior to logging in, users must sign up. To do so, the user selects the log-in/register link located in the top right of the screen. From there, they need only enter a username (that is valid and available), email, and password. They then receive an email with a verification link, which can be confirmed with a single click, and that’s it. Simple and standard.

To log in, the user selects the log-in/register link and enters their username and password.

## Bonsai Upload

Authenticated users have the ability to upload their bonsai. This can be done by clicking on the user icon in the top right corner, then selecting the upload link from the slide-out menu. From there, users can enter categorical bonsai data, create bonsai chapters, then review and edit their submission prior to uploading it.

## Bonsai Data Fields

All measurements are in cm for international standardization. All measurement fields (height, width, nebari) and the style field are optional; this decision was made to make it easier for users to post their bonsai (especially pre-bonsai and early-stage bonsai).

- **Hardiness Zone**: A geographic area ranging from 0a to 13b defined by its average annual minimum winter temperature. This can help determine what plants can survive in a given area. To determine this, search “Hardiness zones [insert user area e.g., Europe]” and consult the resulting map.
- **Height**: Measured from the soil to the apex (tallest point) of the bonsai.
- **Width**: The maximum diameter of the tree measured parallel to the ground.
- **Nebari**: The maximum diameter of exposed roots measured parallel to the ground.
- **Bonsai style**: The general form of the tree. For visual examples, consult Bonsai Empire.
- **Species**: Type the name by which you know the tree (e.g., Pomegranate).
  - _Note_: To enforce greater standardization with the intent of making bonsai easier to search, Bonsai Book will eventually implement autocomplete or some other manner of category selection.
- **Geolocation**: Type your geographical location (e.g., San Francisco, CA or Ithaca, NY).
  - _Note_: Again, autocomplete or something similar will eventually be implemented to more accurately group data points.

## Bonsai Chapter Upload

A bonsai chapter consists of an array of photos, a caption explaining the current state of the bonsai, and a date to represent the time period of the chapter.

The user can upload as many photos as they like (though this will likely change as the platform grows) via the “Choose File” button. These photos will then be displayed in a photo preview pane at the bottom of the page. Users can remove a photo by clicking the red “x” in the top right corner of each photo. To reorder photos, simply drag and drop them into position. Place the best photo first, as this is all that users will see from the home page and will be the first image they see in each chapter on the bonsai’s page.

The chapter caption can be entered by simply typing in the caption input. It should be as descriptive as possible and tell a story about the current stage of the tree, along with any information needed to bridge the gap between the preceding and succeeding chapter.

The date can be typed in or selected using the date selector. This can be approximate but should at minimum represent the year and season in which the photos were taken (all photos should be from the same year and season).

- To submit the chapter and move on to the next step, click “submit.”
- To submit the current chapter and add another chapter, click “add new chapter.”
- To discard the current chapter and go to the review submission page (available only if a chapter has already been submitted), click the bottom button “Go to review and submit.”

## Bonsai Review and Submit

At this stage, the user has the opportunity to review their bonsai submission.

- To edit bonsai categorical data, click the “Edit bonsai data” button.
- To edit or delete a specific chapter, click the relevant button under the chapter image preview. Click the left and right buttons to navigate through a chapter’s images.
- To add a new chapter, simply click the “add new chapter” button to be returned to the chapter upload page.
- Finally, to submit the bonsai, click “upload bonsai.” To delete, click “discard bonsai.”

With these final steps, users can ensure their bonsai entries are accurate and complete before sharing them with the community.
