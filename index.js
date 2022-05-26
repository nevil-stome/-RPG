
//メッセージの進行度
let i = 0;
//食べ物の有無
let eat = 0;
//食べ物アイテム
let apple = 0;
//仲間の有無
let friend = 0;
//特定の仲間の有無
let saruta = 0;
let hamm = 0;
let husky = 0;
function check(){
    //イベントの開始地点
    if(i == 0){
        //限定条件を指定する目的でネストをくんである
        //「会話」、「食べる」、「散策」、「鬼ヶ島に向かう」
        //この四つ以外、つまり空欄と指定外全ての文字列に対しては
        //行動可能な文字列をアラートで知らせるという処理を行っている
        if(form.field.value == "鬼ヶ島に向かう")
        {
            if(form.field.value == "鬼ヶ島に向かう"){
                alert('あなたは道すがら、サルと出会いました。')
                alert('「桃太郎さん、桃太郎さん、お腰につけたきび団子、お一つわたしにくださいな」')
                alert('歌い踊りながら、手を差し伸べてきます。桃太郎はきび団子を一つ取り出して、サルに向かってこう言いました')
                alert('「鬼退治に協力してくれるなら、団子をやろう」')
                alert('サルは喜んで桃太郎の手を取ります。')
                alert('「やりましょう、やりましょう。これから鬼の征伐に、ついていくならやりましょう」')
                friend = 1;
                saruta = 1;
                i = 1;
                form.field.value = '';
		        return false; // 送信を中止
            }
	    }else if(document.form.field.value == ""){
            alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
		    form.field.value = '';
            return false; // 送信を中止
        }else{
            alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
		    form.field.value = '';
            return false; // 送信を中止
        }
        

    }else if(i == 1){
        if(form.field.value == "鬼ヶ島に向かう"){
            if(document.form.field.value == "鬼ヶ島に向かう"){
                alert('あなたは道すがら、キジと出会いました。')
                alert('「桃太郎さん、桃太郎さん、お腰につけたきび団子、お一つわたしにくださいな」')
                alert('歌い踊りながら、クチバシを開閉しています。桃太郎はきび団子を一つ取り出して、キジに向かってこう言いました')
                alert('「鬼退治に協力してくれるなら、団子をやろう」')
                alert('キジは喜んで桃太郎の手にある団子をついばみます。')
                alert('「行きましょう行きましょう。あなたについて、どこまでも。家来になって行きましょう」')
                friend = 1;
                hamm = 1;
                i = 2;
                form.field.value = '';
                return false; // 送信を中止
                }
            }else if(document.form.field.value == ""){
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
		        form.field.value = '';
                return false; // 送信を中止
            }else{
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
		        form.field.value = '';
                return false; // 送信を中止
            }

        }else if(i == 2){
            if(form.field.value == "鬼ヶ島に向かう"){
            
                alert('あなたは道すがら、イヌと出会いました。')
                alert('「桃太郎さん、桃太郎さん、お腰につけたきび団子、お一つわたしにくださいな」')
                alert('歌い踊りながら、しっぽを激しく振っています。桃太郎はきび団子を一つ取り出して、イヌに向かってこう言いました')
                alert('「鬼退治に協力してくれるなら、団子をやろう」')
                alert('イヌは喜んで桃太郎の手にある団子にかじりつきます。')
                alert('「行きましょう行きましょう。あなたについて、どこまでも。家来になって行きましょう」')
                alert('「やりましょう、やりましょう。これから鬼の征伐に、ついていくならやりましょう」')
                friend = 1;
                husky = 1;
                i = 3;
                form.field.value = '';
                return false; // 送信を中止
            }else if(document.form.field.value == ""){
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
                form.field.value = '';
                return false; // 送信を中止
            }else{
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
                form.field.value = '';
                return false; // 送信を中止
            }
        }else if(i == 3){
            if(form.field.value == "鬼ヶ島に向かう"){
                if(document.form.field.value == "鬼ヶ島に向かう"){
                    alert('「そりゃ進めそりゃ進め\n一度に攻めて攻めやぶり、つぶしてしまえ鬼ヶ島」')
                    alert('「おもしろいおもしろい\n残らず鬼を攻めふせて、ぶんどりものをエンヤラヤ」')
                    alert('バンバンザイバンバンザイ\nおとものいぬやさるキジは\nいさんでくるまをエンヤラヤ')
                    alert('こうして、桃太郎と仲間たちによって、鬼は退治され、世に平和が戻りましたとさ')
                    alert('めでたしめでたし')
                    location.reload();
                    return false;
                }
            }else if(document.form.field.value == ""){
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
                form.field.value = '';
                return false; // 送信を中止
            }else{
                alert('行動を入力してください\n/鬼ヶ島に向かう'); // 入力漏れがあれば警告ダイアログを表示
                form.field.value = '';
                return false; // 送信を中止
            }
        }
}
