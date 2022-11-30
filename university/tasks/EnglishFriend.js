const englishman = {
    message:"Hi, friend."
};

const translator = {
    translate()
    {
        var words = new Map();
        words.set("Hi, friend.", "Привет, друг.").set("Bye, friend.", "Пока, друг.").set("Hi, friend.", "Привет, друг.").
        set("How are you?", "Как твои дела?");

        var mess = this.message;
        var word = words.get(mess);
        console.log(word);
    }  
};

const Tran = translator.translate.bind(englishman);
Tran();