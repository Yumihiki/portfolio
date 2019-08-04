---
title: "6月17日から6月23日までの振り返り"
description: "社内サイトの登録フォーム作成とオブジェクト指向"
date: "2019-06-23"
tags: "振り返り"
---

## はじめに
こんにちは、Yumihikiです。こんにちは、Yumihikiです。恒例の振り返りを行いたいと思います。今週は社内サイトの登録フォーム公開と検索フォーム・最近見たページの置き換えを中心に取り組んでいました。

## 登録フォームの公開と検索フォーム公開・最近見たページの置き換え
前々から作業を進めていた登録フォームを同部署の人に触ってもらい気になる点があれば修正できる箇所は修正して（自部署内だけで使用するものですが）公開しました。また、登録フォームを用意した理由として、検索機能（フォーム）をつけるのが目的だったため検索フォームも公開しました。さらに加えて、最近見たページ機能を改良して公開しました。

## 最近見たページ？
実は今まで、クリック情報を記録したDBを直接見ていたのですが・・・　今回は検索フォーム公開に伴い、コードを書き換えて最近見たページをローカルストレージに記憶させ表示するようにしました。正確には、固有のIDをローカルストレージに記憶させ、DBと照らし合わせて表示させるような仕組みです。

## 今後カイゼンしたい事
セキュリティ面で脆弱性対策が取れていないので、脆弱性対策（社内システムという事でその点が少しできていません・・・　本当に恥ずかしながら・・・）がまず一つ。それからオブジェクト指向でコーディングがほとんどできていないので、保守性を高めるためにもオブジェクト指向でコーディングができるように。検索フォームも一度しか検索できず、もう一度検索するには前のページに移動する必要がある・・・　など使い勝手はまだ悪いので、そのあたりの面をカイゼン予定です。また、Gitでコード管理を行うようにしたいので、Gitにあげても良いように、gitignoreに載せる情報をまとめた上でコードに直接書かないようにしたいです。

## 最後に
今週は良い感じにコーディング出来たような気がしています。この調子で取り組んでいけたらなと。話は若干変わるのですが、転職について色々と考えていまして来年には転職できたらなと思っています。今後、社内のExcelマクロ・関数たちで作られたものをWebアプリ化する仕事があるのですがその辺りの仕事を終わらせてから転職したいなという気持ちがあったので早め早めに終わらせて行こうと思います。最後まで読んでくださりありがとうございます。