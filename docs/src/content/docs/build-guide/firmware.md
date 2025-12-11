---
title: ファームウェアの書き込み
sidebar:
  order: 4
---

Mokulate 用に提供されているファームウェア  
**`Mokulate_left.uf2` / `Mokulate_right.uf2`**  
を書き込む手順をまとめたものです。

---

## 必要なもの

- PC
- USB Type-C ケーブル（データ通信対応）

---

## ファームウェアのダウンロード

1. [Mokulate の GitHub リリースページ](https://github.com/black-trooper/zmk-config-Mokulate/releases) へアクセスする。
2. “Assets” から次の 2 ファイルをダウンロードする：
   - **`Mokulate_left.uf2`**（左側用）
   - **`Mokulate_right.uf2`**（右側用）

---

## 書き込み手順

左右それぞれに対して、以下の手順を個別に行います。

### 本体の USB 接続

1. 書き込みたい側（左または右）の Mokulate を用意する。
2. マイコンの USB 端子を PC に接続する。

### ブートローダーモードへ移行

1. **リセットボタンを素早く 2 回押す（ダブルクリック）**。
2. PC に **「XIAO SENSE」という名前の仮想 USB ドライブ** が表示される。

### ファームウェア書き込み

1. 表示された仮想ドライブを開く。
2. ドライブ直下へ、対応する側の `.uf2` ファイルをコピーする。
   - 左側の場合 → `Mokulate_left.uf2`
   - 右側の場合 → `Mokulate_right.uf2`
3. コピー完了後、ドライブが自動でアンマウントされ、キーボードが再起動する。

これで書き込みは完了です。
