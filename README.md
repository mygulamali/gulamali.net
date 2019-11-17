# gulamali.net

## Synopsis

Is my website, init! Check it out now (funk soul brother), at:
https://gulamali.net

## Setup

```shell
git clone git@github.com:mygulamali/gulamali.net
cd gulamali.net
cp .env.example .env
```

Then complete the variables in the `.env` file for your environment.

Next, run the setup script,

```shell
bin/setup
```

## Serve on your localhost

`bundle exec middleman serve`

Then visit `http://localhost:4567` to see the site in action.

## Deploy to your web server

`bundle exec middleman deploy`

This command will automagically commit the built website to the correct branch
of this repo for your static site server (i.e. [GitHub Pages] or [Netlify])
to serve.

## Creating the favicon

An SVG version of the favicon was created using [Inkscape]. This was saved in
the `./assets/favicon` directory together with PNG versions of the favicon at
different sizes. This was converted into the `./source/favicon.ico` file using
[Image Magick], as follows:

`convert favicon-16.png favicon-32.png favicon-48.png favicon.ico`

## License

This software is released under the terms and conditions of
[The MIT License]. Please see the LICENSE.txt file for more details.

[GitHub Pages]: https://pages.github.com/ "GitHub Pages"
[Image Magick]: https://www.imagemagick.org/ "Image Magick"
[Inkscape]: https://inkscape.org/en/ "Inkscape"
[Netlify]: https://www.netlify.com/ "Netlify"
[The MIT License]: http://www.opensource.org/licenses/mit-license.php "The MIT License"
