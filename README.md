# Megadraft [![Build Status](https://secure.travis-ci.org/globocom/megadraft.png?branch=master)](https://travis-ci.org/globocom/megadraft) [![npm version](https://img.shields.io/npm/v/megadraft.svg?style=flat)](https://www.npmjs.com/package/megadraft)

Rich Text editor built on top of [Facebook's draft.js](https://github.com/facebook/draft-js) (Work in Progress)

## This fork changes

1. Additional toolbar buttons: Underlined text, Stroke text, Inline code, Code block, H3, H4
2. Sidebar adding can be managed with `showSidebar` option:
    ```
    <MegadraftEditor
        editorState={this.state.editorState}
        showSidebar={false}
        onChange={::this.onChange} />
    ```
3. Changeable themes. Just add theme styles like this:

    ```
    .toolbar.white-thin-theme {
        ... your styles
    }
    ```

    and specify the theme on editor initializing


    ```
    <MegadraftEditor
        editorState={this.state.editorState}
        theme='white-thin'
        onChange={::this.onChange} />
    ```
4. White thin theme
    ![white thin theme](https://i.imgur.com/i6Y4E1H.png)
    
5. Allow to submit images from hard drive to remote server. Originally only URLs are supported.

    ```
    <MegadraftEditor
        ...
        submitFileUrl={this.props.submit_file_url} />
    ```
    
    `submitFileUrl` route should accept POST requests with file passed in a parameter named `file` and return JSON object containing status and url to stored image. Example response: 
    ```
    { 
        status: 'success', 
        body: 'http://stored-image.url'
    }
    ```
6. Allow to hide "Rights Holder" input line on data blocks. Is hidden by default, to enable:
    ```
    <MegadraftEditor
        ...
        showDataRightsHolder={true} />
    ``` 
7. Respect `readOnly` option on data blocks. In `readOnly` mode `Caption` input is non-editable and control buttons are hidden.
8. Respect chosen data block size. `Small` is 40% wide, `Medium` is 70% wide and `Big` is full-width.
9. Allow to attach YouTube and Vimeo videos. Originally only direct video urls are supported.
    

## Discussion and Support

Join the [#megadraft][megadraft-slack] channel on the DraftJS [Slack team][draftjs-slack]!

## Live Example & Documentation

Checkout our website with a [live demo](http://globocom.github.io/megadraft/)!

## Developing

To run the development server and see the examples:

```
git clone https://github.com/globocom/megadraft.git
cd megadraft/
make setup
make run
```

Then visit http://localhost:8080/#/dev on your browser.

To run local tests:

```
make unit
```

To lint local source files:

```
make lint
```

To run tests and lint:

```
make test
```

## Dependencies

Megadraft depends on [Sass](http://sass-lang.com/) to build style assets.


## Importing the default styles

Megadraft ships with a default styling available at this location in the installed package: node_modules/megadraft/dist/css/megadraft.css.


## Documentation

* [Overview & Usage][docs-overview-and-usage]
* [Customization][docs-customization]
* [Custom Entities][docs-custom-entities]
* [Plugins][docs-plugins]
* [Saving & Loading][docs-saving-loading]


## Plugins

Checkout the [docs][docs-plugins] for information about plugin structure.
To help in this process there is a [Yeoman Megadraft Plugin Generator][plugin-generator].


## License

Megadraft is licensed under the [MIT license](LICENSE).


## Third Party

The Megadraft website uses a picture from
[Stocksnap.io by Tim Marshall](https://stocksnap.io/photo/K148YZIFJ3) licensed
under [CC0 license](https://stocksnap.io/license).

Landing page uses a Megadeth picture by [Ted Van Pelt](https://flic.kr/p/7Pr94f)
licensed under [CC-BY](https://creativecommons.org/licenses/by/2.0/).


[plugin-generator]: https://github.com/globocom/generator-megadraft-plugin
[docs-overview-and-usage]: http://globocom.github.io/megadraft/#/docs/overview
[docs-customization]: http://globocom.github.io/megadraft/#/docs/customization
[docs-custom-entities]: http://globocom.github.io/megadraft/#/docs/custom-entities
[docs-plugins]: http://globocom.github.io/megadraft/#/docs/plugins
[docs-saving-loading]: http://globocom.github.io/megadraft/#/docs/saving-loading
[megadraft-slack]: https://draftjs.slack.com/messages/megadraft/
[draftjs-slack]: https://draftjs.herokuapp.com
