class slider {
    constructor() {
        this.slide = [
            "https://i.imgur.com/EdDe8GHg.jpg",
            "https://i.imgur.com/bOlGI3ig.jpg",
            "https://i.imgur.com/TQaR2c4g.jpg"];
        this.next = document.getElementById('next');
        this.previous = document.getElementById('previous');
        this.index = 0;
        this.next.onclick = () => {
            if (this.index >= 3) {
                this.index = 0;
            }
            document.getElementById("greee").src = this.slide[this.index];
            this.index++;
        }
    }
};


new slider();