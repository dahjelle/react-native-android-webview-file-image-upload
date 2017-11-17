import React, {Component} from 'react';
import {AppRegistry, Stylesheet} from 'react-native';
import CustomWebView from './CustomWebView';

const HTML = `
<html>
<head>
    <body>
        <input type="file" name="uploadFile" />
        <h3></h3>
        <div style="width: 100%; height: 100%">
        </div>
    </body>
    <script>
      async function blobToDataURL(image) {
        return new Promise(function(resolve, reject) {
          var fileReader = new FileReader();
          fileReader.onloadend = function() {
            return resolve(fileReader.result);
          };
          fileReader.readAsDataURL(image);
        });
      };
      document.querySelector('input').addEventListener('change', async function(event) {
        file = event.target.files[0];
        document.querySelector('div').style.backgroundImage = 'url(' + await blobToDataURL(file) + ')';
        document.querySelector('h3').innerHTML = file.name + ': ' + file.type + ':' + file.size;
        console.log(file);
      });
    </script>
</html>
`;

class App extends Component {
  render() {
    return <CustomWebView source={{html: HTML}} />;
  }
}

AppRegistry.registerComponent('webviewtest', () => App);
