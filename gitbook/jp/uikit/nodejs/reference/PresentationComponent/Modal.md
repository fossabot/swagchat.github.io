# UIKit

## Modal

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/Modal/1.html" height="450"></iframe>

```js
import * as React from 'react';
import { Button, Modal } from 'react-swagchat';

class ModalSample extends React.Component {
  onModalClick = () => {
    this._modal ? this._modal.onModalClick() : null;
  }

  onOkModalClick = () => {
    alert("Click");
    this._modal.onModalClick();
  }

  render() {
    return (
      <div>
        <Button
          type="round"
          text="Modal"
          icon={<i className="material-icons">open_in_new</i>}
          onClick={() => this.onModalClick()}
        />
        <Modal
          ref={(child) => this._modal = child}
          component={
            <div>
              <h1>heading1</h1>
              <h2>heading2</h2>
              <h3>heading3</h3>
              <h4>heading4</h4>
              <h5>heading5</h5>
              <h6>heading6</h6>
            </div>
          }
          onOkModalClick={() => this.onOkModalClick()}
        />
      </div>
    );
  }
}
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| title | string | | | モーダルタイトル |
| buttonPosition | string | `bottom` | | タイプ<br />`top`<br />`bottom` |
| component | React.ReactNode | | | モーダルコンテンツ |
| positiveButtonName | string | `OK` | | ポジティブボタンの名前 |
| negativeButtonName | string | `CANCEL` | | ネガティブボタンの名前 |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
| onOkModalClick | function | `() => {}` | | ポジティブボタンクリック時にコールされる関数 |
