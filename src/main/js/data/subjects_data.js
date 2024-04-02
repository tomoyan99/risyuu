"use strict";
/* 
科目データ置き場。
各数字のキーは学年を表していて、bfは前期・afは後期
値は全部stringで
	"name":科目名,
	"day": 曜日,
	"time": 時限,
	"credit": 単位数,
	"compulsory": 必修か(0なら選択,1なら必修),
	"course": コース選択(知能1,社会2,なし0),
	"division": 科目領域,
	"multi": 複講か否か(0なら単発,1なら複講)

科目領域
	km:共マネ
	sk:専門教育
	kk:工学基礎
	ks:基礎専門
	tm:地域マネ
	se:専　　門
	go:語　　学
	ka:関連専門
	ip:一　　般
*/
function getData(grade,semester){
	const data = 
		{
			1:{
				bf:[],
				af:[]
			},
			2:{
				bf:[
					{
						"name": "Ｃプログラミング基礎及び演習  　【田邉　造】",
						"day": "月",
						"time": "1",
						"credit": "3",
						"compulsory": "0",
						"course": "1",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "ＯＳ＆コンピュータアーキテクチャ論  　【山田　哲靖】",
						"day": "月",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "2",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "ベクトル解析 　【飯田　洋市】",
						"day": "月",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "Ｃプログラミング基礎及び演習  　【田邉　造】",
						"day": "月",
						"time": "2",
						"credit": "0",
						"compulsory": "0",
						"course": "1",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "電磁気学演習 　【齋藤　隆】",
						"day": "月",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "0"
					},
					{
						"name": "電磁気学演習 　【平谷　雄二】",
						"day": "月",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "統計学A（再） 　【香川　智修】",
						"day": "月",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "文化と芸術 B 　【日達　あけみ】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "心理学 　【菊池　聡】",
						"day": "月",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "統計学A演習（再） 　【香川　智修】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "データサイエンス入門 　【香川　智修】",
						"day": "月",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "統計学A演習（再） 　【櫻井　哲朗】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Javaプログラミング応用及び演習  　【布　房夫】",
						"day": "火",
						"time": "1",
						"credit": "3",
						"compulsory": "0",
						"course": "2",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "コストと採算 　【牛山　浩一】",
						"day": "火",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "Javaプログラミング応用及び演習  　【布　房夫】",
						"day": "火",
						"time": "2",
						"credit": "0",
						"compulsory": "0",
						"course": "2",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "国際貿易 　【韓　暁宏】",
						"day": "火",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "微分方程式 　【大島　政英】",
						"day": "火",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "論理回路1 　【平田　幸広】",
						"day": "火",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "ビジネスリーダーシップ 　【韓　暁宏】",
						"day": "火",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "微分積分2 （再）　【大島　政英】",
						"day": "火",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "社会情報システム概論  　【広瀬　啓雄】",
						"day": "火",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "2",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "微分積分2演習 （再）　【大島　政英】",
						"day": "火",
						"time": "5",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【奈良　裕美子】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【高畑　伸子】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 5 　【清澤　香】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 5 　【内藤　容成】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "コンピュータリテラシー演習  　【深谷　将】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "Ｃプログラミング応用及び演習  　【平田　幸広】",
						"day": "水",
						"time": "1",
						"credit": "3",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "Ｃプログラミング応用及び演習  　【平田　幸広】",
						"day": "水",
						"time": "2",
						"credit": "0",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "ビジネスリーダーシップ 　【韓　暁宏】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "基本情報処理 1 　【大島　政英】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "物理学C （再）　【白石　希典】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "統計学B 　【櫻井　哲朗】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【小口　裕子】",
						"day": "水",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Global Communication 1 　【有賀　メアリー】",
						"day": "水",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "キャリア開発 2 　【渡邊　康之】",
						"day": "水",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "英語 3 　【奈良　裕美子】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 3 　【高畑　伸子】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 3 　【清澤　香】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 7 　【内藤　容成】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 3 　【清澤　香】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 3 　【内藤　容成】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 3 　【高畑　伸子】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【奈良　裕美子】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "電磁気学 　【平谷　雄二】",
						"day": "木",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "0"
					},
					{
						"name": "経営戦略と価値づくり経営 　【久保　吉人】",
						"day": "木",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "電気回路B 　【田邉　造】",
						"day": "木",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "電気回路B演習 　【遠藤　文佳】",
						"day": "木",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "論理回路1 　【水野　秀之】",
						"day": "木",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "地域に学ぶ経営 　【久保　吉人】",
						"day": "木",
						"time": "5",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "線形代数（再） 　【飯田　洋市】",
						"day": "金",
						"time": "1",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "情報科学  　【山田　哲靖】",
						"day": "金",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "経営戦略と価値づくり経営 　【久保　吉人】",
						"day": "金",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【Carruth Frederick】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【小口　裕子】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "中国語 1 　【周防　新】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "線形代数演習 （再）　【飯田　洋市】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "作るシステム  　【市川　純章】",
						"day": "金",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "Communicative English 1 　【小口　裕子】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 3 　【Carruth Frederick】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "中国語 1 　【周防　新】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "地域創造論 　【田原　慎介】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "物理学基礎 　【白石　希典】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "物理学基礎 　【長田　志保】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "物理学A 　【武藤　英】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "情報応用工学実験1A 　【山口　一弘】",
						"day": "金",
						"time": "3",
						"credit": "3",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "グローバル社会と文化  　【武藤　英】",
						"day": "金",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "論理学  　【大島　政英】",
						"day": "金",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "データサイエンス入門 　【香川　智修】",
						"day": "金",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "情報応用工学実験1A 　【山口　一弘】",
						"day": "金",
						"time": "4",
						"credit": "0",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "情報応用工学実験1A 　【山口　一弘】",
						"day": "金",
						"time": "5",
						"credit": "0",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					}
				],
				af: [
					{
						"name": "Javaプログラミング基礎及び演習  　【山口　一弘】",
						"day": "月",
						"time": "1",
						"credit": "3",
						"compulsory": "0",
						"course": "2",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "情報セキュリティ  　【杉田　誠】",
						"day": "月",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "複素関数 　【飯田　洋市】",
						"day": "月",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Javaプログラミング基礎及び演習  　【山口　一弘】",
						"day": "月",
						"time": "2",
						"credit": "0",
						"compulsory": "0",
						"course": "2",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "月",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "微分積分2 　【杉田　誠】",
						"day": "月",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "微分積分2 　【飯田　洋市】",
						"day": "月",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "微分積分2 　【松岡　隆志】",
						"day": "月",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "電子回路  　【清水　俊治】",
						"day": "月",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "数値解析法及び演習 　【白石　希典】",
						"day": "月",
						"time": "3",
						"credit": "3",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "1"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "微分積分2演習 　【杉田　誠】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "微分積分2演習 　【飯田　洋市】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "微分積分2演習 　【松岡　隆志】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "電子回路演習  　【遠藤　文佳】",
						"day": "月",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "1",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "数値解析法及び演習 　【白石　希典】",
						"day": "月",
						"time": "4",
						"credit": "0",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "1"
					},
					{
						"name": "データサイエンス入門 　【香川　智修】",
						"day": "月",
						"time": "5",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "物理学A 　【長田　志保】",
						"day": "月",
						"time": "5",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "信号処理論  　【田邉　造】",
						"day": "月",
						"time": "5",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "コストと採算 　【牛山　浩一】",
						"day": "火",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "生産マネジメント 　【久保　吉人】",
						"day": "火",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "自然言語処理論  　【石井　一夫】",
						"day": "火",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "マーケティング 　【韓　暁宏】",
						"day": "火",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "Ｃ＋＋プログラミング  　【山口　武彦】",
						"day": "火",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "2",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "インターネット論及び演習  　【土屋　健】",
						"day": "火",
						"time": "2",
						"credit": "3",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "企業の国際化戦略 　【韓　暁宏】",
						"day": "火",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "インターネット論及び演習  　【土屋　健】",
						"day": "火",
						"time": "3",
						"credit": "0",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "中国語 2 　【周防　新】",
						"day": "火",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "法学入門  　【長瀬　一治】",
						"day": "火",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "xテインメントコンピューティング概論 　【山田　哲靖】",
						"day": "火",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "経営分析 　【久保　吉人】",
						"day": "火",
						"time": "5",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "Communicative English 2 　【清澤　香】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 2 　【内藤　容成】",
						"day": "水",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "電気回路A 　【平田　幸広】",
						"day": "水",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "メディアデザイン論  　【橋本　幸二郎】",
						"day": "水",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "Communicative English 2 　【高畑　伸子】",
						"day": "水",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 6 　【奈良　裕美子】",
						"day": "水",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "地域連携課題演習  　【田原　慎介】",
						"day": "水",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "企業の国際化戦略 　【韓　暁宏】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "ボランティア論  　【関塚　正嗣】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "基本情報処理 2 　【大島　政英】",
						"day": "水",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "フーリエ解析 　【松岡　隆志】",
						"day": "水",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Global Communication 2 　【有賀　メアリー】",
						"day": "水",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "文化と芸術 B 　【日達　あけみ】",
						"day": "水",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "キャリア開発 1 　【布　房夫】",
						"day": "水",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "化学 　【勝木　明夫】",
						"day": "水",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "機械学習基礎 　【渡辺　毅】",
						"day": "水",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "0"
					},
					{
						"name": "経営組織 　【久保　吉人】",
						"day": "木",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "tm",
						"multi": "0"
					},
					{
						"name": "英語 4 　【高畑　伸子】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 4 　【清澤　香】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 4 　【奈良　裕美子】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 2 　【内藤　容成】",
						"day": "木",
						"time": "1",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "論理回路2 　【水野　秀之】",
						"day": "木",
						"time": "1",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ks",
						"multi": "0"
					},
					{
						"name": "英語 4 　【奈良　裕美子】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 4 　【高畑　伸子】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "英語 4 　【内藤　容成】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "Communicative English 8 　【清澤　香】",
						"day": "木",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "物理学C 　【白石　希典】",
						"day": "木",
						"time": "3",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "物理学C 　【武藤　英】",
						"day": "木",
						"time": "3",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "物理学C 　【長田　志保】",
						"day": "木",
						"time": "3",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Ｗｅｂプログラミング及び演習  　【広瀬　啓雄】",
						"day": "木",
						"time": "3",
						"credit": "3",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "統計学A 　【石井　一夫】",
						"day": "木",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "統計学A 　【櫻井　哲朗】",
						"day": "木",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Ｗｅｂプログラミング及び演習  　【広瀬　啓雄】",
						"day": "木",
						"time": "4",
						"credit": "0",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "1"
					},
					{
						"name": "統計学A演習 　【石井　一夫】",
						"day": "木",
						"time": "5",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "統計学A演習 　【櫻井　哲朗】",
						"day": "木",
						"time": "5",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "線形代数 　【飯田　洋市】",
						"day": "金",
						"time": "1",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "線形代数 　【大島　政英】",
						"day": "金",
						"time": "1",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "線形代数 　【香川　智修】",
						"day": "金",
						"time": "1",
						"credit": "2",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "Communicative English 4 　【Carruth Frederick】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "中国語 1 　【周防　新】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "線形代数演習 　【飯田　洋市】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "線形代数演習 　【大島　政英】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "線形代数演習 　【香川　智修】",
						"day": "金",
						"time": "2",
						"credit": "1",
						"compulsory": "1",
						"course": "0",
						"division": "kk",
						"multi": "0"
					},
					{
						"name": "高周波回路  　【征矢　隼人】",
						"day": "金",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "se",
						"multi": "0"
					},
					{
						"name": "半導体素子工学 　【橋元　伸晃】",
						"day": "金",
						"time": "2",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ka",
						"multi": "0"
					},
					{
						"name": "Communicative English 2 　【Carruth Frederick】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "中国語 1 　【周防　新】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "go",
						"multi": "0"
					},
					{
						"name": "科学する心Ａ  　【武藤　英】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "科学する心Ｂ  　【渡邊　真由子】",
						"day": "金",
						"time": "3",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "金",
						"time": "3",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "情報応用工学実験1B 　【山口　一弘】",
						"day": "金",
						"time": "3",
						"credit": "3",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "日本の近代文学と心  　【田中　愛】",
						"day": "金",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "情報科学入門  　【松岡　隆志】",
						"day": "金",
						"time": "4",
						"credit": "2",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 1 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 2 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 3 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "健康教育 4 　【篠原　菊紀】",
						"day": "金",
						"time": "4",
						"credit": "1",
						"compulsory": "0",
						"course": "0",
						"division": "ip",
						"multi": "0"
					},
					{
						"name": "情報応用工学実験1B 　【山口　一弘】",
						"day": "金",
						"time": "4",
						"credit": "0",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					},
					{
						"name": "情報応用工学実験1B 　【山口　一弘】",
						"day": "金",
						"time": "5",
						"credit": "0",
						"compulsory": "1",
						"course": "0",
						"division": "ks",
						"multi": "1"
					}
				]
			},
			3:{
				bf: [],
				af: []
			},
			4:{
				bf: [],
				af: []
			},
		};
	return data[grade][semester];
}