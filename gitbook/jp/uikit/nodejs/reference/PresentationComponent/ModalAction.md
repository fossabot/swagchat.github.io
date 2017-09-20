# UIKit

## ModalAction

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/ModalAction/1.html" height="500"></iframe>

```js
import * as React from 'react';
import { Button, ModalAction } from 'react-swagchat';

class ModalActionSample extends React.Component {
  onModalClick = () => {
    this._modalAction ? this._modalAction.onModalClick() : null;
  }

  onModalAction1Click = () => {
    alert("ACTION 1");
    this._modalAction.onModalClick();
  }

  onModalAction2Click = () => {
    alert("ACTION 2");
    this._modalAction.onModalClick();
  }

  onModalAction3Click = () => {
    alert("ACTION 3");
    this._modalAction.onModalClick();
  }

  render() {
    const modalActions = [
      {name: 'ACTION 1', onClick: this.onModalAction1Click.bind(this)},
      {name: 'ACTION 2', onClick: this.onModalAction2Click.bind(this)},
      {name: 'ACTION 3', onClick: this.onModalAction3Click.bind(this)},
    ];

    return (
      <div>
        <Button
          type="round"
          text="Modal Action"
          icon={<i className="material-icons">open_in_new</i>}
          onClick={() => this.onModalClick()}
        />
        <ModalAction
          ref={(child) => this._modalAction = child}
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
          actions={modalActions}
        />
      </div>
    );
  }
}
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| title | string | | | モーダルタイトル |
| component | React.ReactNode | | | モーダルコンテンツ |
| actions | IModalAction[] | | | アクションの配列 |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
