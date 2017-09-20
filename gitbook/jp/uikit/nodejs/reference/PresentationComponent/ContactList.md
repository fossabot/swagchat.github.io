# UIKit

## ContactList

<iframe class="code" src="../../../../../uikit-sample/PresentationComponent/ContactList/1.html" height="400"></iframe>

```js
import * as React from 'react';
import { ContactList } from 'react-swagchat';

const ContactListExample = () => (
  <ContactList
    contacts={
      [
        {
          name: "Perez",
          pictureUrl: "http://www.material-ui.com/images/adellecharles-128.jpg",
        },{
          name: "Lewis",
          pictureUrl: "http://www.material-ui.com/images/adhamdannaway-128.jpg",
        },{
          name: "Harris",
          pictureUrl: "http://www.material-ui.com/images/allisongrayce-128.jpg",
        },{
          name: "Lee",
          pictureUrl: "http://www.material-ui.com/images/ok-128.jpg",
        },{
          name: "Gonzalez",
          pictureUrl: "http://www.material-ui.com/images/angelceballos-128.jpg",
        }
      ]
    }
  />
);
```

| プロパティ | 型 |　デフォルト | 必須 | 説明 |
| ------------- | ------------- |
| contacts | IUser[] | | ✔ | コンタクトリスト |
| selectedContacts | {[key: string]: IUser} | | | 選択されたコンタクトリスト |
| noContactListText | string | | | コンタクトリストが0件の場合に表示するテキスト |
| noContactListImage | string | | | コンタクトリストが0件の場合に表示する画像URL |
| checkedIcon | React.ReactNode | `<RadioButtonChecked />` | | チェック時のアイコン<span class="property-example">例　`<i className="fa fa-pencil" aria-hidden="true"></i>`</span> |
| unCheckedIcon | React.ReactNode | `<RadioButtonUnChecked />` | | チェックしていない時のアイコン<span class="property-example">例　`<i className="fa fa-pencil" aria-hidden="true"></i>`</span> |
| className | string | 空文字 | | カスタムクラス名 |
| style | object | `{}` | | カスタムインラインスタイル<span class="property-example">例　`{fontSize: '30px'}`</span>|
