class Form
{
    constructor()
    {
       this.title=createElement("h1");
       this.input=createInput(""); 
       this.button=createButton("START");
       this.greeting=createElement("h2");
    }
    display()
    {
        this.title.position(500,20);
        this.title.html("CAR GAME");
        this.input.position(500,200);
        this.button.position(550,250);

        this.button.mousePressed(()=>
        {
            this.greeting.position(520,350);
            this.greeting.html("Hello "+this.input.value())
        })

    }
}
