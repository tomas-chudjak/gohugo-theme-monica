# Monica, an universal blog theme for [Hugo](http://gohugo.io/).

The intent of this theme is to provide a solid starting place for Hugo sites with basic features and include best practices for performance, accessibility, and rapid development.

Monica is an universal theme for bloggers. It's fast, flexible and extensible for all purposes. It supports SEO, i18n, Google tools - analytics, adsense and fonts, theme customization and additional features for seamless blogging experience.

![screenshot](https://raw.githubusercontent.com/tomas-chudjak/gohugo-theme-monica/master/images/screenshot.jpg)

[DEMO Website](https://tomaschudjak.com/)

**Features**

- Responsive
- Ready for I18n
- Support of internal templates for meta data, google analytics, open graph and twitter cards
- Built with simple CSS framework Milligram
- Easy theme modifications
- Dynamic Google fonts for heading and body text
- Simple Line Icon set
- Meta information of posts - date, author, category, tags and reading time
- Related, featured and last articles
- Previous and next articles

**Content**
- [Installation](#installation)
- [Getting started](#getting-started)
    - [The config file](#the-config-file)
    - [Color themes](#color-themes)
    - [Google fonts](#google-fonts)
    - [Simple Line icons](#simple-line-icons)
    - [CSS framework](#css-framework)
    - [Custom css & js](##custom-css--js)
    - [Add author info](#add-author-info)
    - [Enable Google Analytics](#enable-google-analytics)
    - [Enable Google Adsense](#enable-google-adsense)
    - [Sidebar](#sidebar)
    - [Test the theme](#test-the-theme)
- [Contributing](#contributing)

## Installation ##

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/tomas-chudjak/gohugo-theme-monica.git themes/monica

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.



## Getting started ##

After installing the theme successfully it requires a just a few more steps to get your site running.


### The config file ###

Take a look inside the [`exampleSite`](https://github.com/tomas-chudjak/gohugo-theme-monica/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](https://github.com/tomas-chudjak/gohugo-theme-monica/blob/master/exampleSite/config.toml). To use it, copy the [`config.toml`](https://github.com/tomas-chudjak/gohugo-theme-monica/blob/master/exampleSite/config.toml) in the root folder of your Hugo site. Feel free to change the strings in this theme.

### Color themes ###

Atomic design allows to easily extend and modify existing theme styles. In the `monica/assets/css/monica/themes` there are types of files. Default `_Default.scss`, what holds the default color styles applied for body text and footer. The colored variations - Red, Purple, Blue are extending default colors with it's unique styles. 

Initial color scheme style is `_Red.scss` and is selected in `monica/assets/css/monica/monica.scss`

### Google fonts ###

Theme can use any of the available Google fonts. Open `config.toml` and modify parameter `google_fonts` with any other fonts to be used. Defualt variations are "Bree Serif" for headings and "Open Sans" for body text.

### Simple Line icons ###

Default icon set is [https://simplelineicons.github.io/](https://simplelineicons.github.io/). To add icon to the theme, check the site for the list of the available icons or check `monica/assets/css/monica/_Icons.scss`

*example:*
```
<i class="icon-like"></i>
```

### CSS framework ###

Theme uses the Milligram CSS library with some basic overide of initial values. For more information see the [Milligram website](https://milligram.io/). Theme's CSS is built with scss and separation of concerns approach. There are initial basic themes present in the css/monica/themes directory. 

Theme is overriding some of the class styles in `monica/assets/css/monica/_General.scss`


### Custom CSS & JS ###

Theme supports custom css & javascript plugins. Open `config.toml` and add url addresses to the plugins to the particular css or js plugin section. CSS is automatically inserted to the website head, before theme styles and javascript is inserted to the page footer.

*config.toml*
```
 [params.plugins]
    # CSS Plugins
    [[params.plugins.css]]
    URL = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"

    # JS Plugins
    [[params.plugins.js]]
    URL = "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
```

### Add author info ###

To add author info, create new file in `data/authors/<name>.yaml`. The author details are present in the blog post if the page contains variable `author: "<name>"`.

*data/authors/Monica.yaml:*
```
name: "Monica"
short_bio: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."
avatar: "/images/author/image.jpg"

social:
- link:
  url: "#"
  title: "Monika's Facebook"
  icon: "<i class='icon-social-facebook'></i>"
```

*Enable author in post:*
```
...
author: "Monica"
...
```

### Enable Google Analytics ###

Open `config.toml` and ad your Google Analytics UE Id to the `googleAnalytics=` parameter.

### Enable Google Adsense ###

Theme comes with support for Google Adsense. To enable Adsense set `enable=true` and add value for `client_ID=""`. This will inject script to the website. 

There are two places for Adsense. In the widget and in the post content. To enable advert in the widget, create such component in Google Adsense dashboard and add value of *data-ad-slot* to the theme's config parameter `widget_slot_ID="<value>"`. In similar manner, create advert in article and add value of *data-ad-slot* to `in_article_slot_ID="<value>"`

*config.toml:*
```
  [params.adsense]
    enable=true
    client_ID="xxx"
    widget_slot_ID="xxx"
    in_article_slot_ID="xxx"
```

### Sidebar ###

In general, sidebar consist of the several widget components, which can be customizable according your needs. All widgets are stored in `monica/layouts/partials/widget` directory. 

All available sidebar types are stored in `monica/layouts/partials/sidebar`. They are implemented within the pages, lists and homepage code. 

### Test the theme ###

To enable local server, run:

`$ hugo server`

Enter [`localhost:1313`](http://localhost:1313/) in the browser.

## Contributing ##

If you want to raise issue, please visit [issue tracker](https://github.com/tomas-chudjak/gohugo-theme-monica/issues).
