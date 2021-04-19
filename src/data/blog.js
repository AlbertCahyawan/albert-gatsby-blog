import React from 'react-redux'
const blogData = [  
    {
        title: 'Hello, World!',
        date: '2 Feb 2021',
        content: `<div>
        Hi this is my first post on this website, my name is albert cahyawan I'm front-end developer with 1 year experience in pegipegi in there 
        I learn alot on website build through vue framework and I'm currently expanding my knowledge in other framework like react in which this blog is 
        currently build on gatsby. I also enjoy japanese stuff so currently learning japanese languages and already memorize hiragana and katakana 
        頑張って  so that I can start exploring untranslated japanese stuff. 
        </div>
        
        <div>
        I currently enjoy playing apex though not really competitively. I prob would be updating this blog if peridocally and my website when I have time 
        with my finding or just any  interesting stuff I find</div>`
    }, 
    {
        title: 'winter 2021 anime',
        date: '2 Feb 2021',
        content: `
        <div>
        so this year 2021 is really one of the most filled time where there alot of good animes too watch I was suprised to find out that alot
        of anime in this year are anime that has ranked in top 10 in each specific source whether it manga/ln/wn was my first time to have a schedule with
        fullweek without any single day without any anime to watch and there alot that interesting to watch to rather than filling time anime which make
        me super overwhelmed. 
        </div>
        
        <div>
        one of my top one especially is mushoku tensei which somewhat nickname to grandfather of Isekai which technically one of
        trigger of isekai anime along with re:zero which both is aired in this season what crazy time indeed. I actually already read at the whole story
        of it but would love to watch it in animation and hearing that they gonna animated the whole series get me super excited as this one of the
        most beatiful story with good world building that has alot make sense and one of the few that follow mc grow from literally a baby with a 
        sufficient amount of time that make us feel like growing with the mc itself. 
        </div>
        
        <div>
        re:zero also another interesting one where is has same idea like groundhog days where the mc repeat his life for every mistake(by dying) and keep 
        improving to reach the correct path. both is definitely interesting and recomended anime to watch though I must say I a few distaste on the mc on 
        both series more on mushoku where he is quiet a pervert but fit the 34 neet character while re:zero has quiet cringe character that grown within 
        time and become quiet reliable though it does not matter as character does not need to  be perfect instead they need to have certain same
        characteristic that fit which it does in both series and they have great stories too. 
        
        <div>
        other than this 2 honestly there alot legendary anime like higurashi and log horizon season 3 which I quiet enjoy but not much to say prob love
        another  kind of time loop in higurashi and alot of death of rika suprisingly prob more closer to groundhog day than re:zero since this one the 
        loop does not progress as much as re:zero and rika trapped in endless loop of dying for thousand of years which is crazy poor girl. 
        </div>

        <div>
        there also some  nice simple anime no stupid controversy of daily like horimiya that nice to watch as too much drama is annoying. shingeki is also 
        airing it final season which I guess queit well made but I'm not really that big fan of shingeki but the story is quiet good build up and I love
        how the author set up alot of things and make it not so black and white, the only problems I have is with the titan where they can be super 
        agile scary and kill every soldier in early episode to somewhat killable or easy to kill later on which seems very imbalance power but not 
        really story breaking at all I would love to see to gabi development realizing how bad she was also which is one of my hated character wise but 
        well  developed especially development of people that around her which is make her a great written character great. 
        </div>
        
        <div>
        another great one is kumo desu ga this another crazy new isekai that has quiet interesting concept and the character build up is quiet slowly and 
        nice like mushoku rather than instant power up that very enjoyable. other nice mention prob hataraku saibou(normal & black) which quiet nice
        educational anime but I doubt any of the watcher even learn much since I still see alot of illiterate one on comment section about it
        (I did learn a bit about especially about different type of white blood cell that usually I just lump as one type of cell) other than that prob 
        just time filling anime like digimon,kings raid, gotoubun hanayome, tatobe last dungeon, Ore dake dungeon, jujutsu Kaisen ,doctor stone and yasoku 
        neverland(only great 1st season during orphanage arc) some of this anime is top ranking. prob some other fun mentioning is the horrible 3d animated
        ex-arm and the redo healer(kinda pornish) honestly expectaction on people reaction on this is more fun than watching the show itself. I guess that's
        all from me quiet crazy season this is thank you if anybody even read my rambling.
        </div>
        `
        
    }, 
    {
        title: 'Fibonnaci',
        date: '22 March 2021',
        content: `
        <div>
        I just finished interview at certain company during interview they had ask me for 1 hour and half about technical stuff and around 20 - 30 mins of coding
        during those time I manage some question some I answer quiet terrible even though I realize most of the answer later on after the interview, which
        make me realize interview is really intense and scary my mind can go very blank during interview which make it harder to answer question.
        </div>

        <div>
        at the end of the session they ask me to do a coding question with a recursion which is actually somewhat moderate to easy one at first I do itteration 
        to make a fibonnaci and then they asked me to do it with recursion which for some reason left my mind a bit blank at end of making improvement the 
        question is actually not hard but somehow I have difficulty on finishing and actually way really close to finishing it with one variable. I 
        actually check with what fibo on web do and I see it as less efficient and here my end fibo function and actually improved some of it
        </div>   
            <code>
                function Fibonnaci(index) { 
                    // this is actualy imrovement for any fibo below index 2
                    if(index <= 2){
                        return  index - 1 ;
                    }
                    // for recursion if fibo more than 2
                    const recur = function(a,b,curr,n){
                        const na = b;
                        const nb = a + b;
                        // this actually when code failed the actual end code result like below
                        //  (curr < n) ? recur(na,nb,curr+1,n) : 1;
                        //  I only missed nb sign but somehow my mind really went blank
                        return (curr < n) ? recur(na,nb,curr+1,n) : nb ; 
                    }
                    return recur(0,1,3, index)
                }
            </code>
        <div>
        as noticed I only missed that nb variable and I'm done with this recursion function. well at least I learn alot and prob breathing would improve 
        alot on my way to answer a problem.
        </div>
        `
        
    },
    {
        title: 'Recursion and Iteration',
        date: '24 March 2021',
        content: `
        <div>
        After spending time on researching for few day on Recursion I

        Tail call Optimize
        https://ridiculousfish.com/blog/posts/will-it-optimize.html
        </div>
        `
        
    }, 
]

export default blogData