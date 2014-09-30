# gulamali.net

## Synopsis

Is my website, init!  You better check yourself before you wreck yourself.
At: http://gulamali.net.

## Setup

```shell
git clone git@github.com:mygulamali/gulamali.net
cd gulamali.net
bundle install
bundle exec rake init
```

## Serve on your localhost

`bundle exec middleman server`

Then visit `http://localhost:4567` to see the site in action.

## Deploy to Dreamhost account

`bundle exec rake deploy`

NB. your public SSH key for your localhost has to be in the
`~/.ssh/authorized_keys2` file of your Dreamhost account for deployment to
work correctly.

## License

This software is released under the terms and conditions of
[The MIT License](http://www.opensource.org/licenses/mit-license.php "The MIT
License").  Please see the LICENSE.txt file for more details.
