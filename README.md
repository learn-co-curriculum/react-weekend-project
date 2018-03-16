# React Project!

You've made it! You're ready to build a React application! Before you start ideating, think about some of the project requirements.

## Requirements

The guidelines here are minimal but this is on purpose:

1. Use an API this can be your own rails api or one you have found on the internet. If you do create your own api, it should not have more than one or two models. The focus of this project is to focus on your __React__ skills.
2. Must have at least two different *client-side routes* (i.e. use react-router)

## Bonus Tasks
- Build Full Crud for one of your resources
- Write your own CSS
- Add some Tests
- Learn React Native...jk


## Resources

[Public Apis to Choose From](https://github.com/toddmotto/public-apis)


### Frontend Setup
To create your React project, you may use a tool called [create-react-app](https://github.com/facebookincubator/create-react-app), an awesome project generator developed by Facebook. To use this
+ `npm install -g create-react-app` - this installs the generator as a global package
+ In the directory where you'd like to create your project, `create-react-app my-project-client`. It's that simple!

We'd reccommend to begin by removing any of the default stuff given to you by Create React App that you do not understand. The following are some really great resources on how to think about setting up a React project (_Spoiler: They both say the same thing, "There's no right answer!"_)
* [React Docs](https://github.com/reactjs/reactjs.org/blob/71788c647daa07392a8156609fdbede8e9ed24f7/content/docs/faq-structure.md) This was written by Dan Abramov himself <3 <3 <3....
* [The 100% Correct Way to Structure a React App (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)



### Backend Setup
```
rails new <my-project> --api -T --database=postgresql
```

Let's go through this in detail:

* `--api`
  *  Make a [Rails 5 API](http://edgeguides.rubyonrails.org/api_app.html), basically you're telling Rails you don't want any of the stuff you wouldn't need for an application where Rails is not rendering views. Think the ActionView library (`form_for`, `link_to`, etc..), ERB, Security protections that ensure forms were rendered by the Rails app, things like that.
* `-T`
  * don't generate tests for this app
* `--database=postgresql`
  * Set this up to use a Postgres (as opposed to SQLite) database. If you ever want to push this to Heroku, Heroku requires a Postgres database. There won't be too much difference in how you have to write your code. You'll have to be sure to run `rails db:create` and make sure you have postgres running (i.e you can see the elephant)
* Be sure to do the necessary setup for the [rack-cors-gem](https://github.com/cyu/rack-cors)
* You may want to use [active-model-serializers](https://github.com/rails-api/active_model_serializers/tree/0-10-stable)

A great article on how [DHH thinks about setting up controllers in Rails](http://jeromedalbert.com/how-dhh-organizes-his-rails-controllers/)


### Notes
By default both your client app and your rails app will run on port 3000. You'll have to specify one or the other to run on a separate port.
* Rails: `rails s -p <some_number_thats_not_3000>`
* React: Check out this [issue](https://github.com/facebookincubator/create-react-app/issues/1083)
