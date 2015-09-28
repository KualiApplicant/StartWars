# Star Wars API Viewer


## What you are building
Your task, dear friend, is to build an application using the [Star Wars
API](http://swapi.co/).

The application is a starship sales site. We are wealthy spacefarers shopping
for a new ship. We want to search for starships, sort them by cost, and filter
them by cost (if we have a starship budget we don't want to look at ships above
it.)

If there are pilots associated with the starship, we want to get more
information about them as well, because we are concerned about previous owners.

The main features of the app are, from most important to least, are:

0. See a list of all starships
0. See individual starship
0. Search list by ship name
0. Sort list by price
0. Filter list by price
0. See info on pilots attached to individual starships

Please ask if you have any questions about the requirements. The project is
deliberately open-ended because we want to see how you build it.

We want to see how far you get in two hours. You might not finish all the
features in that time and that is ok. If you really want to spend more time on
it you can, but we will evaluate primarily on the work done in the first two
hours.

Your end result should be a git repository containing code we can look at and
run. If you use GitHub, a link to a repository is perfect. If not, just sending
us a directory is fine.

We want to run the app ourselves, so please include instructions for running it
that a smart developer who might not be familiar with your tech stack could
follow.


## Examples of using the API

You can get a list of all starships by making an HTTP request to
[http://swapi.co/api/starships/](http://swapi.co/api/starships/). The list
should look something like this:

```JavaScript
{
  "count": 36,
  "next": "http://swapi.co/api/starships/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Sentinel-class landing craft",
      "model": "Sentinel-class landing craft",
      "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
      "cost_in_credits": "240000",
      "length": "38",
      "max_atmosphering_speed": "1000",
      "crew": "5",
      "passengers": "75",
      "cargo_capacity": "180000",
      "consumables": "1 month",
      "hyperdrive_rating": "1.0",
      "MGLT": "70",
      "starship_class": "landing craft",
      "pilots": [],
      "films": [
        "http://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:48:00.586000Z",
      "edited": "2014-12-22T17:35:44.431407Z",
      "url": "http://swapi.co/api/starships/5/"
    },
    // a bunch more stuff here
  ]
}
```

You can get info for a pilot by making an HTTP request to
http://swapi.co/api/people/:id.
[http://swapi.co/api/people/13/](http://swapi.co/api/people/13/) returns info
on Chewbacca.


## What we're looking for

You can use whatever tech stack, rendering platform and architectural style you
want. Web apps are most common, but you could make a robot, a terminal
application, a mobile app, or a series of moving impressionist paintings.

We build web applications in [React](http://facebook.github.io/react/), so
we've included a small starter setup to avoid some boilerplate if you want to
use React. We won't penalize you if you use something else. Only use it if you
feel like it will make you more productive or you are feeling adventurous.

The *only* constraint is that you use [git](http://git-scm.com/) to keep track
of your code. If you aren't familiar with git,
[this](http://www.sitepoint.com/git-for-beginners/) is a decent guide, and
Google can point you to many others.

We will evaluate the code on correctness (Does it work without bugs or errors),
completeness (Do the features you finished do everything we said they should?),
and code quality (Can we read and understand the code? Is it easy to modify?).

## How to start, and how to end

* Start with an empty commit

  Start the project with a git commit that's just a `Readme.md` file. It
  doesn't matter what's inside, we just want to know when you started work on
  the project.

* Commit as you go

  We'd like to see your git habits! We're also interested in seeing how your
  code evolves as you work.

* Send it in

  When you're done, send us a zip or a link to the code.

## If you get stuck

1. Check the [Star Wars API documentation](http://swapi.co/documentation)
2. Check Google
3. Ask us. We won't deduct points for asking questions or for clarification. In
   the real world you get to ask questions too!


## Only submit your own work

Please don't take someone else's code and represent it as your own. You can use
libraries and frameworks, but make sure you wrote the application code.


## Feedback

We are iterating on this all the time. If you have feedback, please let us
know what could be better.
