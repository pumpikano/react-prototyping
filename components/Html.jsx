import React from 'react';

class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>TITLE</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </head>
            <body>
                <div id="app"></div>
            </body>
            <script src={'/public/js/' + this.props.clientFile}></script>
            </html>
        );
    }
}

export default Html;
