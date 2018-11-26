# DKFDS - Det Fælles Designsystem - Plugins

This repo includes code and documentation for plugins for the Frontend styleguide.

The documentation site can be found [here](https://detfaellesdesignsystem.github.io/dkfds-docs/).

The components project can be found [here](https://github.com/detfaellesdesignsystem/dkfds-components).

The plugins project can be found [here](https://github.com/detfaellesdesignsystem/dkfds-plugins).

## Plugins

Plugins are defined at components that are not a part of the core package implemented in [components](https://github.com/detfaellesdesignsystem/dkfds-components) project. 

Plugins are divided into two parts: an example showing the component (HTML and Javascript) and a theme for the component (Css).

Currently the plugins project contains themes and examples of the following components:
1. [Datatables](https://datatables.net/).
2. [SelectWoo](https://github.com/woocommerce/selectWoo).

## Download the plugins project

Using npm: 

```sh
npm install dkfds-plugins --save
``` 

This downloades the plugin project to the node_modules/dkfds-plugins folder.

## Using the plugins project

Only the css-themes are to be used. The HTML and javascript are just example code showing how e.g. datatables are implemented.  

To include a theme simply include the one of the files from the /dist/css folder:
```sh
<link rel="stylesheet" href="[path-to-plugins-project]/dist/css/dkfds-datatables-theme.min.css">
``` 
or include it in your scss:
```sh
@import "~dkfds-plugins/dist/datatables/style/dkfds-datatables-theme.scss";
```