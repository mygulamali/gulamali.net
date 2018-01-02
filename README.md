# gulamali.net

## Synopsis

Is my website, init! Check it out now (funk soul brother), at:
https://gulamali.net

## Setup

```shell
git clone git@github.com:mygulamali/gulamali.net
cd gulamali.net
bundle install
cp .env.example .env
cd source/stylesheets
bundle exec bourbon install
bundle exec neat install
```

Then complete the variables in the `.env` file for your environment.

## Serve on your localhost

`bundle exec middleman`

Then visit `http://localhost:4567` to see the site in action.

## Deploy to your webhost

`bundle exec middleman deploy`

Note: your public SSH key for your development machine must be in the
`~/.ssh/authorized_keys` file on your webhost for deployment via rsync to appear
seamless.

## Creating the favicon

An SVG version of the favicon was created using [Inkscape][inkscape]. This was
saved in the `source/assets/favicon` directory together with PNG versions of the
favicon at different sizes. This was converted into the `source/favicon.ico`
file using [Image Magick][convert], as follows:

`convert favicon-16.png favicon-32.png favicon-48.png favicon.ico`

## License

This software is released under the terms and conditions of
[The MIT License][mit]. Please see the LICENSE.txt file for more details.

[convert]: https://www.imagemagick.org/ "Image Magick"
[inkscape]: https://inkscape.org/en/ "Inkscape"
[mit]: http://www.opensource.org/licenses/mit-license.php "The MIT License"
