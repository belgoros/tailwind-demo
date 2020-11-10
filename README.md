# Rails 6 demo app using Tailwind CSS

This is an example of a Rails app using Tailwind CSS framework and [Alpine JS](https://github.com/alpinejs/alpine/).
The whole setup is described in this [article](https://web-crunch.com/posts/how-to-install-tailwind-css-using-ruby-on-rails) at Web Crunch web site as well as this [article](https://medium.com/@davidteren/production-ready-tailwind-ui-tailwind-css-alpinejs-inter-typeface-for-ruby-on-rails-part-1-46f24daf1b26) published at Medium.

## Used frameworks and libraries

- ruby `2.7.0`
- rails `6.0.3`
- [Tailwind CSS](https://tailwindcss.com) framework
- [Alpine JS](https://github.com/alpinejs/alpine/)

## Installation

- run `bundle` to install Rails dependencies defined in `Gemfile`
- run `yarn` to install JS and CSS dependencies

## Run

- start up the server with `rails s`
- point you browser to `localhost:3000`

If you want you new styles to be compiled and applied after every change you make and the page to be reloaded automatically, you can open another tab in your terminal and start up the wabpack dev server with `bin/webpack-dev-server`.
