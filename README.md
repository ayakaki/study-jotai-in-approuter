# study-jotai-in-approuter

状態管理ライブラリ jotai が App Router の中でどのように使用できるかを調査<br>
※下記の構成の通り、異なるサーバーコンポーネント内に存在するクライアントコンポーネント同士でも Pages Router と同様に状態管理できるかが特に気になる観点（調査結果：可能）

```
page
├ ServerComponentA
|  └ ClientComponentA
└ SlientComponentB
   └ ClientComponentB
```

## MOTION

![study-jotai](https://github.com/ayakaki/study-jotai/assets/65984887/a3872676-b21d-42d7-adbc-5fe6d573c22d)
