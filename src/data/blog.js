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
        After spending time on researching for few day on Recursion I still find that iteration still much better than Iteration
        first the idea of recursion is just for clarity with the cost memory from stack and higher chances of buggy code that never end
        other than that I find out about  Tail call Optimize which basically where compiler optimize our code again and usually what happen to
        recursive program is the compiler would optimize it again into a loop as it much more efficient than recursion 
        </br>
        overall I find that recursion still a buggy, inefficient code that is in my opinion harder to code(there is account some thinks it's much easier)
        but overall it's not something you use just because it's is harder as quoted  
        </br>
        "An idiot admires complexity, while a genius appreciates simplicity" - Terry A. Davis
        </br>
        this preety much explain most recursion user thinking it as looking cool rather than it functionality as a way to brag in my opinion.  
        </div>
        <div> 
        links:
        https://ridiculousfish.com/blog/posts/will-it-optimize.html
        </div>
        ` 
    }, 
    {
        title: 'Software engineer Interview',
        date: '3 May 2021',
        content: `
        <div>
        After few interview for software engineer I finally found out a few key on getting interview and how most question will be asked. as prewarning this will be mostly 
        in my opinion not an expert hr or I've been interviewing people and this be mostly from front-end candidate or any software engineer candidate In my guess this will 
        include most company with some exception of crazy company or FAANG company but maybe mostly be the same
        </div>
        <div>
        Firstly I find about how to get the call for interview, as many of us realize when you apply for a job and send application after hundreds of application you still not getting the call
        from the interviewee this mostly due to ATS systme from HR that literally filter out for keyword in your resume the way workaround for this is to find the company HR that you are applying
        and tell them your interest on the company. this mostly work for most company regardless what type of job you are applying and the most effective methods to get interview.
        </div>
        <div>
        next on after the getting the interview you will usually be just contacted by HR asking about your skill tell me about yourself kinda question or given an 
        online coding test to filled out should be mostly easy qualified most people will pass this with the very basic skills set with exception some top company
        might ask quiet harder question in this stage. 
        </div>
        <div>
        the next one is the first stage or the only stage in some depending which company you applying basically it just normal interview with engineer which usually just mostly basic 
        javascript question just search google "simple front-end interview question" just find your job that applying it will likely be the same and you will get most likely asked the question that 
        will asked and prob study some basic design like responsiv web design and basic stuff in js and css and you be fine in technical. it's also fine to not knowing something rather than
        bullshiting your way up as it would be preety obvious. next coding part the most lovable part on myself usually you be given 10 - 15 minutes to do this. Usually it will be basic question
        taken from leetcode or hackerank just look up online most common would be palindrome and string manipulation code and this mostly be in easy part of algorithm so it mostly easy. once
        you finish this usually you would be called for next interview in one or twodays more than 2 mean you likely failed 2 days is enough. oh I forgot to add there will be a behavioural question
        like what would you do for this situation so be prepared and it can be technical too.

        as preparation for this interview you also probably need to prepare some question for end of session for the company to answer to just show you're interested or just ask anything you 
        are curious. One of recommended would be ask for interviewer contact reason would be for any catch up to fix your mistake since usually the interviewer time is not enough and 
        nervouness can cause alot of stupid mistake which happen to me too and on addition if you fail the interview you are likely getting feedback from emailing them not HR that will ghost you.
        </div>

        <div>
        on second interview you will likely asked about design interview this will usually design the database even if you are front-end usually just basic relationship SQL design though 
        I only got here once and passed so I would say much experience in this one unless in future
        </div>

        <div>
        Lastly this would be usually be hiring manager interview this would largely behavioural may some coding too but not too much technical this actually just stage to sell yourself up
        be prepared to answer tell me about yourself question again and design it to sell yourself as much as possible. but this stage usually different and unique from each company soo be 
        prepared for any suprise
        </div>

        <div>
        lastly just you will receive offer if you are accepted congrutulation you just get yourself a job. a few tips from me 
        <ul>
            <li>1.get interviewee email as I said you can get feedback and clarify mistake by contacting them after interview</li>
            <li>2.apply to as many company that you are interested in since you would likely be not even accepted even if you ace it(happen to me though my guess it has to with culture fit
                of how much you interested in the company)
            </li>
            <li>3.try be as relax though even myself is nervous this is quiet common so be prepared</li>
        </ul>

        that's it tips bit from me I hope you get job soon 
        </div>
        ` 
    }, 
]

export default blogData